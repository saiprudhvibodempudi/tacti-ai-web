import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DomainsSection from "@/components/DomainsSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ResearchSection from "@/components/ResearchSection";
import SecuritySection from "@/components/SecuritySection";
import LeadershipSection from "@/components/LeadershipSection";
import CareersSection from "@/components/CareersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <DomainsSection />
      <CapabilitiesSection />
      <ResearchSection />
      <SecuritySection />
      <LeadershipSection />
      <CareersSection />
      <Footer />
    </div>
  );
};

export default Index;
