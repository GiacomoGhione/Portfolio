import PageShell from "@/components/custom/layout/PageShell";
import SectionHeader from "@/components/custom/ui/SectionHeader";
import ActivityCard from "@/components/custom/sections/ActivityCard";
import ExperienceTimeline from "@/components/custom/sections/ExperienceTimeline";

export const metadata = {
  title: "Chi Sono | Giacomo Ghione",
  description:
    "Scopri il percorso formativo e professionale di Giacomo Ghione, nutrizionista e personal trainer ad Asti.",
};

const activities = [
  {
    title: "Area consulenza privata",
    description:
      "Uno spazio che riflette la mia filosofia di lavoro, professionalità senza rinunciare al calore umano. Ogni dettaglio è pensato per metterti a proprio agio e offrirti un'esperienza di consulenza nutrizionale confortevole e riservata.",
    image: "/studio/area-consulenza.jpg",
    alt: "Area consulenza privata",
  },
  {
    title: "Cura dei dettagli in ogni aspetto",
    description:
      "Affronteremo ogni aspetto del tuo percorso con la massima attenzione, perché credo che siano i dettagli a fare la differenza tra un buon piano e un piano eccellente. Monitoreremo costantemente la composizione corporea con strumenti professionali. Plicometria, circonferenze e analisi per tracciare i tuoi progressi.",
    image: "/studio/dettaglio.jpg",
    alt: "Dettaglio dello studio nutrizionista",
  },
];

export default function ChiSono() {
  return (
    <PageShell>
      {/* Experience section */}
      <SectionHeader
        label="Esperienza & Formazione"
        title="Competenza costruita nel tempo"
        description="Più di 10 anni di esperienza nel settore, con una formazione continua che mi permette di offrire sempre il meglio ai miei clienti."
      />
      <ExperienceTimeline />
      {/* Studio cards */}
      <SectionHeader
        label="Il mio studio"
        title="Dove la trasformazione prende forma"
        description="Da qui inizia il tuo percorso verso una vita più sana e attiva, non solo con piani personalizzati, ma con un supporto completo e professionale."
      />
      <div className="grid gap-8 lg:gap-12">
        {activities.map((activity, index) => (
          <ActivityCard
            key={activity.title}
            activity={activity}
            index={index}
          />
        ))}
      </div>
    </PageShell>
  );
}
