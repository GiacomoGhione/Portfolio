import PageShell from "@/components/custom/layout/PageShell";
import SectionHeader from "@/components/custom/ui/SectionHeader";
import { Check, Star } from "lucide-react";
import CTAButton from "@/components/custom/ui/CTAButton";
import CTASection from "@/components/custom/ui/CTASection";

export const metadata = {
  title: "Servizi | Giacomo Ghione",
  description:
    "Piani alimentari personalizzati e programmi di allenamento su misura. Scopri i servizi di Giacomo Ghione.",
};

const plans = [
  {
    name: "Piano Alimentare e Consegna Online",
    price: "100€",
    period: "una tantum",
    description:
      "Piano nutrizionale personalizzato e consulenza online per spiegarti ogni dettaglio.",
    features: [
      "Anamnesi alimentare completa",
      "Valutazione antropometrica",
      "Valutazione dello stile di vita",
      "Piano alimentare personalizzato",
      "Consulenza online per spiegazione piano",
    ],
    featured: false,
  },
  {
    name: "Piano Alimentare e Consegna in Studio",
    price: "120€",
    period: "una tantum",
    description:
      "Piano nutrizionale personalizzato con consegna e spiegazione in studio, per un supporto completo.",
    features: [
      "Anamnesi alimentare completa",
      "Valutazione antropometrica",
      "Valutazione dello stile di vita",
      "Piano alimentare personalizzato",
      "Consulenza in studio per spiegazione piano",
    ],
    featured: true,
  },
  {
    name: "Visita di Controllo",
    price: "45€",
    period: "ogni consegna",
    description:
      "Le visite di controllo permettono di monitorare e ottimizzare il piano in base ai progressi e alle esigenze attuali.",
    features: [
      "Valutazione dei progressi",
      "Monitoraggio della composizione corporea",
      "Analisi delle difficoltà incontrate",
      "Adattamento del piano alimentare",
      "Consigli per migliorare i risultati",
    ],
    featured: false,
  },
];

export default function Servizi() {
  return (
    <PageShell>
      <SectionHeader
        label="I miei servizi nutrizionali"
        title="Piani nutrizionali su misura"
        description="Scegli l'opzione più adatta a te e inizia il tuo percorso nutrizionale con un supporto completo e personalizzato."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={plan.name}
            className={`relative flex flex-col rounded-2xl border p-8 transition-shadow hover:shadow-xl ${
              plan.featured
                ? "border-foreground bg-foreground text-background"
                : "border bg-card"
            }`}
          >
            {/* Popular badge */}
            {plan.featured && (
              <div className="absolute -top-3 left-8 flex items-center gap-2 rounded-full bg-accent px-4 py-1 text-muted-foreground">
                <Star className="h-3.5 w-3.5 fill-current" />
                <span className="text-xs font-medium">Consigliato</span>
              </div>
            )}

            {/* Plan header */}
            <div className="mb-6">
              <h3 className="font-medium text-lg mb-2">{plan.name}</h3>
              <p
                className={`text-sm leading-relaxed ${
                  plan.featured ? "text-background" : "text-muted-foreground"
                }`}
              >
                {plan.description}
              </p>
            </div>

            {/* Price */}
            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="font-sans text-4xl lg:text-5xl font-medium">
                  {plan.price}
                </span>
                <span
                  className={`text-sm ${
                    plan.featured
                      ? "text-background/60"
                      : "text-muted-foreground"
                  }`}
                >
                  {"€"} / {plan.period}
                </span>
              </div>
            </div>

            {/* Features */}
            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check
                    className={`h-4 w-4 mt-0.5 shrink-0 ${
                      plan.featured ? "text-accent" : "text-accent"
                    }`}
                    strokeWidth={2}
                  />
                  <span
                    className={`text-sm ${
                      plan.featured
                        ? "text-background/80"
                        : "text-muted-foreground"
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
              variant={plan.featured ? "inverted" : "primary"}
              classNameLabel="-mr-6!"
            />
          </div>
        ))}
      </div>

      <SectionHeader
        label="I miei servizi di allenamento"
        title="Programmi di allenamento su misura"
        description="Scegli l'opzione più adatta a te e inizia il tuo percorso di allenamento con un supporto completo e personalizzato."
      />
      <CTASection
        title="Scrivimi o passa in palestra"
        description="Per quanto riguarda i servizi di allenamento, preferisco offrire un supporto più personalizzato e diretto. Contattami per discutere delle tue esigenze specifiche e creare insieme un programma di allenamento su misura per te, oppure vieni a trovarmi in studio."
        buttonLabel="Scrivimi ora"
        buttonHref="/contatti"
      />
    </PageShell>
  );
}
