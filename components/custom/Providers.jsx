"use client";

import { TransitionProvider } from "@/context/TransitionContext";
import CircleTransition from "./CircleTransition";
import IntroScreen from "./IntroScreen";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BackToTop } from "./BackToTopButton";

export default function Providers({ children }) {
  return (
    <TransitionProvider>
      <Navbar />
      {children}
      <BackToTop />
      <Footer />
      <CircleTransition />
      <IntroScreen />
    </TransitionProvider>
  );
}
