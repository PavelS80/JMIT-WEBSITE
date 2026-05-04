import { cn } from "@/lib/cn";

export function Container({
  children,
  className,
  size = "default",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}) {
  const max =
    size === "narrow"
      ? "max-w-4xl"
      : size === "wide"
        ? "max-w-[1440px]"
        : "max-w-[1280px]";
  return (
    <div className={cn("mx-auto w-full px-6 md:px-10", max, className)}>
      {children}
    </div>
  );
}
