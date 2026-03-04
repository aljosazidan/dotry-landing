import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAFAF8",
};

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
  metadataBase: new URL("https://dotry.de"),
  openGraph: {
    title: "DOTRY — Virtual Try-On für Beauty-Retail",
    description:
      "Lass deine Kunden den Lippenstift anprobieren — bevor sie ihn kaufen.",
    type: "website",
    url: "https://dotry.de",
    siteName: "DOTRY",
  },
  twitter: {
    card: "summary_large_image",
    title: "DOTRY — Virtual Try-On für Beauty-Retail",
    description:
      "Lass deine Kunden den Lippenstift anprobieren — bevor sie ihn kaufen.",
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${geistSans.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
