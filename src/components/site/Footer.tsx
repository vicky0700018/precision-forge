import { Link } from "@tanstack/react-router";
import { Icons } from "@/components/ui/icons";
import { useStore } from "@/lib/store";
import { company as seedCompany } from "@/data/content";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/capabilities", label: "Capabilities" },
  { to: "/products", label: "Products" },
  { to: "/quality", label: "Quality" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  const [company] = useStore<typeof seedCompany>("company");

  return (
    <footer className="tech-grid-dark border-t border-white/10 bg-navy-deep text-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <p className="text-lg font-bold tracking-[0.14em] text-white">
            TECHNO<span className="text-cyan-accent">PERFECT</span>
          </p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-white/50">Engineers LLP</p>
          <p className="mt-5 text-sm leading-relaxed">
            Precision machining, hydraulic pump components and sub-assemblies manufactured at
            Parvati Co-Operative Industrial Estate, Yadrav, Kolhapur.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-cyan-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Business Information</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>Designated Partner: {company.partner}</li>
            <li>Precision Engineering / CNC Machining</li>
            <li>Hydraulic Pump Components & Sub-Assemblies</li>
            <li>Founded 2026</li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <Icons.phone className="mt-0.5 h-4 w-4 shrink-0 text-cyan-accent" />
              <a href={`tel:${company.phone}`} className="hover:text-cyan-accent">{company.phone}</a>
            </li>
            <li className="flex gap-3">
              <Icons.mail className="mt-0.5 h-4 w-4 shrink-0 text-cyan-accent" />
              <a href={`mailto:${company.email}`} className="break-all hover:text-cyan-accent">
                {company.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Icons.pin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-accent" />
              <span>{company.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <Link to="/admin/login" className="text-white/40 transition-colors hover:text-cyan-accent">
            Admin Login
          </Link>
        </div>
      </div>
    </footer>
  );
}
