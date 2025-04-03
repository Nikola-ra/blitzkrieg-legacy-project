
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToIntro = () => {
    const introSection = document.getElementById("intro");
    if (introSection) {
      introSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80')",
        }}
      ></div>
      
      <div className="container mx-auto px-6 relative z-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          La Guerra Lampo di Hitler
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto animate-slide-in">
          Dalla propaganda al potere: il cammino verso la guerra lampo che cambiò il volto dell'Europa
        </p>
        <button
          onClick={scrollToIntro}
          className="mt-8 animate-bounce bg-history-accent hover:bg-history-accent/80 text-white py-3 px-8 rounded-md flex items-center mx-auto transition-colors"
        >
          Scopri di più
          <ArrowDown className="ml-2 h-5 w-5" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
