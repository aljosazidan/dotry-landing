import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { BackedBy } from "@/components/backed-by";
import { Problem } from "@/components/problem";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { Stats } from "@/components/stats";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

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
