"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

function HeroVisual() {
  return (
    <div className="relative mx-auto mt-16 w-full max-w-lg lg:mt-0 lg:max-w-none">
      {/* Glow */}
      <div className="absolute -inset-12 rounded-full bg-rose/[0.06] blur-[80px]" />

      <div className="relative">
        {/* ── Main layout: selfie left, result right ── */}
        <div className="flex items-end gap-4 sm:gap-5">
          {/* Selfie (before) */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotate: -3 }}
            animate={{ opacity: 1, x: 0, rotate: -2 }}
            transition={{ duration: 0.9, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-[42%] flex-shrink-0"
          >
            <div className="overflow-hidden rounded-2xl border border-border/60 bg-white shadow-xl shadow-black/[0.08] sm:rounded-3xl">
              <Image
                src="/images/selfie.jpeg"
                alt="Selfie einer Kundin"
                width={400}
                height={500}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="absolute -bottom-3 left-3 rounded-full border border-border/50 bg-white/90 px-3 py-1 text-[10px] font-medium tracking-wide text-muted-foreground shadow-sm backdrop-blur-sm sm:px-4 sm:py-1.5 sm:text-xs"
            >
              Dein Selfie
            </motion.div>
          </motion.div>

          {/* Result (after) — larger, elevated */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotate: 3 }}
            animate={{ opacity: 1, x: 0, rotate: 1 }}
            transition={{ duration: 0.9, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-[58%] flex-shrink-0 -mb-4"
          >
            <div className="overflow-hidden rounded-2xl border border-border/60 bg-white shadow-2xl shadow-black/[0.12] sm:rounded-3xl">
              <Image
                src="/images/result.png"
                alt="KI-generiertes Ergebnis mit Lippenstift"
                width={500}
                height={600}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.5 }}
              className="absolute -bottom-3 right-3 rounded-full border border-rose/20 bg-white/90 px-3 py-1 text-[10px] font-semibold tracking-wide text-rose shadow-sm backdrop-blur-sm sm:px-4 sm:py-1.5 sm:text-xs"
            >
              ✦ Dein Look
            </motion.div>
          </motion.div>
        </div>

        {/* ── Product floating between the two images ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -bottom-6 left-[34%] z-10 -translate-x-1/2 sm:-bottom-8 sm:left-[36%]"
        >
          <motion.div
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="h-20 w-20 overflow-hidden rounded-2xl border border-border/60 bg-white p-2 shadow-xl shadow-black/[0.15] sm:h-24 sm:w-24 sm:rounded-3xl sm:p-2.5">
              <Image
                src="/images/product.jpg"
                alt="Lippenstift Produkt"
                width={80}
                height={80}
                className="h-full w-full rounded-xl object-cover"
                priority
              />
            </div>
          </motion.div>
        </motion.div>

        {/* ── Connecting visual: subtle arrow/plus ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="absolute left-[18%] top-[15%] z-10"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/90 shadow-md backdrop-blur-sm sm:h-8 sm:w-8">
            <span className="text-xs font-medium text-muted-foreground sm:text-sm">+</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-6 pt-20 pb-12 lg:px-8">
      {/* Subtle background gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-rose/[0.04] blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-rose/[0.03] blur-[100px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="flex flex-col items-center lg:flex-row lg:items-center lg:gap-16 xl:gap-24">
          {/* Left: Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-rose animate-pulse" />
                KI-gest&uuml;tztes Virtual Try-On f&uuml;r Beauty-Retail
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 font-serif text-[2.75rem] font-medium leading-[1.08] tracking-tight sm:text-6xl lg:text-[4.25rem] xl:text-7xl"
            >
              Lass deine Kunden den Lippenstift{" "}
              <span className="text-gradient-rose">anprobieren</span> —{" "}
              bevor sie ihn kaufen.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl lg:mx-0"
            >
              DOTRY verwandelt jede Produktseite in eine pers&ouml;nliche
              Beauty-Beratung. Ein Klick, ein Selfie — und der Look sitzt.{" "}
              <span className="font-medium text-foreground/80">
                Weniger Retouren. Mehr Verk&auml;ufe.
              </span>{" "}
              Kunden, die wiederkommen.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
            >
              <Button
                size="lg"
                className="group h-12 rounded-full bg-rose px-8 text-base text-white transition-all duration-300 hover:bg-rose/90 hover:shadow-xl hover:shadow-rose/20 sm:h-14 sm:px-10 sm:text-lg"
              >
                Live-Demo anfragen
                <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </motion.div>

            {/* Trust line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="mt-5 text-sm text-muted-foreground"
            >
              Kostenlose Pilotphase &middot; Keine IT n&ouml;tig
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
