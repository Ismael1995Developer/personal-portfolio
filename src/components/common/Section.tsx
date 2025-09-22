import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "default" | "muted" | "gradient";
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
  };

  return (
    <section
      id={id}
      className={cn(
        "py-16 sm:py-20 lg:py-24",
        backgroundClasses[background],
        className,
      )}
    >
      {children}
    </section>
  );
}
