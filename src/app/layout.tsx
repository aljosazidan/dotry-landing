import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "DOTRY — KI-gestütztes Virtual Try-On für Beauty-Retail",
  description:
    "DOTRY verwandelt jede Produktseite in eine persönliche Beauty-Beratung. Ein Klick, ein Selfie — und der Look sitzt. Weniger Retouren. Mehr Verkäufe.",
  keywords: [
    "Virtual Try-On",
    "Beauty Tech",
    "AR Makeup",
    "Lippenstift Try-On",
    "Beauty Retail",
    "KI Beauty",
  ],
  openGraph: {
    title: "DOTRY — Virtual Try-On für Beauty-Retail",
    description:
      "Lass deine Kunden den Lippenstift anprobieren — bevor sie ihn kaufen.",
    type: "website",
    url: "https://dotry.de",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
