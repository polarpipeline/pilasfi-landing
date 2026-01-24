"use client";

import { motion, useMotionValue } from "framer-motion";
import { useRef, MouseEvent } from "react";
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
  Sparkles,
  Zap,
} from "lucide-react";

// Bento card types
type BentoSize = "large" | "medium" | "small" | "tall";

interface Feature {
  icon: typeof Mail;
  title: string;
  description: string;
  size: BentoSize;
  gradient?: string;
  highlight?: boolean;
  tag?: string;
}

const features: Feature[] = [
  {
    icon: PieChart,
    title: "Visibilidad Total de tus Gastos",
    description:
      "Ve exactamente en qué gastas tu dinero. Gráficos claros, categorías automáticas y un dashboard que te muestra la realidad de tus finanzas en tiempo real.",
    size: "large",
    gradient: "linear-gradient(135deg, rgba(246, 133, 27, 0.12) 0%, rgba(139, 92, 246, 0.12) 100%)",
    highlight: true,
    tag: "Más popular",
  },
  {
    icon: Brain,
    title: "Categorización con IA",
    description:
      "Aprendizaje automático que categoriza tus gastos inteligentemente. Aprende de tus hábitos y mejora con el tiempo.",
    size: "small",
  },
  {
    icon: Eye,
    title: "Adiós a las Sorpresas",
    description:
      "Nunca más te preguntes '¿en qué se fue el dinero?'. Visibilidad total, cero misterios.",
    size: "small",
  },
  {
    icon: Users,
    title: "Gastos Compartidos en Pareja",
    description:
      "Conecta con tu pareja y vean juntos los gastos del hogar. Quién pagó qué, cuánto aporta cada uno, todo transparente y sin peleas.",
    size: "medium",
    gradient: "linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)",
    highlight: true,
    tag: "Para parejas",
  },
  {
    icon: Wallet,
    title: "Presupuestos Inteligentes",
    description:
      "Crea presupuestos por categoría en segundos. Olvídate del Excel y las hojas de cálculo. PilasFi hace el trabajo duro por ti.",
    size: "medium",
    highlight: true,
  },
  {
    icon: Mail,
    title: "Lectura Automática de Emails",
    description:
      "Conecta tu correo y detectamos automáticamente las notificaciones de tus bancos.",
    size: "small",
  },
  {
    icon: Target,
    title: "Metas de Ahorro",
    description:
      "Define cuánto quieres ahorrar y para qué. Ve tu progreso automáticamente.",
    size: "small",
  },
  {
    icon: Home,
    title: "Control del Hogar",
    description:
      "Arriendo, servicios, supermercado y más. Todo organizado y categorizado automáticamente.",
    size: "small",
  },
  {
    icon: Bell,
    title: "Alertas Inteligentes",
    description:
      "Notificaciones cuando te acerques al límite de tu presupuesto o detectemos gastos inusuales.",
    size: "small",
  },
];

