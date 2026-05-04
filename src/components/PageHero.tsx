import { Container } from "@/components/Container";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
}) {
  return (
    <section className="bg-navy text-white pt-32 md:pt-40 pb-24 md:pb-32 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full opacity-[0.08]"
        style={{
          background:
            "radial-gradient(circle, var(--color-gold) 0%, transparent 70%)",
        }}
      />
      <Container>
        <div className="relative max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gradient-to-r from-gold to-brand-red" />
            <span className="text-[12px] font-semibold tracking-[0.22em] uppercase text-white/85">
              {eyebrow}
            </span>
          </div>
          <h1 className="text-[44px] md:text-[64px] font-semibold leading-[1.05] tracking-tight">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-[18px] md:text-[20px] leading-relaxed text-white/75 max-w-2xl">
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
