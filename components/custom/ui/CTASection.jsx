import SectionHeader from "@/components/custom/ui/SectionHeader";
import TransitionButton from "@/components/custom/ui/TransitionButton";

/**
 * Dark highlight banner with radial glow, heading and CTA.
 */
export default function CTASection({
  title,
  description,
  buttonLabel,
  buttonHref,
}) {
  return (
    <div className="relative rounded-3xl bg-foreground text-background p-8 lg:p-16 text-center flex flex-col items-center gap-6">
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(220,240,75,0.15)_0%,transparent_70%)]" />
      <SectionHeader
        title={title}
        description={description}
        className="max-w-2xl mb-0 text-background"
      />
      <TransitionButton
        className="bg-background text-foreground hover:bg-background/90 font-medium tracking-wide rounded-full"
        href={buttonHref}
        size="lg"
      >
        {buttonLabel}
      </TransitionButton>
    </div>
  );
}
