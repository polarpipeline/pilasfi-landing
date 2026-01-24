"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Brain,
  PieChart,
  Target,
  Users,
  Bell,
  Wallet,
  Home,
  Eye,
  Zap,
} from "lucide-react";

interface Feature {
  icon: typeof Mail;
  title: string;
  description: string;
  color: "purple" | "navy" | "teal" | "coral" | "white";
  size?: "large" | "normal";
}

const features: Feature[] = [
  {
    icon: PieChart,
    title: "Visibilidad Total de tus Gastos",
    description:
      "Ve exactamente en qué gastas tu dinero. Gráficos claros y categorías automáticas.",
    color: "purple",
    size: "large",
  },
  {
    icon: Brain,
    title: "Categorización con IA",
    description:
      "Aprendizaje automático que categoriza tus gastos inteligentemente.",
    color: "navy",
  },
  {
    icon: Eye,
    title: "Adiós a las Sorpresas",
    description:
      "Nunca más te preguntes '¿en qué se fue el dinero?'.",
    color: "teal",
  },
  {
    icon: Users,
    title: "Gastos Compartidos",
    description:
      "Conecta con tu pareja y vean juntos los gastos del hogar.",
    color: "coral",
    size: "large",
  },
  {
    icon: Wallet,
    title: "Presupuestos Inteligentes",
    description:
      "Crea presupuestos por categoría en segundos. Sin Excel.",
    color: "white",
  },
  {
    icon: Mail,
    title: "Lectura de Emails",
    description:
      "Detectamos automáticamente las notificaciones de tus bancos.",
    color: "white",
  },
  {
    icon: Target,
    title: "Metas de Ahorro",
    description:
      "Define cuánto quieres ahorrar y ve tu progreso.",
    color: "navy",
  },
  {
    icon: Home,
    title: "Control del Hogar",
    description:
      "Arriendo, servicios, supermercado. Todo organizado.",
    color: "teal",
  },
  {
    icon: Bell,
    title: "Alertas Inteligentes",
    description:
      "Notificaciones cuando te acerques al límite.",
    color: "purple",
  },
];

// Feature Card Component
function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const colorStyles = {
    purple: {
      background: "#7B3FE4",
      color: "#FFFFFF",
      iconBg: "rgba(255,255,255,0.2)",
    },
    navy: {
      background: "#1A1A3E",
      color: "#FFFFFF",
      iconBg: "rgba(255,255,255,0.15)",
    },
    teal: {
      background: "#037D7D",
      color: "#FFFFFF",
      iconBg: "rgba(255,255,255,0.2)",
    },
    coral: {
      background: "#F5A88E",
      color: "#120D31",
      iconBg: "rgba(18,13,49,0.1)",
    },
    white: {
      background: "#FFFFFF",
      color: "#120D31",
      iconBg: "rgba(123, 63, 228, 0.1)",
    },
  };

  const style = colorStyles[feature.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={feature.size === "large" ? "bento-large" : ""}
      style={{
        background: style.background,
        color: style.color,
        borderRadius: "20px",
        padding: "1.75rem",
        border: feature.color === "white" ? "1px solid #E5E5E5" : "none",
        height: "100%",
        minHeight: feature.size === "large" ? "220px" : "180px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 10,
          background: style.iconBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1rem",
        }}
      >
        <feature.icon size={22} />
      </div>

      {/* Content */}
      <h3
        style={{
          fontSize: feature.size === "large" ? "1.375rem" : "1.125rem",
          fontWeight: 700,
          marginBottom: "0.5rem",
          lineHeight: 1.3,
        }}
      >
        {feature.title}
      </h3>
      <p
        style={{
          fontSize: "0.9375rem",
          lineHeight: 1.6,
          opacity: feature.color === "coral" || feature.color === "white" ? 0.7 : 0.8,
        }}
      >
        {feature.description}
      </p>
    </motion.div>
  );
}

// Stats Component
function Stats() {
  const stats = [
    { number: "98%", label: "Gastos categorizados" },
    { number: "100%", label: "Gratis siempre" },
    { number: "5,000+", label: "Usuarios activos" },
    { number: "4.9", label: "Rating App Store" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="stats-grid"
      style={{ marginTop: "4rem" }}
    >
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          style={{
            textAlign: "center",
            padding: "1.5rem",
            background: "#FFFFFF",
            borderRadius: "16px",
            border: "1px solid #E5E5E5",
          }}
        >
          <div className="stat-number">{stat.number}</div>
          <p style={{ color: "#86909E", marginTop: "0.5rem", fontSize: "0.9375rem" }}>
            {stat.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function Features() {
  return (
    <section
      id="features"
      className="section"
      style={{ background: "#F5F1EB" }}
    >
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="badge-light"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 1rem",
                borderRadius: "9999px",
                marginBottom: "1rem",
                background: "rgba(123, 63, 228, 0.1)",
                color: "#7B3FE4",
                fontSize: "0.875rem",
                fontWeight: 600,
              }}
            >
              <Zap size={16} />
              <span>Dile adiós al Excel</span>
            </div>
            <h2 className="display-lg">
              Todo lo que necesitas para{" "}
              <span style={{ color: "#7B3FE4" }}>controlar tu dinero</span>
            </h2>
            <p>
              Aprendizaje automático que categoriza tus gastos, presupuestos inteligentes
              y la posibilidad de compartir con tu pareja.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Stats */}
        <Stats />
      </div>
    </section>
  );
}
