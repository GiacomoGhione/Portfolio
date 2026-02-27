"use client";

import { createContext, useContext, useState, useRef, useEffect, useCallback, useMemo } from "react";
import { useRouter, usePathname } from "next/navigation";

const TransitionContext = createContext({});

export function TransitionProvider({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState("idle"); // idle | covering | revealing
  const [clickPos, setClickPos] = useState({ x: 0, y: 0 });
  const target = useRef("");
  const pending = useRef(false);

  // When the route changes, start revealing the new page
  useEffect(() => {
    if (!pending.current) return;
    pending.current = false;
    const t = setTimeout(() => setPhase("revealing"), 50);
    return () => clearTimeout(t);
  }, [pathname]);

  const navigateTo = useCallback((href, x, y) => {
    if (phase !== "idle" || href === pathname) return;
    setClickPos({ x, y });
    target.current = href;
    setPhase("covering");
  }, [phase, pathname]);

  const onCoverDone = useCallback(() => {
    pending.current = true;
    router.push(target.current);
    // Fallback if pathname doesn't change
    setTimeout(() => {
      if (pending.current) {
        pending.current = false;
        setPhase("revealing");
      }
    }, 600);
  }, [router]);

  const onRevealDone = useCallback(() => setPhase("idle"), []);

  const value = useMemo(() => ({
    phase, clickPos, navigateTo, onCoverDone, onRevealDone
  }), [phase, clickPos, navigateTo, onCoverDone, onRevealDone]);

  return (
    <TransitionContext.Provider value={value}>
      {children}
    </TransitionContext.Provider>
  );
}

export function usePageTransition() {
  return useContext(TransitionContext);
}
