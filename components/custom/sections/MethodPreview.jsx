"use client";

import SectionHeader from "@/components/custom/ui/SectionHeader";
import { ExpandableCard } from "@/components/ui/expandable-card";
import CTAButton from "@/components/custom/ui/CTAButton";
import { METHOD_STEPS } from "@/lib/constants";

export default function MethodPreview() {
  return (
    <div>
      <SectionHeader
        label="Il Metodo"
        title="Un percorso costruito attorno a te"
        description="Non esistono soluzioni universali. Il mio approccio si basa sulla personalizzazione totale, perché ogni persona è unica."
      />
      <div className="grid lg:grid-cols-3 gap-6">
        {METHOD_STEPS.map((step) => (
          <ExpandableCard
            key={step.title}
            icon={step.icon}
            title={step.title}
            description={step.description}
          ></ExpandableCard>
        ))}
      </div>
      <div className="flex justify-center pt-8">
        <CTAButton label="Scopri il metodo completo" href="/metodo" />
      </div>
    </div>
  );
}
