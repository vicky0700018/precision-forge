import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Crud, type Field } from "@/components/admin/Crud";
import { Icons } from "@/components/ui/icons";
import { Modal, Toast, btn } from "@/components/ui/kit";
import { adminLogout, isAdminLoggedIn, useStore } from "@/lib/store";
import { company as seedCompany, requirementTypes, type Enquiry } from "@/data/content";

export const Route = createFileRoute("/admin/")({
  head: () => ({
    meta: [
      { title: "Admin Dashboard | TechnoPerfect Engineers LLP" },
      { name: "description", content: "Demo admin dashboard for managing website content of TechnoPerfect Engineers LLP." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Admin Dashboard | TechnoPerfect Engineers LLP" },
      { property: "og:description", content: "Demo content management dashboard." },
    ],
  }),
  ssr: false,
  component: AdminDashboard,
});

const modules = [
  "Dashboard",
  "Hero Banners",
  "About",
  "Services",
  "Products",
  "Facilities",
  "Quality",
  "Certifications",
  "Customers",
  "Team",
  "Portfolio",
  "Gallery",
  "Enquiries",
  "Contact Information",
  "Settings",
] as const;
type ModuleName = (typeof modules)[number];

const input =
  "w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-ink outline-none focus:border-brand";

function AdminDashboard() {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  const [active, setActive] = useState<ModuleName>("Dashboard");
  const [sidebar, setSidebar] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    if (!isAdminLoggedIn()) navigate({ to: "/admin/login", replace: true });
    else setReady(true);
  }, [navigate]);

  const notify = (m: string) => {
    setToast(m);
    setTimeout(() => setToast(""), 2500);
  };

  if (!ready) return null;

  return (
    <div className="flex min-h-screen bg-mist">
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 overflow-y-auto bg-navy-deep transition-transform duration-300 lg:static lg:translate-x-0 ${
          sidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center gap-3 border-b border-white/10 px-5 py-5">
          <Icons.target className="h-6 w-6 text-cyan-accent" />
          <span className="text-sm font-bold tracking-[0.14em] text-white">
            TECHNO<span className="text-cyan-accent">PERFECT</span>
          </span>
        </div>
        <nav aria-label="Admin navigation" className="grid gap-1 p-3">
          {modules.map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => {
                setActive(m);
                setSidebar(false);
              }}
              className={`rounded-md px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                active === m ? "bg-brand text-white" : "text-white/70 hover:bg-white/5 hover:text-white"
              }`}
            >
              {m}
            </button>
          ))}
          <button
            type="button"
            onClick={() => {
              adminLogout();
              navigate({ to: "/admin/login", replace: true });
            }}
            className="mt-2 rounded-md px-3 py-2.5 text-left text-sm font-semibold text-destructive hover:bg-white/5"
          >
            Logout
          </button>
        </nav>
      </aside>

      {sidebar && (
        <div className="fixed inset-0 z-40 bg-navy-deep/60 lg:hidden" onClick={() => setSidebar(false)} aria-hidden="true" />
      )}

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center justify-between gap-3 border-b border-border bg-white px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Toggle sidebar"
              className="rounded-md border border-border p-2 lg:hidden"
              onClick={() => setSidebar((v) => !v)}
            >
              <Icons.menu className="h-5 w-5 text-ink" />
            </button>
            <nav aria-label="Breadcrumb" className="text-sm text-steel">
              Admin <span aria-hidden="true">/</span>{" "}
              <span className="font-semibold text-ink">{active}</span>
            </nav>
          </div>
          <Link to="/" className="text-sm font-semibold text-brand hover:underline">
            View Website →
          </Link>
        </header>

        <main className="flex-1 p-4 sm:p-6">
          <h1 className="mb-6 text-2xl font-bold text-ink">{active}</h1>
          <ModulePanel name={active} notify={notify} />
        </main>
      </div>

      <Toast message={toast} />
    </div>
  );
}

