import PageShell from "@/components/custom/layout/PageShell";
import SectionHeader from "@/components/custom/ui/SectionHeader";
import PricingCard from "@/components/custom/ui/PricingCard";
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
    name: "Visita di Controllo e Aggiornamento Piano",
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
        {plans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
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
