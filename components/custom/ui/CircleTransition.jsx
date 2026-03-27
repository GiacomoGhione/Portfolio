"use client";

import { motion, useAnimationControls } from "framer-motion";
import { usePageTransition } from "@/context/TransitionContext";
import { useEffect } from "react";
import useScrollLock from "@/hooks/useScrollLock";

const EASE = [0.76, 0, 0.24, 1];

function getMaxRadius(x, y) {
  const dx = Math.max(x, innerWidth - x);
  const dy = Math.max(y, innerHeight - y);
  return Math.ceil(Math.hypot(dx, dy)) + 20;
}

export default function CircleTransition() {
  const { phase, clickPos, onCoverDone, onRevealDone } = usePageTransition();
  const controls = useAnimationControls();
  useScrollLock(phase !== "idle");

  useEffect(() => {
    if (phase === "idle") return;

    const r = getMaxRadius(clickPos.x, clickPos.y);
    const at = `${clickPos.x}px ${clickPos.y}px`;
    const full = `circle(${r}px at ${at})`;
    const zero = `circle(0px at ${at})`;
    const anim = { transition: { duration: 0.8, ease: EASE } };

    if (phase === "covering") {
      controls.set({ clipPath: zero });
      controls.start({ clipPath: full, ...anim }).then(onCoverDone);
    } else {
      controls.set({ clipPath: full });
      controls.start({ clipPath: zero, ...anim }).then(() => {
        onRevealDone();
      });
    }
  }, [phase, clickPos.x, clickPos.y, controls, onCoverDone, onRevealDone]);

  return (
    <motion.div
      animate={controls}
      initial={{ clipPath: "circle(0px at 0px 0px)" }}
      className="fixed inset-0 h-dvh w-dvw bg-foreground z-9999 pointer-events-none"
    />
  );
}
