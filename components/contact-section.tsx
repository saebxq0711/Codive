"use client";

import type React from "react";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Send, Loader2 } from "lucide-react";

interface ContactSectionProps {
  language: "es" | "en";
}

const translations = {
  es: {
    title: "Contáctanos",
    subtitle: "Estamos listos para hacer realidad tu proyecto",
    form: {
      name: "Nombre completo",
      email: "Correo electrónico",
      phone: "Teléfono",
      subject: "Asunto",
      message: "Mensaje",
      send: "Enviar Mensaje",
      sending: "Enviando...",
      success: "Mensaje enviado correctamente",
      error: "Error al enviar el mensaje",
    },
    info: {
      title: "Información de Contacto",
      email: "codive.dev@outlook.com",
      phone: "+57 (319) 766-6683",
      address: "Ibagué, Colombia",
    },
    social: {
      title: "Síguenos en Redes Sociales",
    },
  },
  en: {
    title: "Contact Us",
    subtitle: "We are ready to make your project a reality",
    form: {
      name: "Full name",
      email: "Email address",
      phone: "Phone",
      subject: "Subject",
      message: "Message",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully",
      error: "Error sending message",
    },
    info: {
      title: "Contact Information",
      email: "codive.dev@outlook.com",
      phone: "+57 (319) 766-6683",
      address: "Ibague, Colombia",
    },
    social: {
      title: "Follow Us on Social Media",
    },
  },
};

export function ContactSection({ language }: ContactSectionProps) {
  const t = translations[language];
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Error al enviar el mensaje");
      }

      toast({
        title: t.form.success,
        description: "Te contactaremos pronto.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: t.form.error,
        description: "Por favor intenta nuevamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="animate-slide-up">
            <CardHeader>
              <CardTitle className="text-2xl font-serif font-semibold text-card-foreground">
                {t.form.send}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t.form.name}</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="transition-colors focus:border-primary bg-background dark:bg-slate-800 border-input text-foreground dark:text-white dark:border-slate-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t.form.phone}</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="transition-colors focus:border-primary bg-background dark:bg-slate-800 border-input text-foreground dark:text-white dark:border-slate-600"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{t.form.email}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="transition-colors focus:border-primary bg-background dark:bg-slate-800 border-input text-foreground dark:text-white dark:border-slate-600"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">{t.form.subject}</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="transition-colors focus:border-primary bg-background dark:bg-slate-800 border-input text-foreground dark:text-white dark:border-slate-600"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t.form.message}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="transition-colors focus:border-primary bg-background dark:bg-slate-800 border-input text-foreground dark:text-white dark:border-slate-600"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-secondary text-primary-foreground font-semibold py-3 transition-all duration-300 hover:scale-105"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {t.form.sending}
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      {t.form.send}
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div
            className="space-y-8 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-serif font-semibold text-card-foreground">
                  {t.info.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Email</p>
                    <a
                      href="mailto:codive.dev@outlook.com"
                      className="text-slate-400 hover:text-primary transition-colors cursor-pointer"
                    >
                      <p className="text-muted-foreground hover:text-primary transition-colors">
                        {t.info.email}
                      </p>
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-secondary/10 rounded-lg p-3">
                    <i
                      className="fab fa-whatsapp text-primary"
                      style={{ fontSize: "1.3rem" }}
                    ></i>
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Teléfono</p>
                    <a
                      href="https://wa.me/573197666683"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 cursor-pointer"
                    >
                      <p className="text-muted-foreground hover:text-primary transition-colors">
                        {t.info.phone}
                      </p>
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-accent/10 rounded-lg p-3">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">
                      Ubicación
                    </p>
                    <p className="text-muted-foreground">{t.info.address}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-serif font-semibold text-card-foreground">
                  {t.social.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/company/codive-tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:bg-primary hover:text-primary-foreground dark:hover:bg-green-500 dark:hover:text-white transition-all duration-300 bg-transparent cursor-pointer hover:scale-110 dark:border-green-400 dark:text-green-400"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </Button>
                  </a>
                  <a
                    href="https://www.facebook.com/codivetech"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:bg-primary hover:text-primary-foreground dark:hover:bg-green-500 dark:hover:text-white transition-all duration-300 bg-transparent cursor-pointer hover:scale-110 dark:border-green-400 dark:text-green-400"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </Button>
                  </a>
                  <a href="">
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:bg-primary hover:text-primary-foreground dark:hover:bg-green-500 dark:hover:text-white transition-all duration-300 bg-transparent cursor-pointer hover:scale-110 dark:border-green-400 dark:text-green-400"
                    >
                      <i className="fab fa-x-twitter"></i>
                    </Button>
                  </a>
                  <a
                    href="https://www.instagram.com/codive.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:bg-primary hover:text-primary-foreground dark:hover:bg-green-500 dark:hover:text-white transition-all duration-300 bg-transparent cursor-pointer hover:scale-110 dark:border-green-400 dark:text-green-400"
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

