import { Instagram, Linkedin, Mail, Phone, Clock, MapPin } from "lucide-react";

import TransitionLink from "./TransitionLink";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/chi-sono", label: "Chi sono" },
  { href: "/metodo", label: "Metodo" },
  { href: "/servizi", label: "Servizi" },
  { href: "/contatti", label: "Contatti" },
];

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/giacomo_ghione/",
    label: "Instagram",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/giacomo-ghione-25a091116/",
    label: "LinkedIn",
  },
];

const infoLinks = [
  { label: "P.IVA", value: "12345678901" },
  { label: "Titolo", value: "Nutrizionista" },
  { label: "Albo", value: "Albo Nazionale dei Biologi n. 12345" },
  { label: "Email", value: "giacomo.ghione1702@gmail.com", icon: Mail },
  { label: "Telefono", value: "+39 333 739 9940", icon: Phone },
  { label: "Orari", value: "Lun-Ven 9:00-18:00", icon: Clock },
  {
    label: "Posizione",
    value: "https://maps.app.goo.gl/DhAfZ3zvLBYBi6My8",
    address: "Castagnole delle Lanze",
    icon: MapPin,
  },
];

const legale = [
  { label: "Privacy Policy", href: "#" },
  { label: "Termini di Servizio", href: "#" },
  { label: "Cookie Policy", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 -mt-5">
      <div className="container mx-auto px-4">
        {/* Top row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* First col */}
          <div className="flex flex-col gap-4">
            <TransitionLink
              href="/"
              className="text-4xl font-bold tracking-wide"
            >
              Giacomo Ghione
            </TransitionLink>
            <p className="text-md leading-relaxed">
              Nutrizionista e Personal Trainer. Aiuto le persone a raggiungere i
              loro obiettivi di salute e benessere attraverso piani alimentari
              personalizzati e programmi di allenamento su misura.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 text-background hover:bg-background hover:text-foreground transition-colors duration-500"
                >
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-12 lg:flex-row lg:gap-24 xl:gap-32 2xl:gap-40 justify-end">
            {/* Second col */}
            <nav>
              <p className="text-xs font-medium uppercase tracking-widest mb-4">
                Navigazione
              </p>
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <TransitionLink
                      href={link.href}
                      className="text-sm text-background/75 hover:text-background transition-colors duration-500"
                    >
                      {link.label}
                    </TransitionLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Third col */}
            <div>
              <p className="text-xs font-medium uppercase tracking-widest mb-4">
                Contatti
              </p>
              <ul className="flex flex-col gap-3">
                {infoLinks.map(({ label, value, icon: Icon, address }) => {
                  const isEmail = label === "Email";
                  const isPhone = label === "Telefono";
                  const isLink = label === "Posizione";

                  const content = (
                    <div className="flex items-center gap-2 text-sm text-background/75 hover:text-background transition-colors duration-500">
                      {Icon && <Icon className="h-4 w-4" strokeWidth={1.5} />}
                      <span>{label === "Posizione" ? address : value}</span>
                    </div>
                  );

                  if (isEmail) {
                    return (
                      <li key={label}>
                        <a href={`mailto:${value}`}>{content}</a>
                      </li>
                    );
                  }
                  if (isPhone) {
                    return (
                      <li key={label}>
                        <a href={`tel:${value.replace(/\s/g, "")}`}>
                          {content}
                        </a>
                      </li>
                    );
                  }
                  if (isLink) {
                    return (
                      <li key={label}>
                        <a
                          href={value}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {content}
                        </a>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-12 border-t border-background/25 flex flex-col justify-between items-center xl:flex-row gap-4">
          <span>
            © {year} Giacomo Ghione —{" "}
            {infoLinks.find((i) => i.label === "P.IVA")?.label}{" "}
            {infoLinks.find((i) => i.label === "P.IVA")?.value}
          </span>
          <div className="flex flex-col xl:flex-row text-center gap-4">
            <span>{infoLinks.find((i) => i.label === "Albo")?.value}</span>
            <div className="flex items-center gap-4">
              {legale.map((item) => (
                <TransitionLink
                  key={item.label}
                  href={item.href}
                  className="hover:text-background transition-colors duration-500"
                >
                  {item.label}
                </TransitionLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
