"use client";

import { TransitionProvider } from "@/context/TransitionContext";
import CircleTransition from "./CircleTransition";
import IntroScreen from "./IntroScreen";
import Navbar from "./Navbar";

export default function Providers({ children }) {
  return (
    <TransitionProvider>
      <Navbar />
      {children}
      <CircleTransition />
      <IntroScreen />
    </TransitionProvider>
  );
}
