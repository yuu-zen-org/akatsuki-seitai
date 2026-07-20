import {
  generateLocalBusinessJsonLd,
  generateOrganizationJsonLd,
  generateWebSiteJsonLd,
} from "@/lib/json-ld";
import { JsonLd } from "@/components/ui/JsonLd";
import { BackgroundBlurs } from "@/components/ui/BackgroundBlurs";
import { HeroSection } from "@/components/sections/HeroSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { PriceSection } from "@/components/sections/PriceSection";
import { FlowSection } from "@/components/sections/FlowSection";
import { VoiceSection } from "@/components/sections/VoiceSection";
import { RecommendSection } from "@/components/sections/RecommendSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { AccessSection } from "@/components/sections/AccessSection";

export default function Home() {
  return (
    <>
      <JsonLd data={generateLocalBusinessJsonLd()} />
      <JsonLd data={generateOrganizationJsonLd()} />
      <JsonLd data={generateWebSiteJsonLd()} />
      <main className="page-bg">
        <BackgroundBlurs />
        <div className="relative z-[2]">
          <HeroSection />
          <PhilosophySection />
          <ProblemSection />
          <PriceSection />
          <FlowSection />
          <VoiceSection />
          <RecommendSection />
          <FAQSection />
          <AccessSection />
        </div>
      </main>
    </>
  );
}
