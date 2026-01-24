"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Zap,
  Users,
  Star,
  Sparkles,
} from "lucide-react";

// Trust indicators
const trustIndicators = [
  { icon: Shield, text: "Datos 100% seguros", color: "#10B981" },
  { icon: Zap, text: "100% Gratis", color: "#7B3FE4" },
  { icon: Users, text: "5,000+ usuarios", color: "#037D7D" },
];

// Phone Screen Content Component
function PhoneScreenContent() {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ marginBottom: "1rem" }}>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.7rem", marginBottom: "0.25rem" }}>
          Resumen del mes
        </p>
        <p style={{ color: "white", fontSize: "1.1rem", fontWeight: 700 }}>
          Tus Finanzas
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        style={{
          background: "#7B3FE4",
          borderRadius: "14px",
          padding: "1rem",
          marginBottom: "0.75rem",
        }}
      >
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.7rem", marginBottom: "0.25rem" }}>
          Presupuesto disponible
        </p>
        <p style={{ color: "white", fontSize: "1.75rem", fontWeight: 800, lineHeight: 1.1 }}>
          $1,875
        </p>
        <div style={{ marginTop: "0.5rem" }}>
          <div style={{ height: "5px", borderRadius: "3px", background: "rgba(255,255,255,0.25)", overflow: "hidden" }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "65%" }}
              transition={{ delay: 1, duration: 0.8 }}
              style={{ height: "100%", borderRadius: "3px", background: "white" }}
            />
          </div>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.65rem", marginTop: "0.375rem" }}>
            65% usado
          </p>
        </div>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", marginBottom: "0.75rem" }}>
        {[
          { label: "Hogar", value: "$620", color: "#10B981" },
          { label: "Transporte", value: "$280", color: "#7B3FE4" },
        ].map((stat, i) => (
          <div key={i} style={{ background: "rgba(255,255,255,0.08)", borderRadius: "10px", padding: "0.75rem" }}>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.6rem", marginBottom: "0.25rem" }}>{stat.label}</p>
            <p style={{ color: stat.color, fontWeight: 700, fontSize: "1rem" }}>{stat.value}</p>
          </div>
        ))}
      </div>

      <div style={{ flex: 1 }}>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.6rem", marginBottom: "0.375rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          Auto-categorizado con IA
        </p>
        {[
          { name: "Supermercado", amount: "-$85.50", icon: "🛒", category: "Hogar" },
          { name: "Electricidad", amount: "-$42.00", icon: "💡", category: "Servicios" },
        ].map((tx, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "rgba(255,255,255,0.05)",
              borderRadius: "8px",
              padding: "0.5rem 0.75rem",
              marginBottom: "0.375rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ fontSize: "0.9rem" }}>{tx.icon}</span>
              <div>
                <p style={{ color: "white", fontSize: "0.75rem", fontWeight: 500 }}>{tx.name}</p>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.6rem" }}>{tx.category}</p>
              </div>
            </div>
            <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.75rem", fontWeight: 600 }}>{tx.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FloatingPhone({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.7, ease: "easeOut" }}
      className="animate-float"
    >
      <div
        style={{
          width: "240px",
          height: "480px",
          background: "#1A1A3E",
          borderRadius: "36px",
          padding: "8px",
          boxShadow: "0 25px 60px rgba(26, 26, 62, 0.25)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "8px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80px",
            height: "20px",
            background: "#000",
            borderRadius: "12px",
            zIndex: 20,
          }}
        />
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "#1A1A3E",
            borderRadius: "28px",
            overflow: "hidden",
            padding: "2rem 0.875rem 0.875rem",
            position: "relative",
          }}
        >
          <PhoneScreenContent />
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "#FAF8F4",
        paddingTop: "6rem",
        paddingBottom: "4rem",
        overflow: "hidden",
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        <div className="hero-grid-layout">
          {/* Text Content */}
          <motion.div className="hero-text-content" style={{ opacity }}>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.375rem 0.875rem",
                borderRadius: "9999px",
                marginBottom: "1.25rem",
                background: "rgba(123, 63, 228, 0.1)",
                color: "#7B3FE4",
                fontSize: "0.8125rem",
                fontWeight: 600,
              }}
            >
              <Sparkles size={14} />
              <span>Potenciado con IA</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                marginBottom: "1rem",
              }}
            >
              <span style={{ color: "#7B3FE4" }}>Ponte Pilas</span>
              <br />
              <span style={{ color: "#120D31" }}>con tus finanzas</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{
                fontSize: "1.125rem",
                fontWeight: 500,
                color: "#535A6A",
                marginBottom: "0.75rem",
              }}
            >
              Visibilidad total. Categorización inteligente. Cero Excel.
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{
                fontSize: "1rem",
                lineHeight: 1.6,
                color: "#535A6A",
                marginBottom: "1.5rem",
                maxWidth: "480px",
              }}
            >
              PilasFi categoriza tus gastos automáticamente con IA.
              Comparte gastos con tu pareja y olvídate de las hojas de cálculo.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "1.5rem" }}
            >
              <motion.a
                href="#download"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 1.5rem",
                  background: "#000000",
                  color: "#FFFFFF",
                  borderRadius: "24px",
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                  textDecoration: "none",
                }}
              >
                Comenzar Gratis
                <ArrowRight size={16} />
              </motion.a>
              <motion.a
                href="#how-it-works"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "0.875rem 1.5rem",
                  background: "#FFFFFF",
                  color: "#120D31",
                  borderRadius: "24px",
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                  textDecoration: "none",
                  border: "1px solid #E5E5E5",
                }}
              >
                Ver cómo funciona
              </motion.a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem", marginTop: "1.5rem" }}
            >
              {trustIndicators.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 6,
                      background: `${item.color}15`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <item.icon size={14} color={item.color} />
                  </div>
                  <span style={{ color: "#535A6A", fontSize: "0.8125rem", fontWeight: 500 }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              style={{
                display: "flex",
                gap: "2rem",
                marginTop: "2rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid #E5E5E5",
                flexWrap: "wrap",
              }}
            >
              {[
                { value: "10K+", label: "Usuarios activos" },
                { value: "98%", label: "Gastos categorizados" },
                { value: "4.9", label: "Rating App Store", icon: Star },
              ].map((stat, i) => (
                <div key={i} style={{ textAlign: "left" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                    <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "#7B3FE4" }}>
                      {stat.value}
                    </span>
                    {stat.icon && <stat.icon size={14} fill="#F59E0B" color="#F59E0B" />}
                  </div>
                  <span style={{ color: "#86909E", fontSize: "0.75rem" }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Phone */}
          <motion.div
            className="hero-phone-wrapper"
            style={{
              height: "500px",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              y,
            }}
          >
            <FloatingPhone delay={0.4} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
