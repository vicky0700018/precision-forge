import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Icons } from "@/components/ui/icons";
import { useEnquiry } from "@/components/EnquiryProvider";
import { btn } from "@/components/ui/kit";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/capabilities", label: "Capabilities" },
  { to: "/products", label: "Products" },
  { to: "/quality", label: "Quality" },
  { to: "/infrastructure", label: "Infrastructure" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/customers", label: "Customers" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const { open } = useEnquiry();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/10 bg-navy-deep/95 backdrop-blur transition-all duration-300 ${
        scrolled ? "py-1" : "py-2.5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpenMenu(false)}>
          <span className="flex h-10 w-10 items-center justify-center border border-cyan-accent/60 bg-brand/20 text-cyan-accent">
            <Icons.target className="h-6 w-6" />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold tracking-[0.14em] text-white sm:text-base">
              TECHNO<span className="text-cyan-accent">PERFECT</span>
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.28em] text-white/55">
              Engineers LLP
            </span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 xl:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-cyan-accent" }}
              className="rounded px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:text-cyan-accent"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button type="button" onClick={() => open()} className={`${btn.accent} hidden py-2.5 sm:inline-flex`}>
            Request an Enquiry
          </button>
          <button
            type="button"
            aria-label={openMenu ? "Close menu" : "Open menu"}
            aria-expanded={openMenu}
            onClick={() => setOpenMenu((v) => !v)}
            className="rounded-md border border-white/20 p-2 text-white xl:hidden"
          >
            {openMenu ? <Icons.close className="h-5 w-5" /> : <Icons.menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {openMenu && (
        <nav aria-label="Mobile navigation" className="mx-auto mt-2 max-w-7xl px-4 pb-3 xl:hidden">
          <div className="grid gap-1 rounded-md border border-white/10 bg-navy p-2">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpenMenu(false)}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-cyan-accent" }}
                className="rounded px-3 py-2.5 text-sm font-medium text-white/85 transition-colors hover:bg-white/5"
              >
                {n.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => {
                setOpenMenu(false);
                open();
              }}
              className={`${btn.accent} mt-1 w-full`}
            >
              Request an Enquiry
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
