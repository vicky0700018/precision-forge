import { Reveal, SectionHeading } from "@/components/ui/kit";
import { Icons } from "@/components/ui/icons";
import { useStore } from "@/lib/store";
import type { Customer, TeamMember } from "@/data/content";
import { whyChooseUs } from "@/data/content";

const initials = (name: string) =>
  name
    .replace(/^Mr\.?\s+/i, "")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

export function Customers() {
  const [customers] = useStore<Customer[]>("customers");
  const tiers = [
    { key: "Tier 1", sub: "Direct Manufacturing Customers" },
    { key: "Tier 2", sub: "End Customers / Through Tier-1 Supply Chain" },
  ] as const;

  return (
    <section id="customers" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            label="Customers"
            title="Our Customers"
            intro="Trusted by Leading OEMs and Engineering Companies"
            center
          />
        </Reveal>
        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {tiers.map((t) => (
            <Reveal key={t.key}>
              <div className="h-full rounded-lg border border-border bg-mist/50 p-7">
                <h3 className="text-lg font-bold text-ink">{t.key} Customers</h3>
                <p className="mt-1 text-xs uppercase tracking-widest text-brand">{t.sub}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {customers
                    .filter((c) => c.tier === t.key)
                    .map((c) => (
                      <li
                        key={c.id}
                        className="rounded-md border border-border bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md"
                      >
                        <p className="text-sm font-bold text-ink">{c.name}</p>
                        <p className="mt-1 text-xs text-steel">{c.description}</p>
                      </li>
                    ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Team() {
  const [team] = useStore<TeamMember[]>("team");
  return (
    <section id="team" className="bg-mist py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            label="Organisation"
            title="Our Team & Organisation Structure"
            intro="Experienced partners and supervisors leading operations, quality and production planning."
          />
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.id} delay={(i % 3) * 70}>
              <article className="flex h-full gap-4 rounded-lg border border-border bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
                <span
                  aria-hidden="true"
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-navy text-base font-bold tracking-wider text-cyan-accent"
                >
                  {initials(m.name)}
                </span>
                <div>
                  <h3 className="text-base font-bold text-ink">{m.name}</h3>
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                    {m.designation}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-widest text-steel">
                    Experience: {m.experience}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-steel">{m.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading label="Why Us" title="Why TechnoPerfect Engineers LLP?" center />
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((w, i) => {
            const I = Icons[w.icon as keyof typeof Icons] ?? Icons.grid;
            return (
              <Reveal key={w.title} delay={(i % 4) * 60}>
                <article className="group h-full rounded-lg border border-border bg-mist/50 p-6 transition-all duration-200 hover:-translate-y-1.5 hover:bg-navy hover:shadow-xl">
                  <I className="h-7 w-7 text-brand transition-colors group-hover:text-cyan-accent" />
                  <h3 className="mt-4 text-base font-bold text-ink transition-colors group-hover:text-white">
                    {w.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel transition-colors group-hover:text-white/70">
                    {w.text}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
