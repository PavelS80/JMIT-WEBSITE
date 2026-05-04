import type { ComponentProps } from "react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost-light";
type LinkHref = ComponentProps<typeof Link>["href"];

const styles: Record<Variant, string> = {
  primary:
    "bg-brand-red text-white hover:bg-brand-red-dark focus-visible:ring-brand-red/40",
  secondary:
    "border border-ink/15 text-ink hover:border-ink/40 hover:bg-surface focus-visible:ring-ink/20",
  "ghost-light":
    "border border-white/30 text-white hover:bg-white/10 hover:border-white/60 focus-visible:ring-white/40",
};

type ButtonProps = {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
} & (
  | { href: LinkHref; external?: false }
  | { href: string; external: true }
);

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-[15px] font-semibold leading-none transition-colors duration-200 focus-visible:outline-none focus-visible:ring-4";
  const cls = cn(base, styles[variant], className);
  if (external) {
    return (
      <a href={href as string} className={cls} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href as LinkHref} className={cls}>
      {children}
    </Link>
  );
}
