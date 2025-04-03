
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4 px-6",
        scrolled
          ? "bg-history-dark/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">La Guerra Lampo</h1>
        <div className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => scrollToSection("intro")}
            className="text-white hover:text-history-accent transition-colors"
          >
            Introduzione
          </button>
          <button
            onClick={() => scrollToSection("ascesa")}
            className="text-white hover:text-history-accent transition-colors"
          >
            Ascesa di Hitler
          </button>
          <button
            onClick={() => scrollToSection("strategia")}
            className="text-white hover:text-history-accent transition-colors"
          >
            Strategia Militare
          </button>
          <button
            onClick={() => scrollToSection("impatto")}
            className="text-white hover:text-history-accent transition-colors"
          >
            Impatto
          </button>
          <button
            onClick={() => scrollToSection("media")}
            className="text-white hover:text-history-accent transition-colors"
          >
            Galleria
          </button>
        </div>
        <button className="md:hidden text-white text-lg">☰</button>
      </div>
    </nav>
  );
};

export default NavBar;
