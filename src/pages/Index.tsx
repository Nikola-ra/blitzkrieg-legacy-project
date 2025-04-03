
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import AscesaSection from "@/components/AscesaSection";
import StrategiaSection from "@/components/StrategiaSection";
import ImpattoSection from "@/components/ImpattoSection";
import MediaSection from "@/components/MediaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-history-light">
      <NavBar />
      <HeroSection />
      <IntroSection />
      <AscesaSection />
      <StrategiaSection />
      <ImpattoSection />
      <MediaSection />
      <Footer />
    </div>
  );
};

export default Index;
