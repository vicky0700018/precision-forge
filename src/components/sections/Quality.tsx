import { Reveal, SectionHeading, SmartImage } from "@/components/ui/kit";
import { Icons } from "@/components/ui/icons";
import { images, qualityPillars, qualityPolicy, associates } from "@/data/content";
import { useStore } from "@/lib/store";
import type { Certification, Objective } from "@/data/content";

const pillarIcons = ["truck", "growth", "people", "shield"] as const;

export function QualityPolicy() {
  return (
    <section id="quality" className="relative isolate overflow-hidden bg-navy-deep py-20 lg:py-28">
      <SmartImage
        src={images.qualityImage}
        alt="Quality inspection of machined engineering components"
        className="absolute inset-0 h-full w-full object-cover opacity-15"
      />
      <div className="tech-grid-dark absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            label="Quality Policy"
            title="Quality is Engineered Into Every Component"
            intro={qualityPolicy}
            dark
          />
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {qualityPillars.map((p, i) => {
            const I = Icons[pillarIcons[i]];
            return (
              <Reveal key={p.title} delay={i * 70}>
                <article className="h-full rounded-lg border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-cyan-accent/50 hover:bg-white/10">
                  <I className="h-7 w-7 text-cyan-accent" />
                  <h3 className="mt-4 text-base font-bold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{p.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function QualityObjectives() {
  const [objectives] = useStore<Objective[]>("objectives");
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            label="Quality Objectives"
            title="Measurable Objectives We Work Towards"
            intro="These are the company's stated quality objectives — targets defined by the organisation, not live statistics."
            center
          />
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {objectives.map((o, i) => (
            <Reveal key={o.id} delay={i * 60}>
              <article className="h-full rounded-lg border border-border bg-mist/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:bg-white hover:shadow-lg">
                <p className="text-3xl font-bold text-brand">{o.metric}</p>
                <p className="mt-2 text-sm font-semibold text-ink">{o.description}</p>
                <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-border">
                  <div
                    className="h-full rounded-full bg-cyan-accent transition-[width] duration-700"
                    style={{ width: `${o.bar}%` }}
                  />
                </div>
                <p className="mt-3 text-[11px] uppercase tracking-widest text-steel">{o.status}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Certifications() {
  const [certs] = useStore<Certification[]>("certifications");
  return (
    <section className="tech-grid bg-mist py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading label="Compliance" title="Quality & Compliance" center />
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {certs.map((c, i) => (
            <Reveal key={c.id} delay={i * 80}>
              <article className="h-full rounded-lg border border-border bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
                <Icons.award className="h-8 w-8 text-brand" />
                <h3 className="mt-4 text-lg font-bold text-ink">{c.title}</h3>
                <span
                  className={`mt-3 inline-block px-3 py-1 text-[11px] font-bold uppercase tracking-widest ${
                    c.status.toUpperCase().includes("UNDER")
                      ? "bg-chart-4/25 text-ink"
                      : "bg-brand/10 text-brand"
                  }`}
                >
                  {c.status}
                </span>
                <p className="mt-4 text-sm leading-relaxed text-steel">{c.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="mt-16 text-xl font-bold text-ink">Associated Companies</h3>
          <div className="mt-3 h-1 w-16 bg-brand" aria-hidden="true" />
        </Reveal>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {associates.map((a, i) => (
            <Reveal key={a.id} delay={i * 80}>
              <article className="flex h-full gap-5 rounded-lg border border-border bg-white p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-navy text-cyan-accent">
                  <Icons.building className="h-6 w-6" />
                </span>
                <div>
                  <h4 className="text-base font-bold text-ink">{a.name}</h4>
                  <p className="mt-1 text-xs uppercase tracking-widest text-brand">
                    Established {a.established} · {a.location}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-steel">{a.detail}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
