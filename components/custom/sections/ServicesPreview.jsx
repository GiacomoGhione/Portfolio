import SectionHeader from "@/components/custom/ui/SectionHeader";
import FeatureCard from "@/components/custom/ui/FeatureCard";
import CTAButton from "@/components/custom/ui/CTAButton";
import { SERVICES_PREVIEW } from "@/lib/constants";

export default function ServicesPreview() {
  return (
    <div>
      <SectionHeader
        label="Servizi"
        title="Piani su misura per i tuoi obiettivi"
        description="Che tu voglia migliorare la tua alimentazione o allenarti in modo efficace, ho il percorso giusto per te."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {SERVICES_PREVIEW.map((service) => (
          <FeatureCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
            variant="bento"
          />
        ))}
      </div>
      <div className="flex justify-center pt-8">
        <CTAButton label="Scopri tutti i servizi" href="/servizi" />
      </div>
    </div>
  );
}
