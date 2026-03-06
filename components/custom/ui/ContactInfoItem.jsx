export default function ContactInfoItem({ icon: Icon, label, value, href }) {
  return (
    <a
      href={href}
      className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors group min-w-0"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted transition-colors group-hover:bg-foreground group-hover:text-background">
        <Icon className="h-5 w-5" strokeWidth={1.5} />
      </div>
      <div className="min-w-0">
        <span className="text-xs text-muted-foreground block uppercase tracking-wider truncate">
          {label}
        </span>
        <span className="text-base font-medium text-muted-foreground truncate block">
          {value}
        </span>
      </div>
    </a>
  );
}
