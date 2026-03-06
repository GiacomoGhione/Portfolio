import PageShell from "@/components/custom/layout/PageShell";
import SectionHeader from "@/components/custom/ui/SectionHeader";
import ContactForm from "@/components/custom/sections/ContactForm";
import { CONTACT_ITEMS } from "@/lib/constants";

export const metadata = {
  title: "Contatti | Giacomo Ghione",
  description:
    "Contattami per una consulenza nutrizionale o un programma di allenamento personalizzato ad Asti e online.",
};

export default function Contatti() {
  return (
    <PageShell banner={false}>
      <SectionHeader
        label="Contatti"
        title="Iniziamo il tuo percorso"
        description="Hai domande o vuoi prenotare una consulenza? Compila il form o contattami direttamente. Sarò felice di aiutarti."
      />
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Contact details */}
        <div className="flex flex-col gap-6">
          {CONTACT_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors group min-w-0"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted transition-colors group-hover:bg-foreground group-hover:text-background">
                <item.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <div className="min-w-0">
                <span className="text-xs text-muted-foreground block uppercase tracking-wider truncate">
                  {item.label}
                </span>
                <span className="text-base font-medium text-muted-foreground truncate block">
                  {item.value}
                </span>
              </div>
            </a>
          ))}
        </div>
        <ContactForm />
      </div>
    </PageShell>
  );
}
