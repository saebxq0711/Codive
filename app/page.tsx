"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

export default function HomePage() {
  const [language, setLanguage] = useState<"es" | "en">("es");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLanguageChange = (lang: "es" | "en") => {
    setLanguage(lang);
  };

  return (
    <div className="min-h-screen">
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <main>
        <HeroSection language={language} />
        <AboutSection language={language} />
        <ServicesSection language={language} />
        <ProjectsSection language={language} />
        <ContactSection language={language} />
      </main>
      <Footer language={language} />
      <Toaster />
    </div>
  );
}
