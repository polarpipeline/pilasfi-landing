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

// Phone Screen Content Component - Clean Design
function PhoneScreenContent() {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <div style={{ marginBottom: "1.25rem" }}>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.75rem", marginBottom: "0.25rem" }}>
          Resumen del mes
        </p>
        <p style={{ color: "white", fontSize: "1.25rem", fontWeight: 700 }}>
          Tus Finanzas
        </p>
      </div>

      {/* Main Card - Solid Color, No Gradient */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        style={{
          background: "#7B3FE4",
          borderRadius: "16px",
          padding: "1.25rem",
          marginBottom: "1rem",
        }}
      >
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.75rem", marginBottom: "0.25rem" }}>
          Presupuesto disponible
        </p>
        <p style={{ color: "white", fontSize: "2rem", fontWeight: 800, lineHeight: 1.1 }}>
          $1,875
        </p>
        <div style={{ marginTop: "0.75rem" }}>
          <div
            style={{
              height: "6px",
              borderRadius: "3px",
              background: "rgba(255,255,255,0.25)",
              overflow: "hidden",
            }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "65%" }}
              transition={{ delay: 1, duration: 0.8 }}
              style={{
                height: "100%",
                borderRadius: "3px",
                background: "white",
              }}
            />
          </div>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.7rem", marginTop: "0.5rem" }}>
            65% del presupuesto usado
          </p>
        </div>
      </motion.div>

      {/* Stats Row - Categories */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "1rem" }}>
        {[
          { label: "Hogar", value: "$620", color: "#10B981" },
          { label: "Transporte", value: "$280", color: "#7B3FE4" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 + i * 0.1 }}
            style={{
              background: "rgba(255,255,255,0.08)",
              borderRadius: "12px",
              padding: "0.875rem",
            }}
          >
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.65rem", marginBottom: "0.25rem" }}>
              {stat.label}
            </p>
            <p style={{ color: stat.color, fontWeight: 700, fontSize: "1.125rem" }}>{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Recent Transactions */}
      <div style={{ flex: 1 }}>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.65rem", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          Auto-categorizado con IA
        </p>
        {[
          { name: "Supermercado", amount: "-$85.50", icon: "🛒", category: "Hogar" },
          { name: "Electricidad", amount: "-$42.00", icon: "💡", category: "Servicios" },
          { name: "Netflix", amount: "-$15.99", icon: "🎬", category: "Entretenimiento" },
        ].map((tx, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 + i * 0.1 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "rgba(255,255,255,0.05)",
              borderRadius: "10px",
              padding: "0.625rem 0.875rem",
              marginBottom: "0.5rem",
            }}
          >
            <div className="flex items-center gap-2">
              <span style={{ fontSize: "1rem" }}>{tx.icon}</span>
              <div>
                <p style={{ color: "white", fontSize: "0.8rem", fontWeight: 500 }}>{tx.name}</p>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.65rem" }}>{tx.category}</p>
              </div>
            </div>
            <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.8rem", fontWeight: 600 }}>
              {tx.amount}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Floating Phone Component - Clean Style
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
          width: "280px",
          height: "560px",
          background: "#1A1A3E",
          borderRadius: "40px",
          padding: "10px",
          boxShadow: "0 25px 80px rgba(26, 26, 62, 0.3)",
        }}
      >
        {/* Notch */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "90px",
            height: "24px",
            background: "#000",
            borderRadius: "14px",
            zIndex: 20,
          }}
        />
        {/* Screen */}
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "#1A1A3E",
            borderRadius: "32px",
            overflow: "hidden",
            padding: "2.25rem 1rem 1rem",
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
        paddingTop: "7rem",
        paddingBottom: "5rem",
        overflow: "hidden",
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        <div className="hero-grid-layout">
          {/* Text Content */}
          <motion.div
            className="hero-text-content"
            style={{ opacity }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="badge-light"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 1rem",
                borderRadius: "9999px",
                marginBottom: "1.5rem",
                background: "rgba(123, 63, 228, 0.1)",
                color: "#7B3FE4",
                fontSize: "0.875rem",
                fontWeight: 600,
              }}
            >
              <Sparkles size={16} />
              <span>Potenciado con IA</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="display-xl"
              style={{ marginBottom: "1.5rem" }}
            >
              <span style={{ color: "#7B3FE4" }}>Ponte Pilas</span>
              <br />
              con tus finanzas
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{
                fontSize: "1.25rem",
                fontWeight: 500,
                color: "#535A6A",
                marginBottom: "1rem",
              }}
            >
              Visibilidad total. Categorización inteligente. Cero Excel.
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-body-lg"
              style={{
                marginBottom: "2rem",
                maxWidth: "500px",
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
              className="hero-cta-buttons"
            >
              <motion.a
                href="#download"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-primary btn-lg"
                style={{ gap: "0.5rem" }}
              >
                Comenzar Gratis
                <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="#how-it-works"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-secondary btn-lg"
              >
                Ver cómo funciona
              </motion.a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="hero-trust-row"
              style={{ marginTop: "2rem" }}
            >
              {trustIndicators.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      background: `${item.color}15`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <item.icon size={16} color={item.color} />
                  </div>
                  <span style={{ color: "#535A6A", fontSize: "0.875rem", fontWeight: 500 }}>
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
                gap: "2.5rem",
                marginTop: "2.5rem",
                paddingTop: "2rem",
                borderTop: "1px solid #E5E5E5",
                flexWrap: "wrap",
              }}
              className="hero-trust-row"
            >
              {[
                { value: "10K+", label: "Usuarios activos" },
                { value: "98%", label: "Gastos categorizados" },
                { value: "4.9", label: "Rating App Store", icon: Star },
              ].map((stat, i) => (
                <div key={i} style={{ textAlign: "left" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                    <span
                      style={{
                        fontSize: "1.75rem",
                        fontWeight: 800,
                        color: "#7B3FE4",
                      }}
                    >
                      {stat.value}
                    </span>
                    {stat.icon && <stat.icon size={16} fill="#F59E0B" color="#F59E0B" />}
                  </div>
                  <span style={{ color: "#86909E", fontSize: "0.8125rem" }}>
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
              height: "600px",
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
