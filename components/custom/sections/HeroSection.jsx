import Image from "next/image";
import CTAButton from "@/components/custom/ui/CTAButton";
import { ArrowRight, BookOpen } from "lucide-react";

export default function HeroSection() {
  return (
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
        <h1 className="font-sans leading-tight tracking-tight text-balance font-medium text-5xl lg:text-6xl xl:text-7xl text-muted-foreground z-40">
          Trasforma il tuo corpo,{" "}
          <span className="text-foreground">riscopri te stesso</span>
        </h1>

        {/* Description */}
        <p className="font-sans text-lg leading-relaxed text-balance tracking-wide font-medium text-muted-foreground z-40">
          Sono un nutrizionista e personal trainer, insieme raggiungeremo
          risultati concreti e duraturi nel tempo.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col lg:flex-row flex-wrap gap-4 z-40 mt-2">
          <CTAButton
            label="Inizia il tuo percorso"
            href="/contatti"
            icon={ArrowRight}
            variant="primary"
            classNameLabel="-mr-6! lg:mr-2!"
          />
          <CTAButton
            label="Scopri il metodo"
            href="/metodo"
            icon={BookOpen}
            variant="outline"
            classNameLabel="-mr-6! lg:mr-2!"
          />
        </div>
      </div>

      {/* Right: Image */}
      <div className="relative">
        {/* Desktop */}
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
              style={{ transform: "rotate(-10deg)" }}
            >
              <Image
                src="/studio/hero.jpg"
                alt="Giacomo Ghione - Nutrizionista e Personal Trainer"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-foreground/20 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="relative lg:hidden aspect-4/5 max-h-full overflow-hidden rounded-3xl bg-muted">
          <Image
            src="/studio/hero.jpg"
            alt="Giacomo Ghione - Nutrizionista e Personal Trainer"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-foreground/20 via-transparent to-transparent" />
        </div>
      </div>
    </div>
  );
}
