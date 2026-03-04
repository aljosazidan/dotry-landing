"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

/* Shared easing */
const ease = [0.22, 1, 0.36, 1] as const;

function HeroVisual() {
  return (
    <div className="relative mx-auto mt-16 w-full max-w-lg lg:mt-0 lg:max-w-none">
      <div className="relative">
        {/* ── Main layout: selfie left, result right ── */}
        <div className="flex items-end gap-4 sm:gap-5">
          {/* Selfie (before) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease }}
            className="relative w-[42%] flex-shrink-0 will-change-[opacity,transform]"
            style={{ rotate: "-2deg" }}
          >
            <div className="overflow-hidden rounded-2xl border border-border/60 bg-white shadow-xl shadow-black/[0.08] sm:rounded-3xl">
              <Image
                src="/images/selfie.webp"
                alt="Selfie einer Kundin"
                width={800}
                height={1071}
                className="h-auto w-full object-cover"
                priority
                sizes="(max-width: 640px) 160px, (max-width: 1024px) 42vw, 300px"
              />
            </div>
            {/* Label */}
            <div className="absolute -bottom-3 left-3 rounded-full border border-border/50 bg-white px-3 py-1 text-[10px] font-medium tracking-wide text-muted-foreground shadow-sm sm:px-4 sm:py-1.5 sm:text-xs">
              Dein Selfie
            </div>
          </motion.div>

          {/* Result (after) — larger, elevated */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease }}
            className="relative w-[58%] flex-shrink-0 -mb-4 will-change-[opacity,transform]"
            style={{ rotate: "1deg" }}
          >
            <div className="overflow-hidden rounded-2xl border border-border/60 bg-white shadow-2xl shadow-black/[0.12] sm:rounded-3xl">
              <Image
                src="/images/result.webp"
                alt="KI-generiertes Ergebnis mit Lippenstift"
                width={900}
                height={1205}
                className="h-auto w-full object-cover"
                priority
                sizes="(max-width: 640px) 220px, (max-width: 1024px) 58vw, 400px"
              />
            </div>
            {/* Label */}
            <div className="absolute -bottom-3 right-3 rounded-full border border-rose/20 bg-white px-3 py-1 text-[10px] font-semibold tracking-wide text-rose shadow-sm sm:px-4 sm:py-1.5 sm:text-xs">
              ✦ Dein Look
            </div>
          </motion.div>
        </div>

        {/* ── Product between the two images (no infinite animation) ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, ease }}
          className="absolute -bottom-6 left-[34%] z-10 -translate-x-1/2 will-change-[opacity,transform] sm:-bottom-8 sm:left-[36%]"
        >
          <div className="h-20 w-20 overflow-hidden rounded-2xl border border-border/60 bg-white p-2 shadow-xl shadow-black/[0.15] sm:h-24 sm:w-24 sm:rounded-3xl sm:p-2.5">
            <Image
              src="/images/product.webp"
              alt="Lippenstift Produkt"
              width={96}
              height={96}
              className="h-full w-full rounded-xl object-cover"
              loading="lazy"
              sizes="96px"
            />
          </div>
        </motion.div>

        {/* ── Before → After arrow ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          className="absolute left-[30%] top-[12%] z-10 sm:left-[32%] sm:top-[10%]"
        >
          <div className="flex items-center gap-1.5 rounded-full border border-border/40 bg-white py-1.5 pl-3 pr-2 shadow-lg sm:gap-2 sm:py-2 sm:pl-4 sm:pr-3">
            <span className="text-[9px] font-semibold uppercase tracking-widest text-muted-foreground/60 sm:text-[10px]">
              vorher
            </span>
            <svg
              width="24"
              height="10"
              viewBox="0 0 24 10"
              fill="none"
              className="text-rose sm:h-3 sm:w-7"
            >
              <path
                d="M0 5h21m0 0l-4-4m4 4l-4 4"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[9px] font-semibold uppercase tracking-widest text-rose sm:text-[10px]">
              nachher
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-6 pt-20 pb-12 lg:px-8">
      {/* Subtle background — solid opacity, no blur */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-rose/[0.04] opacity-60" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-rose/[0.03] opacity-50" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="flex flex-col items-center lg:flex-row lg:items-center lg:gap-16 xl:gap-24">
          {/* Left: Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-rose" />
                KI-gestütztes Virtual Try-On für Beauty-Retail
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease }}
              className="mt-8 font-serif text-[2.75rem] font-medium leading-[1.08] tracking-tight sm:text-6xl lg:text-[4.25rem] xl:text-7xl"
            >
              Lass deine Kunden den Lippenstift{" "}
              <span className="text-gradient-rose">anprobieren</span> —{" "}
              bevor sie ihn kaufen.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25, ease }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl lg:mx-0"
            >
              DOTRY verwandelt jede Produktseite in eine persönliche
              Beauty-Beratung. Ein Klick, ein Selfie — und der Look sitzt.{" "}
              <span className="font-medium text-foreground/80">
                Weniger Retouren. Mehr Verkäufe.
              </span>{" "}
              Kunden, die wiederkommen.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
            >
              <a href="https://cal.com/aljosa-zidan-wozbsk/dotry" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="group h-12 rounded-full bg-rose px-8 text-base text-white transition-all duration-300 hover:bg-rose/90 hover:shadow-xl hover:shadow-rose/20 sm:h-14 sm:px-10 sm:text-lg"
                >
                  Live-Demo anfragen
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </a>
            </motion.div>

            {/* Trust line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.45 }}
              className="mt-5 text-sm text-muted-foreground"
            >
              Kostenlose Pilotphase · Keine IT nötig
            </motion.p>
          </div>

          {/* Right: Visual showcase */}
          <div className="w-full flex-shrink-0 lg:w-[48%] xl:w-[45%]">
            <HeroVisual />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
