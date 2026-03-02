"use client";

import TransitionProvider from "@/context/TransitionContext";
import CircleTransition from "../ui/CircleTransition";
import IntroScreen from "../sections/IntroScreen";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTop from "../ui/BackToTopButton";

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
