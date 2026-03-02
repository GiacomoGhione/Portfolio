"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky bottom-4 h-0 pointer-events-none z-40">
      <div className="container mx-auto px-4 -translate-y-full">
        <AnimatePresence>
          {isVisible && (
            <motion.button
              key="back-to-top"
              type="button"
              aria-label="Torna all'inizio"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="ml-auto pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background hover:bg-background hover:text-foreground transition-colors duration-500"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              whileTap={{ scale: 0.92 }}
            >
              <ChevronUp className="h-5 w-5" strokeWidth={2} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
