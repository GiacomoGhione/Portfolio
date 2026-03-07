import { Mail, Phone, MapPin } from "lucide-react";

import TransitionLink from "../ui/TransitionLink";
import { CONTACT, SOCIAL_LINKS } from "@/lib/constants";

/** Items shown in the "Informazioni" column */
const legalInfo = [
  { label: "Albo", value: CONTACT.albo },
  { label: "P.IVA", value: CONTACT.piva },
  { label: "Ateco", value: CONTACT.ateco },
  { label: "Polizza", value: CONTACT.polizza },
];

/** Items shown in the "Contatti" column */
const contactLinks = [
  {
    icon: Mail,
    label: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: Phone,
    label: CONTACT.phone,
    href: `tel:${CONTACT.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    label: CONTACT.address,
    href: CONTACT.mapsUrl,
    external: true,
  },
];

const legale = [
  {
    label: "Privacy Policy",
    href: "https://www.iubenda.com/privacy-policy/64509424",
  },
  {
    label: "Cookie Policy",
    href: "https://www.iubenda.com/privacy-policy/64509424/cookie-policy",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 -mt-5">
      <div className="container mx-auto px-4">
        {/* Top row */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 mt-4">
          {/* First col */}
          <div className="flex flex-col gap-4">
            <TransitionLink
              href="/"
              className="text-3xl font-bold tracking-wide"
            >
              Giacomo Ghione
            </TransitionLink>
            <p className="text-md leading-relaxed">
              Il tuo nutrizionista e Personal Trainer. Aiuto le persone a
              raggiungere i loro obiettivi di salute e benessere attraverso
              piani alimentari personalizzati e programmi di allenamento su
              misura.
            </p>
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
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

          <div className="flex flex-col gap-12 xl:flex-row xl:gap-32 2xl:gap-40 justify-end">
            {/* Informazioni */}
            <div>
              <h3 className="font-medium uppercase mb-3 text-sm tracking-wider">
                Informazioni
              </h3>
              <ul className="flex flex-col gap-3 text-sm">
                {legalInfo.map(({ label, value }) => (
                  <li key={label}>
                    <span className="text-background/75">
                      {label} - {value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contatti */}
            <div>
              <h3 className="font-medium uppercase mb-3 text-sm tracking-wider">
                Contatti
              </h3>
              <ul className="flex flex-col gap-3 text-sm">
                {contactLinks.map(({ icon: Icon, label, href, external }) => (
                  <li key={label}>
                    <a
                      href={href}
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="flex items-center gap-2 text-background/75 hover:text-background transition-colors duration-500"
                    >
                      <Icon className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                      <span>{label}</span>
                    </a>
                  </li>
                ))}
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
                <a
                  key={item.label}
                  href={item.href}
                  className="iubenda-white iubenda-noiframe iubenda-embed text-background/75 hover:text-background transition-colors duration-500"
                  title={item.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
