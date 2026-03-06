import { Check, Star } from "lucide-react";
import CTAButton from "@/components/custom/ui/CTAButton";

export default function PricingCard({ plan }) {
  const isFeatured = plan.featured;

  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-8 transition-shadow hover:shadow-xl ${
        isFeatured
          ? "border-foreground bg-foreground text-background"
          : "border bg-card"
      }`}
    >
      {/* Badge */}
      {isFeatured && (
        <div className="absolute -top-4 left-8 flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-muted-foreground">
          <Star className="h-3.5 w-3.5 fill-current" />
          <span className="text-xs font-medium">Consigliato</span>
        </div>
      )}

      {/* Header */}
      <div className="mb-4">
        <h3 className="font-medium text-xl mb-2">{plan.name}</h3>
        <p
          className={`text-sm leading-relaxed ${
            isFeatured ? "text-background/70" : "text-muted-foreground"
          }`}
        >
          {plan.description}
        </p>
      </div>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          <span className="font-sans text-4xl lg:text-5xl font-medium">
            {plan.price}
          </span>
          <span
            className={`text-sm ${
              isFeatured ? "text-background/50" : "text-muted-foreground"
            }`}
          >
            / {plan.period}
          </span>
        </div>
      </div>

      {/* Features */}
      <ul className="flex flex-col gap-4 mb-6 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check
              className="h-4 w-4 mt-0.5 shrink-0 text-accent"
              strokeWidth={2}
            />
            <span
              className={`text-sm ${
                isFeatured ? "text-background/80" : "text-muted-foreground"
              }`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <CTAButton
        label="Inizia ora"
        href="/contatti"
        variant={isFeatured ? "inverted" : "primary"}
        classNameLabel="-mr-6!"
      />
    </div>
  );
}
