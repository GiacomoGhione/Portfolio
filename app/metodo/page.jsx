import PageShell from "@/components/custom/layout/PageShell";
import {
  BentoGrid,
  MethodSteps,
} from "@/components/custom/sections/MethodSections";

export const metadata = {
  title: "Il Metodo | Giacomo Ghione",
  description:
    "Scopri il metodo di lavoro di Giacomo Ghione: nutrizione personalizzata e allenamento su misura basati su scienza e ascolto.",
};

export default function Metodo() {
  return (
    <PageShell>
      <BentoGrid />
      <MethodSteps />
    </PageShell>
  );
}
