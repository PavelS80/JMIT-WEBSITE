import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost-light";

const styles: Record<Variant, string> = {
  primary:
    "bg-brand-red text-white hover:bg-brand-red-dark focus-visible:ring-brand-red/40",
  secondary:
    "border border-ink/15 text-ink hover:border-ink/40 hover:bg-surface focus-visible:ring-ink/20",
  "ghost-light":
    "border border-white/30 text-white hover:bg-white/10 hover:border-white/60 focus-visible:ring-white/40",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-[15px] font-semibold leading-none transition-colors duration-200 focus-visible:outline-none focus-visible:ring-4";
  const cls = cn(base, styles[variant], className);
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
