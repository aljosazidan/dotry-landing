"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { fadeUpStagger, staggerContainer } from "@/lib/animations";

const trustItems = [
  "DSGVO-konform",
  "Keine App n\u00F6tig",
  "48h Integration",
  "Pilotphase ohne Risiko",
];

export function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-border/50 bg-white py-28 sm:py-36 lg:py-44">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span
            variants={fadeUpStagger}
            className="section-label text-rose"
          >
            Bereit loszulegen?
          </motion.span>

          <motion.h2
            variants={fadeUpStagger}
            className="mt-6 font-serif text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Sieh, wie DOTRY auf deiner Produktseite aussieht.
          </motion.h2>

          <motion.p
            variants={fadeUpStagger}
            className="mt-6 text-lg text-muted-foreground"
          >
            30 Minuten. Deine Produkte. Kostenlos und unverbindlich.
          </motion.p>

          <motion.div variants={fadeUpStagger} className="mt-10">
            <Button
              size="lg"
              className="group h-14 rounded-full bg-rose px-10 text-lg text-white transition-all duration-300 hover:bg-rose/90 hover:shadow-xl hover:shadow-rose/25"
            >
              Live-Demo anfragen
              <ArrowRight className="ml-1 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Trust items */}
          <motion.div
            variants={fadeUpStagger}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
          >
            {trustItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <Check className="h-4 w-4 text-rose" />
                {item}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
