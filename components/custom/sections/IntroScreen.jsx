"use client";

import { useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import useScrollLock from "@/hooks/useScrollLock";

const EASE = [0.76, 0, 0.24, 1];

export default function IntroScreen() {
  const [visible, setVisible] = useState(true);
  const controls = useAnimationControls();
  useScrollLock(visible);

  useEffect(() => {
    const cx = innerWidth / 2;
    const cy = innerHeight / 2;
    const r = Math.ceil(Math.hypot(innerWidth, innerHeight));

    controls.set({ clipPath: `circle(${r}px at ${cx}px ${cy}px)` });

    const timer = setTimeout(async () => {
      await controls.start({
        clipPath: `circle(0px at ${cx}px ${cy}px)`,
        transition: { duration: 1, ease: EASE },
      });
      setVisible(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [controls]);

  if (!visible) return null;

  return (
    <motion.div
      animate={controls}
      className="fixed inset-0 h-dvh w-dvw flex flex-col items-center justify-center bg-foreground z-10000"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
        className="flex flex-col items-center"
      >
        <h1 className="text-primary-foreground text-4xl md:text-6xl font-bold tracking-[0.15em] uppercase text-center select-none mb-4">
          Giacomo Ghione
        </h1>
        <p className="text-primary-foreground/60 text-md tracking-[0.45em] uppercase text-center select-none">
          Nutrizione e Allenamento
        </p>
      </motion.div>
    </motion.div>
  );
}
