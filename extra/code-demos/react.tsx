import { useEffect, useMemo, useState, type ReactNode } from "react";

type CardProps = {
  title: string;
  count?: number;
  children?: ReactNode;
  onSelect: (id: string) => void;
};

export function Card({ title, count = 0, children, onSelect }: CardProps) {
  const [open, setOpen] = useState(false);
  const label = useMemo(() => `${title} (${count})`, [title, count]);

  useEffect(() => {
    if (!open) return;
    const id = setTimeout(() => setOpen(false), 5_000);
    return () => clearTimeout(id);
  }, [open]);

  return (
    <section className="card" data-open={open} aria-expanded={open}>
      <header onClick={() => setOpen((o) => !o)}>
        <h2 style={{ fontWeight: 600 }}>{label}</h2>
        {count > 99 && <span className="badge">99+</span>}
      </header>
      {open ? (
        <>
          {children}
          <button type="button" disabled={!count} onClick={() => onSelect(title)}>
            Select
          </button>
        </>
      ) : null}
      {/* JSX comment */}
    </section>
  );
}
