"use client";

import { Zap, Mail, MapPin, Instagram, Twitter, Linkedin } from "lucide-react";

const links = {
  product: [
    { name: "Funciones", href: "#features" },
    { name: "Cómo Funciona", href: "#how-it-works" },
    { name: "Bancos", href: "#banks" },
    { name: "Seguridad", href: "#security" },
    { name: "FAQ", href: "#faq" },
  ],
  company: [
    { name: "Sobre Nosotros", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Carreras", href: "#" },
  ],
  legal: [
    { name: "Privacidad", href: "#" },
    { name: "Términos", href: "#" },
    { name: "Seguridad", href: "#security" },
  ],
};

export default function Footer() {
  return (
    <footer className="section-dark" style={{ paddingTop: "4rem", paddingBottom: "2rem" }}>
      <div className="container">
        {/* Main Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            paddingBottom: "3rem",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <style jsx global>{`
            @media (min-width: 768px) {
              .footer-grid { grid-template-columns: 2fr 1fr 1fr 1fr !important; }
            }
          `}</style>

          {/* Brand */}
          <div>
            <a
              href="#"
              className="flex items-center gap-2"
              style={{ textDecoration: "none", marginBottom: "1rem" }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Zap size={20} color="white" />
              </div>
              <span style={{ fontSize: "1.125rem", fontWeight: 700, color: "white" }}>
                Pilas<span className="gradient-text">Fi</span>
              </span>
            </a>
            <p
              style={{
                color: "var(--color-gray-400)",
                fontSize: "0.875rem",
                maxWidth: "280px",
                marginBottom: "1.5rem",
              }}
            >
              La app que automatiza tus finanzas personales y te ayuda a manejar
              el dinero en pareja. Diseñada para Ecuador.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:hola@pilasfi.com"
                className="flex items-center gap-2 footer-link"
                style={{ fontSize: "0.875rem" }}
              >
                <Mail size={16} />
                hola@pilasfi.com
              </a>
              <span
                className="flex items-center gap-2"
                style={{ color: "var(--color-gray-400)", fontSize: "0.875rem" }}
              >
                <MapPin size={16} />
                Guayaquil, Ecuador
              </span>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4
              style={{
                color: "white",
                fontWeight: 600,
                marginBottom: "1rem",
                fontSize: "0.875rem",
              }}
            >
              Producto
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {links.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-link" style={{ fontSize: "0.875rem" }}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              style={{
                color: "white",
                fontWeight: 600,
                marginBottom: "1rem",
                fontSize: "0.875rem",
              }}
            >
              Empresa
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {links.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-link" style={{ fontSize: "0.875rem" }}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4
              style={{
                color: "white",
                fontWeight: 600,
                marginBottom: "1rem",
                fontSize: "0.875rem",
              }}
            >
              Legal
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {links.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-link" style={{ fontSize: "0.875rem" }}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="flex flex-col gap-4"
          style={{
            paddingTop: "1.5rem",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <style jsx global>{`
            @media (min-width: 640px) {
              .footer-bottom { flex-direction: row !important; }
            }
          `}</style>
          <p style={{ color: "var(--color-gray-500)", fontSize: "0.875rem" }}>
            © {new Date().getFullYear()} PilasFi. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            {[Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.05)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-gray-400)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.color = "var(--color-gray-400)";
                }}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Made with love */}
        <p
          style={{
            textAlign: "center",
            marginTop: "2rem",
            color: "var(--color-gray-600)",
            fontSize: "0.8125rem",
          }}
        >
          Hecho con 💜 en Ecuador 🇪🇨
        </p>
      </div>
    </footer>
  );
}