function ModulePanel({ name, notify }: { name: ModuleName; notify: (m: string) => void }) {
  switch (name) {
    case "Dashboard":
      return <Overview />;
    case "Hero Banners":
      return (
        <Crud
          title="Banner"
          storeKey="banners"
          columns={["title", "label", "cta", "active"]}
          onToast={notify}
          fields={[
            { key: "label", label: "Label" },
            { key: "title", label: "Title" },
            { key: "subtitle", label: "Subtitle", type: "textarea" },
            { key: "cta", label: "CTA Text" },
            { key: "image", label: "Image URL", type: "image" },
            { key: "active", label: "Status", type: "toggle" },
          ]}
        />
      );
    case "Services":
      return (
        <Crud
          title="Service"
          storeKey="services"
          columns={["title", "short", "active"]}
          onToast={notify}
          fields={[
            { key: "title", label: "Title" },
            { key: "icon", label: "Icon", type: "select", options: ["turning", "vmc", "grinding", "hydraulic", "assembly", "inspection", "factory", "custom"] },
            { key: "short", label: "Short Description", type: "textarea" },
            { key: "detail", label: "Detail", type: "textarea" },
            { key: "active", label: "Status", type: "toggle" },
          ]}
        />
      );
    case "Products":
      return (
        <Crud
          title="Product"
          storeKey="products"
          columns={["image", "name", "category", "active"]}
          onToast={notify}
          fields={[
            { key: "name", label: "Name" },
            { key: "category", label: "Category", type: "select", options: ["Hydraulic", "Automotive", "Industrial", "Precision", "Custom"] },
            { key: "description", label: "Description", type: "textarea" },
            { key: "application", label: "Application" },
            { key: "image", label: "Image URL", type: "image" },
            { key: "active", label: "Status", type: "toggle" },
          ]}
        />
      );
    case "Facilities":
      return <FacilitiesPanel notify={notify} />;
    case "Quality":
      return (
        <Crud
          title="Objective"
          storeKey="objectives"
          columns={["metric", "description", "status"]}
          onToast={notify}
          fields={[
            { key: "metric", label: "Metric" },
            { key: "description", label: "Description" },
            { key: "status", label: "Status" },
            { key: "bar", label: "Progress Bar (%)", type: "number" },
          ]}
        />
      );
    case "Certifications":
      return (
        <Crud
          title="Certification"
          storeKey="certifications"
          columns={["title", "status"]}
          onToast={notify}
          fields={[
            { key: "title", label: "Certification Title" },
            { key: "status", label: "Status" },
            { key: "description", label: "Description", type: "textarea" },
          ]}
        />
      );
    case "Customers":
      return (
        <Crud
          title="Customer"
          storeKey="customers"
          columns={["name", "tier", "description"]}
          onToast={notify}
          fields={[
            { key: "name", label: "Customer Name" },
            { key: "tier", label: "Tier", type: "select", options: ["Tier 1", "Tier 2"] },
            { key: "description", label: "Description", type: "textarea" },
          ]}
        />
      );
    case "Team":
      return (
        <Crud
          title="Team Member"
          storeKey="team"
          columns={["name", "designation", "experience"]}
          onToast={notify}
          fields={[
            { key: "name", label: "Name" },
            { key: "designation", label: "Designation" },
            { key: "experience", label: "Experience" },
            { key: "description", label: "Description", type: "textarea" },
          ]}
        />
      );
    case "Portfolio":
      return (
        <Crud
          title="Project"
          storeKey="portfolio"
          columns={["image", "title", "category"]}
          onToast={notify}
          fields={[
            { key: "title", label: "Title" },
            { key: "category", label: "Category", type: "select", options: ["Hydraulic", "CNC", "Precision", "Automotive", "Industrial", "Custom Engineering"] },
            { key: "description", label: "Description", type: "textarea" },
            { key: "application", label: "Application" },
            { key: "process", label: "Manufacturing Process" },
            { key: "image", label: "Image URL", type: "image" },
          ]}
        />
      );
    case "Gallery":
      return (
        <Crud
          title="Gallery Image"
          storeKey="gallery"
          columns={["image", "caption", "category"]}
          onToast={notify}
          fields={[
            { key: "caption", label: "Caption" },
            { key: "category", label: "Category", type: "select", options: ["Manufacturing Floor", "CNC Machining", "Precision Components", "Inspection", "Tooling", "Finished Components"] },
            { key: "image", label: "Image URL", type: "image" },
          ]}
        />
      );
    case "Enquiries":
      return <EnquiriesPanel notify={notify} />;
    case "About":
    case "Contact Information":
    case "Settings":
      return <CompanyPanel notify={notify} />;
    default:
      return null;
  }
}

