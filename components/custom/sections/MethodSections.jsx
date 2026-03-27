"use client";

import {
  Apple,
  Bike,
  BicepsFlexed,
  Brain,
  Dumbbell,
  HeartPulse,
  LineChart,
  Medal,
  Salad,
  Target,
  TrendingUp,
  Volleyball,
} from "lucide-react";
import SectionHeader from "@/components/custom/ui/SectionHeader";
import { ExpandableCard } from "@/components/ui/expandable-card";
import { METHOD_STEPS } from "@/lib/constants";

const bentoItems = [
  {
    icon: Salad,
    title: "Mangiare bene per vivere meglio",
    description:
      "Niente diete estreme, solo un percorso personalizzato verso un'alimentazione sana per migliorare energia, salute e qualità della vita.",
    className: "lg:col-span-2",
  },
  {
    icon: HeartPulse,
    title: "Salute prima di tutto",
    description:
      "Ogni piano parte dal rispetto del tuo corpo e della tua salute.",
    className: "lg:col-span-1",
  },

  {
    icon: Medal,
    title: "Piani per agonisti",
    description: "Preparazione specifica per competizioni e gare sportive.",
    className: "lg:col-span-1",
  },
  {
    icon: Volleyball,
    title: "Preparazione atletica",
    description:
      "Programmi mirati per migliorare performance sportive e condizionamento fisico.",
    className: "lg:col-span-1",
  },
  {
    icon: BicepsFlexed,
    title: "Powerlifting & Forza",
    description:
      "Schede dedicate a squat, panca e stacco per massimizzare le performance.",
    className: "lg:col-span-1",
  },
  {
    icon: Dumbbell,
    title: "Sinergia tra sport e nutrizione",
    description:
      "Strategie personalizzate per ottimizzare l’energia e favorire l’adattamento.",
    className: "lg:col-span-1",
  },
  {
    icon: Bike,
    title: "Nutrizione sportiva per atleti endurance",
    description:
      "Strategie nutrizionali e di integrazione specifiche per atleti di ciclismo, running e trail running e molti altri sport di endurance.",
    className: "lg:col-span-2",
  },
];

export function BentoGrid() {
  return (
    <>
      <SectionHeader
        label="I Principi"
        title="Su cosa si basa il mio lavoro"
        description="Ogni piano che creo si fonda su principi scientifici e un approccio centrato sulla persona, per garantirti risultati reali e sostenibili."
      />
      <div className="grid lg:grid-cols-3 gap-6">
        {bentoItems.map((item) => (
          <ExpandableCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            description={item.description}
            className={item.className}
          ></ExpandableCard>
        ))}
      </div>
    </>
  );
}

export function MethodSteps() {
  return (
    <>
      <SectionHeader
        label="Il Metodo"
        title="Un percorso costruito attorno a te"
        description="Non esistono soluzioni universali. Il mio approccio si basa sulla personalizzazione totale, perché ogni persona è unica."
      />
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
        {/* Left: Sticky Philosophy box */}
        <div className="lg:w-1/2">
          <div className="lg:sticky lg:top-28">
            <div className="text-background bg-foreground rounded-3xl p-8 lg:p-12">
              <h2 className="font-sans font-medium text-2xl lg:text-3xl mb-2 lg:mb-4 text-balance">
                La trasformazione parte dalla mente
              </h2>
              <p className="font-sans text-md lg:text-lg leading-relaxed">
                Il vero cambiamento non è solo fisico. Ti guido in un percorso
                che trasforma il tuo rapporto con il cibo e con l&apos;attività
                fisica, creando abitudini che durano una vita. Che tu voglia
                perdere peso, aumentare la massa muscolare o semplicemente
                sentirti meglio, costruiremo insieme un percorso sostenibile e
                personalizzato.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Scrolling steps */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          {METHOD_STEPS.map((step) => (
            <ExpandableCard
              key={step.title}
              icon={step.icon}
              title={step.title}
              description={step.description}
            ></ExpandableCard>
          ))}
        </div>
      </div>
    </>
  );
}
