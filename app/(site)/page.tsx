import React from "react";
import HeroSection from "@/components/home/HeroSection";
import GlobeSection from "@/components/home/GlobeSection";
import WaysToGoSection from "@/components/home/WaysToGoSection";
import DestinationsSection from "@/components/home/DestinationsSection";
import ProcessSection from "@/components/home/ProcessSection";
import ToolsSection from "@/components/home/ToolsSection";
import BeyondVisaSection from "@/components/home/BeyondVisaSection";
import ProofStatsSection from "@/components/home/ProofStatsSection";
import StoriesSection from "@/components/home/StoriesSection";
import WhyTravelSoloSection from "@/components/home/WhyTravelSoloSection";
import HomeFaqSection from "@/components/home/HomeFaqSection";
import CtaBanner from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <GlobeSection />
      <WaysToGoSection />
      <DestinationsSection />
      <ProcessSection />
      <ToolsSection />
      <BeyondVisaSection />
      <ProofStatsSection />
      <StoriesSection />
      <WhyTravelSoloSection />
      <HomeFaqSection />
      <CtaBanner />
    </>
  );
}
