import type React from "react";
import type { Metadata } from "next";
import { Nunito_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-sans",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Codive - Desarrollo de Software a Medida",
  description:
    "Empresa especializada en desarrollo de software personalizado, páginas web y sitios web responsivos. Soluciones tecnológicas innovadoras para tu negocio.",
  generator: "Codive",
  keywords:
    "desarrollo software, páginas web, sitios responsivos, software a medida, desarrollo web",
  icons: {
    icon: "/favicon.ico", // icono principal
    shortcut: "/android-chrome-192x192.png", // icono de la pestaña del navegador
    apple: "/apple-touch-icon.png", // para iOS
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css"
        />
      </head>
      <body
        className={`${nunitoSans.variable} ${playfairDisplay.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
