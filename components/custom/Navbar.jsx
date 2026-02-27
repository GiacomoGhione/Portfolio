"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import TransitionLink from "./TransitionLink";
import { Button } from "../ui/button";
import TransitionButton from "./TransitionButton";

const MotionTransitionLink = motion(TransitionLink);

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/chi-sono", label: "Chi sono" },
  { href: "/metodo", label: "Metodo" },
  { href: "/servizi", label: "Servizi" },
  { href: "/contatti", label: "Contatti" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.scrollbarGutter = "stable";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.documentElement.style.scrollbarGutter = "";
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  const handleClick = () => {
    setTimeout(() => {
      setIsMobileMenuOpen(false);
    }, 500);
  };

  return (
    <nav className="fixed top-2 left-0 right-0 z-40 font-serif">
      {/* Main section */}
      <div className="flex items-center justify-between container px-4 py-2 mx-auto">
        {/* Logo */}
        <TransitionLink
          href="/"
          className="w-42 text-lg font-medium tracking-wide z-50"
        >
          <div
            className={`flex items-center gap-1 rounded-full transition-all duration-500 py-1
                ${isScrolled ? "bg-foreground w-16.25 text-background px-4" : "w-38 bg-trasparent text-foreground px-0"}
                ${isMobileMenuOpen ? "text-background! w-38 bg-transparent px-0!" : ""}`}
          >
            <span className="flex items-center">
              <span>G</span>
              <span
                className={`transition-all duration-500 overflow-hidden text-foreground
                    ${isScrolled ? "w-0 opacity-0" : "w-16.5 opacity-100"} 
                    ${isMobileMenuOpen ? "text-background! w-16.5 opacity-100" : ""}`}
              >
                iacomo
              </span>
            </span>
            <span className="flex items-center">
              <span>G</span>
              <span
                className={`transition-all duration-500 overflow-hidden text-foreground
                    ${isScrolled ? "w-0 opacity-0" : "w-12.5 opacity-100"} 
                    ${isMobileMenuOpen ? "text-background! w-12.5 opacity-100" : ""}`}
              >
                hione
              </span>
            </span>
          </div>
        </TransitionLink>
        {/* Desktop menu */}
        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-foreground tracking-wide z-50">
          {navLinks.map((link) => (
            <li key={link.href}>
              <TransitionLink
                href={link.href}
                className="hover:opacity-70 transition-opacity duration-300"
              >
                {link.label}
              </TransitionLink>
            </li>
          ))}
        </ul>

        {/* CTA Button - Desktop */}
        <TransitionButton
          className="w-42 rounded-full hidden lg:inline-flex bg-foreground hover:bg-foreground/90 text-background font-medium tracking-wide"
          href="/contatti"
        >
          Prenota consulenza
        </TransitionButton>

        {/* Mobile menu button */}
        <motion.button
          type="button"
          className={`flex h-10 w-10 items-center justify-center rounded-full lg:hidden transition-colors duration-500 z-50
                ${isMobileMenuOpen ? "bg-background" : "bg-foreground text-background"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative w-5 h-5 flex flex-col items-center justify-center">
            <motion.span
              className="absolute h-[1.5px] w-4 bg-current rounded-full"
              animate={{
                top: isMobileMenuOpen ? "50%" : "20%",
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? "-50%" : "0%",
              }}
              transition={{
                top: {
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: isMobileMenuOpen ? 0.1 : 0.3,
                },
                rotate: {
                  duration: 0.3,
                  ease: "easeOut",
                  delay: isMobileMenuOpen ? 0.4 : 0.1,
                },
              }}
            />
            <motion.span
              className="absolute h-[1.5px] w-4 bg-current rounded-full my-auto mt-px"
              animate={{
                opacity: isMobileMenuOpen ? 0 : 1,
              }}
              transition={{ duration: 0.3, delay: 0.3 }}
            />
            <motion.span
              className="absolute h-[1.5px] w-4 bg-current rounded-full"
              animate={{
                top: isMobileMenuOpen ? "50%" : "80%",
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? "-50%" : "0%",
              }}
              transition={{
                top: {
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: isMobileMenuOpen ? 0.1 : 0.3,
                },
                rotate: {
                  duration: 0.3,
                  ease: "easeOut",
                  delay: isMobileMenuOpen ? 0.4 : 0.1,
                },
              }}
            />
          </div>
        </motion.button>
      </div>
      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-foreground lg:hidden overflow-auto scrollbar-hide"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="container px-4 min-h-dvh flex flex-col mx-auto py-16">
              <div className="flex flex-col gap-4 flex-1 justify-center">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                    className="py-3 text-4xl text-background/90 border-b border-background/15 hover:text-background hover:border-background/60 transition-colors duration-500"
                  >
                    <TransitionLink
                      href={link.href}
                      className="block"
                      onClick={handleClick}
                    >
                      {link.label}
                    </TransitionLink>
                  </motion.div>
                ))}

                <motion.div
                  className="mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <TransitionButton
                    className="w-full rounded-full bg-background hover:bg-background/90 text-foreground font-medium tracking-wide"
                    size="lg"
                    href="/contatti"
                    onClick={handleClick}
                  >
                    <span>Prenota consulenza</span>
                  </TransitionButton>
                </motion.div>
              </div>

              {/* Contact info */}
              <motion.div
                className="flex flex-col gap-2 text-background/75 text-sm mt-auto pt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <a
                  href="mailto:info@giacomoghione.it"
                  className="hover:text-background transition-colors"
                >
                  info@giacomoghione.it
                </a>
                <a
                  href="tel:+393331234567"
                  className="hover:text-background transition-colors"
                >
                  +39 333 123 4567
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
