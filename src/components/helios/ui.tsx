import { Check } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Mark({
  className,
  alt = "",
  draw = false,
}: {
  className?: string;
  alt?: string;
  draw?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      role="img"
      aria-label={alt || undefined}
      aria-hidden={alt ? undefined : true}
      className={cn("helios-mark", draw && "helios-draw", className)}
    >
      <circle cx="16" cy="16" r="15.25" className="fill-bg stroke-line" strokeWidth="0.7" />
      <path
        pathLength="100"
        d="M1 16.7 H7.4 L9.3 13.7 L11.5 16.7 L13.4 20.8 L16 6.6 L18.7 22.6 L21.1 16.7 L23.2 13.6 L25.2 16.7 H31"
        fill="none"
        className="helios-trace stroke-fg"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="16.7" r="1.55" className="fill-gold" />
    </svg>
  );
}

export function Button({
  children,
  tone = "ghost",
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { tone?: "gold" | "ghost" | "quiet" }) {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-4 text-sm font-medium transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-40",
        tone === "gold" && "bg-gold text-bg hover:bg-gold/90",
        tone === "ghost" && "border border-line bg-surface text-fg hover:border-gold/50",
        tone === "quiet" && "text-muted hover:text-fg",
        className,
      )}
    >
      {children}
    </button>
  );
}

export function Seg<T extends string>({
  value,
  options,
  onChange,
  label,
}: {
  value: T;
  options: { id: T; label: string }[];
  onChange: (id: T) => void;
  label: string;
}) {
  return (
    <div role="group" aria-label={label} className="flex rounded-full border border-line bg-surface p-1">
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          aria-pressed={value === option.id}
          onClick={() => onChange(option.id)}
          className={cn(
            "min-h-9 rounded-full px-3 text-sm transition-colors",
            value === option.id ? "bg-fg text-bg" : "text-muted hover:text-fg",
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs tracking-wide text-muted uppercase">{label}</span>
      {children}
    </label>
  );
}

export const inputClass =
  "h-11 w-full rounded-xl border border-line bg-surface-2 px-3 text-sm text-fg outline-none placeholder:text-muted";

export function CheckRow({
  on,
  label,
  hint,
  onClick,
}: {
  on: boolean;
  label: string;
  hint?: string;
  onClick: () => void;
}) {
  return (
    <button type="button" onClick={onClick} className="flex min-h-11 w-full items-center gap-3 text-left">
      <span
        className={cn(
          "grid size-4 shrink-0 place-items-center rounded border",
          on ? "border-gold bg-gold text-bg" : "border-line bg-transparent",
        )}
      >
        {on ? <Check size={12} strokeWidth={3} /> : null}
      </span>
      <span className="min-w-0">
        <span className="block text-sm">{label}</span>
        {hint ? <span className="block text-xs text-muted">{hint}</span> : null}
      </span>
    </button>
  );
}

export function Banner({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-gold/30 bg-gold/10 px-4 py-3 text-sm leading-6 text-fg">{children}</div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="mb-2 mt-6 text-xs tracking-wide text-muted uppercase">{children}</p>;
}
