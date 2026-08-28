import { useCallback, useEffect, useState } from "react";
import * as seed from "@/data/content";

const PREFIX = "tpe:";
const EVENT = "tpe-store-change";

export type StoreKey =
  | "banners"
  | "services"
  | "products"
  | "facilities"
  | "objectives"
  | "certifications"
  | "customers"
  | "team"
  | "portfolio"
  | "gallery"
  | "enquiries"
  | "company";

const defaults: Record<StoreKey, unknown> = {
  banners: seed.banners,
  services: seed.services,
  products: seed.products,
  facilities: seed.facilities,
  objectives: seed.objectives,
  certifications: seed.certifications,
  customers: seed.customers,
  team: seed.team,
  portfolio: seed.portfolio,
  gallery: seed.gallery,
  enquiries: [] as seed.Enquiry[],
  company: seed.company,
};

export function readStore<T>(key: StoreKey): T {
  const fallback = defaults[key] as T;
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(PREFIX + key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function writeStore<T>(key: StoreKey, value: T) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(PREFIX + key, JSON.stringify(value));
    window.dispatchEvent(new CustomEvent(EVENT, { detail: key }));
  } catch {
    /* storage unavailable — demo only */
  }
}

/** Reads seed data on the server, hydrates from localStorage on the client. */
export function useStore<T>(key: StoreKey) {
  const [value, setValue] = useState<T>(defaults[key] as T);

  useEffect(() => {
    const sync = () => setValue(readStore<T>(key));
    sync();
    const handler = (e: Event) => {
      if (!(e instanceof CustomEvent) || e.detail === key) sync();
    };
    window.addEventListener(EVENT, handler);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT, handler);
      window.removeEventListener("storage", sync);
    };
  }, [key]);

  const update = useCallback(
    (next: T) => {
      setValue(next);
      writeStore(key, next);
    },
    [key],
  );

  return [value, update] as const;
}

export const uid = () => Math.random().toString(36).slice(2, 10);

/* -------- demo admin session (frontend only) -------- */
export const DEMO_ADMIN = {
  email: "admin@technoperfectengineers.com",
  password: "Admin@123",
};

const SESSION_KEY = PREFIX + "admin-session";

export const isAdminLoggedIn = () =>
  typeof window !== "undefined" && window.localStorage.getItem(SESSION_KEY) === "1";

export const adminLogin = (email: string, password: string) => {
  if (email.trim().toLowerCase() === DEMO_ADMIN.email && password === DEMO_ADMIN.password) {
    window.localStorage.setItem(SESSION_KEY, "1");
    return true;
  }
  return false;
};

export const adminLogout = () => window.localStorage.removeItem(SESSION_KEY);
