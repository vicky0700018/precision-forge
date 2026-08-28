import { useState } from "react";
import { Modal, Reveal, SectionHeading, btn } from "@/components/ui/kit";
import { Icon } from "@/components/ui/icons";
import { useEnquiry } from "@/components/EnquiryProvider";
import { useStore } from "@/lib/store";
import type { Service } from "@/data/content";

export function Capabilities() {
  const [services] = useStore<Service[]>("services");
  const [active, setActive] = useState<Service | null>(null);
  const { open } = useEnquiry();
  const list = services.filter((s) => s.active);

  return (
    <section id="capabilities" className="tech-grid bg-mist py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            label="Capabilities"
            title="Our Engineering Capabilities"
            intro="Machining, assembly and inspection capabilities supporting hydraulic pump components and industrial precision parts."
            center
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((s, i) => (
            <Reveal key={s.id} delay={i * 60}>
              <article className="group flex h-full flex-col rounded-lg border border-border bg-white p-6 transition-all duration-200 hover:-translate-y-1.5 hover:border-brand/50 hover:shadow-xl">
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon name={s.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-base font-bold text-ink">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-steel">{s.short}</p>
                <button
                  type="button"
                  onClick={() => setActive(s)}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-cyan-accent"
                >
                  View Details
                  <span aria-hidden="true">→</span>
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <Modal open={!!active} onClose={() => setActive(null)} title={active?.title ?? ""}>
        {active && (
          <div>
            <span className="flex h-14 w-14 items-center justify-center rounded-md bg-brand/10 text-brand">
              <Icon name={active.icon} className="h-7 w-7" />
            </span>
            <p className="mt-5 text-sm leading-relaxed text-steel">{active.detail}</p>
            <button
              type="button"
              className={`${btn.primary} mt-6`}
              onClick={() => {
                setActive(null);
                open(active.title);
              }}
            >
              Send Enquiry
            </button>
          </div>
        )}
      </Modal>
    </section>
  );
}
