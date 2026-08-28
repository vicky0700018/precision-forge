import { useEffect, useRef, useState, type ReactNode } from "react";

/* ---------------- Image with CSS fallback ---------------- */
export function SmartImage({
  src,
  alt,
  className = "",
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`tech-grid flex items-center justify-center bg-navy ${className}`}
      >
        <span className="px-4 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-accent">
          {alt}
        </span>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}

/* ---------------- Scroll reveal ---------------- */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${className}`}
    >
      {children}
    </div>
  );
}

/* ---------------- Section heading ---------------- */
export function SectionHeading({
  label,
  title,
  intro,
  dark = false,
  center = false,
}: {
  label?: string;
  title: string;
  intro?: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {label && (
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-accent">{label}</p>
      )}
      <h2
        className={`mt-3 text-3xl font-bold sm:text-4xl ${dark ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      <div
        className={`mt-4 h-1 w-16 bg-brand ${center ? "mx-auto" : ""}`}
        aria-hidden="true"
      />
      {intro && (
        <p className={`mt-5 text-base leading-relaxed ${dark ? "text-white/70" : "text-steel"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}

/* ---------------- Buttons ---------------- */
const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-all duration-200 disabled:opacity-60";

export const btn = {
  primary: `${base} bg-brand text-white hover:bg-brand-dark hover:-translate-y-0.5 shadow-sm`,
  accent: `${base} bg-cyan-accent text-navy-deep hover:brightness-110 hover:-translate-y-0.5`,
  outline: `${base} border border-brand/40 text-brand hover:bg-brand hover:text-white`,
  ghostLight: `${base} border border-white/40 text-white hover:bg-white hover:text-navy`,
};

/* ---------------- Modal ---------------- */
export function Modal({
  open,
  onClose,
  title,
  children,
  wide = false,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  wide?: boolean;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-100 flex items-start justify-center overflow-y-auto bg-navy-deep/70 p-4 py-10 backdrop-blur-[2px]"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={`w-full ${wide ? "max-w-4xl" : "max-w-xl"} rounded-lg border border-border bg-white shadow-2xl transition-all`}
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <h3 className="text-lg font-bold text-ink">{title}</h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="rounded-md p-1.5 text-steel transition-colors hover:bg-mist hover:text-ink"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="px-6 py-5">{children}</div>
      </div>
    </div>
  );
}

/* ---------------- Toast ---------------- */
export function Toast({ message, tone = "success" }: { message: string; tone?: "success" | "error" }) {
  if (!message) return null;
  return (
    <div
      role="status"
      className={`fixed bottom-6 right-6 z-200 rounded-md px-5 py-3 text-sm font-semibold text-white shadow-lg ${
        tone === "success" ? "bg-brand" : "bg-destructive"
      }`}
    >
      {message}
    </div>
  );
}
