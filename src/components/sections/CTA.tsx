"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Apple, Smartphone, Shield, Zap, Users, Mail, CheckCircle2, Loader2 } from "lucide-react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      setErrorMessage("Por favor ingresa un email válido");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    // Aquí puedes integrar con tu servicio de email marketing (Mailchimp, ConvertKit, etc.)
    // Por ahora simulamos el envío
    try {
      // Ejemplo: await fetch('/api/waitlist', { method: 'POST', body: JSON.stringify({ email }) })
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setErrorMessage("Algo salió mal. Por favor intenta de nuevo.");
    }
  };

  return (
    <section id="download" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}
        >
          {/* Badge */}
          <div
            className="badge"
            style={{
              margin: "0 auto 1.5rem",
              background: "rgba(16, 185, 129, 0.1)",
              color: "var(--color-success)",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "var(--color-success)",
              }}
            />
            <span>Disponible ahora</span>
          </div>

          {/* Headline */}
          <h2 className="heading-lg" style={{ marginBottom: "1rem" }}>
            Empiecen a controlar su dinero{" "}
            <span className="gradient-text">juntos</span>
          </h2>

          <p
            className="text-lg text-muted"
            style={{ marginBottom: "2rem", maxWidth: "500px", margin: "0 auto 2rem" }}
          >
            Únanse a miles de parejas ecuatorianas que ya mejoraron su relación
            financiera con PilasFi. Es gratis y toma minutos configurar.
          </p>

          {/* Benefits */}
          <div
            className="flex flex-wrap justify-center gap-6"
            style={{ marginBottom: "2.5rem" }}
          >
            {[
              { icon: Zap, text: "2 min para configurar" },
              { icon: Shield, text: "100% seguro" },
              { icon: Users, text: "Perfecto para parejas" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-muted">
                <item.icon size={18} className="text-[var(--color-primary)]" />
                <span style={{ fontSize: "0.875rem" }}>{item.text}</span>
              </div>
            ))}
          </div>

          {/* Email Waitlist Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{
              marginBottom: "2.5rem",
              padding: "2rem",
              background: "var(--color-gray-50)",
              borderRadius: "16px",
              border: "1px solid var(--color-gray-100)",
            }}
          >
            <h3
              style={{
                fontSize: "1.125rem",
                fontWeight: 600,
                marginBottom: "0.75rem",
                color: "var(--color-gray-900)",
              }}
            >
              Sé el primero en enterarte
            </h3>
            <p
              style={{
                color: "var(--color-gray-600)",
                fontSize: "0.875rem",
                marginBottom: "1.5rem",
              }}
            >
              Únete a la lista de espera y te notificaremos cuando PilasFi esté disponible
            </p>
            <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
              <div className="flex flex-col gap-3" style={{ alignItems: "stretch" }}>
                <div className="flex flex-col gap-2">
                  <div className="flex" style={{ gap: "0.5rem" }}>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === "error") setStatus("idle");
                      }}
                      placeholder="tu@email.com"
                      required
                      aria-label="Email para lista de espera"
                      style={{
                        flex: 1,
                        padding: "0.875rem 1rem",
                        borderRadius: "12px",
                        border: `1px solid ${status === "error" ? "var(--color-error)" : "var(--color-gray-200)"}`,
                        fontSize: "0.9375rem",
                        outline: "none",
                        transition: "all 0.2s",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "var(--color-primary)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "var(--color-gray-200)";
                      }}
                    />
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={status === "loading" || status === "success"}
                      style={{
                        padding: "0.875rem 1.5rem",
                        whiteSpace: "nowrap",
                      }}
                      aria-label="Suscribirse a la lista de espera"
                      aria-busy={status === "loading"}
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 size={18} className="animate-spin" aria-hidden="true" />
                          <span>Enviando...</span>
                        </>
                      ) : status === "success" ? (
                        <>
                          <CheckCircle2 size={18} aria-hidden="true" />
                          <span>¡Listo!</span>
                        </>
                      ) : (
                        <>
                          <Mail size={18} aria-hidden="true" />
                          Notificarme
                        </>
                      )}
                    </button>
                  </div>
                  {status === "error" && errorMessage && (
                    <p style={{ color: "var(--color-error)", fontSize: "0.875rem", textAlign: "left" }}>
                      {errorMessage}
                    </p>
                  )}
                  {status === "success" && (
                    <p style={{ color: "var(--color-success)", fontSize: "0.875rem", textAlign: "left" }}>
                      ¡Perfecto! Te notificaremos cuando esté disponible.
                    </p>
                  )}
                </div>
              </div>
            </form>
          </motion.div>

          {/* Download Buttons */}
          <div className="flex flex-col gap-4 justify-center" style={{ alignItems: "center" }}>
            <p
              style={{
                color: "var(--color-gray-500)",
                fontSize: "0.875rem",
                marginBottom: "0.5rem",
              }}
            >
              O descarga directamente
            </p>
            <div className="download-btns flex flex-col gap-4">
              <a
                href="https://apps.apple.com/app/pilasfi"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark btn-lg"
                style={{ gap: "0.75rem" }}
                aria-label="Descargar PilasFi en App Store"
              >
                <Apple size={28} />
                <div style={{ textAlign: "left" }}>
                  <p style={{ fontSize: "0.625rem", opacity: 0.8, lineHeight: 1 }}>
                    Descarga en
                  </p>
                  <p style={{ fontWeight: 600, lineHeight: 1.2 }}>App Store</p>
                </div>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.pilasfi"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark btn-lg"
                style={{ gap: "0.75rem" }}
                aria-label="Descargar PilasFi en Google Play"
              >
                <Smartphone size={28} />
                <div style={{ textAlign: "left" }}>
                  <p style={{ fontSize: "0.625rem", opacity: 0.8, lineHeight: 1 }}>
                    Disponible en
                  </p>
                  <p style={{ fontWeight: 600, lineHeight: 1.2 }}>Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
