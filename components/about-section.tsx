"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, History, Users, Award, Lightbulb } from "lucide-react";

interface AboutSectionProps {
  language: "es" | "en";
}

const translations = {
  es: {
    title: "Sobre Nosotros",
    subtitle: "Conoce nuestra historia, misión y visión",
    mission: {
      title: "Nuestra Misión",
      content:
        "Transformar ideas en soluciones tecnológicas innovadoras que impulsen el crecimiento y éxito de nuestros clientes, proporcionando software de alta calidad, páginas web responsivas y aplicaciones personalizadas que superen las expectativas del mercado.",
    },
    vision: {
      title: "Nuestra Visión",
      content:
        "Ser la empresa líder en desarrollo de software a medida en la región, reconocida por nuestra excelencia técnica, innovación constante y compromiso con la satisfacción del cliente, estableciendo relaciones duraderas basadas en la confianza y resultados excepcionales.",
    },
    history: {
      title: "Nuestra Historia",
      content:
        "Codive nació de la pasión por la tecnología y el deseo de ayudar a las empresas a digitalizar sus procesos. Fundada por un equipo de desarrolladores experimentados, hemos crecido desde un pequeño estudio hasta convertirnos en una empresa reconocida por la calidad de nuestras soluciones y el compromiso con nuestros clientes.",
    },
    values: {
      title: "Nuestros Valores",
      innovation: {
        title: "Innovación",
        content:
          "Adoptamos las últimas tecnologías para crear soluciones vanguardistas.",
      },
      quality: {
        title: "Calidad",
        content:
          "Cada proyecto es desarrollado con los más altos estándares de calidad.",
      },
      commitment: {
        title: "Compromiso",
        content:
          "Nos dedicamos completamente al éxito de cada proyecto y cliente.",
      },
    },
  },
  en: {
    title: "About Us",
    subtitle: "Learn about our history, mission and vision",
    mission: {
      title: "Our Mission",
      content:
        "Transform ideas into innovative technological solutions that drive the growth and success of our clients, providing high-quality software, responsive web pages and custom applications that exceed market expectations.",
    },
    vision: {
      title: "Our Vision",
      content:
        "To be the leading custom software development company in the region, recognized for our technical excellence, constant innovation and commitment to customer satisfaction, establishing lasting relationships based on trust and exceptional results.",
    },
    history: {
      title: "Our History",
      content:
        "Codive was born from a passion for technology and the desire to help companies digitize their processes. Founded by a team of experienced developers, we have grown from a small studio to become a company recognized for the quality of our solutions and commitment to our clients.",
    },
    values: {
      title: "Our Values",
      innovation: {
        title: "Innovation",
        content:
          "We adopt the latest technologies to create cutting-edge solutions.",
      },
      quality: {
        title: "Quality",
        content:
          "Every project is developed with the highest quality standards.",
      },
      commitment: {
        title: "Commitment",
        content:
          "We are completely dedicated to the success of every project and client.",
      },
    },
  },
};

export function AboutSection({ language }: AboutSectionProps) {
  const t = translations[language];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Mission, Vision, History */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-xl font-serif font-semibold text-card-foreground">
                  {t.mission.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {t.mission.content}
              </p>
            </CardContent>
          </Card>

          <Card
            className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Eye className="h-8 w-8 text-secondary mr-3" />
                <h3 className="text-xl font-serif font-semibold text-card-foreground">
                  {t.vision.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {t.vision.content}
              </p>
            </CardContent>
          </Card>

          <Card
            className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <History className="h-8 w-8 text-accent mr-3" />
                <h3 className="text-xl font-serif font-semibold text-card-foreground">
                  {t.history.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {t.history.content}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8">
            {t.values.title}
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center animate-slide-up">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="h-8 w-8 text-primary" />
            </div>
            <h4 className="text-xl font-semibold text-foreground mb-3">
              {t.values.innovation.title}
            </h4>
            <p className="text-muted-foreground">
              {t.values.innovation.content}
            </p>
          </div>

          <div
            className="text-center animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-secondary" />
            </div>
            <h4 className="text-xl font-semibold text-foreground mb-3">
              {t.values.quality.title}
            </h4>
            <p className="text-muted-foreground">{t.values.quality.content}</p>
          </div>

          <div
            className="text-center animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-accent" />
            </div>
            <h4 className="text-xl font-semibold text-foreground mb-3">
              {t.values.commitment.title}
            </h4>
            <p className="text-muted-foreground">
              {t.values.commitment.content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
