"use client";

import TransitionLink from "./TransitionLink";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/chi-sono", label: "Chi sono" },
  { href: "/metodo", label: "Metodo" },
  { href: "/servizi", label: "Servizi" },
  { href: "/contatti", label: "Contatti" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 backdrop-blur-sm">
      <TransitionLink href="/" className="text-xl font-bold tracking-wide">
        GG
      </TransitionLink>

      <ul className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link.href}>
            <TransitionLink
              href={link.href}
              className="text-sm uppercase tracking-widest hover:opacity-70 transition-opacity duration-300"
            >
              {link.label}
            </TransitionLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
