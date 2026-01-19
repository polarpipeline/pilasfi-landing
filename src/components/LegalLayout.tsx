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
    <div style={{ minHeight: "100vh", background: "var(--color-gray-50)" }}>
      {/* Header */}
      <header
        style={{
          background: "white",
          borderBottom: "1px solid var(--color-gray-200)",
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
                }}
              >
                <Zap size={22} color="white" />
              </div>
              <span style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-gray-900)" }}>
                Pilas<span className="gradient-text">Fi</span>
              </span>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2"
              style={{
                color: "var(--color-gray-600)",
                textDecoration: "none",
                fontSize: "0.9375rem",
                fontWeight: 500,
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
              background: "white",
              borderRadius: "20px",
              padding: "2.5rem",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
            }}
          >
            <h1
              style={{
                fontSize: "2.5rem",
                fontWeight: 800,
                color: "var(--color-gray-900)",
                marginBottom: "0.5rem",
              }}
            >
              {title}
            </h1>
            <p
              style={{
                color: "var(--color-gray-500)",
                marginBottom: "2rem",
                paddingBottom: "2rem",
                borderBottom: "1px solid var(--color-gray-200)",
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
          background: "var(--color-gray-900)",
          padding: "2rem 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <p style={{ color: "var(--color-gray-400)", fontSize: "0.875rem" }}>
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
            <Link href="/privacidad" style={{ color: "var(--color-gray-400)", fontSize: "0.875rem" }}>
              Privacidad
            </Link>
            <Link href="/terminos" style={{ color: "var(--color-gray-400)", fontSize: "0.875rem" }}>
              Términos
            </Link>
            <Link href="/cookies" style={{ color: "var(--color-gray-400)", fontSize: "0.875rem" }}>
              Cookies
            </Link>
            <Link href="/licencia" style={{ color: "var(--color-gray-400)", fontSize: "0.875rem" }}>
              Licencia
            </Link>
            <Link href="/soporte" style={{ color: "var(--color-gray-400)", fontSize: "0.875rem" }}>
              Soporte
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
