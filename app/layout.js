import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Providers from "@/components/custom/layout/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Giacomo Ghione | Nutrizionista e Personal Trainer",
  description:
    "Giacomo Ghione, nutrizionista e personal trainer. Piani alimentari e schede di allenamento personalizzate ad Asti e online.",
  keywords: [
    "nutrizionista",
    "personal trainer",
    "dieta",
    "allenamento",
    "nutrizionista sportivo",
    "palestra",
    "preparazione atletica",
    "Asti",
    "Alba",
    "Castagnole delle Lanze",
    "Giacomo Ghione",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <meta
        name="google-site-verification"
        content="h3TyqNDFO07BLkgY5EdmHtBkhvl4QfZKdj0QcfPNeKo"
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
        <Script
          src="https://embeds.iubenda.com/widgets/740a1d1d-f3db-4c4a-93b8-1524eff1e7d7.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
