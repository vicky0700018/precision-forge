import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Icons } from "@/components/ui/icons";
import { btn } from "@/components/ui/kit";
import { DEMO_ADMIN, adminLogin, isAdminLoggedIn } from "@/lib/store";

export const Route = createFileRoute("/admin/login")({
  head: () => ({
    meta: [
      { title: "Admin Login | TechnoPerfect Engineers LLP" },
      { name: "description", content: "Demo admin login for the TechnoPerfect Engineers LLP website content panel." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Admin Login | TechnoPerfect Engineers LLP" },
      { property: "og:description", content: "Demo admin login for website content management." },
    ],
  }),
  component: AdminLogin,
});

const input =
  "w-full rounded-md border border-white/15 bg-white/5 px-3 py-2.5 text-sm text-white outline-none transition-colors focus:border-cyan-accent";

function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isAdminLoggedIn()) navigate({ to: "/admin", replace: true });
  }, [navigate]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminLogin(email, password)) navigate({ to: "/admin", replace: true });
    else setError("Invalid demo credentials. Please try again.");
  };

  return (
    <main className="tech-grid-dark flex min-h-screen items-center justify-center bg-navy-deep px-4 py-16">
      <div className="w-full max-w-md rounded-lg border border-white/10 bg-navy/70 p-8 shadow-2xl">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center border border-cyan-accent/60 text-cyan-accent">
            <Icons.target className="h-6 w-6" />
          </span>
          <div>
            <p className="text-sm font-bold tracking-[0.14em] text-white">
              TECHNO<span className="text-cyan-accent">PERFECT</span>
            </p>
            <p className="text-[10px] uppercase tracking-[0.28em] text-white/50">Admin Panel</p>
          </div>
        </div>

        <h1 className="mt-8 text-2xl font-bold text-white">Sign in</h1>
        <p className="mt-2 text-sm text-white/60">Frontend-only demo authentication.</p>

        <form onSubmit={submit} className="mt-6 grid gap-4">
          <div>
            <label htmlFor="ad-email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-white/60">
              Email
            </label>
            <input id="ad-email" type="email" className={input} value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor="ad-pass" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-white/60">
              Password
            </label>
            <input id="ad-pass" type="password" className={input} value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
          <button type="submit" className={btn.accent}>Login</button>
        </form>

        <div className="mt-6 rounded-md border border-white/10 bg-white/5 p-4 text-xs text-white/70">
          <p className="font-semibold uppercase tracking-widest text-cyan-accent">Demo credentials</p>
          <p className="mt-2">Email: {DEMO_ADMIN.email}</p>
          <p>Password: {DEMO_ADMIN.password}</p>
        </div>

        <Link to="/" className="mt-6 inline-block text-sm text-white/60 hover:text-cyan-accent">
          ← Back to website
        </Link>
      </div>
    </main>
  );
}
