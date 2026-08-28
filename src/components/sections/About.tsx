import { Reveal, SectionHeading, SmartImage } from "@/components/ui/kit";
import { Icons } from "@/components/ui/icons";
import { images } from "@/data/content";

const cards = [
  { icon: "calendar", title: "Established", text: "Founded in 2026." },
  {
    icon: "pin",
    title: "Location",
    text: "Parvati Co-Operative Industrial Estate, Yadrav, Kolhapur, Maharashtra.",
  },
  {
    icon: "hydraulic",
    title: "Business Focus",
    text: "Manufacturing high-quality hydraulic pump components and sub-assemblies for reputed customers.",
  },
  {
    icon: "growth",
    title: "Growth Outlook",
    text: "Growing manufacturing capabilities supported by skilled manpower, precision machining capabilities and robust quality control.",
  },
  {
    icon: "target",
    title: "Future Outlook",
    text: "Expansion of manufacturing capacity to serve diverse customers with quality components.",
  },
] as const;

export function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:items-start">
        <Reveal>
          <SectionHeading
            label="About Us"
            title="Engineering with Precision. Built for Reliability."
            intro="TechnoPerfect Engineers LLP is a precision engineering and manufacturing company located at Parvati Co-Operative Industrial Estate, Yadrav, Kolhapur District, Maharashtra — approximately 250 km from Pune. The company focuses on manufacturing high-quality hydraulic pump components and sub-assemblies for reputed customers, supported by CNC turning, vertical machining, surface grinding and precision inspection capabilities."
          />
          <dl className="mt-10 grid gap-4 sm:grid-cols-2">
            {cards.map((c) => {
              const I = Icons[c.icon];
              return (
                <div
                  key={c.title}
                  className="group rounded-lg border border-border bg-mist/60 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg"
                >
                  <I className="h-6 w-6 text-brand" />
                  <dt className="mt-3 text-sm font-bold uppercase tracking-wide text-ink">{c.title}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-steel">{c.text}</dd>
                </div>
              );
            })}
          </dl>
        </Reveal>

        <Reveal delay={120} className="lg:sticky lg:top-28">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 border-l-4 border-t-4 border-brand" aria-hidden="true" />
            <SmartImage
              src={images.aboutImage}
              alt="Manufacturing facility with precision machining equipment"
              className="relative h-[420px] w-full rounded-lg object-cover shadow-xl lg:h-[560px]"
            />
            <div className="absolute -bottom-6 -right-2 rounded-lg bg-navy px-6 py-5 text-white shadow-xl sm:right-6">
              <p className="text-3xl font-bold text-cyan-accent">11</p>
              <p className="text-xs uppercase tracking-widest text-white/70">Machines in operation</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
