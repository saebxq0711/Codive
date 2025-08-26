"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Code,
  Globe,
  Smartphone,
  Database,
  Cloud,
  Palette,
  ArrowRight,
} from "lucide-react";

interface ServicesSectionProps {
  language: "es" | "en";
}

const translations = {
  es: {
    title: "Nuestros Servicios",
    subtitle: "Soluciones tecnológicas completas para tu negocio",
    cta: "Solicitar Cotización",
    services: [
      {
        icon: Code,
        title: "Desarrollo de Software a Medida",
        description:
          "Creamos aplicaciones personalizadas que se adaptan perfectamente a las necesidades específicas de tu negocio, utilizando las tecnologías más avanzadas.",
        features: [
          "Análisis de requerimientos",
          "Arquitectura escalable",
          "Integración con sistemas existentes",
          "Soporte y mantenimiento",
        ],
      },
      {
        icon: Globe,
        title: "Páginas Web Profesionales",
        description:
          "Diseñamos y desarrollamos sitios web modernos, atractivos y funcionales que representan tu marca de manera profesional en el mundo digital.",
        features: [
          "Diseño responsive",
          "SEO optimizado",
          "CMS personalizado",
          "Integración con redes sociales",
        ],
      },
      {
        icon: Database,
        title: "Sistemas de Gestión",
        description:
          "Implementamos sistemas ERP, CRM y de gestión empresarial que automatizan procesos y mejoran la eficiencia operativa de tu organización.",
        features: [
          "ERP personalizado",
          "CRM integrado",
          "Reportes avanzados",
          "Dashboard ejecutivo",
        ],
      },
      {
        icon: Palette,
        title: "Diseño UI/UX",
        description:
          "Creamos interfaces intuitivas y experiencias de usuario excepcionales que aumentan la satisfacción del cliente y las conversiones.",
        features: [
          "Prototipado",
          "Testing de usabilidad",
          "Diseño responsive",
          "Guías de estilo",
        ],
      },
    ],
  },
  en: {
    title: "Our Services",
    subtitle: "Complete technological solutions for your business",
    cta: "Request Quote",
    services: [
      {
        icon: Code,
        title: "Custom Software Development",
        description:
          "We create personalized applications that perfectly adapt to the specific needs of your business, using the most advanced technologies.",
        features: [
          "Requirements analysis",
          "Scalable architecture",
          "Integration with existing systems",
          "Support and maintenance",
        ],
      },
      {
        icon: Globe,
        title: "Professional Websites",
        description:
          "We design and develop modern, attractive and functional websites that represent your brand professionally in the digital world.",
        features: [
          "Responsive design",
          "SEO optimized",
          "Custom CMS",
          "Social media integration",
        ],
      },
      {
        icon: Database,
        title: "Management Systems",
        description:
          "We implement ERP, CRM and business management systems that automate processes and improve the operational efficiency of your organization.",
        features: [
          "Custom ERP",
          "Integrated CRM",
          "Advanced reports",
          "Executive dashboard",
        ],
      },
      {
        icon: Palette,
        title: "UI/UX Design",
        description:
          "We create intuitive interfaces and exceptional user experiences that increase customer satisfaction and conversions.",
        features: [
          "Prototyping",
          "Usability testing",
          "Responsive design",
          "Style guides",
        ],
      },
    ],
  },
};

export function ServicesSection({ language }: ServicesSectionProps) {
  const t = translations[language];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up group hover:bg-muted/30 dark:hover:bg-muted/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 rounded-lg p-3 mr-4 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-serif font-semibold text-card-foreground group-hover:text-foreground">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground/80">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-muted-foreground group-hover:text-foreground/70"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full transition-all duration-300 cursor-pointer
                      bg-transparent border-primary/30 text-foreground
                      hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-md
                      group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary group-hover:shadow-md
                      dark:border-primary/40 dark:text-foreground
                      dark:hover:bg-primary dark:hover:text-primary-foreground dark:hover:border-primary
                      dark:group-hover:bg-primary dark:group-hover:text-primary-foreground dark:group-hover:border-primary"
                    onClick={scrollToContact}
                  >
                    {t.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
