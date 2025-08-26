"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

interface FooterProps {
  language: "es" | "en";
}

const translations = {
  es: {
    description:
      "Empresa especializada en desarrollo de software a medida, páginas web y aplicaciones responsivas.",
    quickLinks: "Enlaces Rápidos",
    services: "Servicios",
    contact: "Contacto",
    social: "Redes Sociales",
    rights: "Todos los derechos reservados.",
    links: {
      home: "Inicio",
      about: "Nosotros",
      services: "Servicios",
      projects: "Proyectos",
      contact: "Contacto",
    },
    servicesList: {
      software: "Software a Medida",
      web: "Páginas Web",
      responsive: "Sitios Responsivos",
      systems: "Sistemas de Gestión",
    },
  },
  en: {
    description:
      "Company specialized in custom software development, web pages and responsive applications.",
    quickLinks: "Quick Links",
    services: "Services",
    contact: "Contact",
    social: "Social Media",
    rights: "All rights reserved.",
    links: {
      home: "Home",
      about: "About",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
    },
    servicesList: {
      software: "Custom Software",
      web: "Web Pages",
      responsive: "Responsive Sites",
      systems: "Management Systems",
    },
  },
};

export function Footer({ language }: FooterProps) {
  const t = translations[language];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-800 text-slate-300 py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative w-16 h-16 rounded-full overflow-hidden bg-primary/20 p-2 hover-lift">
                <Image
                  src="/images/codive-logo.png"
                  alt="Codive Logo"
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <span className="text-2xl font-serif font-bold text-slate-100">
                Codive
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm">
              {t.description}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/codive-tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-primary hover:text-primary-foreground transition-all duration-500 cursor-pointer hover-glow rounded-full w-12 h-12"
                >
                  <i className="fab fa-linkedin-in text-lg text-primary hover:text-white"></i>
                </Button>
              </a>
              <a
                href="https://www.facebook.com/codivetech"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-primary hover:text-primary-foreground transition-all duration-500 cursor-pointer hover-glow rounded-full w-12 h-12"
                >
                  <i className="fab fa-facebook-f text-lg text-primary hover:text-white"></i>
                </Button>
              </a>
              <a href="">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-primary hover:text-primary-foreground transition-all duration-500 cursor-pointer hover-glow rounded-full w-12 h-12"
                >
                  <i className="fab fa-x-twitter text-lg text-primary hover:text-white"></i>
                </Button>
              </a>
              <a
                href="https://www.instagram.com/codive.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-primary hover:text-primary-foreground transition-all duration-500 cursor-pointer hover-glow rounded-full w-12 h-12"
                >
                  <i className="fab fa-instagram text-lg text-primary hover:text-white"></i>
                </Button>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-serif font-semibold text-primary">
              {t.quickLinks}
            </h3>
            <ul className="space-y-3">
              {[
                { key: "home", label: t.links.home },
                { key: "about", label: t.links.about },
                { key: "services", label: t.links.services },
                { key: "projects", label: t.links.projects },
                { key: "contact", label: t.links.contact },
              ].map((item) => (
                <li key={item.key}>
                  <button
                    onClick={() => scrollToSection(item.key)}
                    className="text-slate-400 hover:text-primary transition-all duration-500 cursor-pointer hover:translate-x-2 block"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-serif font-semibold text-primary">
              {t.services}
            </h3>
            <ul className="space-y-3">
              <li className="text-slate-400 flex items-center space-x-2">
                <i className="fas fa-code text-primary"></i>
                <span>{t.servicesList.software}</span>
              </li>
              <li className="text-slate-400 flex items-center space-x-2">
                <i className="fas fa-globe text-primary"></i>
                <span>{t.servicesList.web}</span>
              </li>
              <li className="text-slate-400 flex items-center space-x-2">
                <i className="fas fa-mobile-alt text-primary"></i>
                <span>{t.servicesList.responsive}</span>
              </li>
              <li className="text-slate-400 flex items-center space-x-2">
                <i className="fas fa-cogs text-primary"></i>
                <span>{t.servicesList.systems}</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-serif font-semibold text-primary">
              {t.contact}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <i className="fas fa-envelope text-primary"></i>
                <a
                  href="mailto:codive.dev@outlook.com"
                  className="text-slate-400 hover:text-primary transition-colors cursor-pointer"
                >
                  codive.dev@outlook.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fab fa-whatsapp text-primary"></i>
                <a
                  href="https://wa.me/573197666683"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-primary transition-colors cursor-pointer"
                >
                  +57 (319) 766-6683
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-map-marker-alt text-primary"></i>
                <p className="text-slate-400">Ibagué, Colombia</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-600 mt-16 pt-8 text-center">
          <p className="text-slate-500">© 2025 Codive. {t.rights}</p>
        </div>
      </div>
    </footer>
  );
}
