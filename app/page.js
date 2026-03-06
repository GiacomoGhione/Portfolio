import PageShell from "@/components/custom/layout/PageShell";
import HeroSection from "@/components/custom/sections/HeroSection";
import ServicesPreview from "@/components/custom/sections/ServicesPreview";
import MethodPreview from "@/components/custom/sections/MethodPreview";
import CTASection from "@/components/custom/ui/CTASection";

export default function Home() {
  return (
    <PageShell className="lg:pt-0!">
      <HeroSection />
      <ServicesPreview />
      <CTASection
        title="Competenza costruita nel tempo"
        description="Anni di studio, pratica e aggiornamento continuo per offrirti il meglio della scienza della nutrizione e dell'allenamento."
        buttonLabel="Scopri di più su di me"
        buttonHref="/chi-sono"
      />
      <MethodPreview />
      <CTASection
        title="Pronto a iniziare il tuo percorso?"
        description="Contattami per una consulenza gratuita e scopri come posso aiutarti a raggiungere i tuoi obiettivi di salute e benessere."
        buttonLabel="Contattami ora"
        buttonHref="/contatti"
      />
    </PageShell>
  );
}
