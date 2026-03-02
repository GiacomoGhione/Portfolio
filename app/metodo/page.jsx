import PageShell from "@/components/custom/PageShell";
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
import SectionHeader from "@/components/custom/SectionHeader";
import FeatureCard from "@/components/custom/FeatureCard";

const methodSteps = [
  {
    icon: Brain,
    title: "Analisi iniziale",
    description:
      "Valutiamo insieme il tuo stato attuale, le tue abitudini e i tuoi obiettivi.",
  },
  {
    icon: Target,
    title: "Piano personalizzato",
    description:
      "Sviluppo un programma su misura che si adatta alla tua vita, non il contrario.",
  },
  {
    icon: Apple,
    title: "Nutrizione consapevole",
    description:
      "Impari a mangiare in modo sano senza rinunce drastiche, la chiave è l'equilibrio.",
  },
  {
    icon: Dumbbell,
    title: "Allenamento mirato",
    description:
      "Esercizi selezionati per massimizzare i risultati nel minor tempo possibile.",
  },
  {
    icon: LineChart,
    title: "Monitoraggio continuo",
    description:
      "Tracciamo i progressi insieme e adattiamo il piano in base ai risultati.",
  },
  {
    icon: TrendingUp,
    title: "Risultati duraturi",
    description:
      "Non solo raggiungi i tuoi obiettivi, ma impari a mantenerli nel tempo.",
  },
];

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
      "Strategie personalizzate ottimizzare l’energia e favorire l’adattamento.",
    className: "lg:col-span-1",
  },
  {
    icon: Bike,
    title: "Nutrizione sportiva per atleti endurance",
    description:
      "Srategie nutrizionali e di integrazione specifiche per atleti di ciclismo, running e trail running.",
    className: "lg:col-span-2",
  },
];

export default function Metodo() {
  return (
    <PageShell>
      {/* Bento Grid */}
      <SectionHeader
        label="I Principi"
        title="Su cosa si basa il mio lavoro"
        description="Ogni piano che creo si fonda su principi scientifici e un approccio centrato sulla persona, per garantirti risultati reali e sostenibili."
      />

      <div className="grid lg:grid-cols-3 gap-6">
        {bentoItems.map((item) => (
          <FeatureCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            description={item.description}
            className={item.className}
            variant="bento"
          />
        ))}
      </div>

      {/* Philosophy */}
      <SectionHeader
        label="Il Metodo"
        title="Un percorso costruito attorno a te"
        description="Non esistono soluzioni universali. Il mio approccio si basa sulla personalizzazione totale, perché ogni persona è unica."
      />
      {/* Two column sticky layout */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 mb-20">
        {/* Left: Sticky Philosophy box */}
        <div className="lg:w-1/2">
          <div className="lg:sticky lg:top-28">
            <SectionHeader
              title="La trasformazione parte dalla mente"
              description="Il vero cambiamento non è solo fisico. Ti guido in un percorso che trasforma il tuo rapporto con il cibo e con l'attività fisica, creando abitudini che durano una vita. Che tu voglia perdere peso, aumentare la massa muscolare o semplicemente sentirti meglio, costruiremo insieme un percorso sostenibile e personalizzato."
              className="text-background bg-foreground rounded-3xl p-8 lg:p-12"
            />
          </div>
        </div>

        {/* Right: Scrolling steps */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          {methodSteps.map((step) => (
            <FeatureCard
              key={step.title}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </PageShell>
  );
}
