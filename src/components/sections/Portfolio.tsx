import { useState } from "react";
import { Modal, Reveal, SectionHeading, SmartImage, btn } from "@/components/ui/kit";
import { useEnquiry } from "@/components/EnquiryProvider";
import { useStore } from "@/lib/store";
import { portfolioFilters, type PortfolioItem } from "@/data/content";

export function Portfolio() {
  const [items] = useStore<PortfolioItem[]>("portfolio");
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<PortfolioItem | null>(null);
  const { open } = useEnquiry();

  const visible = filter === "All" ? items : items.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="bg-mist py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            label="Portfolio"
            title="Manufacturing Portfolio"
            intro="Representative demo projects showing the type of components and processes handled at our plant."
            center
          />
        </Reveal>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {portfolioFilters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`rounded-md px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                filter === f
                  ? "bg-brand text-white shadow"
                  : "border border-border bg-white text-steel hover:border-brand/40 hover:text-brand"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 60}>
              <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-white transition-all duration-200 hover:-translate-y-1.5 hover:shadow-xl">
                <div className="h-52 overflow-hidden bg-navy">
                  <SmartImage
                    src={p.image}
                    alt={`${p.title} — ${p.category} project`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
                    {p.category}
                  </span>
                  <h3 className="mt-2 text-base font-bold text-ink">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-steel">{p.description}</p>
                  <button
                    type="button"
                    onClick={() => setActive(p)}
                    className={`${btn.outline} mt-5 self-start py-2`}
                  >
                    View Project
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
          {visible.length === 0 && (
            <p className="col-span-full text-center text-sm text-steel">
              No projects in this category yet.
            </p>
          )}
        </div>
      </div>

      <Modal open={!!active} onClose={() => setActive(null)} title={active?.title ?? ""} wide>
        {active && (
          <div className="grid gap-6 sm:grid-cols-2">
            <SmartImage
              src={active.image}
              alt={`${active.title} project detail`}
              className="h-60 w-full rounded-md object-cover sm:h-full"
            />
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
                {active.category}
              </span>
              <p className="mt-3 text-sm leading-relaxed text-steel">{active.description}</p>
              <dl className="mt-5 space-y-3 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-steel">Application</dt>
                  <dd className="text-ink">{active.application}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-steel">
                    Manufacturing Process
                  </dt>
                  <dd className="text-ink">{active.process}</dd>
                </div>
              </dl>
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
          </div>
        )}
      </Modal>
    </section>
  );
}

export function Gallery() {
  const [items] = useStore<import("@/data/content").GalleryItem[]>("gallery");
  const [active, setActive] = useState<import("@/data/content").GalleryItem | null>(null);

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading label="Gallery" title="Manufacturing Gallery" center />
        </Reveal>
        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {items.map((g, i) => (
            <button
              key={g.id}
              type="button"
              onClick={() => setActive(g)}
              className="group relative mb-5 block w-full overflow-hidden rounded-lg border border-border"
              style={{ breakInside: "avoid" }}
            >
              <SmartImage
                src={g.image}
                alt={`${g.caption} — ${g.category}`}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  i % 3 === 1 ? "h-72" : "h-56"
                }`}
              />
              <span className="absolute inset-0 flex items-end bg-gradient-to-t from-navy-deep/90 via-navy-deep/10 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-left">
                  <span className="block text-sm font-bold text-white">{g.caption}</span>
                  <span className="block text-[11px] uppercase tracking-widest text-cyan-accent">
                    {g.category}
                  </span>
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <Modal open={!!active} onClose={() => setActive(null)} title={active?.caption ?? ""} wide>
        {active && (
          <div>
            <SmartImage
              src={active.image}
              alt={`${active.caption} enlarged view`}
              className="max-h-[65vh] w-full rounded-md object-contain"
            />
            <p className="mt-4 text-xs uppercase tracking-widest text-brand">{active.category}</p>
          </div>
        )}
      </Modal>
    </section>
  );
}
