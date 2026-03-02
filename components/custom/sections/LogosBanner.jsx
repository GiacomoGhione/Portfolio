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

export default function LogosBanner() {
  return (
    <section className="relative container mx-auto px-4 pb-4">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-background to-transparent" />

      <div className="flex flex-col gap-4">
        <div className="flex overflow-hidden">
          <motion.div
            className="flex shrink-0 gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[0, 1].map((i) => (
              <span
                key={i}
                className="shrink-0 font-sans leading-tight tracking-tight text-5xl lg:text-6xl xl:text-7xl text-foreground whitespace-nowrap"
              >
                Prenota subito un appuntamento e trasforma il tuo corpo.
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
