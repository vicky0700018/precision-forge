import { Link } from "@tanstack/react-router";
import { SmartImage, btn } from "@/components/ui/kit";
import { Icons } from "@/components/ui/icons";
import { useEnquiry } from "@/components/EnquiryProvider";
import { useStore } from "@/lib/store";
import type { Banner } from "@/data/content";

const strip = [
  { icon: "turning", label: "Precision Machining" },
  { icon: "hydraulic", label: "Hydraulic Components" },
  { icon: "shield", label: "Quality Focus" },
  { icon: "truck", label: "Reliable Delivery" },
] as const;

export function Hero() {
  const { open } = useEnquiry();
  const [banners] = useStore<Banner[]>("banners");
  const banner = banners.find((b) => b.active) ?? banners[0];
  if (!banner) return null;

  return (
    <section className="relative isolate overflow-hidden bg-navy-deep">
      <SmartImage
        src={banner.image}
        alt="Modern CNC precision machining facility floor"
        eager
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/80 to-navy/60" aria-hidden="true" />
      <div className="tech-grid-dark absolute inset-0 opacity-60" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-36">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-accent">
          {banner.label}
        </p>
        <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
          {banner.title}
        </h1>
        <div className="mt-6 h-1 w-24 bg-cyan-accent" aria-hidden="true" />
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
          {banner.subtitle}
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link to="/capabilities" className={btn.accent}>
            Explore Capabilities
            <Icons.arrow className="h-4 w-4" />
          </Link>
          <button type="button" onClick={() => open()} className={btn.ghostLight}>
            {banner.cta}
          </button>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-navy/70">
        <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 sm:px-6 lg:grid-cols-4">
          {strip.map((s) => {
            const I = Icons[s.icon];
            return (
              <li key={s.label} className="flex items-center gap-3 py-5 text-white/85">
                <I className="h-6 w-6 shrink-0 text-cyan-accent" />
                <span className="text-sm font-semibold uppercase tracking-wide">{s.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
