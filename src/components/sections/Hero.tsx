"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Zap,
  Users,
  CheckCircle,
  Sparkles,
  Star,
} from "lucide-react";

// Catchy phrases for the marquee
const catchyPhrases = [
  { text: "Tu coach de gastos personales" },
  { text: "Dile adiós al Excel" },
  { text: "Finanzas claras, pareja feliz" },
  { text: "Aprendizaje automático para tus gastos" },
];

// Trust indicators
const trustIndicators = [
  { icon: Shield, text: "Tus datos seguros", color: "#10B981" },
  { icon: Zap, text: "100% Gratis", color: "#F59E0B" },
  { icon: Users, text: "5,000+ usuarios", color: "#6366F1" },
];

// Animated Counter Component
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {target.toLocaleString()}{suffix}
      </motion.span>
    </motion.span>
  );
}

// Phone Screen Content Component
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

      {/* Main Card */}
      <div
        style={{
          background: "linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)",
          borderRadius: "18px",
          padding: "1.25rem",
          marginBottom: "1rem",
        }}
      >
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.75rem", marginBottom: "0.25rem" }}>
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
              background: "rgba(255,255,255,0.2)",
              overflow: "hidden",
            }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "65%" }}
              transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                height: "100%",
                borderRadius: "3px",
                background: "white",
              }}
            />
          </div>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.7rem", marginTop: "0.5rem" }}>
            65% del presupuesto usado
          </p>
        </div>
      </div>

      {/* Stats Row - Categories */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "1rem" }}>
        {[
          { label: "Hogar", value: "$620", color: "#10B981" },
          { label: "Transporte", value: "$280", color: "#06B6D4" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + i * 0.1 }}
            style={{
              background: "rgba(255,255,255,0.06)",
              borderRadius: "14px",
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

      {/* Recent Transactions - Auto-categorized */}
      <div style={{ flex: 1 }}>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.65rem", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          Auto-categorizado
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
            transition={{ delay: 1.2 + i * 0.1 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "rgba(255,255,255,0.04)",
              borderRadius: "12px",
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

// Floating Phone Component
function FloatingPhone({
  position,
  delay = 0,
  scale = 1,
  rotation = 0,
  zIndex = 1,
}: {
  position: { x: string; y: string };
  delay?: number;
  scale?: number;
  rotation?: number;
  zIndex?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="floating-phone"
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        transform: `scale(${scale}) rotate(${rotation}deg)`,
        transformOrigin: "center center",
        zIndex,
      }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: delay * 0.5 }}
        style={{
          width: "240px",
          height: "480px",
          background: "#0f0f0f",
          borderRadius: "36px",
          padding: "10px",
          boxShadow: `
            0 50px 100px rgba(0,0,0,0.5),
            0 0 0 1px rgba(255,255,255,0.1),
            inset 0 0 0 1px rgba(255,255,255,0.05)
          `,
        }}
      >
        {/* Notch */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80px",
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
            background: "linear-gradient(180deg, #1a1a2e 0%, #0f0f1a 100%)",
            borderRadius: "28px",
            overflow: "hidden",
            padding: "2.25rem 1rem 1rem",
          }}
        >
          <PhoneScreenContent />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "var(--color-dark-950)",
        paddingTop: "8rem",
        paddingBottom: "6rem",
      }}
    >
      {/* Gradient Mesh Background */}
      <div className="gradient-mesh">
        {/* Primary Orb */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "-10%",
            right: "10%",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        {/* Secondary Orb */}
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{
            position: "absolute",
            bottom: "0%",
            left: "5%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        {/* Accent Orb */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          style={{
            position: "absolute",
            top: "40%",
            left: "30%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* Noise Overlay */}
      <div className="noise-overlay" />

      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        {/* Catchy Phrases Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.5rem",
            marginBottom: "3rem",
            flexWrap: "wrap",
          }}
        >
          <div className="press-logos" style={{ gap: "2rem" }}>
            {catchyPhrases.map((phrase) => (
              <span
                key={phrase.text}
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                }}
              >
                {phrase.text}
              </span>
            ))}
          </div>
        </motion.div>

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
              transition={{ duration: 0.6, delay: 0.3 }}
              className="badge badge-glow"
              style={{ display: "inline-flex" }}
            >
              <Sparkles size={16} color="#818CF8" />
              <span>Tu coach de gastos personales con IA</span>
            </motion.div>

            {/* Headline - Display XL */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="display-xl"
              style={{
                marginBottom: "1.75rem",
                color: "white",
              }}
            >
              <span className="gradient-text-glow">Ponte Pilas</span>
              <br />
              con tus finanzas
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              style={{
                fontSize: "1.25rem",
                fontWeight: 600,
                color: "rgba(255, 255, 255, 0.7)",
                marginBottom: "1.5rem",
                letterSpacing: "-0.01em",
              }}
            >
              Visibilidad total. Categorización inteligente. Cero Excel.
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="text-body-lg"
              style={{
                marginBottom: "2.5rem",
                maxWidth: "540px",
              }}
            >
              PilasFi categoriza tus gastos automáticamente con aprendizaje automático.
              Comparte gastos con tu pareja, crea presupuestos inteligentes y
              olvídate de las hojas de cálculo para siempre.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="hero-cta-buttons"
            >
              <motion.a
                href="#download"
                whileHover={{ scale: 1.02, boxShadow: "0 12px 40px rgba(99, 102, 241, 0.5)" }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-primary-glow btn-lg"
                style={{ gap: "0.75rem" }}
              >
                Comenzar Gratis
                <ArrowRight size={20} />
              </motion.a>
              <motion.a
                href="#how-it-works"
                whileHover={{ scale: 1.02, background: "rgba(255,255,255,0.12)" }}
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
              transition={{ duration: 0.6, delay: 0.8 }}
              className="hero-trust-row"
            >
              {trustIndicators.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <item.icon size={18} color={item.color} />
                  <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.875rem", fontWeight: 500 }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              style={{
                display: "flex",
                gap: "3rem",
                marginTop: "3rem",
                paddingTop: "2rem",
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
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
                        color: "white",
                      }}
                    >
                      {stat.value}
                    </span>
                    {stat.icon && <stat.icon size={16} fill="#F59E0B" color="#F59E0B" />}
                  </div>
                  <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8125rem" }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Floating Screenshots */}
          <motion.div
            className="hero-phone-wrapper"
            style={{
              height: "600px",
              position: "relative",
              y: y1,
            }}
          >
            {/* Glow behind phones */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{
                position: "absolute",
                width: "400px",
                height: "400px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(6, 182, 212, 0.2))",
                filter: "blur(80px)",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />

            {/* Main Phone (Center) */}
            <FloatingPhone
              position={{ x: "50%", y: "50%" }}
              delay={0.3}
              scale={1}
              rotation={0}
              zIndex={3}
            />

            {/* Left Phone (Smaller, rotated) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 0.6, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              style={{
                position: "absolute",
                left: "5%",
                top: "55%",
                transform: "translateX(-50%) translateY(-50%) scale(0.7) rotate(-12deg)",
                opacity: 0.5,
              }}
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                style={{
                  width: "200px",
                  height: "400px",
                  background: "#0f0f0f",
                  borderRadius: "32px",
                  padding: "8px",
                  boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(180deg, #1a1a2e 0%, #0f0f1a 100%)",
                    borderRadius: "26px",
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Right Phone (Smaller, rotated) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 0.6, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              style={{
                position: "absolute",
                right: "5%",
                top: "45%",
                transform: "translateX(50%) translateY(-50%) scale(0.7) rotate(12deg)",
                opacity: 0.5,
              }}
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                style={{
                  width: "200px",
                  height: "400px",
                  background: "#0f0f0f",
                  borderRadius: "32px",
                  padding: "8px",
                  boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(180deg, #1a1a2e 0%, #0f0f1a 100%)",
                    borderRadius: "26px",
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade to next section */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "200px",
          background: "linear-gradient(to top, var(--color-dark-800), transparent)",
          pointerEvents: "none",
        }}
      />
    </section>
  );
}
