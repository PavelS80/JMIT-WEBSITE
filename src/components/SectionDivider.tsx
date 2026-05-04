type Tone = "light" | "dark";

export function SectionDivider({
  tone = "light",
  label,
}: {
  tone?: Tone;
  label?: string;
}) {
  const lineFrom = tone === "dark" ? "via-white/30" : "via-ink/15";
  const dotBg = tone === "dark" ? "bg-white/40" : "bg-ink/35";
  const labelColor = tone === "dark" ? "text-white/55" : "text-ink-muted";

  return (
    <div
      aria-hidden
      className="mx-auto max-w-[1440px] px-6 md:px-10 py-10 md:py-14 flex items-center gap-5"
    >
      <span className={`flex-1 h-px bg-gradient-to-r from-transparent ${lineFrom} to-transparent`} />
      <span className="flex items-center gap-2">
        <span className={`h-1 w-1 rounded-full ${dotBg}`} />
        {label && (
          <span className={`text-[11px] font-semibold tracking-[0.32em] uppercase ${labelColor}`}>
            {label}
          </span>
        )}
        <span className={`h-1 w-1 rounded-full ${dotBg}`} />
      </span>
      <span className={`flex-1 h-px bg-gradient-to-r from-transparent ${lineFrom} to-transparent`} />
    </div>
  );
}
