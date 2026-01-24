import { Metadata } from "next";
import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import Security from "@/components/sections/Security";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "PilasFi - Tu Coach de Finanzas Personales con IA | Gratis",
  description: "PilasFi categoriza tus gastos automáticamente con aprendizaje automático. Visibilidad total de tus finanzas, presupuestos inteligentes, gastos compartidos con tu pareja. Olvídate del Excel. 100% gratis.",
  alternates: {
    canonical: "https://pilasfi.com/",
  },
};

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Security />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
