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
  title: "PilasFi | App de Finanzas Personales - Lee emails bancarios automáticamente",
  description: "PilasFi es una app gratuita que lee automáticamente los emails de notificaciones bancarias de tu Gmail para categorizar tus gastos con IA. Presupuestos compartidos con tu pareja. 100% gratis y seguro.",
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
