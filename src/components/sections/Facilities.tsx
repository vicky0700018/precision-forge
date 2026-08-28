import { Reveal, SectionHeading, SmartImage } from "@/components/ui/kit";
import { Icons } from "@/components/ui/icons";
import { images, type Facility } from "@/data/content";
import { useStore } from "@/lib/store";

export function Facilities() {
  const [facilities] = useStore<Facility[]>("facilities");

  return (
    <section id="facilities" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            label="Infrastructure"
            title="Manufacturing Facilities"
            intro="Machining infrastructure installed at our Yadrav plant, supporting turning, milling and grinding operations."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {facilities.map((f, i) => (
            <Reveal key={f.id} delay={i * 80}>
              <article className="group h-full overflow-hidden rounded-lg border border-border bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-48 overflow-hidden bg-navy">
                  <SmartImage
                    src={f.image}
                    alt={`${f.name} at the manufacturing plant`}
                    className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 bg-navy-deep/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-cyan-accent">
                    {f.qty}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-ink">{f.name}</h3>
                  <div className="mt-3 h-0.5 w-10 bg-brand" aria-hidden="true" />
                  <dl className="mt-4 divide-y divide-border">
                    {f.specs.map((s) => (
                      <div key={s.label} className="flex gap-4 py-2.5 text-sm">
                        <dt className="w-36 shrink-0 font-semibold uppercase tracking-wide text-steel">
                          {s.label}
                        </dt>
                        <dd className="text-ink">{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Instruments() {
  const groups = [
    {
      id: "i1",
      title: "Advanced Measurement",
      icon: "gauge" as const,
      items: [
        "CMM — outsourced to nearby facility",
        "Contour Tracer — outsourced to nearby facility",
        "Roughness Tester — Mitutoyo Make",
        "2D & 3D Height Master — Trimos Make Model V7",
      ],
    },
    {
      id: "i2",
      title: "Digital Measuring Tools",
      icon: "inspection" as const,
      items: [
        "Digital Height Gauge — 2 nos.",
        "Digital Vernier Caliper — 2 nos.",
        "Digital Micrometer — 2 nos.",
      ],
    },
    {
      id: "i3",
      title: "Specialized Gauges",
      icon: "target" as const,
      items: [
        "Air Gauge — 2 nos.",
        "Baker make",
        "Used for high precision internal dimension measurement",
      ],
    },
  ];

  return (
    <section id="instruments" className="bg-mist py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <Reveal>
          <SmartImage
            src={images.inspectionImage}
            alt="Precision dimensional inspection of a machined component"
            className="h-[360px] w-full rounded-lg object-cover shadow-xl lg:h-[480px]"
          />
        </Reveal>
        <Reveal delay={100}>
          <SectionHeading
            label="Quality Control"
            title="Measuring Instruments & Gauges"
            intro="Inspection resources used for dimensional verification of machined components."
          />
          <div className="mt-8 grid gap-4">
            {groups.map((g) => {
              const I = Icons[g.icon];
              return (
                <article
                  key={g.id}
                  className="rounded-lg border border-border bg-white p-6 transition-all duration-200 hover:border-brand/40 hover:shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <I className="h-6 w-6 text-brand" />
                    <h3 className="text-base font-bold text-ink">{g.title}</h3>
                  </div>
                  <ul className="mt-4 grid gap-2">
                    {g.items.map((it) => (
                      <li key={it} className="flex gap-2.5 text-sm text-steel">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-cyan-accent" aria-hidden="true" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
