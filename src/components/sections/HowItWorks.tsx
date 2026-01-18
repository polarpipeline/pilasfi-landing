"use client";

import { motion } from "framer-motion";
import { Mail, Sparkles, Users, BarChart3 } from "lucide-react";

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
    <section id="how-it-works" className="section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg">
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
              style={{
                display: "flex",
                gap: "1.5rem",
                alignItems: "flex-start",
                padding: "1.5rem",
                background: "var(--color-white)",
                borderRadius: "16px",
                border: "1px solid var(--color-gray-100)",
              }}
            >
              <div className="step-number">{step.number}</div>
              <div>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    marginBottom: "0.5rem",
                    color: "var(--color-gray-900)",
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ color: "var(--color-gray-500)" }}>
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
          style={{ textAlign: "center", marginTop: "3rem" }}
        >
          <a href="#download" className="btn btn-primary btn-lg">
            Comenzar Ahora
          </a>
        </motion.div>
      </div>
    </section>
  );
}
