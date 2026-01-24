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
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={isScrolled ? "nav-glass" : ""}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: isScrolled ? "0.75rem 0" : "1.25rem 0",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
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
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 12,
                  background: "linear-gradient(135deg, #F6851B, #8B5CF6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 20px rgba(246, 133, 27, 0.4)",
                }}
                aria-hidden="true"
              >
                <Zap size={22} color="white" />
              </motion.div>
              <span style={{
                fontSize: "1.375rem",
                fontWeight: 800,
                color: "white",
                letterSpacing: "-0.02em",
              }}>
                Pilas<span style={{
                  background: "linear-gradient(135deg, #F6851B 0%, #8B5CF6 100%)",
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
                  className="nav-link"
                  style={{
                    position: "relative",
                    color: "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    fontSize: "0.9375rem",
                    fontWeight: 500,
                    padding: "0.5rem 0",
                  }}
                  aria-label={`Ir a ${link.name}`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA Button with Glow */}
            <motion.a
              href="#download"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn btn-primary-glow"
              style={{
                padding: "0.75rem 1.5rem",
                fontSize: "0.9375rem",
                display: "none",
              }}
              id="desktop-cta"
            >
              Descargar
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              id="mobile-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
              style={{
                padding: "0.625rem",
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "12px",
                cursor: "pointer",
                color: "white",
              }}
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Full Screen Dark */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 40,
              background: "var(--color-dark-900)",
              paddingTop: "5rem",
            }}
            aria-label="Menú de navegación móvil"
          >
            {/* Gradient Orb */}
            <div
              style={{
                position: "absolute",
                top: "20%",
                right: "-20%",
                width: "400px",
                height: "400px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)",
                filter: "blur(60px)",
                pointerEvents: "none",
              }}
            />

            <div className="container" style={{ paddingTop: "2rem", position: "relative" }}>
              <motion.div
                className="flex flex-col gap-4"
                initial="closed"
                animate="open"
                variants={{
                  open: { transition: { staggerChildren: 0.07 } },
                  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                }}
              >
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: -20 }
                    }}
                    style={{
                      fontSize: "1.75rem",
                      fontWeight: 700,
                      color: "white",
                      textDecoration: "none",
                      padding: "1rem 0",
                      borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                    aria-label={`Ir a ${link.name}`}
                  >
                    {link.name}
                    <span style={{
                      fontSize: "0.875rem",
                      color: "rgba(255, 255, 255, 0.3)",
                      fontWeight: 400,
                    }}>
                      0{index + 1}
                    </span>
                  </motion.a>
                ))}
                <motion.a
                  href="#download"
                  className="btn btn-primary-glow btn-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 20 }
                  }}
                  style={{ marginTop: "2rem", justifyContent: "center" }}
                  aria-label="Descargar PilasFi gratis"
                >
                  Descargar Gratis
                </motion.a>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
