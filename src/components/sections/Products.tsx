import { useState } from "react";
import { Modal, Reveal, SectionHeading, SmartImage, btn } from "@/components/ui/kit";
import { useEnquiry } from "@/components/EnquiryProvider";
import { useStore } from "@/lib/store";
import type { Product } from "@/data/content";

export function Products({ compact = false }: { compact?: boolean }) {
  const [products] = useStore<Product[]>("products");
  const [active, setActive] = useState<Product | null>(null);
  const { open } = useEnquiry();
  const list = products.filter((p) => p.active);

  return (
    <section id="products" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            label="Products"
            title="Products / Parts Manufacturing"
            intro="Component categories manufactured for hydraulic, automotive and industrial customers."
            center
          />
        </Reveal>

        <div className={`mt-14 grid gap-6 sm:grid-cols-2 ${compact ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
          {list.map((p, i) => (
            <Reveal key={p.id} delay={(i % 4) * 60}>
              <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-white transition-all duration-200 hover:-translate-y-1.5 hover:shadow-xl">
                <div className="h-44 overflow-hidden bg-mist">
                  <SmartImage
                    src={p.image}
                    alt={`${p.name} — precision machined component`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
                    {p.category}
                  </span>
                  <h3 className="mt-2 text-base font-bold text-ink">{p.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-steel">{p.description}</p>
                  <button
                    type="button"
                    onClick={() => setActive(p)}
                    className="mt-4 self-start text-sm font-semibold text-brand transition-colors hover:text-cyan-accent"
                  >
                    View Details →
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <Modal open={!!active} onClose={() => setActive(null)} title={active?.name ?? ""} wide>
        {active && (
          <div className="grid gap-6 sm:grid-cols-2">
            <SmartImage
              src={active.image}
              alt={`${active.name} detailed view`}
              className="h-60 w-full rounded-md object-cover sm:h-full"
            />
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
                {active.category}
              </span>
              <h4 className="mt-2 text-xl font-bold text-ink">{active.name}</h4>
              <p className="mt-3 text-sm leading-relaxed text-steel">{active.description}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-steel">Application</p>
              <p className="mt-1 text-sm text-ink">{active.application}</p>
              <button
                type="button"
                className={`${btn.primary} mt-6`}
                onClick={() => {
                  setActive(null);
                  open(active.name);
                }}
              >
                Send Enquiry
              </button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
