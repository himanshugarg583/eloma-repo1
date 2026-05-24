import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-4",
        align === "center" ? "text-center mx-auto" : "text-left"
      )}
    >
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.3em] text-forest/70">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="heading-display text-forest">{title}</h2>
      {description ? (
        <p className="max-w-2xl text-base text-forest/70">
          {description}
        </p>
      ) : null}
    </div>
  );
}
