"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { name: "Funciones", href: "#features" },
  { name: "Cómo Funciona", href: "#how-it-works" },
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
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={isScrolled ? "nav-scrolled" : "nav-container"}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: isScrolled ? "0.75rem 0" : "1rem 0",
          transition: "all 0.3s ease",
          borderBottom: isScrolled ? "1px solid #E5E5E5" : "none",
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
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: "#7B3FE4",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                aria-hidden="true"
              >
                <Zap size={20} color="white" />
              </motion.div>
              <span style={{
                fontSize: "1.375rem",
                fontWeight: 700,
                color: "#120D31",
                letterSpacing: "-0.02em",
              }}>
                Pilas<span style={{ color: "#7B3FE4" }}>Fi</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="flex items-center gap-8" style={{ display: "none" }} id="desktop-nav" aria-label="Navegación principal">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  style={{
                    color: "#120D31",
                    textDecoration: "none",
                    fontSize: "0.9375rem",
                    fontWeight: 500,
                    transition: "color 0.2s ease",
                  }}
                  aria-label={`Ir a ${link.name}`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <motion.a
              href="#download"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn btn-primary"
              style={{
                padding: "0.75rem 1.5rem",
                fontSize: "0.9375rem",
                display: "none",
              }}
              id="desktop-cta"
            >
              Comenzar
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              id="mobile-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
              style={{
                padding: "0.625rem",
                background: "#F5F1EB",
                border: "1px solid #E5E5E5",
                borderRadius: "10px",
                cursor: "pointer",
                color: "#120D31",
              }}
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 40,
              background: "#FAF8F4",
              paddingTop: "5rem",
            }}
            aria-label="Menú de navegación móvil"
          >
            <div className="container" style={{ paddingTop: "2rem" }}>
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 600,
                      color: "#120D31",
                      textDecoration: "none",
                      padding: "1rem 0",
                      borderBottom: "1px solid #E5E5E5",
                    }}
                    aria-label={`Ir a ${link.name}`}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.a
                  href="#download"
                  className="btn btn-primary btn-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  style={{ marginTop: "1.5rem", justifyContent: "center" }}
                  aria-label="Comenzar con PilasFi"
                >
                  Comenzar Gratis
                </motion.a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
