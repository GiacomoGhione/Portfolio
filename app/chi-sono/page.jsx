import PageShell from "@/components/custom/PageShell";
import SectionHeader from "@/components/custom/SectionHeader";
import ActivityCard from "@/components/custom/ActivityCard";
import ExperienceTimeline from "@/components/custom/ExperienceTimeline";

const activities = [
  {
    title: "Ambiente professionale e accogliente",
    description:
      "Uno spazio studiato per mettere a proprio agio, con un design moderno e funzionale che riflette la mia filosofia di lavoro: professionalità senza rinunciare al calore umano.",
    image: "/studio/postazione-principale.jpg",
    alt: "Postazione principale per consulenze nutrizionali",
  },
  {
    title: "Strumenti professionali",
    description:
      "Monitoraggio costante della composizione corporea con strumenti professionali. Plicometria, circonferenze e analisi per tracciare i tuoi progressi reali.",
    image: "/studio/attrezzature.jpg",
    alt: "Attrezzature per valutazione composizione corporea",
  },
  {
    title: "Area consulenza privata",
    description:
      "Spazio dedicato al tuo benessere, dove ogni dettaglio è pensato per offrirti un'esperienza di consulenza nutrizionale confortevole e riservata.",
    image: "/studio/area-consulenza.jpg",
    alt: "Area consulenza privata",
  },
  {
    title: "Cura dei dettagli in ogni aspetto",
    description:
      "Affronteremo ogni aspetto del tuo percorso con la massima attenzione, perché credo che siano i dettagli a fare la differenza tra un buon piano e un piano eccellente.",
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
        description="Anni di studio, pratica e aggiornamento continuo per offrirti il meglio della scienza della nutrizione e dell'allenamento."
      />
      <ExperienceTimeline />
      {/* Studio cards */}
      <SectionHeader
        label="Il mio studio"
        title="Dove la trasformazione prende forma"
        description="Un ambiente professionale e accogliente che riflette la mia filosofia di lavoro, ogni dettaglio è pensato per offrirti un'esperienza confortevole e riservata."
      />
      {activities.map((activity, index) => (
        <ActivityCard key={activity.title} activity={activity} index={index} />
      ))}
    </PageShell>
  );
}
