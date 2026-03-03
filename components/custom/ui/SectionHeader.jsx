export default function SectionHeader({
  label,
  title,
  description,
  className = "max-w-2xl mb-8 text-muted-foreground",
}) {
  return (
    <div className={`${className}`}>
      {label && (
        <span className="inline-block text-sm uppercase tracking-widest mb-4">
          {label}
        </span>
      )}
      <h2 className="font-sans font-medium text-2xl sm:text-3xl lg:text-4xl mb-4 text-balance">
        {title}
      </h2>
      {description && (
        <p className="font-sans text-lg lg:text-xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
