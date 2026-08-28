import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  label,
  title,
  intro,
}: {
  label: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="tech-grid-dark relative bg-navy-deep py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-accent">{label}</p>
        <h1 className="mt-4 max-w-3xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <div className="mt-5 h-1 w-20 bg-brand" aria-hidden="true" />
        {intro && <p className="mt-5 max-w-2xl text-base text-white/75">{intro}</p>}
      </div>
    </section>
  );
}
