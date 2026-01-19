"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Brain,
  PieChart,
  Target,
  Users,
  Bell,
  Shield,
  TrendingUp,
  Wallet,
  Heart,
  Home,
  Eye,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Finanzas en Pareja",
    description:
      "Conecta con tu pareja y manejen juntos los gastos del hogar. Vean quién gastó qué y mantengan el equilibrio financiero.",
    highlight: true,
  },
  {
    icon: Home,
    title: "Presupuesto del Hogar",
    description:
      "Crea presupuestos compartidos para el arriendo, servicios, supermercado y más. Ambos ven el progreso en tiempo real.",
    highlight: true,
  },
  {
    icon: Eye,
    title: "Gastos Privados y Compartidos",
    description:
      "Decide qué gastos son visibles para tu pareja y cuáles son privados. Respetamos tu privacidad financiera.",
    highlight: true,
  },
  {
    icon: Mail,
    title: "Lectura Automática de Emails",
    description:
      "Conecta tu correo y PilasFi detecta automáticamente las notificaciones de tus bancos. Sin ingresar nada manual.",
  },
  {
    icon: Brain,
    title: "Categorización Inteligente",
    description:
      "Nuestro sistema identifica si gastaste en comida, transporte o entretenimiento. Aprende de tus hábitos.",
  },
  {
    icon: PieChart,
    title: "Dashboard en Tiempo Real",
    description:
      "Visualiza ingresos, gastos y tendencias con gráficos claros. Compara mes a mes.",
  },
  {
    icon: Target,
    title: "Metas de Ahorro",
    description:
      "Define cuánto quieres ahorrar y para qué. PilasFi te muestra tu progreso hacia tus objetivos.",
  },
  {
    icon: Wallet,
    title: "Presupuestos por Categoría",
    description:
      "Establece límites para comida, transporte, entretenimiento. Recibe alertas cuando te acerques al límite.",
  },
  {
    icon: Bell,
    title: "Alertas Inteligentes",
    description:
      "Notificaciones cuando detectamos gastos inusuales o cuando superas un presupuesto.",
  },
];

export default function Features() {
  return (
    <section id="features" className="section section-gray">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="badge" style={{ margin: "0 auto 1rem" }}>
              <Heart size={16} />
              <span>Diseñado para parejas</span>
            </div>
            <h2 className="heading-lg">
              Todo lo que necesitan para{" "}
              <span className="gradient-text">manejar su dinero juntos</span>
            </h2>
            <p>
              Automatizamos lo tedioso para que ustedes solo se enfoquen en
              disfrutar su vida financiera en pareja.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid-features">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="card"
              style={{
                borderColor: feature.highlight
                  ? "var(--color-primary)"
                  : undefined,
                borderWidth: feature.highlight ? 2 : 1,
              }}
            >
              <div className="feature-icon">
                <feature.icon size={28} />
              </div>
              <h3
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  marginBottom: "0.75rem",
                  color: "var(--color-gray-900)",
                }}
              >
                {feature.title}
              </h3>
              <p style={{ color: "var(--color-gray-500)", fontSize: "0.9375rem" }}>
                {feature.description}
              </p>
              {feature.highlight && (
                <span
                  style={{
                    display: "inline-block",
                    marginTop: "1rem",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--color-primary)",
                    background: "rgba(99, 102, 241, 0.1)",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "9999px",
                  }}
                >
                  Para parejas
                </span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="stats-grid"
          style={{
            marginTop: "4rem",
            display: "grid",
            gap: "2rem",
            textAlign: "center",
          }}
        >
          {[
            { number: "7+", label: "Bancos soportados" },
            { number: "100%", label: "Gratis" },
            { number: "5,000+", label: "Parejas activas" },
            { number: "4.9★", label: "Calificación" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="stat-number">{stat.number}</div>
              <p style={{ color: "var(--color-gray-500)", marginTop: "0.5rem" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
