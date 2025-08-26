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
    "Codive ofrece desarrollo de software personalizado, páginas web modernas y sitios responsivos. Soluciones tecnológicas innovadoras para profesionales y negocios.",
  generator: "Codive",
  keywords: [
    "desarrollo software",
    "páginas web",
    "sitios responsivos",
    "software a medida",
    "desarrollo web",
    "Codive",
    "freelance desarrollo web",
    "landing pages",
    "sitios corporativos",
  ],
  authors: [{ name: "Codive" }],
  icons: {
    icon: "/favicon.ico", // icono principal
    shortcut: "/android-chrome-192x192.png", // icono de la pestaña
    apple: "/apple-touch-icon.png", // icono para iOS
  },
  openGraph: {
    title: "Codive - Desarrollo de Software a Medida",
    description:
      "Soluciones digitales personalizadas: desarrollo web, aplicaciones modernas y software a medida con Codive.",
    url: "https://codive.vercel.app", // cámbialo cuando tengas dominio propio
    siteName: "Codive",
    images: [
      {
        url: "/codive-preview.png", // pon esta imagen (1200x630px) en /public
        width: 1200,
        height: 630,
        alt: "Codive - Desarrollo Web y Software",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Codive - Desarrollo de Software a Medida",
    description:
      "Desarrollo web y software personalizado para profesionales y negocios. Páginas modernas y optimizadas.",
    images: ["/codive-preview.png"],
    creator: "@tuusuario", // opcional si tienes Twitter
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
        <meta
          name="google-site-verification"
          content="63x4K1TSni3eYieY2nI2jACpyrRrOUQjGWbldapKFwY"
        />
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
