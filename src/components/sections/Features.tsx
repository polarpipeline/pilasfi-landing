"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, MouseEvent } from "react";
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
  Sparkles,
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
}

const features: Feature[] = [
  {
    icon: Users,
    title: "Finanzas en Pareja",
    description:
      "Conecta con tu pareja y manejen juntos los gastos del hogar. Vean quién gastó qué y mantengan el equilibrio financiero en tiempo real.",
    size: "large",
    gradient: "linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)",
    highlight: true,
  },
  {
    icon: Mail,
    title: "Lectura Automática",
    description:
      "Conecta tu correo y PilasFi detecta automáticamente las notificaciones de tus bancos.",
    size: "small",
  },
  {
    icon: Brain,
    title: "IA Inteligente",
    description:
      "Categorización automática que aprende de tus hábitos de gasto.",
    size: "small",
  },
  {
    icon: Home,
    title: "Presupuesto del Hogar",
    description:
      "Crea presupuestos compartidos para el arriendo, servicios, supermercado y más. Ambos ven el progreso en tiempo real.",
    size: "medium",
    gradient: "linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%)",
    highlight: true,
  },
  {
    icon: Eye,
    title: "Privacidad Inteligente",
    description:
      "Decide qué gastos son visibles para tu pareja y cuáles son privados. Tu privacidad financiera es sagrada.",
    size: "medium",
    highlight: true,
  },
  {
    icon: PieChart,
    title: "Dashboard en Tiempo Real",
    description:
      "Visualiza ingresos, gastos y tendencias con gráficos claros.",
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
    icon: Wallet,
    title: "Presupuestos por Categoría",
    description:
      "Límites para comida, transporte, entretenimiento. Alertas cuando te acerques al límite.",
    size: "small",
  },
  {
    icon: Bell,
    title: "Alertas Inteligentes",
    description:
      "Notificaciones de gastos inusuales o cuando superas un presupuesto.",
    size: "small",
  },
];

// Bento Card Component with mouse tracking
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
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      className={`bento-card ${getSizeClass(feature.size)}`}
      style={{
        background: feature.gradient || "rgba(255, 255, 255, 0.03)",
        "--mouse-x": mouseX,
        "--mouse-y": mouseY,
      } as React.CSSProperties}
    >
      {/* Icon */}
      <div
        className="feature-icon"
        style={{
          background: feature.highlight
            ? "linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)"
            : undefined,
          color: feature.highlight ? "white" : undefined,
        }}
      >
        <feature.icon size={feature.size === "large" ? 32 : 26} />
      </div>

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
            lineHeight: 1.6,
          }}
        >
          {feature.description}
        </p>

        {feature.highlight && (
          <span
            style={{
              display: "inline-block",
              marginTop: "1.25rem",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "var(--color-primary-light)",
              background: "rgba(99, 102, 241, 0.15)",
              padding: "0.375rem 0.875rem",
              borderRadius: "9999px",
              border: "1px solid rgba(99, 102, 241, 0.3)",
            }}
          >
            Para parejas
          </span>
        )}
      </div>

      {/* Large card decoration */}
      {feature.size === "large" && (
        <div
          style={{
            position: "absolute",
            bottom: "-20%",
            right: "-10%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)",
            filter: "blur(40px)",
            pointerEvents: "none",
          }}
        />
      )}
    </motion.div>
  );
}

// Stats Component
function Stats() {
  const stats = [
    { number: "7+", label: "Bancos soportados" },
    { number: "100%", label: "Gratis siempre" },
    { number: "5,000+", label: "Parejas activas" },
    { number: "4.9", label: "Rating App Store" },
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
        gap: "2rem",
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
          style={{
            padding: "2rem",
            background: "rgba(255, 255, 255, 0.03)",
            borderRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.06)",
          }}
        >
          <div className="stat-number">{stat.number}</div>
          <p style={{ color: "rgba(255, 255, 255, 0.5)", marginTop: "0.5rem", fontSize: "0.9375rem" }}>
            {stat.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function Features() {
  return (
    <section id="features" className="section" style={{ background: "var(--color-dark-800)" }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="badge" style={{ margin: "0 auto 1.5rem" }}>
              <Heart size={16} color="#818CF8" />
              <span>Diseñado para parejas</span>
            </div>
            <h2 className="display-lg">
              Todo lo que necesitan para{" "}
              <span className="gradient-text">manejar su dinero juntos</span>
            </h2>
            <p>
              Automatizamos lo tedioso para que ustedes solo se enfoquen en
              disfrutar su vida financiera en pareja.
            </p>
          </motion.div>
        </div>

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
