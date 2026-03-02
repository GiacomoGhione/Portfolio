import { Geist, Geist_Mono } from "next/font/google";
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
  description: "Giacomo Ghione, nutrizionista e personal trainer. Piani alimentari e schede di allenamento personalizzate ad Asti e online.",
  keywords: [
    "nutrizionista",
    "personal trainer",
    "dieta",
    "allenamento",
    "Giacomo Ghione",
    "nutrizionista sportivo",
    "preparazione atletica",
    "Asti",
    "Castagnole delle Lanze",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