// Bento Card Component with mouse tracking and MetaMask styling
function BentoCard({ feature, index }: { feature: Feature; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const getSizeClass = (size: BentoSize) => {
    switch (size) {
      case "large":
        return "bento-large";
      case "medium":
        return "bento-medium";
      case "tall":
        return "bento-tall";
      default:
        return "";
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`feature-card-mm ${getSizeClass(feature.size)}`}
      style={{
        background: feature.gradient || "rgba(255, 255, 255, 0.02)",
        "--mouse-x": mouseX,
        "--mouse-y": mouseY,
        position: "relative",
      } as React.CSSProperties}
    >
      {/* Animated top border gradient */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05 + 0.3, duration: 0.6 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, var(--mm-orange), var(--mm-purple), var(--mm-cyan))",
          transformOrigin: "left",
          borderRadius: "24px 24px 0 0",
        }}
      />

      {/* Icon with glow */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="icon-glow-box"
        style={{
          background: feature.highlight
            ? "linear-gradient(135deg, var(--mm-orange) 0%, var(--mm-orange-dark) 100%)"
            : "linear-gradient(135deg, rgba(246, 133, 27, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)",
          color: feature.highlight ? "white" : "var(--mm-orange-light)",
          marginBottom: "1.5rem",
        }}
      >
        <feature.icon size={feature.size === "large" ? 28 : 24} />
      </motion.div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <h3
          style={{
            fontSize: feature.size === "large" ? "1.5rem" : "1.125rem",
            fontWeight: 700,
            marginBottom: "0.75rem",
            color: "white",
          }}
        >
          {feature.title}
        </h3>
        <p
          style={{
            color: "rgba(255, 255, 255, 0.6)",
            fontSize: feature.size === "large" ? "1rem" : "0.9375rem",
            lineHeight: 1.7,
          }}
        >
          {feature.description}
        </p>

        {feature.tag && (
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 + 0.4 }}
            style={{
              display: "inline-block",
              marginTop: "1.25rem",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "var(--mm-orange-light)",
              background: "rgba(246, 133, 27, 0.15)",
              padding: "0.375rem 0.875rem",
              borderRadius: "9999px",
              border: "1px solid rgba(246, 133, 27, 0.3)",
            }}
          >
            {feature.tag}
          </motion.span>
        )}
      </div>

      {/* Large card glow decoration */}
      {feature.size === "large" && (
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 4, repeat: Infinity }}
          style={{
            position: "absolute",
            bottom: "-20%",
            right: "-10%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(246, 133, 27, 0.15) 0%, transparent 70%)",
            filter: "blur(40px)",
            pointerEvents: "none",
          }}
        />
      )}

      {/* Hover spotlight effect */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "24px",
          background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(246, 133, 27, 0.08), transparent 40%)`,
          opacity: 0,
          transition: "opacity 0.3s",
          pointerEvents: "none",
        }}
        whileHover={{ opacity: 1 }}
      />
    </motion.div>
  );
}

// Stats Component with MetaMask styling
function Stats() {
  const stats = [
    { number: "98%", label: "Gastos categorizados", color: "#F6851B" },
    { number: "100%", label: "Gratis siempre", color: "#10B981" },
    { number: "5,000+", label: "Usuarios activos", color: "#8B5CF6" },
    { number: "4.9", label: "Rating App Store", color: "#06B6D4" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{
        marginTop: "5rem",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1.5rem",
        textAlign: "center",
      }}
      className="stats-grid"
    >
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          style={{
            padding: "2rem",
            background: "rgba(255, 255, 255, 0.02)",
            borderRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.06)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Top accent line */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "60px",
              height: "3px",
              background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)`,
              borderRadius: "0 0 4px 4px",
            }}
          />
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 + 0.2, type: "spring", stiffness: 200 }}
            style={{
              fontSize: "3rem",
              fontWeight: 800,
              background: `linear-gradient(135deg, ${stat.color} 0%, var(--mm-purple) 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              lineHeight: 1,
            }}
          >
            {stat.number}
          </motion.div>
          <p style={{ color: "rgba(255, 255, 255, 0.5)", marginTop: "0.75rem", fontSize: "0.9375rem" }}>
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
      style={{
        background: "var(--color-dark-800)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorations */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(246, 133, 27, 0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "-10%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div className="section-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="badge"
              style={{ margin: "0 auto 1.5rem" }}
            >
              <Zap size={16} color="#F6851B" />
              <span>Dile adiós al Excel</span>
            </motion.div>
            <h2 className="display-lg">
              Todo lo que necesitas para{" "}
              <span className="gradient-text-mm-glow">controlar tu dinero</span>
            </h2>
            <p>
              Aprendizaje automático que categoriza tus gastos, presupuestos inteligentes
              y la posibilidad de compartir con tu pareja. Sin hojas de cálculo.
            </p>
          </motion.div>
        </div>

        {/* Animated Separator Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            width: "120px",
            height: "3px",
            background: "linear-gradient(90deg, var(--mm-orange), var(--mm-purple))",
            margin: "0 auto 4rem",
            borderRadius: "2px",
          }}
        />

        {/* Bento Grid */}
        <div className="bento-grid">
          {features.map((feature, index) => (
            <BentoCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Stats */}
        <Stats />
      </div>
    </section>
  );
}
