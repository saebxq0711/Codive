"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

interface ProjectsSectionProps {
  language: "es" | "en";
}

type ProjectStatus = "development" | "beta" | "production";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  projectUrl?: string; // Optional URL
  status: ProjectStatus;
}

const translations = {
  es: {
    title: "Proyectos Destacados",
    subtitle:
      "Descubre algunas de nuestras soluciones web más innovadoras y exitosas",
    viewProject: "Ver Proyecto",
    showMore: "Ver Más Proyectos",
    showLess: "Ver Menos",
    technologies: "Tecnologías:",
    unavailable: "No Disponible",
    status: {
      development: "En Desarrollo",
      beta: "Beta",
      production: "Producción",
    },
    projects: [
      // {
      //   title: "Sistema ERP Empresarial",
      //   description:
      //     "Plataforma web completa de gestión empresarial con módulos de inventario, ventas, compras y recursos humanos. Desarrollada para optimizar los procesos internos de una empresa manufacturera.",
      //   image: "/modern-erp-dashboard-interface-with-charts-and-dat.png",
      //   technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
      //   category: "Aplicación Web",
      //   projectUrl: "https://demo-erp.codive.com",
      //   status: "production" as ProjectStatus,
      // },
      // {
      //   title: "E-commerce Avanzado",
      //   description:
      //     "Tienda online con sistema de pagos integrado, gestión de inventario en tiempo real y panel administrativo completo. Incluye funcionalidades de marketing y analytics.",
      //   image: "/modern-ecommerce-dashboard.png",
      //   technologies: ["Next.js", "Stripe", "MongoDB", "Tailwind"],
      //   category: "E-commerce",
      //   projectUrl: "https://shop-demo.codive.com",
      //   status: "beta" as ProjectStatus,
      // },
      {
        title: "PsicoCare - Sistema de Citas Psicológicas",
        description:
          "Plataforma web privada para la gestión de pacientes de una psicóloga. Permite agendar citas individuales o de pareja, mantener comunicación directa por chat y llevar el control de la evolución de cada paciente.",
        image: "/images/Psicocare.png",
        technologies: [
          "PHP",
          "Laravel",
          "MySQL",
          "Bootstrap",
          "Tailwindcss",
          "JavaScript",
          "Livewire",
        ],
        category: "Salud",
        status: "development" as ProjectStatus,
      },
    ] as Project[],
  },
  en: {
    title: "Featured Projects",
    subtitle:
      "Discover some of our most innovative and successful web solutions",
    viewProject: "View Project",
    showMore: "Show More Projects",
    showLess: "Show Less",
    technologies: "Technologies:",
    unavailable: "Not Available",
    status: {
      development: "In Development",
      beta: "Beta",
      production: "Production",
    },
    projects: [
      // {
      //   title: "Enterprise ERP System",
      //   description:
      //     "Complete web business management platform with inventory, sales, purchasing and human resources modules. Developed to optimize the internal processes of a manufacturing company.",
      //   image: "/modern-erp-dashboard-interface-with-charts-and-dat.png",
      //   technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
      //   category: "Web Application",
      //   projectUrl: "https://demo-erp.codive.com",
      //   status: "production" as ProjectStatus,
      // },
      // {
      //   title: "Advanced E-commerce",
      //   description:
      //     "Online store with integrated payment system, real-time inventory management and complete administrative panel. Includes marketing and analytics functionalities.",
      //   image: "/modern-ecommerce-dashboard.png",
      //   technologies: ["Next.js", "Stripe", "MongoDB", "Tailwind"],
      //   category: "E-commerce",
      //   projectUrl: "https://shop-demo.codive.com",
      //   status: "beta" as ProjectStatus,
      // },
      {
        title: "PsicoCare - Psychological Appointment System",
        description:
          "Private web platform for a psychologist to manage her patients. It allows scheduling individual or couple sessions, direct communication through chat, and tracking each patient's progress.",
        image: "/images/Psicocare.png",
        technologies: [
          "PHP",
          "Laravel",
          "MySQL",
          "Bootstrap",
          "Tailwindcss",
          "JavaScript",
          "Livewire",
        ],
        category: "Healthcare",
        status: "development" as ProjectStatus,
      },
    ] as Project[],
  },
};

export function ProjectsSection({ language }: ProjectsSectionProps) {
  const t = translations[language];
  const [showAll, setShowAll] = useState(false);
  const initialProjectsCount = 6;
  const projectsToShow = showAll
    ? t.projects
    : t.projects.slice(0, initialProjectsCount);

  const handleViewProject = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const getStatusBadgeStyle = (status: ProjectStatus) => {
    switch (status) {
      case "production":
        return "bg-green-100 text-green-800 border-green-200";
      case "beta":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "development":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-muted/30 to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 left-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-sans leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsToShow.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover-lift animate-slide-up group bg-card/90 backdrop-blur-sm border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                    {project.category}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium shadow-lg border ${getStatusBadgeStyle(
                      project.status
                    )}`}
                  >
                    {t.status[project.status]}
                  </span>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-serif font-bold text-card-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-sans">
                  {project.description}
                </p>

                <div className="space-y-3">
                  <p className="text-sm font-medium text-foreground">
                    {t.technologies}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium hover:bg-primary/20 transition-colors cursor-pointer border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-primary-foreground font-semibold transition-all duration-300 hover:scale-105 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  onClick={() =>
                    project.projectUrl && handleViewProject(project.projectUrl)
                  }
                  disabled={!project.projectUrl}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  {project.projectUrl ? t.viewProject : t.unavailable}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {t.projects.length > initialProjectsCount && (
          <div className="text-center mt-12">
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-4 rounded-xl transition-all duration-500 bg-transparent hover-lift cursor-pointer"
            >
              {showAll ? (
                <>
                  <ChevronUp className="h-5 w-5 mr-2" />
                  {t.showLess}
                </>
              ) : (
                <>
                  <ChevronDown className="h-5 w-5 mr-2" />
                  {t.showMore}
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
