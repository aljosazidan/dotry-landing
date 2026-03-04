import dynamic from "next/dynamic";
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { BackedBy } from "@/components/backed-by";

const Problem = dynamic(
  () => import("@/components/problem").then((m) => m.Problem)
);
const Features = dynamic(
  () => import("@/components/features").then((m) => m.Features)
);
const HowItWorks = dynamic(
  () => import("@/components/how-it-works").then((m) => m.HowItWorks)
);
const Stats = dynamic(
  () => import("@/components/stats").then((m) => m.Stats)
);
const CTA = dynamic(
  () => import("@/components/cta").then((m) => m.CTA)
);
const Footer = dynamic(
  () => import("@/components/footer").then((m) => m.Footer)
);

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <BackedBy />
        <Problem />
        <Features />
        <HowItWorks />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
