"use client";

import { motion } from "framer-motion";
import { Mail, Sparkles, Users, BarChart3, ArrowRight, Zap, Check } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Mail,
    title: "Conecta tu email",
    description:
      "Autoriza a PilasFi a leer los correos de tus bancos. Solo leemos notificaciones bancarias, nada más.",
    color: "#7B3FE4",
    features: ["Gmail, Outlook, Yahoo", "100% seguro", "Solo lectura"],
  },
  {
    number: "2",
    icon: Sparkles,
    title: "Detectamos tus gastos",
    description:
      "Automáticamente identificamos cada compra, retiro o transferencia con IA.",
    color: "#037D7D",
    features: ["Categorización automática", "Detección en segundos", "+20 bancos"],
  },
  {
    number: "3",
    icon: Users,
    title: "Invita a tu pareja",
    description:
      "Conecta con tu pareja para ver los gastos del hogar juntos sin conflictos.",
    color: "#F5A88E",
    features: ["Gastos compartidos", "Privacidad individual", "Presupuestos en común"],
  },
  {
    number: "4",
    icon: BarChart3,
    title: "Controlen su dinero",
    description:
      "Vean en tiempo real cuánto gasta cada uno y tomen mejores decisiones juntos.",
    color: "#1A1A3E",
    features: ["Reportes automáticos", "Alertas inteligentes", "Metas de ahorro"],
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ background: "#FFFFFF", padding: "5rem 0" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 3rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.375rem 0.875rem",
                borderRadius: "9999px",
                marginBottom: "0.75rem",
                background: "rgba(123, 63, 228, 0.1)",
                color: "#7B3FE4",
                fontSize: "0.8125rem",
                fontWeight: 600,
              }}
            >
              <Zap size={14} />
              <span>Configuración rápida</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.25rem)", fontWeight: 800, color: "#120D31", marginBottom: "0.5rem" }}>
              Configúralo en{" "}
              <span style={{ color: "#7B3FE4" }}>minutos</span>
            </h2>
            <p style={{ color: "#535A6A", fontSize: "1rem", lineHeight: 1.6 }}>
              No necesitas ingresar nada manualmente. Conecta tu email y deja
              que PilasFi haga el trabajo pesado.
            </p>
          </motion.div>
        </div>

        {/* Steps Grid */}
        <div className="how-it-works-grid">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4, boxShadow: "0 10px 40px rgba(0,0,0,0.08)" }}
              className="step-card"
              style={{
                padding: "1.5rem",
                background: "#FFFFFF",
                borderRadius: "20px",
                border: "1px solid #E5E5E5",
                transition: "all 0.3s ease",
              }}
            >
              {/* Step Number Badge */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: step.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: step.color === "#F5A88E" ? "#120D31" : "white",
                    fontWeight: 800,
                    fontSize: "1.25rem",
                  }}
                >
                  {step.number}
                </motion.div>
                <step.icon size={24} color={step.color} style={{ opacity: 0.5 }} />
              </div>

              {/* Title & Description */}
              <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#120D31", marginBottom: "0.5rem" }}>
                {step.title}
              </h3>
              <p style={{ color: "#535A6A", lineHeight: 1.5, fontSize: "0.875rem", marginBottom: "1rem" }}>
                {step.description}
              </p>

              {/* Feature Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {step.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.25rem",
                      background: `${step.color}10`,
                      color: step.color === "#F5A88E" ? "#120D31" : step.color,
                      padding: "0.375rem 0.625rem",
                      borderRadius: "8px",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                    }}
                  >
                    <Check size={12} />
                    {feature}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Connection Lines (Desktop Only) */}
        <div className="connection-lines">
          <svg viewBox="0 0 100 20" preserveAspectRatio="none" style={{ width: "100%", height: "20px", marginTop: "-10px" }}>
            <motion.path
              d="M 0 10 L 100 10"
              stroke="#E5E5E5"
              strokeWidth="2"
              strokeDasharray="5,5"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
          </svg>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginTop: "3rem" }}
        >
          <motion.a
            href="#download"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "1rem 2rem",
              background: "#000000",
              color: "#FFFFFF",
              borderRadius: "24px",
              fontWeight: 600,
              fontSize: "1rem",
              textDecoration: "none",
            }}
          >
            Comenzar Ahora
            <ArrowRight size={18} />
          </motion.a>
          <p style={{ color: "#86909E", fontSize: "0.8125rem", marginTop: "0.75rem" }}>
            100% gratis • Sin tarjeta de crédito
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        .how-it-works-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .connection-lines {
          display: none;
        }

        @media (min-width: 640px) {
          .how-it-works-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .how-it-works-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 1.25rem;
          }

          .connection-lines {
            display: block;
            max-width: 800px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
