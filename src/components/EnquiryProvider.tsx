import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { Modal, Toast, btn } from "@/components/ui/kit";
import { requirementTypes, type Enquiry } from "@/data/content";
import { readStore, uid, writeStore } from "@/lib/store";

type Ctx = { open: (prefill?: string) => void };
const EnquiryCtx = createContext<Ctx>({ open: () => {} });
export const useEnquiry = () => useContext(EnquiryCtx);

type FormState = {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  requirementType: string;
  product: string;
  message: string;
};

const empty: FormState = {
  name: "",
  companyName: "",
  email: "",
  phone: "",
  requirementType: requirementTypes[0],
  product: "",
  message: "",
};

const field =
  "w-full rounded-md border border-border bg-white px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-brand";
const labelCls = "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-steel";

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [toast, setToast] = useState("");

  const openModal = useCallback((prefill?: string) => {
    setForm({ ...empty, product: prefill ?? "" });
    setErrors({});
    setOpen(true);
  }, []);

  const value = useMemo(() => ({ open: openModal }), [openModal]);

  const set = (k: keyof FormState, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Full name is required";
    if (!form.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = "Enter a valid email";
    if (!form.phone.trim()) next.phone = "Phone is required";
    else if (!/^[0-9+\-\s()]{7,15}$/.test(form.phone.trim())) next.phone = "Enter a valid phone number";
    if (!form.message.trim()) next.message = "Message is required";
    setErrors(next);
    if (Object.keys(next).length) return;

    const entry: Enquiry = {
      id: uid(),
      name: form.name.trim().slice(0, 100),
      companyName: form.companyName.trim().slice(0, 120),
      email: form.email.trim().slice(0, 255),
      phone: form.phone.trim(),
      requirementType: form.requirementType,
      product: form.product.trim().slice(0, 150),
      message: form.message.trim().slice(0, 1000),
      status: "New",
      createdAt: new Date().toISOString(),
    };
    const list = readStore<Enquiry[]>("enquiries");
    writeStore("enquiries", [entry, ...list]);
    setOpen(false);
    setToast("Thank you — your enquiry has been recorded.");
    setTimeout(() => setToast(""), 4000);
  };

  return (
    <EnquiryCtx.Provider value={value}>
      {children}
      <Modal open={open} onClose={() => setOpen(false)} title="Request an Enquiry" wide>
        <form onSubmit={submit} noValidate className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={labelCls} htmlFor="eq-name">Full Name *</label>
            <input id="eq-name" className={field} value={form.name} onChange={(e) => set("name", e.target.value)} maxLength={100} />
            {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
          </div>
          <div>
            <label className={labelCls} htmlFor="eq-company">Company Name</label>
            <input id="eq-company" className={field} value={form.companyName} onChange={(e) => set("companyName", e.target.value)} maxLength={120} />
          </div>
          <div>
            <label className={labelCls} htmlFor="eq-email">Email *</label>
            <input id="eq-email" type="email" className={field} value={form.email} onChange={(e) => set("email", e.target.value)} maxLength={255} />
            {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
          </div>
          <div>
            <label className={labelCls} htmlFor="eq-phone">Phone *</label>
            <input id="eq-phone" className={field} value={form.phone} onChange={(e) => set("phone", e.target.value)} maxLength={15} />
            {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
          </div>
          <div>
            <label className={labelCls} htmlFor="eq-type">Requirement Type</label>
            <select id="eq-type" className={field} value={form.requirementType} onChange={(e) => set("requirementType", e.target.value)}>
              {requirementTypes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelCls} htmlFor="eq-product">Product / Service</label>
            <input id="eq-product" className={field} value={form.product} onChange={(e) => set("product", e.target.value)} maxLength={150} />
          </div>
          <div className="sm:col-span-2">
            <label className={labelCls} htmlFor="eq-message">Message *</label>
            <textarea id="eq-message" rows={4} className={field} value={form.message} onChange={(e) => set("message", e.target.value)} maxLength={1000} />
            {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
          </div>
          <div className="sm:col-span-2 flex flex-wrap items-center gap-3">
            <button type="submit" className={btn.primary}>Submit Enquiry</button>
            <button type="button" className={btn.outline} onClick={() => setOpen(false)}>Cancel</button>
            <span className="text-xs text-steel">Demo form — stored locally in your browser.</span>
          </div>
        </form>
      </Modal>
      <Toast message={toast} />
    </EnquiryCtx.Provider>
  );
}
