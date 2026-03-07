/**
 * Icon badge used inside feature cards.
 * @param {"sm"|"md"} size
 */
function IconBadge({ icon: Icon, size = "md", interactive = false }) {
  const sizes = {
    sm: "h-9 w-9 [&_svg]:h-5 [&_svg]:w-5",
    md: "h-12 w-12 [&_svg]:h-6 [&_svg]:w-6",
  };

  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-xl bg-muted text-muted-foreground ${sizes[size]} ${
        interactive
          ? "transition-colors group-hover:bg-foreground group-hover:text-background"
          : ""
      }`}
    >
      <Icon strokeWidth={1.5} />
    </div>
  );
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  className = "",
  variant = "default",
  tag,
  iconPosition = "left",
}) {
  // ── Timeline (used in ExperienceTimeline) ──
  if (variant === "timeline") {
    return (
      <div
        className={`lg:w-1/2 ${iconPosition === "right" ? "lg:pr-12" : "lg:pl-12"}`}
      >
        <div
          className={`group rounded-2xl bg-card p-6 transition-all duration-500 hover:shadow-lg ${
            iconPosition === "right" ? "lg:text-right" : "lg:text-left"
          }`}
        >
          <div
            className={`flex items-center gap-3 mb-3 ${
              iconPosition === "right" ? "lg:flex-row-reverse" : ""
            }`}
          >
            <IconBadge icon={Icon} interactive size="sm" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              {tag}
            </span>
          </div>
          <h4 className="font-medium text-muted-foreground text-md mb-1 truncate">
            {title}
          </h4>
          <p className="text-muted-foreground/70 leading-relaxed text-sm">
            {description}
          </p>
        </div>
      </div>
    );
  }

  // ── Bento (vertical layout, grid-spanning) ──
  if (variant === "bento") {
    return (
      <div
        className={`group rounded-2xl bg-card p-6 transition-all duration-500 hover:shadow-lg overflow-hidden ${className}`}
      >
        <IconBadge icon={Icon} interactive />
        <div className="min-w-0 mt-4">
          <h4 className="font-medium text-muted-foreground text-lg mb-1 truncate">
            {title}
          </h4>
          <p className="text-muted-foreground/70 leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    );
  }

  // ── Default (horizontal icon + text) ──
  return (
    <div
      className={`group rounded-2xl bg-card p-6 transition-all duration-500 hover:shadow-lg overflow-hidden ${className}`}
    >
      <div className="flex items-center gap-6 min-w-0">
        <IconBadge icon={Icon} interactive />
        <div className="min-w-0">
          <h4 className="font-medium text-muted-foreground text-lg mb-1 truncate">
            {title}
          </h4>
          <p className="text-muted-foreground/70 leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
