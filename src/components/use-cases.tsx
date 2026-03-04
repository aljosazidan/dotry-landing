"use client";

import { motion } from "framer-motion";
import { fadeUpStagger, staggerContainer } from "@/lib/animations";

const useCases = [
  {
    emoji: "\uD83D\uDC84",
    name: "Lippenstift & Gloss",
    status: "Vollst\u00E4ndig verf\u00FCgbar \u00B7 Heute starten",
    available: true,
  },
  {
    emoji: "\uD83C\uDF38",
    name: "Blush & Bronzer",
    status: "In Entwicklung \u00B7 Q2 2025",
    available: false,
  },
  {
    emoji: "\uD83D\uDC85",
    name: "Nagellack",
    status: "In Entwicklung \u00B7 Q3 2025",
    available: false,
  },
  {
    emoji: "\uD83D\uDC41\uFE0F",
    name: "Eyeliner & Lidschatten",
    status: "Roadmap \u00B7 Q4 2025",
    available: false,
  },
  {
    emoji: "\uD83E\uDDF4",
    name: "Foundation-T\u00F6ne",
    status: "Roadmap \u00B7 2026",
    available: false,
  },
];

export function UseCases() {
  return (
    <section className="relative py-28 sm:py-36 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <motion.span
              variants={fadeUpStagger}
              className="section-label text-rose"
            >
              Anwendungen
            </motion.span>
            <motion.h2
              variants={fadeUpStagger}
              className="mt-6 font-serif text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl"
            >
              Mehr als nur Lippenstift.
            </motion.h2>
            <motion.p
              variants={fadeUpStagger}
              className="mt-4 text-lg text-muted-foreground"
            >
              Heute Lippen. Morgen das gesamte Make-up-Spektrum.
            </motion.p>
          </div>

          {/* Use case items */}
          <div className="mx-auto mt-16 max-w-2xl space-y-3">
            {useCases.map((item, i) => (
              <motion.div
                key={item.name}
                variants={fadeUpStagger}
                className={`group relative flex items-center gap-5 rounded-xl border p-5 transition-all duration-300 sm:p-6 ${
                  item.available
                    ? "border-rose/20 bg-rose-light shadow-sm hover:shadow-md hover:shadow-rose/5"
                    : "border-border/60 bg-white hover:border-border"
                }`}
              >
                <span className="text-2xl">{item.emoji}</span>
                <div className="flex-1">
                  <h3
                    className={`text-base font-semibold tracking-tight sm:text-lg ${
                      item.available ? "text-foreground" : "text-foreground/60"
                    }`}
                  >
                    {item.name}
                  </h3>
                  <p
                    className={`mt-0.5 text-sm ${
                      item.available ? "font-medium text-rose" : "text-muted-foreground"
                    }`}
                  >
                    {item.status}
                  </p>
                </div>
                {item.available && (
                  <div className="flex h-8 items-center rounded-full bg-rose/10 px-3">
                    <span className="text-xs font-semibold text-rose">Live</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
