import { Instagram, Linkedin, Mail, Phone, Clock, MapPin } from "lucide-react";

import TransitionLink from "../ui/TransitionLink";

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
  { label: "Email", value: "giacomo.ghione1702@gmail.com", icon: Mail },
  { label: "Telefono", value: "+39 333 739 9940", icon: Phone },
  { label: "Albo", value: "BIO. SEZ.A - PLV_A4432" },
  { label: "P.IVA", value: "01773900053" },
  { label: "Ateco", value: "72.10.10" },
  { label: "Polizza", value: "RCM20100049052" },
  {
    label: "Posizione",
    value: "https://maps.app.goo.gl/DhAfZ3zvLBYBi6My8",
    address: "I Santi, Castagnole Lanze (AT)",
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
        <TransitionLink href="/" className="text-3xl font-bold tracking-wide">
          Giacomo Ghione
        </TransitionLink>
        {/* Top row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-4">
          {/* First col */}
          <div className="flex flex-col gap-4">
            <p className="text-md leading-relaxed">
              Il tuo nutrizionista e Personal Trainer. Aiuto le persone a
              raggiungere i loro obiettivi di salute e benessere attraverso
              piani alimentari personalizzati e programmi di allenamento su
              misura.
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

          <div className="flex flex-col gap-12 lg:flex-row lg:gap-8 xl:gap-32 2xl:gap-40 justify-end">
            {/* Second col */}
            <div>
              <h1 className="text-md leading-relaxed font-medium uppercase mb-4">
                Informazioni
              </h1>
              <ul className="flex flex-col gap-3 text-sm">
                {infoLinks.map(({ label, value }) => {
                  const isIva = label === "P.IVA";
                  const isAlbo = label === "Albo";
                  const isAteco = label === "Ateco";
                  const isPolizza = label === "Polizza";

                  const content = (
                    <div className="flex items-center gap-1 text-sm text-background/75 hover:text-background transition-colors duration-500">
                      {label && (
                        <>
                          <span>{label}</span>
                          <span className="">-</span>
                        </>
                      )}
                      <span>{value}</span>
                    </div>
                  );

                  if (isIva || isAlbo || isAteco || isPolizza) {
                    return <li key={label}>{content}</li>;
                  }
                })}
              </ul>
            </div>
            {/* Third col */}
            <div>
              <h1 className="text-md leading-relaxed font-medium uppercase mb-4">
                Contatti
              </h1>
              <ul className="flex flex-col gap-3 text-sm">
                {infoLinks.map(({ label, value, icon: Icon, address }) => {
                  const isEmail = label === "Email";
                  const isPhone = label === "Telefono";
                  const isPosition = label === "Posizione";

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
                  if (isPosition) {
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
          <span>© {year} - Giacomo Ghione</span>
          <div className="flex flex-col xl:flex-row text-center gap-4">
            <div className="flex items-center gap-4">
              {legale.map((item) => (
                <TransitionLink
                  key={item.label}
                  href={item.href}
                  className="text-background/75 hover:text-background transition-colors duration-500"
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
