"use client";

import { motion } from "framer-motion";
import { Dumbbell, Heart, Leaf, Sparkles, Star, Zap } from "lucide-react";

const phrases = [
  { text: "Inizia ora il tuo cambiamento", icon: Sparkles },
  { text: "Nutrizione personalizzata", icon: Leaf },
  { text: "Allenamento su misura", icon: Dumbbell },
  { text: "Trasforma il tuo corpo", icon: Zap },
  { text: "Risultati concreti", icon: Star },
  { text: "Benessere a 360 gradi", icon: Heart },
];

function Row({ reverse = false }) {
  // Duplicate to create seamless loop
  const items = [...phrases, ...phrases];

  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="flex shrink-0 gap-16"
        animate={{ x: ["0", "-12.5%"] }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {items.map((phrase, index) => (
          <div
            key={`${phrase.text}-${index}`}
            className="font-serif text-4xl leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl xl:text-7xl text-primary"
          >
            <span>
              Prenota subito un appuntamento e trasforma il tuo corpo.
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function LogosBanner() {
  return (
    <section className="relative overflow-hidden container mx-auto px-4">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

      <div className="flex flex-col gap-4">
        <Row />
      </div>
    </section>
  );
}
