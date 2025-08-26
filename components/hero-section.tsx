"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, Rocket } from "lucide-react";
import Image from "next/image";

interface HeroSectionProps {
  language: "es" | "en";
}

const translations = {
  es: {
    badge: "Desarrollo Web Profesional",
    title: "Creamos Experiencias",
    titleHighlight: "Web Excepcionales",
    subtitle:
      "Desarrollamos sitios web modernos, responsivos y optimizados que transforman tu presencia digital y potencian tu negocio.",
    cta: "Iniciar Proyecto",
    ctaSecondary: "Ver Trabajos",
    features: [
      {
        icon: "fas fa-laptop-code",
        title: "Desarrollo Web",
        desc: "Sitios responsivos y modernos",
      },
      {
        icon: "fas fa-paint-brush",
        title: "Diseño UX/UI",
        desc: "Interfaces intuitivas y atractivas",
      },
      {
        icon: "fas fa-rocket",
        title: "Optimización",
        desc: "Rendimiento y SEO avanzado",
      },
    ],
    stats: [
      { number: "100%", label: "Satisfacción" },
      { number: "", label: "" },
      { number: "24/7", label: "Soporte" },
    ],
  },
  en: {
    badge: "Professional Web Development",
    title: "We Create Exceptional",
    titleHighlight: "Web Experiences",
    subtitle:
      "We develop modern, responsive and optimized websites that transform your digital presence and boost your business.",
    cta: "Start Project",
    ctaSecondary: "View Work",
    features: [
      {
        icon: "fas fa-laptop-code",
        title: "Web Development",
        desc: "Responsive and modern sites",
      },
      {
        icon: "fas fa-paint-brush",
        title: "UX/UI Design",
        desc: "Intuitive and attractive interfaces",
      },
      {
        icon: "fas fa-rocket",
        title: "Optimization",
        desc: "Advanced performance and SEO",
      },
    ],
    stats: [
      { number: "100%", label: "Satisfaction" },
      { number: "", label: "" },
      { number: "24/7", label: "Support" },
    ],
  },
};

export function HeroSection({ language }: HeroSectionProps) {
  const t = translations[language];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background pt-20"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#04BF6808_1px,transparent_1px),linear-gradient(to_bottom,#04BF6808_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-secondary/5 rounded-full blur-xl animate-float-delayed" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 text-primary px-4 py-2 rounded-full text-sm font-medium animate-fade-in-up hover:bg-primary/12 transition-all duration-300">
              <i className="fas fa-code text-primary text-xs"></i>
              {t.badge}
            </div>

            {/* Main heading */}
            <div
              className="space-y-6 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold leading-tight tracking-tight">
                <span className="text-foreground block mb-2">{t.title}</span>
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient-shift">
                  {t.titleHighlight}
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                {t.subtitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer group"
              >
                <Rocket className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                {t.cta}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={scrollToProjects}
                className="border-2 border-primary/20 text-primary hover:bg-primary hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer group bg-transparent"
              >
                <Palette className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
                {t.ctaSecondary}
              </Button>
            </div>

            {/* Features Grid */}
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              {t.features.map((feature, index) => (
                <div key={index} className="group">
                  <div className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-xl p-6 hover:bg-card/50 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <div className="text-center space-y-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                        <i
                          className={`${feature.icon} text-primary text-xl group-hover:scale-110 transition-transform`}
                        ></i>
                      </div>
                      <h3 className="font-semibold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Logo */}
            <div
              className="py-8 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="relative inline-block group">
                <Image
                  src="/images/codive-logo.png"
                  alt="Codive Logo"
                  width={200}
                  height={80}
                  className="rounded-xl shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              {t.stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="space-y-2">
                    <div className="text-3xl md:text-4xl font-bold text-primary group-hover:scale-110 transition-transform">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="flex justify-center mt-16 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          ></div>
        </div>
      </div>
    </section>
  );
}
