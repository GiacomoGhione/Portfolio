import PageShell from "@/components/custom/layout/PageShell";
import SectionHeader from "@/components/custom/ui/SectionHeader";
import ContactForm from "@/components/custom/sections/ContactForm";
import ContactInfoItem from "@/components/custom/ui/ContactInfoItem";
import { CONTACT_ITEMS } from "@/lib/constants";

export const metadata = {
  title: "Contatti | Giacomo Ghione",
  description:
    "Contattami per una consulenza nutrizionale o un programma di allenamento personalizzato ad Asti e online.",
};

export default function Contatti() {
  return (
    <PageShell
      banner={false}
      className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start"
    >
      {/* Left column – header + contact info */}
      <div>
        <SectionHeader
          label="Contatti"
          title="Iniziamo il tuo percorso"
          description="Hai domande o vuoi prenotare una consulenza? Compila il form o contattami direttamente. Sarò felice di aiutarti."
        />
        <div className="flex flex-col gap-6">
          {CONTACT_ITEMS.map((item) => (
            <ContactInfoItem key={item.label} {...item} />
          ))}
        </div>
      </div>

      {/* Right column – form */}
      <ContactForm />
    </PageShell>
  );
}
