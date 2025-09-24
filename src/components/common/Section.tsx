import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "default" | "muted" | "gradient" | "gradient-about";
}

export function Section({
  children,
  className,
  id,
  background = "default",
}: SectionProps) {
  const backgroundClasses = {
    default: "bg-white dark:bg-zinc-900",
    muted: "bg-zinc-50 dark:bg-zinc-800",
    gradient: "gradient-hero",
    "gradient-about": "gradient-about",
  };

  return (
    <section
      id={id}
      className={cn(
        background === "gradient-about"
          ? "pt-16 sm:pt-20 lg:pt-24 pb-0"
          : "py-16 sm:py-20 lg:py-24",
        backgroundClasses[background],
        className,
      )}
    >
      {children}
    </section>
  );
}
