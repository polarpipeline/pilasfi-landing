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
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
