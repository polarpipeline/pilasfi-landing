import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0066FF",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pilasfi.com"),
  title: "PilasFi - Tus Finanzas en Automático | App de Finanzas Personales",
  description:
    "PilasFi lee automáticamente los emails de tu banco y organiza tus finanzas. Presupuestos inteligentes, metas de ahorro y finanzas compartidas con tu pareja. Disponible para Ecuador.",
  keywords: [
    "finanzas personales",
    "app finanzas ecuador",
    "control de gastos",
    "presupuesto personal",
    "ahorro automatico",
    "banco pichincha",
    "banco guayaquil",
    "produbanco",
    "diners club ecuador",
    "finanzas en pareja",
    "app de gastos",
    "control financiero",
    "pilasfi",
    "pilas fi",
  ],
  authors: [{ name: "PilasFi Team" }],
  creator: "PilasFi",
  publisher: "PilasFi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: "https://pilasfi.com",
    siteName: "PilasFi",
    title: "PilasFi - Tus Finanzas en Automático",
    description:
      "La app que lee tus emails bancarios y organiza tus finanzas automáticamente. Presupuestos, metas de ahorro y finanzas compartidas.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PilasFi - Finanzas Personales Inteligentes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PilasFi - Tus Finanzas en Automático",
    description:
      "La app que lee tus emails bancarios y organiza tus finanzas automáticamente.",
    images: ["/og-image.png"],
    creator: "@pilasfi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PilasFi",
    applicationCategory: "FinanceApplication",
    operatingSystem: "iOS, Android",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "5000",
    },
    description:
      "PilasFi lee automáticamente los emails de tu banco y organiza tus finanzas. Presupuestos inteligentes, metas de ahorro y finanzas compartidas con tu pareja.",
    url: "https://pilasfi.com",
    author: {
      "@type": "Organization",
      name: "PilasFi",
      url: "https://pilasfi.com",
    },
    featureList: [
      "Lectura automática de emails bancarios",
      "Presupuestos compartidos en pareja",
      "Categorización inteligente de gastos",
      "Metas de ahorro",
      "Dashboard en tiempo real",
      "Alertas inteligentes",
    ],
    screenshot: "https://pilasfi.com/og-image.png",
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Es seguro conectar mi email bancario?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutamente. PilasFi solo lee los emails de notificaciones bancarias usando conexiones encriptadas. Nunca almacenamos tus credenciales bancarias ni accedemos a otros emails.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto cuesta PilasFi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PilasFi es 100% gratis. No hay planes premium, suscripciones ocultas ni costos adicionales.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué bancos están soportados?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Actualmente soportamos Banco Pichincha, Banco Guayaquil, Produbanco, Diners Club, Pacificard, Banco del Pacífico y De Una.",
        },
      },
    ],
  };

  return (
    <html lang="es" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
