import {
  Apple,
  Brain,
  Dumbbell,
  LineChart,
  Target,
  TrendingUp,
  HeartPulse,
  ClipboardList,
  Utensils,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Clock,
  MapPin,
} from "lucide-react";

// ── Navigation ──────────────────────────────────────────────
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/chi-sono", label: "Chi sono" },
  { href: "/metodo", label: "Metodo" },
  { href: "/servizi", label: "Servizi" },
  { href: "/contatti", label: "Contatti" },
];

// ── Contact info (single source of truth) ───────────────────
export const CONTACT = {
  email: "giacomoghione1702@gmail.com",
  phone: "+39 333 739 9940",
  address: "I Santi, Castagnole delle Lanze (AT)",
  mapsUrl: "https://maps.app.goo.gl/DhAfZ3zvLBYBi6My8",
  hours: "Lun-Ven: 8:30-19:30",
  instagram: "https://www.instagram.com/giacomo_ghione/",
  linkedin: "https://www.linkedin.com/in/giacomo-ghione-25a091116/",
  albo: "BIO. SEZ.A - PLV_A4432",
  piva: "01773900053",
  ateco: "72.10.10",
  polizza: "RCM20100049052",
};

export const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: Phone,
    label: "Telefono",
    value: CONTACT.phone,
    href: `tel:${CONTACT.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Studio",
    value: CONTACT.address,
    href: CONTACT.mapsUrl,
  },
  {
    icon: Clock,
    label: "Orari",
    value: CONTACT.hours,
    href: "#",
  },
];

export const SOCIAL_LINKS = [
  { icon: Instagram, href: CONTACT.instagram, label: "Instagram" },
  { icon: Linkedin, href: CONTACT.linkedin, label: "LinkedIn" },
];

// ── Services (home + servizi) ───────────────────────────────
export const SERVICES_PREVIEW = [
  {
    icon: ClipboardList,
    title: "Piano Alimentare",
    description:
      "Un piano nutrizionale personalizzato basato sulle tue esigenze, abitudini e obiettivi specifici.",
  },
  {
    icon: Dumbbell,
    title: "Allenamento Personalizzato",
    description:
      "Programmi di allenamento studiati per massimizzare i tuoi risultati nel minor tempo possibile.",
  },
  {
    icon: Utensils,
    title: "Visite di Controllo",
    description:
      "Monitoraggio costante dei progressi e aggiustamenti del piano per garantire risultati duraturi.",
  },
];

// ── Method steps (home + metodo) ────────────────────────────
export const METHOD_STEPS = [
  {
    icon: Brain,
    title: "Analisi iniziale",
    description:
      "Valutiamo insieme il tuo stato attuale, le tue abitudini e i tuoi obiettivi.",
  },
  {
    icon: Target,
    title: "Piano personalizzato",
    description:
      "Sviluppo un programma su misura che si adatta alla tua vita, non il contrario.",
  },
  {
    icon: Apple,
    title: "Nutrizione consapevole",
    description:
      "Impari a mangiare in modo sano senza rinunce drastiche, la chiave è l'equilibrio.",
  },
  {
    icon: LineChart,
    title: "Monitoraggio continuo",
    description:
      "Tracciamo i progressi insieme e adattiamo il piano in base ai risultati.",
  },
  {
    icon: TrendingUp,
    title: "Risultati duraturi",
    description:
      "Non solo raggiungi i tuoi obiettivi, ma impari a mantenerli nel tempo.",
  },
  {
    icon: HeartPulse,
    title: "Salute prima di tutto",
    description:
      "Ogni piano parte dal rispetto del tuo corpo e della tua salute.",
  },
];
