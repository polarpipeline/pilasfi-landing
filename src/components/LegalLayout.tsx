"use client";

import { Zap, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <div style={{ minHeight: "100vh", background: "var(--color-dark-950)" }}>
      {/* Header */}
      <header
        style={{
          background: "rgba(10, 10, 15, 0.9)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
          padding: "1rem 0",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <div className="container">
          <div className="flex items-center" style={{ justifyContent: "space-between" }}>
            <Link
              href="/"
              className="flex items-center gap-2"
              style={{ textDecoration: "none" }}
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
                  boxShadow: "0 4px 15px rgba(99, 102, 241, 0.3)",
                }}
              >
                <Zap size={22} color="white" />
              </div>
              <span style={{ fontSize: "1.25rem", fontWeight: 800, color: "white", letterSpacing: "-0.02em" }}>
                Pilas<span className="gradient-text">Fi</span>
              </span>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2"
              style={{
                color: "rgba(255, 255, 255, 0.6)",
                textDecoration: "none",
                fontSize: "0.9375rem",
                fontWeight: 500,
                transition: "color 0.2s ease",
              }}
            >
              <ArrowLeft size={18} />
              Volver al inicio
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main style={{ padding: "3rem 0 5rem" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              borderRadius: "24px",
              padding: "2.5rem",
              border: "1px solid rgba(255, 255, 255, 0.06)",
            }}
          >
            <h1
              style={{
                fontSize: "2.5rem",
                fontWeight: 800,
                color: "white",
                marginBottom: "0.5rem",
                letterSpacing: "-0.02em",
              }}
            >
              {title}
            </h1>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.5)",
                marginBottom: "2rem",
                paddingBottom: "2rem",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              Última actualización: {lastUpdated}
            </p>

            <div className="legal-content">{children}</div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          background: "var(--color-dark-900)",
          padding: "2rem 0",
          textAlign: "center",
          borderTop: "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div className="container">
          <p style={{ color: "rgba(255, 255, 255, 0.4)", fontSize: "0.875rem" }}>
            © {new Date().getFullYear()} PilasFi. Todos los derechos reservados.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              justifyContent: "center",
              marginTop: "1rem",
              flexWrap: "wrap",
            }}
          >
            <Link href="/privacidad" className="footer-link" style={{ fontSize: "0.875rem" }}>
              Privacidad
            </Link>
            <Link href="/terminos" className="footer-link" style={{ fontSize: "0.875rem" }}>
              Términos
            </Link>
            <Link href="/cookies" className="footer-link" style={{ fontSize: "0.875rem" }}>
              Cookies
            </Link>
            <Link href="/licencia" className="footer-link" style={{ fontSize: "0.875rem" }}>
              Licencia
            </Link>
            <Link href="/soporte" className="footer-link" style={{ fontSize: "0.875rem" }}>
              Soporte
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
