import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
import DomainsSection from "@/components/DomainsSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ResearchSection from "@/components/ResearchSection";
import SecuritySection from "@/components/SecuritySection";
import CollaboratorsSection from "@/components/CollaboratorsSection";
import CareersSection from "@/components/CareersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <DomainsSection />
      <CapabilitiesSection />
      <ProjectsSection />
      <ResearchSection />
      <SecuritySection />
      <CollaboratorsSection />
      <CareersSection />
      <Footer />
    </div>
  );
};

export default Index;
