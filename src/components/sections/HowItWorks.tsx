"use client";

import { motion } from "framer-motion";
import { Mail, Sparkles, Users, BarChart3, ArrowRight, Zap } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Mail,
    title: "Conecta tu email",
    description:
      "Autoriza a PilasFi a leer los correos de tus bancos. Solo leemos notificaciones bancarias, nada más. Tu privacidad está protegida.",
  },
  {
    number: "2",
    icon: Sparkles,
    title: "Detectamos tus gastos",
    description:
      "Automáticamente identificamos cada compra, retiro o transferencia. Soportamos Pichincha, Guayaquil, Produbanco, Diners y más.",
  },
  {
    number: "3",
    icon: Users,
    title: "Invita a tu pareja",
    description:
      "Conecta con tu pareja para ver los gastos del hogar juntos. Creen presupuestos compartidos y definan qué gastos son visibles.",
  },
  {
    number: "4",
    icon: BarChart3,
    title: "Controlen su dinero",
    description:
      "Vean en tiempo real cuánto gasta cada uno, cómo van los presupuestos y tomen mejores decisiones financieras juntos.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section" style={{ background: "var(--color-dark-900)" }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="badge" style={{ margin: "0 auto 1.5rem" }}>
              <Zap size={16} color="#818CF8" />
              <span>Configuración rápida</span>
            </div>
            <h2 className="display-lg">
              Configúralo en{" "}
              <span className="gradient-text">minutos</span>
            </h2>
            <p>
              No necesitas ingresar nada manualmente. Conecta tu email y deja
              que PilasFi haga el trabajo pesado.
            </p>
          </motion.div>
        </div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1.5rem",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                x: 8,
                background: "rgba(255, 255, 255, 0.05)",
                borderColor: "rgba(99, 102, 241, 0.3)",
              }}
              style={{
                display: "flex",
                gap: "1.5rem",
                alignItems: "flex-start",
                padding: "1.75rem",
                background: "rgba(255, 255, 255, 0.03)",
                borderRadius: "20px",
                border: "1px solid rgba(255, 255, 255, 0.06)",
                transition: "all 0.3s ease",
              }}
            >
              <div className="step-number">{step.number}</div>
              <div style={{ flex: 1 }}>
                <div className="flex items-center gap-3" style={{ marginBottom: "0.5rem" }}>
                  <step.icon size={20} color="#818CF8" />
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "white",
                    }}
                  >
                    {step.title}
                  </h3>
                </div>
                <p style={{ color: "rgba(255, 255, 255, 0.6)", lineHeight: 1.7 }}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginTop: "4rem" }}
        >
          <motion.a
            href="#download"
            className="btn btn-primary-glow btn-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{ gap: "0.75rem" }}
          >
            Comenzar Ahora
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
