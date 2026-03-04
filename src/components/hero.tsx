"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

function PhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto mt-16 w-full max-w-xs sm:mt-20"
    >
      {/* Glow behind phone */}
      <div className="absolute -inset-8 rounded-full bg-rose/10 blur-[60px]" />

      {/* Phone frame */}
      <div className="relative overflow-hidden rounded-[2.5rem] border border-border/80 bg-white p-2 shadow-2xl shadow-black/10">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-b from-rose-light to-white">
          {/* Screen content */}
          <div className="px-5 pb-6 pt-8">
            {/* Top bar */}
            <div className="flex items-center justify-between">
              <div className="h-2 w-14 rounded-full bg-foreground/10" />
              <div className="h-5 w-5 rounded-full bg-foreground/5" />
            </div>

            {/* Face placeholder - abstract circle */}
            <div className="mx-auto mt-6 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-rose/10 via-rose/5 to-transparent">
              <div className="h-24 w-24 rounded-full bg-gradient-to-br from-[#F5D0C5] to-[#E8B4A8]">
                {/* Lips indicator */}
                <div className="flex h-full items-end justify-center pb-5">
                  <div className="h-3 w-8 rounded-full bg-rose/60" />
                </div>
              </div>
            </div>

            {/* Color swatches */}
            <div className="mx-auto mt-5 flex items-center justify-center gap-2">
              {["#B94A6A", "#C4707E", "#8B3A4A", "#D4888F", "#9E4158"].map(
                (color, i) => (
                  <motion.div
                    key={color}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.4 + i * 0.08, duration: 0.3 }}
                    className={`h-6 w-6 rounded-full border-2 ${
                      i === 0 ? "border-foreground/30 scale-110" : "border-transparent"
                    }`}
                    style={{ backgroundColor: color }}
                  />
                )
              )}
            </div>

            {/* DOTRY it button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.5 }}
              className="mx-auto mt-5 flex h-9 w-full max-w-[160px] items-center justify-center rounded-full bg-foreground/90 text-xs font-semibold text-white"
            >
              ausprobieren
            </motion.div>

            {/* Bottom indicator */}
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-foreground/10" />
          </div>
        </div>
      </div>

      {/* Floating sparkle decorations */}
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-4 top-8 h-3 w-3 rounded-full bg-rose/30"
      />
      <motion.div
        animate={{ y: [3, -3, 3] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-3 top-1/3 h-2 w-2 rounded-full bg-rose/20"
      />
    </motion.div>
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
        {/* Desktop: two-column layout */}
        <div className="flex flex-col items-center lg:flex-row lg:items-center lg:gap-16">
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

          {/* Right: Phone mockup */}
          <div className="flex-shrink-0 lg:flex-shrink-0">
            <PhoneMockup />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