function Overview() {
  const [products] = useStore<unknown[]>("products");
  const [services] = useStore<unknown[]>("services");
  const [portfolio] = useStore<unknown[]>("portfolio");
  const [gallery] = useStore<unknown[]>("gallery");
  const [customers] = useStore<unknown[]>("customers");
  const [team] = useStore<unknown[]>("team");
  const [enquiries] = useStore<Enquiry[]>("enquiries");

  const cards = [
    { label: "Total Products", value: products.length },
    { label: "Total Services", value: services.length },
    { label: "Portfolio Projects", value: portfolio.length },
    { label: "Gallery Images", value: gallery.length },
    { label: "Customer Entries", value: customers.length },
    { label: "Team Members", value: team.length },
    { label: "New Enquiries", value: enquiries.filter((e) => e.status === "New").length },
  ];
  const max = Math.max(...cards.map((c) => c.value), 1);

  return (
    <div className="grid gap-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <article key={c.label} className="rounded-lg border border-border bg-white p-5">
            <p className="text-3xl font-bold text-brand">{c.value}</p>
            <p className="mt-1 text-sm font-semibold text-ink">{c.label}</p>
          </article>
        ))}
      </div>
      <section className="rounded-lg border border-border bg-white p-6">
        <h2 className="text-base font-bold text-ink">Content Volume</h2>
        <ul className="mt-5 grid gap-3">
          {cards.map((c) => (
            <li key={c.label} className="grid grid-cols-[160px_1fr_40px] items-center gap-3 text-sm">
              <span className="text-steel">{c.label}</span>
              <span className="h-2.5 overflow-hidden rounded-full bg-mist">
                <span
                  className="block h-full rounded-full bg-cyan-accent transition-[width] duration-700"
                  style={{ width: `${(c.value / max) * 100}%` }}
                />
              </span>
              <span className="text-right font-semibold text-ink">{c.value}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

type FacilityRow = { id: string; name: string; qty: string; specs: { label: string; value: string }[]; image: string };

function FacilitiesPanel({ notify }: { notify: (m: string) => void }) {
  const [rows, setRows] = useStore<FacilityRow[]>("facilities");
  const [editing, setEditing] = useState<(FacilityRow & { specsText: string }) | null>(null);

  const openRow = (r?: FacilityRow) =>
    setEditing({
      id: r?.id ?? Math.random().toString(36).slice(2, 10),
      name: r?.name ?? "",
      qty: r?.qty ?? "",
      image: r?.image ?? "",
      specs: r?.specs ?? [],
      specsText: (r?.specs ?? []).map((s) => `${s.label}: ${s.value}`).join("\n"),
    });

  const save = () => {
    if (!editing) return;
    const specs = editing.specsText
      .split("\n")
      .map((l) => l.split(":"))
      .filter((p) => p[0]?.trim())
      .map((p) => ({ label: p[0].trim(), value: p.slice(1).join(":").trim() }));
    const row: FacilityRow = { id: editing.id, name: editing.name, qty: editing.qty, image: editing.image, specs };
    setRows(rows.some((r) => r.id === row.id) ? rows.map((r) => (r.id === row.id ? row : r)) : [row, ...rows]);
    setEditing(null);
    notify("Facility saved");
  };

  return (
    <div>
      <div className="mb-5 flex justify-end">
        <button type="button" className={btn.primary} onClick={() => openRow()}>+ Add Facility</button>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {rows.map((r) => (
          <article key={r.id} className="rounded-lg border border-border bg-white p-5">
            <h3 className="text-base font-bold text-ink">{r.name}</h3>
            <p className="text-xs uppercase tracking-widest text-brand">{r.qty}</p>
            <ul className="mt-3 space-y-1 text-sm text-steel">
              {r.specs.map((s) => (
                <li key={s.label}>
                  <span className="font-semibold text-ink">{s.label}:</span> {s.value}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex gap-3">
              <button type="button" className="text-sm font-semibold text-brand hover:underline" onClick={() => openRow(r)}>Edit</button>
              <button
                type="button"
                className="text-sm font-semibold text-destructive hover:underline"
                onClick={() => {
                  setRows(rows.filter((x) => x.id !== r.id));
                  notify("Facility deleted");
                }}
              >
                Delete
              </button>
            </div>
          </article>
        ))}
      </div>

      <Modal open={!!editing} onClose={() => setEditing(null)} title="Facility details">
        {editing && (
          <form
            className="grid gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              save();
            }}
          >
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase text-steel" htmlFor="fa-name">Machine Name</label>
              <input id="fa-name" className={input} value={editing.name} onChange={(e) => setEditing({ ...editing, name: e.target.value })} />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase text-steel" htmlFor="fa-qty">Quantity</label>
              <input id="fa-qty" className={input} value={editing.qty} onChange={(e) => setEditing({ ...editing, qty: e.target.value })} />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase text-steel" htmlFor="fa-specs">Specifications (one per line — Label: Value)</label>
              <textarea id="fa-specs" rows={4} className={input} value={editing.specsText} onChange={(e) => setEditing({ ...editing, specsText: e.target.value })} />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase text-steel" htmlFor="fa-img">Image URL</label>
              <input id="fa-img" className={input} value={editing.image} onChange={(e) => setEditing({ ...editing, image: e.target.value })} />
            </div>
            <div className="flex gap-3">
              <button type="submit" className={btn.primary}>Save</button>
              <button type="button" className={btn.outline} onClick={() => setEditing(null)}>Cancel</button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
}

function EnquiriesPanel({ notify }: { notify: (m: string) => void }) {
  const [rows, setRows] = useStore<Enquiry[]>("enquiries");
  const [filter, setFilter] = useState("All");
  const [detail, setDetail] = useState<Enquiry | null>(null);
  const visible = filter === "All" ? rows : rows.filter((r) => r.status === filter);

  const setStatus = (id: string, status: Enquiry["status"]) => {
    setRows(rows.map((r) => (r.id === id ? { ...r, status } : r)));
    notify(`Marked as ${status}`);
  };

  return (
    <div>
      <div className="mb-5 flex flex-wrap gap-2">
        {["All", "New", "Contacted", "Closed"].map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`rounded-md px-4 py-2 text-sm font-semibold transition-colors ${
              filter === f ? "bg-brand text-white" : "border border-border bg-white text-steel hover:text-brand"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="overflow-x-auto rounded-lg border border-border bg-white">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="bg-mist text-xs uppercase tracking-wider text-steel">
            <tr>
              {["Name", "Company", "Requirement", "Status", "Received"].map((h) => (
                <th key={h} className="px-4 py-3 font-semibold">{h}</th>
              ))}
              <th className="px-4 py-3 text-right font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {visible.map((r) => (
              <tr key={r.id} className="hover:bg-mist/50">
                <td className="px-4 py-3 text-ink">{r.name}</td>
                <td className="px-4 py-3 text-steel">{r.companyName || "—"}</td>
                <td className="px-4 py-3 text-steel">{r.requirementType}</td>
                <td className="px-4 py-3 font-semibold text-brand">{r.status}</td>
                <td className="px-4 py-3 text-steel">{new Date(r.createdAt).toLocaleDateString()}</td>
                <td className="whitespace-nowrap px-4 py-3 text-right">
                  <button type="button" className="mr-3 text-sm font-semibold text-brand hover:underline" onClick={() => setDetail(r)}>View</button>
                  <button
                    type="button"
                    className="text-sm font-semibold text-destructive hover:underline"
                    onClick={() => {
                      setRows(rows.filter((x) => x.id !== r.id));
                      notify("Enquiry deleted");
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {visible.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-steel">No enquiries yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Modal open={!!detail} onClose={() => setDetail(null)} title="Enquiry details" wide>
        {detail && (
          <div className="grid gap-3 text-sm">
            {[
              ["Name", detail.name],
              ["Company", detail.companyName || "—"],
              ["Email", detail.email],
              ["Phone", detail.phone],
              ["Requirement Type", detail.requirementType],
              ["Product / Service", detail.product || "—"],
              ["Message", detail.message],
            ].map(([k, v]) => (
              <div key={k} className="grid grid-cols-[180px_1fr] gap-3">
                <span className="text-xs font-semibold uppercase tracking-wide text-steel">{k}</span>
                <span className="text-ink">{v}</span>
              </div>
            ))}
            <div className="mt-4 flex flex-wrap gap-2">
              {(["New", "Contacted", "Closed"] as const).map((s) => (
                <button
                  key={s}
                  type="button"
                  className={detail.status === s ? btn.primary : btn.outline}
                  onClick={() => {
                    setStatus(detail.id, s);
                    setDetail({ ...detail, status: s });
                  }}
                >
                  Mark {s}
                </button>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

function CompanyPanel({ notify }: { notify: (m: string) => void }) {
  const [company, setCompany] = useStore<typeof seedCompany>("company");
  const [form, setForm] = useState(company);
  useEffect(() => setForm(company), [company]);

  const fields: { key: keyof typeof seedCompany; label: string }[] = [
    { key: "name", label: "Business Name" },
    { key: "phone", label: "Phone" },
    { key: "email", label: "Email" },
    { key: "address", label: "Address" },
    { key: "partner", label: "Designated Partner" },
    { key: "ctaText", label: "CTA Text" },
    { key: "tagline", label: "Tagline" },
  ];

  return (
    <form
      className="grid max-w-3xl gap-4 rounded-lg border border-border bg-white p-6"
      onSubmit={(e) => {
        e.preventDefault();
        setCompany(form);
        notify("Contact information saved");
      }}
    >
      {fields.map((f) => (
        <div key={f.key}>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-steel" htmlFor={`co-${f.key}`}>
            {f.label}
          </label>
          <input id={`co-${f.key}`} className={input} value={form[f.key]} onChange={(e) => setForm({ ...form, [f.key]: e.target.value })} />
        </div>
      ))}
      <p className="text-xs text-steel">
        Requirement types available on the enquiry form: {requirementTypes.join(", ")}.
      </p>
      <div>
        <button type="submit" className={btn.primary}>Save Changes</button>
      </div>
    </form>
  );
}

export type { Field };
