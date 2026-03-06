import TransitionButton from "@/components/custom/ui/TransitionButton";
import { ArrowRight } from "lucide-react";

export default function CTAButton({
  label,
  href,
  icon: Icon = ArrowRight,
  variant = "primary",
  className = "",
  classNameLabel = "",
  ...props
}) {
  const styles = {
    primary:
      "bg-foreground hover:bg-foreground/90 text-background font-medium tracking-wide rounded-full pr-0",
    outline:
      "bg-transparent text-foreground hover:bg-foreground/25 border border-foreground/75 font-medium tracking-wide rounded-full pr-0",
    inverted:
      "bg-background text-foreground hover:bg-background/90 font-medium tracking-wide rounded-full pr-0",
  };

  const iconBg = {
    primary:
      "bg-primary-foreground/25 group-hover:bg-primary-foreground/30 text-primary-foreground",
    outline: "bg-foreground/75 text-background",
    inverted: "bg-foreground/75 text-background",
  };

  return (
    <TransitionButton
      className={`${styles[variant]} ${className}`}
      href={href}
      size="lg"
      {...props}
    >
      <span className={`flex-1 text-center mr-2 ${classNameLabel}`}>
        {label}
      </span>
      <span
        className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors shrink-0 ${iconBg[variant]}`}
      >
        <Icon className="w-6 h-6" strokeWidth={2} />
      </span>
    </TransitionButton>
  );
}
