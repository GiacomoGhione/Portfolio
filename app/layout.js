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
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "Giacomo Ghione",
    title: "Giacomo Ghione | Nutrizionista e Personal Trainer",
    description:
      "Piani alimentari e schede di allenamento personalizzate ad Asti e online.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <script
          type="text/javascript"
          src="https://embeds.iubenda.com/widgets/31484d2b-7ab8-445f-9cad-0c0fce8a90bd.js"
        ></script>
        <meta
          name="google-site-verification"
          content="h3TyqNDFO07BLkgY5EdmHtBkhvl4QfZKdj0QcfPNeKo"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
        <script
          type="text/javascript"
          src="https://cdn.iubenda.com/iubenda.js"
        />
      </body>
    </html>
  );
}
