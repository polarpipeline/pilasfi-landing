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
    <div style={{ minHeight: "100vh", background: "#FAF8F4" }}>
      {/* Header */}
      <header
        style={{
          background: "rgba(250, 248, 244, 0.95)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid #E5E5E5",
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
                  background: "#7B3FE4",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Zap size={22} color="white" />
              </div>
              <span style={{ fontSize: "1.25rem", fontWeight: 800, color: "#120D31", letterSpacing: "-0.02em" }}>
                Pilas<span style={{ color: "#7B3FE4" }}>Fi</span>
              </span>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2"
              style={{
                color: "#535A6A",
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
              background: "#FFFFFF",
              borderRadius: "24px",
              padding: "2.5rem",
              border: "1px solid #E5E5E5",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
            }}
          >
            <h1
              style={{
                fontSize: "2.5rem",
                fontWeight: 800,
                color: "#120D31",
                marginBottom: "0.5rem",
                letterSpacing: "-0.02em",
              }}
            >
              {title}
            </h1>
            <p
              style={{
                color: "#535A6A",
                marginBottom: "2rem",
                paddingBottom: "2rem",
                borderBottom: "1px solid #E5E5E5",
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
          background: "#1A1A3E",
          padding: "2rem 0",
          textAlign: "center",
          borderTop: "1px solid #E5E5E5",
        }}
      >
        <div className="container">
          <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "0.875rem" }}>
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
            <Link href="/privacidad/" className="footer-link" style={{ fontSize: "0.875rem" }}>
              Privacidad
            </Link>
            <Link href="/terminos/" className="footer-link" style={{ fontSize: "0.875rem" }}>
              Términos
            </Link>
            <Link href="/cookies/" className="footer-link" style={{ fontSize: "0.875rem" }}>
              Cookies
            </Link>
            <Link href="/licencia/" className="footer-link" style={{ fontSize: "0.875rem" }}>
              Licencia
            </Link>
            <Link href="/soporte/" className="footer-link" style={{ fontSize: "0.875rem" }}>
              Soporte
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
