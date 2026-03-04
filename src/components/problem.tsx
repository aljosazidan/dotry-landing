"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, fadeUpStagger } from "@/lib/animations";

function AnimatedCounter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    const duration = 2000;

    function step(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* Static comparison visual — all infinite animations removed, no blur */
function ComparisonVisual() {
  return (
    <div className="relative flex items-center justify-center gap-4 sm:gap-6 lg:gap-8">
      {/* LEFT: What you see online */}
      <div className="relative z-10">
        <div className="w-[150px] overflow-hidden rounded-[20px] border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] shadow-2xl shadow-black/40 sm:w-[180px]">
          <div className="flex items-center justify-between px-4 py-2">
            <span className="text-[8px] text-white/20">9:41</span>
            <div className="flex gap-1">
              <div className="h-1 w-2.5 rounded-full bg-white/15" />
              <div className="h-1 w-1 rounded-full bg-white/15" />
            </div>
          </div>
          <div className="px-3 pb-4 sm:px-4">
            <div className="relative mx-auto flex h-28 w-full items-center justify-center rounded-xl bg-gradient-to-b from-white/[0.04] to-transparent sm:h-36">
              <div className="relative">
                <div className="h-16 w-5 rounded-t-sm bg-gradient-to-b from-[#C4505A] to-[#A03A48] shadow-lg sm:h-20 sm:w-6" />
                <div className="h-10 w-5 rounded-b-md bg-gradient-to-b from-[#2A2A2A] to-[#1A1A1A] sm:h-12 sm:w-6" />
                <div className="absolute -top-0.5 left-0 right-0 h-1 rounded-full bg-white/20" />
              </div>
              <div className="absolute right-3 top-3 text-[10px] text-white/40 sm:right-4">✦</div>
            </div>
            <div className="mt-3 space-y-1.5">
              <div className="h-2 w-4/5 rounded-full bg-white/10" />
              <div className="h-1.5 w-3/5 rounded-full bg-white/5" />
            </div>
            <div className="mt-3 flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-[#C4505A] ring-2 ring-rose/30 ring-offset-1 ring-offset-[#0A0A0B]" />
              <div className="h-4 w-4 rounded-full bg-[#8B3A4A]/60" />
              <div className="h-4 w-4 rounded-full bg-[#D4888F]/60" />
              <span className="ml-auto text-[9px] font-medium text-white/25">Berry Red</span>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-white/60">€34,00</span>
              <div className="rounded-full bg-rose/20 px-2.5 py-1 text-[8px] font-bold text-rose">
                In den Warenkorb
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 text-center">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/25 sm:text-[11px]">Im Shop</span>
        </div>
        <div className="absolute -left-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/90 text-xs font-bold text-white shadow-lg shadow-emerald-500/30">✓</div>
      </div>

      {/* CENTER: Mismatch */}
      <div className="relative z-20 flex flex-col items-center gap-1">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] sm:h-14 sm:w-14">
          <span className="text-2xl font-light text-rose sm:text-3xl">≠</span>
        </div>
      </div>

      {/* RIGHT: What actually arrives */}
      <div className="relative z-10">
        <div className="w-[150px] overflow-hidden rounded-[20px] border border-red-500/20 bg-gradient-to-b from-white/[0.06] to-white/[0.02] shadow-2xl shadow-red-900/20 sm:w-[180px]">
          <div className="flex items-center justify-between px-4 py-2">
            <span className="text-[8px] text-white/20">9:41</span>
            <div className="flex gap-1">
              <div className="h-1 w-2.5 rounded-full bg-white/15" />
              <div className="h-1 w-1 rounded-full bg-white/15" />
            </div>
          </div>
          <div className="px-3 pb-4 sm:px-4">
            <div className="relative mx-auto flex h-28 w-full items-center justify-center rounded-xl bg-gradient-to-b from-[#F5D0C5]/[0.08] to-transparent sm:h-36">
              <div className="relative">
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-[#F5D0C5]/20 to-[#E8B4A8]/10 sm:h-24 sm:w-24">
                  <div className="absolute inset-1 rounded-full bg-gradient-to-br from-[#F5D0C5]/15 to-[#DEB5A8]/10">
                    <div className="flex justify-center gap-4 pt-7 sm:gap-5 sm:pt-8">
                      <div className="h-1.5 w-3 rounded-full bg-white/15" />
                      <div className="h-1.5 w-3 rounded-full bg-white/15" />
                    </div>
                    <div className="mx-auto mt-2 h-2 w-1 rounded-full bg-white/5" />
                    <div className="mx-auto mt-1.5 h-2.5 w-6 rounded-full bg-[#9E6B5A]/50 sm:w-7" />
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 text-lg">😕</div>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-[#9E6B5A] ring-2 ring-red-400/30 ring-offset-1 ring-offset-[#0A0A0B]" />
              <div className="flex flex-col">
                <span className="text-[9px] font-medium text-red-400/70">Falscher Ton</span>
                <span className="text-[8px] text-white/20">Zu warm, zu braun</span>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2 rounded-lg border border-red-400/10 bg-red-400/[0.05] px-2.5 py-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-red-400/60">
                <path d="M9 14l-4-4 4-4" />
                <path d="M5 10h11a4 4 0 0 1 0 8h-1" />
              </svg>
              <span className="text-[8px] font-medium text-red-400/60">Retoure</span>
            </div>
          </div>
        </div>
        <div className="mt-4 text-center">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/25 sm:text-[11px]">In echt</span>
        </div>
        <div className="absolute -right-2 -top-2 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white shadow-lg shadow-red-500/40">✕</div>
      </div>
    </div>
  );
}

export function Problem() {
  return (
    <section className="relative overflow-hidden bg-dark py-28 text-white sm:py-32 lg:py-40">
      <div className="pointer-events-none absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      {/* Soft ambient — no blur filters */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-[500px] w-[700px] -translate-y-1/2 rounded-full bg-rose/5 opacity-60" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[300px] w-[400px] translate-y-1/2 rounded-full bg-red-500/3 opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-24">
            <div className="flex-1 text-center lg:text-left">
              <motion.span variants={fadeUpStagger} className="section-label text-rose">
                Das Problem
              </motion.span>

              <motion.div variants={fadeUpStagger} className="mt-8">
                <span className="font-serif text-8xl font-medium tracking-tight sm:text-9xl lg:text-[10rem] lg:leading-none">
                  <AnimatedCounter target={3} suffix="×" />
                </span>
              </motion.div>

              <motion.p variants={fadeUpStagger} className="mt-3 max-w-md text-base leading-relaxed text-white/50 sm:text-lg">
                Häufiger werden Online-Käufe zurückgeschickt als Käufe aus dem stationären Handel.
              </motion.p>

              <motion.p variants={fadeUpStagger} className="mt-2 text-xs text-white/25">
                Quelle: National Retail Federation, 2024 (24.5% Online-Retourenrate vs. 8.7% im Geschäft)
              </motion.p>

              <motion.div variants={fadeUpStagger} className="mt-6 h-px w-16 bg-gradient-to-r from-rose/50 to-transparent lg:mx-0 mx-auto" />

              <motion.h2 variants={fadeUpStagger} className="mt-6 font-serif text-2xl font-medium leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                Farbe auf dem Bildschirm
                <br />
                <span className="text-white/60">ist nicht Farbe auf der Haut.</span>
              </motion.h2>

              <motion.p variants={fadeUpStagger} className="mt-6 text-lg font-medium text-rose">
                DOTRY löst genau das.
              </motion.p>
            </div>

            <motion.div variants={fadeUpStagger} className="flex-shrink-0">
              <ComparisonVisual />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
