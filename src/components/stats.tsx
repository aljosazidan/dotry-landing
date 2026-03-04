"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUpStagger, staggerContainer } from "@/lib/animations";

function AnimatedStat({
  prefix = "",
  value,
  suffix = "",
  decimal = false,
}: {
  prefix?: string;
  value: number;
  suffix?: string;
  decimal?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    const duration = 2000;

    function step(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(
        decimal
          ? parseFloat((eased * value).toFixed(1))
          : Math.floor(eased * value)
      );
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }, [isInView, value, decimal]);

  return (
    <span ref={ref}>
      {prefix}
      {decimal ? count.toFixed(1) : count}
      {suffix}
    </span>
  );
}

function BarVisual({ percent, color }: { percent: number; color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: `${percent}%` } : { width: 0 }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="h-full rounded-full"
        style={{ background: color }}
      />
    </div>
  );
}

const stats = [
  {
    prefix: "",
    value: 2.5,
    suffix: "\u00D7",
    decimal: true,
    label: "mehr Conversions bei Produktseiten mit Virtual Try-On",
    source: "Perfect Corp. AI Trends Report, 2024",
    bar: 85,
    color: "linear-gradient(90deg, #B94A6A, #D4707E)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-rose">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    prefix: "\u2212",
    value: 64,
    suffix: "%",
    label: "weniger Retouren durch bessere Kaufentscheidung",
    source: "Beauty Tech Statistics, 2025",
    bar: 64,
    color: "linear-gradient(90deg, #22C55E, #4ADE80)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-green-400">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    prefix: "",
    value: 56,
    suffix: "%",
    label: "der Kunden werden nach personalisiertem Erlebnis zu Stammkunden",
    source: "Segment State of Personalization Report, 2023",
    bar: 56,
    color: "linear-gradient(90deg, #A855F7, #C084FC)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-purple-400">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    prefix: "+",
    value: 75,
    suffix: "%",
    label: "mehr Engagement durch AR Try-On vs. klassischem Online-Shopping",
    source: "Beauty E-Commerce Statistics, 2025",
    bar: 75,
    color: "linear-gradient(90deg, #F59E0B, #FBBF24)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-amber-400">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
];

export function Stats() {
  return (
    <section
      id="ergebnisse"
      className="relative overflow-hidden bg-dark py-28 text-white sm:py-32 lg:py-40"
    >
      {/* Glows */}
      <div className="pointer-events-none absolute left-0 top-0 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose/8 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-purple-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.span
            variants={fadeUpStagger}
            className="block text-center section-label text-rose"
          >
            Ergebnisse
          </motion.span>

          <motion.h2
            variants={fadeUpStagger}
            className="mt-6 text-center font-serif text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          >
            Zahlen, die f&uuml;r sich sprechen.
          </motion.h2>

          {/* Stats 2x2 grid */}
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUpStagger}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] p-8 transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.05] lg:p-10"
              >
                <div className="flex items-start justify-between">
                  {/* Icon */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.06]">
                    {stat.icon}
                  </div>
                </div>

                {/* Number */}
                <div className="mt-6 font-serif text-5xl font-medium tracking-tight text-white sm:text-6xl lg:text-7xl">
                  <AnimatedStat
                    prefix={stat.prefix}
                    value={stat.value}
                    suffix={stat.suffix}
                    decimal={stat.decimal}
                  />
                </div>

                {/* Label */}
                <p className="mt-3 text-base leading-relaxed text-white/60 lg:text-lg">
                  {stat.label}
                </p>

                {/* Animated bar */}
                <BarVisual percent={stat.bar} color={stat.color} />

                {/* Source */}
                <p className="mt-3 text-[11px] text-white/25">
                  {stat.source}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeUpStagger}
            className="mt-8 text-center text-xs text-white/20"
          >
            * Quellen: Perfect Corp. AI Trends Report (2024) &middot; Segment
            State of Personalization Report (2023) &middot; BrandXR Research
            Report (2025) &middot; Beauty Tech Statistics (2025)
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
