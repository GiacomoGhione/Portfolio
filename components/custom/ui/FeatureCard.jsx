export default function FeatureCard({
  icon: Icon,
  title,
  description,
  className = "",
  variant = "default",
  tag,
  iconPosition = "left",
}) {
  if (variant === "timeline") {
    return (
      <div
        className={`lg:w-1/2 ${iconPosition === "right" ? "lg:pr-12" : "lg:pl-12"}`}
      >
        <div
          className={`rounded-2xl bg-card p-6 transition-all duration-500 hover:shadow-lg ${iconPosition === "right" ? "lg:text-right" : "lg:text-left"}`}
        >
          <div
            className={`flex items-center gap-3 mb-3 ${
              iconPosition === "right" ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-muted text-muted-foreground">
              <Icon className="h-5 w-5" strokeWidth={1.5} />
            </div>
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              {tag}
            </span>
          </div>
          <h4 className="font-medium text-muted-foreground text-base leading-snug">
            {title}
          </h4>
          <p className="text-muted-foreground text-sm mt-1">{description}</p>
        </div>
      </div>
    );
  }

  if (variant === "bento") {
    return (
      <div
        className={`group rounded-2xl bg-card p-6 transition-all duration-500 hover:border-foreground/20 hover:shadow-lg overflow-hidden ${className}`}
      >
        <div className="flex h-12 w-12 shrink-0 mb-4 items-center justify-center rounded-xl bg-muted text-muted-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
          <Icon className="h-6 w-6" strokeWidth={1.5} />
        </div>
        <div className="min-w-0">
          <h4 className="font-medium text-muted-foreground text-lg mb-0.5 truncate">
            {title}
          </h4>
          <p className="text-muted-foreground/80 leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`group rounded-2xl bg-card p-6 transition-all duration-500 hover:border-foreground/20 hover:shadow-lg ${className}`}
    >
      <div className="flex items-center gap-8 min-w-0">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted text-muted-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
          <Icon className="h-6 w-6" strokeWidth={1.5} />
        </div>
        <div className="min-w-0">
          <h4 className="font-medium text-muted-foreground text-lg mb-0.5 truncate">
            {title}
          </h4>
          <p className="text-muted-foreground/80 leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
