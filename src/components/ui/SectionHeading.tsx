interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className = "",
}: SectionHeadingProps) {
  const alignClasses = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignClasses} ${className}`}>
      {eyebrow && (
        <span
          className={`text-sm font-semibold uppercase tracking-wide ${
            light ? "text-brand-accent" : "text-brand-accent"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-brand-dark"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-base leading-relaxed ${light ? "text-white/70" : "text-brand-muted"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
