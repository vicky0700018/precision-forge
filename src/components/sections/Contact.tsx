import { Reveal, SectionHeading, SmartImage, btn } from "@/components/ui/kit";
import { Icons } from "@/components/ui/icons";
import { useEnquiry } from "@/components/EnquiryProvider";
import { useStore } from "@/lib/store";
import { images, company as seedCompany } from "@/data/content";

export function CtaBand() {
  const { open } = useEnquiry();
  const [company] = useStore<typeof seedCompany>("company");
  return (
    <section className="tech-grid-dark bg-brand-dark py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 lg:flex-row lg:items-center">
        <div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Have a Component Requirement?</h2>
          <p className="mt-3 max-w-2xl text-sm text-white/80 sm:text-base">
            Share your engineering requirement with our team and let us discuss the right
            manufacturing approach.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button type="button" onClick={() => open()} className={btn.accent}>
            {company.ctaText}
          </button>
          <a href={`tel:${company.phone}`} className={btn.ghostLight}>
            Call {company.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const { open } = useEnquiry();
  const [company] = useStore<typeof seedCompany>("company");

  return (
    <section id="contact" className="bg-mist py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <SectionHeading
            label="Contact"
            title="Talk to Our Engineering Team"
            intro="Reach out with drawings, quantities or process requirements — we will respond with the right manufacturing approach."
          />
          <address className="mt-10 not-italic">
            <p className="text-lg font-bold text-ink">{company.name}</p>
            <ul className="mt-5 grid gap-4 text-sm">
              <li className="flex gap-3">
                <Icons.pin className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <span className="text-steel">{company.address}</span>
              </li>
              <li className="flex gap-3">
                <Icons.phone className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <a href={`tel:${company.phone}`} className="text-ink hover:text-brand">
                  {company.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Icons.mail className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <a href={`mailto:${company.email}`} className="break-all text-ink hover:text-brand">
                  {company.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Icons.people className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <span className="text-steel">Designated Partner: {company.partner}</span>
              </li>
            </ul>
          </address>
          <div className="mt-8 flex flex-wrap gap-3">
            <button type="button" onClick={() => open()} className={btn.primary}>
              {company.ctaText}
            </button>
            <a href={`tel:${company.phone}`} className={btn.outline}>
              Call Now
            </a>
            <a href={`mailto:${company.email}`} className={btn.outline}>
              Email Us
            </a>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <SmartImage
            src={images.contactImage}
            alt="Engineering workshop where enquiries are reviewed"
            className="h-56 w-full rounded-lg object-cover shadow-lg"
          />
          {/* CSS-only map placeholder — no external map API is used. */}
          <div className="tech-grid relative mt-6 h-72 overflow-hidden rounded-lg border border-border bg-white">
            <div className="absolute inset-0 opacity-70" aria-hidden="true">
              <div className="absolute left-0 top-1/3 h-1.5 w-full bg-steel/25" />
              <div className="absolute left-1/4 top-0 h-full w-1.5 bg-steel/25" />
              <div className="absolute left-2/3 top-0 h-full w-1 -rotate-6 bg-steel/20" />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white shadow-lg">
                <Icons.pin className="h-6 w-6" />
              </span>
              <p className="mt-3 rounded-md bg-navy px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
                Yadrav, Kolhapur — MH 416146
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
