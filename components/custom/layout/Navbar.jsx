"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

import TransitionLink from "../ui/TransitionLink";
import TransitionButton from "../ui/TransitionButton";
import { NAV_LINKS, CONTACT } from "@/lib/constants";
import useScrollLock from "@/hooks/useScrollLock";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  useScrollLock(isMobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    setTimeout(() => {
      setIsMobileMenuOpen(false);
    }, 500);
  };

  return (
    <>
      <nav className="fixed top-2 left-0 right-0 z-50 container mx-auto">
        {/* Main section */}
        <div className="flex items-center justify-between px-4 py-2">
          {/* Logo */}
          <TransitionLink
            href="/"
            className="w-42 text-lg tracking-wide font-medium z-50"
            onClick={handleClick}
          >
            <div
              className={`flex items-center py-1.5 rounded-full transition-all duration-500
                ${isScrolled ? "bg-muted-foreground w-16 text-background px-4" : "w-42 bg-trasparent px-0"}
                ${isMobileMenuOpen ? "text-background w-42 bg-transparent px-0!" : ""}`}
            >
              <span className="flex items-center">
                <span
                  className={`overflow-hidden text-muted-foreground transition-all duration-500
                    ${isScrolled ? "text-background!" : ""} 
                    ${isMobileMenuOpen ? "text-background!" : ""}`}
                >
                  G
                </span>
                <span
                  className={`overflow-hidden text-muted-foreground transition-all duration-500
                    ${isScrolled ? "w-1 opacity-0" : "w-17 opacity-100"} 
                    ${isMobileMenuOpen ? "text-background! w-17 opacity-100" : ""}`}
                >
                  iacomo
                </span>
              </span>
              <span className="flex items-center">
                <span
                  className={`overflow-hidden text-muted-foreground transition-all duration-500
                    ${isScrolled ? "text-background!" : ""} 
                    ${isMobileMenuOpen ? "text-background!" : ""}`}
                >
                  G
                </span>
                <span
                  className={`overflow-hidden text-muted-foreground transition-all duration-500
                    ${isScrolled ? "w-0 opacity-0" : "w-13 opacity-100"} 
                    ${isMobileMenuOpen ? "text-background! w-13 opacity-100" : ""}`}
                >
                  hione
                </span>
              </span>
            </div>
          </TransitionLink>
          {/* Desktop menu */}
          <ul
            className={`hidden lg:flex h-10 items-center text-muted-foreground text-sm font-medium tracking-wide z-50 rounded-full transition-all duration-500 ${isScrolled ? "bg-card gap-2" : "gap-4"}`}
          >
            {NAV_LINKS.map((link) => (
              <li
                key={link.href}
                className={`h-full flex items-center justify-center px-4 rounded-full transition-all duration-500 ${
                  pathname === link.href
                    ? "bg-muted-foreground text-background"
                    : ""
                }`}
              >
                <TransitionLink href={link.href}>{link.label}</TransitionLink>
              </li>
            ))}
          </ul>

          {/* CTA Button - Desktop */}
          <TransitionButton
            className="w-42 h-10 rounded-full hidden lg:inline-flex bg-muted-foreground hover:bg-muted-foreground/90 text-background font-medium tracking-wide"
            href="/contatti"
          >
            Prenota consulenza
          </TransitionButton>

          {/* Mobile menu button */}
          <motion.button
            type="button"
            aria-label={isMobileMenuOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            className={`flex h-10 w-10 items-center justify-center rounded-full lg:hidden transition-colors duration-500 z-50
                ${isMobileMenuOpen ? "bg-background" : "bg-muted-foreground text-background"}`}
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
            <>
              {/* Navbar background mask */}
              <motion.div
                className="fixed top-0 left-0 right-0 h-18 z-45 bg-foreground lg:hidden"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
              />
              <motion.div
                id="mobile-navigation"
                className="fixed inset-0 z-40 bg-foreground lg:hidden overflow-auto scrollbar-hide"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
              >
                <div className="container px-4 min-h-dvh flex flex-col mx-auto pt-18">
                  <div className="flex flex-col gap-4 flex-1 justify-center">
                    {NAV_LINKS.map((link, index) => (
                      <motion.div
                        key={link.href}
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                        className={`py-3 text-4xl border-b transition-colors duration-500 ${
                          pathname === link.href
                            ? "text-background font-medium border-background/60"
                            : "text-background/90 border-background/15 hover:text-background hover:border-background/60"
                        }`}
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
                    className="flex flex-col gap-2 text-background/75 text-sm mt-auto pt-8 pb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                  >
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="hover:text-background transition-colors"
                    >
                      {CONTACT.email}
                    </a>
                    <a
                      href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                      className="hover:text-background transition-colors"
                    >
                      {CONTACT.phone}
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
