"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { name: "Funciones", href: "#features" },
  { name: "Cómo Funciona", href: "#how-it-works" },
  { name: "Bancos", href: "#banks" },
  { name: "Seguridad", href: "#security" },
  { name: "Testimonios", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={isScrolled ? "nav-glass" : ""}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: isScrolled ? "0.75rem 0" : "1.25rem 0",
          transition: "all 0.3s ease",
        }}
      >
        <div className="container">
          <div className="flex items-center" style={{ justifyContent: "space-between" }}>
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2"
              style={{ textDecoration: "none" }}
              aria-label="PilasFi - Inicio"
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                aria-hidden="true"
              >
                <Zap size={22} color="white" />
              </div>
              <span style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                color: isScrolled ? "var(--color-gray-900)" : "white",
                transition: "color 0.3s ease"
              }}>
                Pilas<span style={{
                  background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>Fi</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="flex items-center gap-8" style={{ display: "none" }} id="desktop-nav" aria-label="Navegación principal">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  style={{
                    color: isScrolled ? "var(--color-gray-600)" : "rgba(255,255,255,0.8)",
                    textDecoration: "none",
                    fontSize: "0.9375rem",
                    fontWeight: 500,
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = isScrolled ? "var(--color-gray-900)" : "white")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = isScrolled ? "var(--color-gray-600)" : "rgba(255,255,255,0.8)")}
                  aria-label={`Ir a ${link.name}`}
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <style jsx global>{`
              @media (min-width: 768px) {
                #desktop-nav { display: flex !important; }
                #mobile-btn { display: none !important; }
              }
            `}</style>

            {/* CTA */}
            <a
              href="#download"
              className="btn btn-primary"
              style={{ display: "none", padding: "0.625rem 1.25rem", fontSize: "0.875rem" }}
              id="desktop-cta"
            >
              Descargar
            </a>
            <style jsx global>{`
              @media (min-width: 768px) {
                #desktop-cta { display: inline-flex !important; }
              }
            `}</style>

            {/* Mobile Menu Button */}
            <button
              id="mobile-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                padding: "0.5rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: isScrolled ? "var(--color-gray-700)" : "white",
                transition: "color 0.3s ease",
              }}
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 40,
              background: "white",
              paddingTop: "5rem",
            }}
            aria-label="Menú de navegación móvil"
          >
            <div className="container" style={{ paddingTop: "2rem" }}>
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 600,
                      color: "var(--color-gray-900)",
                      textDecoration: "none",
                    }}
                    aria-label={`Ir a ${link.name}`}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#download"
                  className="btn btn-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ marginTop: "1rem" }}
                  aria-label="Descargar PilasFi gratis"
                >
                  Descargar Gratis
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
