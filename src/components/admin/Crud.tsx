import { useMemo, useState } from "react";
import { Modal, SmartImage, btn } from "@/components/ui/kit";
import { uid, useStore, type StoreKey } from "@/lib/store";

export type FieldType = "text" | "textarea" | "image" | "select" | "number" | "toggle";
export type Field = {
  key: string;
  label: string;
  type?: FieldType;
  options?: string[];
};

type Row = Record<string, unknown> & { id: string };

const input =
  "w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-ink outline-none transition-colors focus:border-brand";

export function Crud({
  title,
  storeKey,
  fields,
  columns,
  onToast,
}: {
  title: string;
  storeKey: StoreKey;
  fields: Field[];
  columns: string[];
  onToast: (m: string) => void;
}) {
  const [rows, setRows] = useStore<Row[]>(storeKey);
  const [query, setQuery] = useState("");
  const [editing, setEditing] = useState<Row | null>(null);
  const [confirmId, setConfirmId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter((r) => JSON.stringify(r).toLowerCase().includes(q));
  }, [rows, query]);

  const blank = () =>
    ({
      id: uid(),
      ...Object.fromEntries(
        fields.map((f) => [f.key, f.type === "toggle" ? true : f.type === "select" ? (f.options?.[0] ?? "") : ""]),
      ),
    }) as Row;

  const save = (row: Row) => {
    const exists = rows.some((r) => r.id === row.id);
    setRows(exists ? rows.map((r) => (r.id === row.id ? row : r)) : [row, ...rows]);
    setEditing(null);
    onToast(exists ? `${title} updated` : `${title} added`);
  };

  const remove = (id: string) => {
    setRows(rows.filter((r) => r.id !== id));
    setConfirmId(null);
    onToast(`${title} deleted`);
  };

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`Search ${title.toLowerCase()}…`}
          aria-label={`Search ${title}`}
          className={`${input} max-w-xs`}
        />
        <button type="button" className={btn.primary} onClick={() => setEditing(blank())}>
          + Add {title}
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border bg-white">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-mist text-xs uppercase tracking-wider text-steel">
            <tr>
              {columns.map((c) => (
                <th key={c} className="px-4 py-3 font-semibold">
                  {fields.find((f) => f.key === c)?.label ?? c}
                </th>
              ))}
              <th className="px-4 py-3 text-right font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filtered.map((r) => (
              <tr key={r.id} className="transition-colors hover:bg-mist/50">
                {columns.map((c) => {
                  const f = fields.find((x) => x.key === c);
                  const v = r[c];
                  return (
                    <td key={c} className="max-w-[280px] px-4 py-3 align-top text-ink">
                      {f?.type === "image" && typeof v === "string" && v ? (
                        <SmartImage src={v} alt="Preview" className="h-12 w-20 rounded object-cover" />
                      ) : typeof v === "boolean" ? (
                        <span className={v ? "text-brand" : "text-steel"}>{v ? "Active" : "Inactive"}</span>
                      ) : (
                        <span className="line-clamp-2">{String(v ?? "")}</span>
                      )}
                    </td>
                  );
                })}
                <td className="whitespace-nowrap px-4 py-3 text-right">
                  <button
                    type="button"
                    onClick={() => setEditing(r)}
                    className="mr-3 text-sm font-semibold text-brand hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => setConfirmId(r.id)}
                    className="text-sm font-semibold text-destructive hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={columns.length + 1} className="px-4 py-8 text-center text-steel">
                  No records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Modal open={!!editing} onClose={() => setEditing(null)} title={`${title} details`} wide>
        {editing && (
          <form
            className="grid gap-4 sm:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              save(editing);
            }}
          >
            {fields.map((f) => {
              const v = editing[f.key];
              const set = (val: unknown) => setEditing({ ...editing, [f.key]: val });
              return (
                <div key={f.key} className={f.type === "textarea" ? "sm:col-span-2" : ""}>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-steel" htmlFor={`fld-${f.key}`}>
                    {f.label}
                  </label>
                  {f.type === "textarea" ? (
                    <textarea id={`fld-${f.key}`} rows={3} className={input} value={String(v ?? "")} onChange={(e) => set(e.target.value)} />
                  ) : f.type === "select" ? (
                    <select id={`fld-${f.key}`} className={input} value={String(v ?? "")} onChange={(e) => set(e.target.value)}>
                      {f.options?.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  ) : f.type === "toggle" ? (
                    <label className="flex items-center gap-2 text-sm text-ink">
                      <input id={`fld-${f.key}`} type="checkbox" checked={!!v} onChange={(e) => set(e.target.checked)} />
                      Active
                    </label>
                  ) : f.type === "number" ? (
                    <input id={`fld-${f.key}`} type="number" className={input} value={Number(v ?? 0)} onChange={(e) => set(Number(e.target.value))} />
                  ) : (
                    <input id={`fld-${f.key}`} className={input} value={String(v ?? "")} onChange={(e) => set(e.target.value)} />
                  )}
                  {f.type === "image" && typeof v === "string" && v && (
                    <SmartImage src={v} alt="Image preview" className="mt-2 h-28 w-full rounded-md object-cover" />
                  )}
                </div>
              );
            })}
            <div className="sm:col-span-2 flex gap-3">
              <button type="submit" className={btn.primary}>Save</button>
              <button type="button" className={btn.outline} onClick={() => setEditing(null)}>Cancel</button>
            </div>
          </form>
        )}
      </Modal>

      <Modal open={!!confirmId} onClose={() => setConfirmId(null)} title="Confirm deletion">
        <p className="text-sm text-steel">This record will be permanently removed from the demo data.</p>
        <div className="mt-6 flex gap-3">
          <button type="button" className={btn.primary} onClick={() => confirmId && remove(confirmId)}>
            Delete
          </button>
          <button type="button" className={btn.outline} onClick={() => setConfirmId(null)}>Cancel</button>
        </div>
      </Modal>
    </div>
  );
}
