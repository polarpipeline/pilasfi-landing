"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Apple,
  Smartphone,
  Shield,
  Zap,
  Users,
  Mail,
  CheckCircle2,
  Loader2,
  ArrowRight,
  Sparkles,
  Rocket,
} from "lucide-react";

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

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setErrorMessage("Algo salió mal. Por favor intenta de nuevo.");
    }
  };

  return (
    <section
      id="download"
      className="section"
      style={{
        background: "var(--color-dark-950)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Effects */}
      <div className="mesh-gradient-bg" style={{ opacity: 0.5 }} />

      {/* Grid Pattern */}
      <div
        className="grid-pattern"
        style={{
          opacity: 0.3,
          maskImage: "radial-gradient(ellipse at center, black 20%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 80%)",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="animated-border"
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
            padding: "4rem 3rem",
          }}
        >
          {/* Gradient Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{
              position: "absolute",
              top: "-30%",
              left: "-20%",
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(246, 133, 27, 0.2) 0%, transparent 70%)",
              filter: "blur(60px)",
              pointerEvents: "none",
            }}
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.4, 0.3],
            }}
            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
            style={{
              position: "absolute",
              bottom: "-30%",
              right: "-20%",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)",
              filter: "blur(60px)",
              pointerEvents: "none",
            }}
          />

          {/* Content */}
          <div style={{ position: "relative", zIndex: 10 }}>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, type: "spring" }}
              className="badge pulse-ring"
              style={{
                margin: "0 auto 1.5rem",
                background: "rgba(16, 185, 129, 0.15)",
                borderColor: "rgba(16, 185, 129, 0.3)",
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#10B981",
                  boxShadow: "0 0 10px #10B981",
                }}
              />
              <span style={{ color: "#10B981" }}>Disponible ahora</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="display-lg"
              style={{ marginBottom: "1.25rem" }}
            >
              Empiecen a controlar su dinero{" "}
              <span className="gradient-text-mm-glow">juntos</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-body-lg"
              style={{
                marginBottom: "2.5rem",
                maxWidth: "500px",
                margin: "0 auto 2.5rem",
              }}
            >
              Únete a miles de usuarios que ya dijeron adiós al Excel.
              Ponte pilas con tus finanzas. Es gratis y toma minutos configurar.
            </motion.p>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-6"
              style={{ marginBottom: "2.5rem" }}
            >
              {[
                { icon: Zap, text: "2 min para configurar", color: "#F6851B" },
                { icon: Shield, text: "100% seguro", color: "#10B981" },
                { icon: Users, text: "Perfecto para parejas", color: "#8B5CF6" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-2"
                  style={{ color: "rgba(255, 255, 255, 0.7)" }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 10,
                      background: `${item.color}20`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <item.icon size={16} color={item.color} />
                  </div>
                  <span style={{ fontSize: "0.9375rem", fontWeight: 500 }}>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Email Waitlist Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              style={{
                marginBottom: "2.5rem",
                padding: "2rem",
                background: "rgba(255, 255, 255, 0.02)",
                borderRadius: "20px",
                border: "1px solid rgba(246, 133, 27, 0.2)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Subtle shimmer */}
              <div className="shimmer" style={{ position: "absolute", inset: 0, opacity: 0.3 }} />

              <div style={{ position: "relative", zIndex: 2 }}>
                <h3
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    marginBottom: "0.5rem",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                  }}
                >
                  <Rocket size={20} color="#F6851B" />
                  Sé el primero en enterarte
                </h3>
                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.5)",
                    fontSize: "0.875rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  Únete a la lista de espera y te notificaremos cuando PilasFi esté disponible
                </p>

                <form onSubmit={handleSubmit} style={{ maxWidth: "450px", margin: "0 auto" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      flexDirection: "column",
                    }}
                    className="sm:flex-row"
                  >
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
                        padding: "1rem 1.25rem",
                        borderRadius: "14px",
                        border: `1px solid ${status === "error" ? "#EF4444" : "rgba(255, 255, 255, 0.1)"}`,
                        background: "rgba(255, 255, 255, 0.05)",
                        color: "white",
                        fontSize: "1rem",
                        outline: "none",
                        transition: "all 0.3s ease",
                      }}
                    />
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={status === "loading" || status === "success"}
                      className="btn btn-metamask"
                      style={{
                        padding: "1rem 1.75rem",
                        whiteSpace: "nowrap",
                        position: "relative",
                        overflow: "hidden",
                      }}
                      aria-label="Suscribirse a la lista de espera"
                      aria-busy={status === "loading"}
                    >
                      <span style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center", gap: "0.5rem" }}>
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
                      </span>
                    </motion.button>
                  </div>

                  {status === "error" && errorMessage && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{ color: "#EF4444", fontSize: "0.875rem", marginTop: "0.75rem", textAlign: "left" }}
                    >
                      {errorMessage}
                    </motion.p>
                  )}
                  {status === "success" && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{ color: "#10B981", fontSize: "0.875rem", marginTop: "0.75rem", textAlign: "left" }}
                    >
                      ¡Perfecto! Te notificaremos cuando esté disponible.
                    </motion.p>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Separator */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              style={{
                width: "80px",
                height: "2px",
                background: "linear-gradient(90deg, transparent, rgba(246, 133, 27, 0.5), transparent)",
                margin: "2rem auto",
              }}
            />

            {/* Download Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="flex flex-col gap-4 justify-center"
              style={{ alignItems: "center" }}
            >
              <p
                style={{
                  color: "rgba(255, 255, 255, 0.4)",
                  fontSize: "0.875rem",
                  marginBottom: "0.5rem",
                }}
              >
                O descarga directamente
              </p>
              <div className="download-btns flex flex-col gap-4">
                <motion.a
                  href="https://apps.apple.com/app/pilasfi"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.03,
                    borderColor: "rgba(246, 133, 27, 0.5)",
                    boxShadow: "0 10px 40px rgba(246, 133, 27, 0.15)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="btn btn-dark btn-lg neon-glow"
                  style={{
                    gap: "0.875rem",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                  aria-label="Descargar PilasFi en App Store"
                >
                  <Apple size={28} />
                  <div style={{ textAlign: "left" }}>
                    <p style={{ fontSize: "0.625rem", opacity: 0.7, lineHeight: 1, marginBottom: "0.125rem" }}>
                      Descarga en
                    </p>
                    <p style={{ fontWeight: 700, lineHeight: 1.2, fontSize: "1.125rem" }}>App Store</p>
                  </div>
                </motion.a>
                <motion.a
                  href="https://play.google.com/store/apps/details?id=com.pilasfi"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.03,
                    borderColor: "rgba(139, 92, 246, 0.5)",
                    boxShadow: "0 10px 40px rgba(139, 92, 246, 0.15)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="btn btn-dark btn-lg neon-glow"
                  style={{
                    gap: "0.875rem",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                  aria-label="Descargar PilasFi en Google Play"
                >
                  <Smartphone size={28} />
                  <div style={{ textAlign: "left" }}>
                    <p style={{ fontSize: "0.625rem", opacity: 0.7, lineHeight: 1, marginBottom: "0.125rem" }}>
                      Disponible en
                    </p>
                    <p style={{ fontWeight: 700, lineHeight: 1.2, fontSize: "1.125rem" }}>Google Play</p>
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
