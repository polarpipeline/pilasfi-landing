"use client";

import { motion } from "framer-motion";
import { Zap, Mail, MapPin, Instagram, Twitter, Linkedin, Heart } from "lucide-react";
import Link from "next/link";

const links = {
  product: [
    { name: "Funciones", href: "#features" },
    { name: "Cómo Funciona", href: "#how-it-works" },
    { name: "Bancos", href: "#banks" },
    { name: "Seguridad", href: "#security" },
    { name: "FAQ", href: "#faq" },
  ],
  company: [
    { name: "Soporte", href: "/soporte" },
    { name: "Sobre Nosotros", href: "#" },
    { name: "Blog", href: "#" },
  ],
  legal: [
    { name: "Privacidad", href: "/privacidad" },
    { name: "Términos", href: "/terminos" },
    { name: "Cookies", href: "/cookies" },
    { name: "Licencia (EULA)", href: "/licencia" },
    { name: "Eliminar Datos", href: "/eliminar-datos" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "var(--color-dark-950)", paddingTop: "5rem", paddingBottom: "2rem" }}>
      <div className="container">
        {/* Main Grid */}
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gap: "3rem",
            paddingBottom: "3rem",
            borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
          }}
        >
          {/* Brand */}
          <div>
            <motion.a
              href="#"
              className="flex items-center gap-2"
              style={{ textDecoration: "none", marginBottom: "1.25rem" }}
              whileHover={{ opacity: 0.9 }}
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
                  boxShadow: "0 4px 20px rgba(99, 102, 241, 0.25)",
                }}
              >
                <Zap size={22} color="white" />
              </div>
              <span style={{ fontSize: "1.25rem", fontWeight: 800, color: "white", letterSpacing: "-0.02em" }}>
                Pilas<span className="gradient-text">Fi</span>
              </span>
            </motion.a>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.5)",
                fontSize: "0.9375rem",
                maxWidth: "300px",
                marginBottom: "1.5rem",
                lineHeight: 1.7,
              }}
            >
              La app que automatiza tus finanzas personales y te ayuda a manejar
              el dinero en pareja. Diseñada para Ecuador.
            </p>
            <div className="flex flex-col gap-3">
              <motion.a
                href="mailto:hola@pilasfi.com"
                className="flex items-center gap-2 footer-link"
                style={{ fontSize: "0.9375rem" }}
                whileHover={{ color: "white" }}
              >
                <Mail size={16} color="#818CF8" />
                hola@pilasfi.com
              </motion.a>
              <span
                className="flex items-center gap-2"
                style={{ color: "rgba(255, 255, 255, 0.4)", fontSize: "0.9375rem" }}
              >
                <MapPin size={16} color="#818CF8" />
                Guayaquil, Ecuador
              </span>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4
              style={{
                color: "white",
                fontWeight: 700,
                marginBottom: "1.25rem",
                fontSize: "0.9375rem",
              }}
            >
              Producto
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {links.product.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="footer-link"
                    style={{ fontSize: "0.9375rem" }}
                    whileHover={{ color: "white", x: 3 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              style={{
                color: "white",
                fontWeight: 700,
                marginBottom: "1.25rem",
                fontSize: "0.9375rem",
              }}
            >
              Empresa
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {links.company.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("/") ? (
                    <Link href={link.href} className="footer-link" style={{ fontSize: "0.9375rem" }}>
                      {link.name}
                    </Link>
                  ) : (
                    <motion.a
                      href={link.href}
                      className="footer-link"
                      style={{ fontSize: "0.9375rem" }}
                      whileHover={{ color: "white", x: 3 }}
                    >
                      {link.name}
                    </motion.a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4
              style={{
                color: "white",
                fontWeight: 700,
                marginBottom: "1.25rem",
                fontSize: "0.9375rem",
              }}
            >
              Legal
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {links.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="footer-link" style={{ fontSize: "0.9375rem" }}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="flex flex-col gap-4 footer-bottom"
          style={{
            paddingTop: "1.5rem",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p style={{ color: "rgba(255, 255, 255, 0.4)", fontSize: "0.875rem" }}>
            © {new Date().getFullYear()} PilasFi. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-3">
            {[
              { icon: Instagram, href: "#", label: "Instagram" },
              { icon: Twitter, href: "#", label: "Twitter" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                aria-label={social.label}
                whileHover={{ scale: 1.1, background: "rgba(99, 102, 241, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "12px",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(255, 255, 255, 0.6)",
                  transition: "all 0.3s ease",
                }}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Made with love */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            textAlign: "center",
            marginTop: "2rem",
            color: "rgba(255, 255, 255, 0.3)",
            fontSize: "0.8125rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
          }}
        >
          Hecho con <Heart size={14} color="#EF4444" fill="#EF4444" /> en Ecuador
        </motion.p>
      </div>
    </footer>
  );
}
