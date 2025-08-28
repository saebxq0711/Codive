"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  language: "es" | "en";
  onLanguageChange: (lang: "es" | "en") => void;
}

const translations = {
  es: {
    home: "Inicio",
    about: "Nosotros",
    services: "Servicios",
    projects: "Proyectos",
    contact: "Contacto",
  },
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    projects: "Projects",
    contact: "Contact",
  },
};

export function Header({ language, onLanguageChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl shadow-lg border-b border-border/50"
          : "md:bg-transparent md:backdrop-blur-none bg-background/95 backdrop-blur-lg md:shadow-none shadow-sm md:border-none border-b border-border/30"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center space-x-3 animate-fade-in cursor-pointer group"
            onClick={() => scrollToSection("home")}
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 p-1 group-hover:scale-105 transition-transform">
              <Image
                src="/images/codive-logo.png"
                alt="Codive Logo"
                fill
                className="object-contain rounded-full"
              />
            </div>
            <span className="text-2xl font-sans font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
              Codive
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { key: "home", label: t.home },
              { key: "about", label: t.about },
              { key: "services", label: t.services },
              { key: "projects", label: t.projects },
              { key: "contact", label: t.contact },
            ].map((item, index) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.key)}
                className="relative text-foreground hover:text-primary transition-all duration-500 font-medium text-sm uppercase tracking-wide cursor-pointer group animate-fade-in glow-text"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-500 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-3">
            <LanguageSwitcher
              onLanguageChange={onLanguageChange}
              currentLanguage={language}
            />
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden hover:bg-primary/10 cursor-pointer transition-all duration-500 hover-glow"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative w-5 h-5">
                <Menu
                  className={`h-5 w-5 absolute transition-all duration-500 ${
                    isMenuOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
                  }`}
                />
                <X
                  className={`h-5 w-5 absolute transition-all duration-500 ${
                    isMenuOpen
                      ? "opacity-100 rotate-0"
                      : "opacity-0 -rotate-180"
                  }`}
                />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-700 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="mt-4 pb-4 border-t border-border/50">
            <div className="flex flex-col space-y-4 pt-4">
              {[
                { key: "home", label: t.home },
                { key: "about", label: t.about },
                { key: "services", label: t.services },
                { key: "projects", label: t.projects },
                { key: "contact", label: t.contact },
              ].map((item, index) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.key)}
                  className="text-left text-foreground hover:text-primary transition-all duration-500 font-medium py-2 px-4 rounded-lg hover:bg-primary/5 cursor-pointer animate-slide-in-left hover-glow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
