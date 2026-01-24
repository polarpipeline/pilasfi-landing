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
  Check,
} from "lucide-react";

// Feature data
const features = [
  {
    icon: PieChart,
    title: "Visibilidad total",
    description: "Ve exactamente en qué gastas tu dinero cada mes",
    color: "#7B3FE4",
    bgColor: "#7B3FE4",
    textColor: "white",
    tags: ["Gráficos", "Reportes", "Tendencias"],
  },
  {
    icon: Brain,
    title: "Categorización con IA",
    description: "Aprendizaje automático que categoriza tus gastos",
    color: "#7B3FE4",
    bgColor: "#1A1A3E",
    textColor: "white",
    tags: ["Automático", "Preciso", "Aprende"],
  },
  {
    icon: Mail,
    title: "Lectura de emails",
    description: "Detectamos tus notificaciones bancarias",
    color: "white",
    bgColor: "#037D7D",
    textColor: "white",
    tags: ["Gmail", "Outlook", "+20 bancos"],
  },
  {
    icon: Users,
    title: "Gastos compartidos",
    description: "Vean juntos los gastos del hogar sin conflictos",
    color: "#120D31",
    bgColor: "#F5A88E",
    textColor: "#120D31",
    tags: ["Parejas", "Privacidad", "Compartido"],
  },
  {
    icon: Wallet,
    title: "Presupuestos",
    description: "Crea presupuestos por categoría en segundos",
    color: "#7B3FE4",
    bgColor: "#FFFFFF",
    textColor: "#120D31",
    border: true,
    tags: ["Por categoría", "Alertas", "Metas"],
  },
  {
    icon: Bell,
    title: "Alertas inteligentes",
    description: "Notificaciones cuando te acerques al límite",
    color: "white",
    bgColor: "#7B3FE4",
    textColor: "white",
    tags: ["Push", "Email", "En tiempo real"],
  },
  {
    icon: Target,
    title: "Metas de ahorro",
    description: "Define cuánto quieres ahorrar y ve tu progreso",
    color: "#10B981",
    bgColor: "#1A1A3E",
    textColor: "white",
    tags: ["Progreso", "Motivación", "Logros"],
  },
  {
    icon: Home,
    title: "Control del hogar",
    description: "Arriendo, servicios, supermercado. Todo organizado.",
    color: "white",
    bgColor: "#037D7D",
    textColor: "white",
    tags: ["Arriendo", "Luz", "Agua", "Super"],
  },
];

export default function Features() {
  return (
    <section id="features" style={{ background: "#F5F1EB", padding: "5rem 0" }}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "3rem", maxWidth: "700px", margin: "0 auto 3rem" }}
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
            <Brain size={14} />
            <span>Tu coach financiero con IA</span>
          </div>
          <h2 style={{
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 800,
            color: "#120D31",
            marginBottom: "1rem"
          }}>
            Todo lo que necesitas para{" "}
            <span style={{ color: "#7B3FE4" }}>controlar tu dinero</span>
          </h2>
          <p style={{
            color: "#535A6A",
            fontSize: "1rem",
            lineHeight: 1.7,
          }}>
            Comparte a PilasFi tus gastos y de quienes desees trackear y el resto lo hacemos por ti.
            Centraliza tus gastos (pagos a todas las entidades que realices), reconoce gastos hormigas,
            planifica tu economía y proyecta ahorros potenciales.
          </p>
        </motion.div>

        {/* Features Grid - Simple responsive grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1rem",
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              style={{
                background: feature.bgColor,
                borderRadius: "20px",
                padding: "1.5rem",
                border: feature.border ? "1px solid #E5E5E5" : "none",
                transition: "all 0.3s ease",
              }}
            >
              <feature.icon size={22} color={feature.color} />
              <h3 style={{
                color: feature.textColor,
                fontSize: "1.125rem",
                fontWeight: 700,
                marginTop: "0.75rem",
                marginBottom: "0.375rem",
              }}>
                {feature.title}
              </h3>
              <p style={{
                color: feature.textColor === "white" ? "rgba(255,255,255,0.7)" : "#535A6A",
                fontSize: "0.875rem",
                marginBottom: "1rem",
                lineHeight: 1.5,
              }}>
                {feature.description}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                {feature.tags.map((tag, i) => (
                  <motion.span
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.05, type: "spring" }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.25rem",
                      background: feature.textColor === "white"
                        ? "rgba(255,255,255,0.15)"
                        : "rgba(123, 63, 228, 0.1)",
                      color: feature.textColor === "white"
                        ? "rgba(255,255,255,0.9)"
                        : "#7B3FE4",
                      padding: "0.375rem 0.625rem",
                      borderRadius: "8px",
                      fontSize: "0.7rem",
                      fontWeight: 500,
                    }}
                  >
                    <Check size={10} />
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
