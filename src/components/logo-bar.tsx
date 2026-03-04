"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const brands = [
  "Douglas",
  "Sephora",
  "Notino",
  "Flaconi",
  "dm Beauty",
  "Rossmann",
];

export function LogoBar() {
  return (
    <section className="relative border-y border-border/50 bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground"
        >
          Gebaut f&uuml;r den modernen Beauty-Retail
        </motion.p>
      </div>

      {/* Scrolling logos */}
      <div className="relative mt-8 overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="animate-scroll-left flex w-max items-center gap-16">
          {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="whitespace-nowrap text-xl font-semibold tracking-tight text-foreground/20 transition-colors duration-500 hover:text-foreground/40 sm:text-2xl"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
