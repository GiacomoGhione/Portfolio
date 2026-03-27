"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { GraduationCap, BookOpen, Medal, Award } from "lucide-react";
import { ExpandableCard } from "@/components/ui/expandable-card";

const credentials = [
  {
    icon: GraduationCap,
    title: "Laurea in Scienze Motorie",
    description: "Formazione accademica nel movimento umano",
    tag: "Formazione",
  },
  {
    icon: GraduationCap,
    title: "Laurea Magistrale in Biologia",
    description: "Formazione accademica in scienze della nutrizione",
    tag: "Formazione",
  },
  {
    icon: BookOpen,
    title: "Specializzazione in Nutrizione Sportiva",
    description: "Approfondimento scientifico sull'alimentazione",
    tag: "Specializzazione",
  },
  {
    icon: Medal,
    title: "Certificazione Weightlifting Rawtraining",
    description:
      "Abilitazione professionale alla preparazione nel weightlifting",
    tag: "Certificazione",
  },
  {
    icon: Medal,
    title: "Certificazione Strength Trainer AIF",
    description:
      "Abilitazione professionale alla preparazione nel powerlifting",
    tag: "Certificazione",
  },
  {
    icon: Award,
    title: "Esperienza in palestra",
    description:
      "Più di 10 anni di esperienza pratica con clienti di ogni livello",
    tag: "Esperienza",
  },
];

export default function ExperienceTimeline() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 20%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <div ref={containerRef} className="relative">
      {/* Traccia grigia */}
      <div className="absolute left-2 top-0 bottom-0 w-px bg-muted-foreground/20" />
      {/* Linea animata scroll-driven */}
      <motion.div
        className="absolute left-2 top-0 w-px bg-foreground origin-top"
        style={{ scaleY, height: "100%" }}
      />

      <div className="flex flex-col gap-6">
        {credentials.map((credential, index) => (
          <div
            key={credential.title}
            className="relative pl-10 flex items-center"
          >
            {/* Dot — mobile: sinistra, desktop: centro */}
            <div className="absolute left-1 h-2.5 w-2.5 rounded-full bg-foreground z-10" />
            {/* Card Wrapper */}
            <div className="w-full">
              <ExpandableCard
                icon={credential.icon}
                title={credential.title}
                description={credential.description}
                tag={credential.tag}
              ></ExpandableCard>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
