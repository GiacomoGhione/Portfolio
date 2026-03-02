import PageShell from "@/components/custom/layout/PageShell";
import SectionHeader from "@/components/custom/ui/SectionHeader";
import FeatureCard from "@/components/custom/ui/FeatureCard";
import TransitionButton from "@/components/custom/ui/TransitionButton";
import {
  Apple,
  Brain,
  Dumbbell,
  BookOpen,
  LineChart,
  Target,
  TrendingUp,
  ClipboardList,
  Utensils,
  HeartPulse,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <PageShell className="lg:pt-0!">
      <div className="grid gap-12 lg:gap-4 lg:grid-cols-2 lg:items-center min-h-svh lg:h-svh">
        {/* Left: Text content */}
        <div className="flex flex-col gap-6 lg:gap-4 relative">
          {/* Ambient glow */}
          <div className="pointer-events-none absolute -left-10 lg:-left-20 top-1/4 -translate-y-1/2 -translate-x-1/4 w-screen h-[150vh] bg-[radial-gradient(ellipse_at_center,rgba(220,240,75,0.15)_0%,transparent_50%)] blur-3xl z-30" />
          {/* Badge */}
          <div>
            <span className="inline-flex items-center gap-4 rounded-full border border-muted-foreground bg-card px-4 py-2 text-sm text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-muted-foreground" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-muted-foreground" />
              </span>
              Disponibile per nuovi clienti
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-sans text-4xl leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl xl:text-7xl text-muted-foreground z-40">
            Trasforma il tuo corpo,{" "}
            <span className="text-foreground">riscopri te stesso</span>
          </h1>

          {/* Description */}
          <p className="font-sans lg:max-w-xl xl:max-w-2xl text-xl leading-relaxed tracking-wider text-balance text-muted-foreground z-40">
            Sono un nutrizionista e personal trainer, insieme raggiungeremo
            risultati concreti e duraturi nel tempo.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col lg:flex-row flex-wrap gap-4 pt-2 z-40">
            <TransitionButton
              className="bg-foreground hover:bg-foreground/90 text-background font-medium tracking-wide rounded-full pr-0"
              href="/contatti"
              size="lg"
            >
              <span className="flex-1 -mr-8 lg:mr-2 text-center">
                Inizia il tuo percorso
              </span>
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-foreground/25 group-hover:bg-primary-foreground/30 transition-colors shrink-0">
                <ArrowRight
                  className="w-6 h-6 text-primary-foreground"
                  strokeWidth={2}
                />
              </span>
            </TransitionButton>
            <TransitionButton
              className="bg-transparent text-foreground hover:text-muted-foreground/75 hover:bg-foreground/25 border border-foreground font-medium tracking-wide rounded-full pr-0"
              href="/metodo"
              variant="outline"
              size="lg"
            >
              <span className="flex-1 -mr-8 lg:mr-2 text-center">
                Scopri il metodo
              </span>
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-foreground/50 text-background transition-colors shrink-0">
                <BookOpen className="w-6 h-6 mt-0.5" strokeWidth={2} />
              </span>
            </TransitionButton>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative">
          {/* Image desktop */}
          <div className="relative hidden lg:block aspect-4/5 max-h-full overflow-hidden">
            <div
              className="relative w-full h-full overflow-hidden"
              style={{
                borderRadius: "60% 55% 60% 55% / 55% 65% 45% 60%",
                transform: "rotate(10deg)",
              }}
            >
              <div
                className="relative w-full h-full"
                style={{ transform: "rotate(-10deg) " }}
              >
                <Image
                  src="/studio/hero.jpg"
                  alt="Giacomo Ghione - Nutrizionista e Personal Trainer"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-foreground/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* Image mobile */}
          <div className="relative lg:hidden aspect-4/5 max-h-full overflow-hidden rounded-3xl bg-muted">
            <Image
              src="/studio/hero.jpg"
              alt="Giacomo Ghione - Nutrizionista e Personal Trainer"
              fill
              className="object-cover"
              priority
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-foreground/20 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* Servizi section */}
      <div>
        <SectionHeader
          label="Servizi"
          title="Piani su misura per i tuoi obiettivi"
          description="Che tu voglia migliorare la tua alimentazione o allenarti in modo efficace, ho il percorso giusto per te."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="group rounded-2xl bg-card p-8 transition-all duration-500 hover:shadow-lg flex flex-col gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted text-muted-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
              <ClipboardList className="h-6 w-6" strokeWidth={1.5} />
            </div>
            <h3 className="font-medium text-lg text-muted-foreground">
              Piano Alimentare
            </h3>
            <p className="text-muted-foreground/80 leading-relaxed text-sm">
              Un piano nutrizionale personalizzato basato sulle tue esigenze,
              abitudini e obiettivi specifici.
            </p>
          </div>
          <div className="group rounded-2xl bg-card p-8 transition-all duration-300 hover:shadow-lg flex flex-col gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted text-muted-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
              <Dumbbell className="h-6 w-6" strokeWidth={1.5} />
            </div>
            <h3 className="font-medium text-lg text-muted-foreground">
              Allenamento Personalizzato
            </h3>
            <p className="text-muted-foreground/80 leading-relaxed text-sm">
              Programmi di allenamento studiati per massimizzare i tuoi
              risultati nel minor tempo possibile.
            </p>
          </div>
          <div className="group rounded-2xl bg-card p-8 transition-all duration-300 hover:shadow-lg flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted text-muted-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
              <Utensils className="h-6 w-6" strokeWidth={1.5} />
            </div>
            <h3 className="font-medium text-lg text-muted-foreground">
              Visite di Controllo
            </h3>
            <p className="text-muted-foreground/80 leading-relaxed text-sm">
              Monitoraggio costante dei progressi e aggiustamenti del piano per
              garantire risultati duraturi.
            </p>
          </div>
        </div>
        <div className="flex justify-center pt-8">
          <TransitionButton
            className="bg-foreground hover:bg-foreground/90 text-background font-medium tracking-wide rounded-full pr-0"
            href="/servizi"
            size="lg"
          >
            <span className="flex-1 mr-2 text-center">
              Scopri tutti i servizi
            </span>
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-foreground/25 group-hover:bg-primary-foreground/30 transition-colors shrink-0">
              <ArrowRight
                className="w-6 h-6 text-primary-foreground"
                strokeWidth={2}
              />
            </span>
          </TransitionButton>
        </div>
      </div>

      {/* Chi Sono section */}
      <div className="relative rounded-3xl bg-foreground text-background p-8 lg:p-16 text-center flex flex-col items-center gap-6">
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(220,240,75,0.15)_0%,transparent_70%)]" />
        <SectionHeader
          title="Competenza costruita nel tempo"
          description="Anni di studio, pratica e aggiornamento continuo per offrirti il meglio della scienza della nutrizione e dell'allenamento."
          className="max-w-2xl mb-0 text-background"
        />
        <TransitionButton
          className="bg-background text-foreground hover:bg-background/90 font-medium tracking-wide rounded-full"
          href="/chi-sono"
          size="lg"
        >
          Scopri di più su di me
        </TransitionButton>
      </div>

      {/* Metodo section */}
      <div>
        <SectionHeader
          label="Il Metodo"
          title="Un percorso costruito attorno a te"
          description="Non esistono soluzioni universali. Il mio approccio si basa sulla personalizzazione totale, perché ogni persona è unica."
        />
        <div className="grid lg:grid-cols-3 gap-6">
          {[
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
          ].map((step) => (
            <FeatureCard
              key={step.title}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
        <div className="flex justify-center pt-8">
          <TransitionButton
            className="bg-foreground hover:bg-foreground/90 text-background font-medium tracking-wide rounded-full pr-0"
            href="/metodo"
            size="lg"
          >
            <span className="flex-1 mr-2 text-center">
              Scopri il metodo completo
            </span>
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-foreground/25 group-hover:bg-primary-foreground/30 transition-colors shrink-0">
              <ArrowRight
                className="w-6 h-6 text-primary-foreground"
                strokeWidth={2}
              />
            </span>
          </TransitionButton>
        </div>
      </div>

      {/* Contatti CTA section */}
      <div className="relative rounded-3xl bg-foreground text-background p-8 lg:p-16 text-center flex flex-col items-center gap-6">
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(220,240,75,0.15)_0%,transparent_70%)]" />
        <SectionHeader
          title="Pronto a iniziare il tuo percorso?"
          description="Contattami per una consulenza gratuita e scopri come posso aiutarti a raggiungere i tuoi obiettivi di salute e benessere."
          className="max-w-2xl mb-0 text-background"
        />
        <TransitionButton
          className="bg-background text-foreground hover:bg-background/90 font-medium tracking-wide rounded-full"
          href="/contatti"
          size="lg"
        >
          Contattami ora
        </TransitionButton>
      </div>
    </PageShell>
  );
}
