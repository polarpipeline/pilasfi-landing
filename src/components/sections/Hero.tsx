"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Zap,
  Users,
  Mail,
  PieChart,
  Target,
  CheckCircle,
  Sparkles,
  TrendingUp,
  Bell,
  CreditCard,
} from "lucide-react";

const slides = [
  {
    id: 1,
    badge: "Finanzas en Pareja",
    badgeIcon: Users,
    headline: ["Controla tus gastos", "en pareja", "automáticamente"],
    highlightIndex: 1,
    description:
      "Crea presupuestos compartidos, ve quién gastó qué y lleva las finanzas del hogar juntos. Todo sincronizado en tiempo real.",
    phone: {
      title: "Gastos del hogar",
      subtitle: "Andrés & María 👫",
      mainCard: { label: "Presupuesto del mes", value: "$2,500", progress: 65 },
      stats: [
        { label: "Andrés gastó", value: "$820", color: "#10B981" },
        { label: "María gastó", value: "$805", color: "#06B6D4" },
      ],
      transactions: [
        { name: "Supermaxi", amount: "-$85.50", icon: "🛒", who: "María" },
        { name: "Luz eléctrica", amount: "-$42.00", icon: "💡", who: "Andrés" },
      ],
    },
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    id: 2,
    badge: "100% Automático",
    badgeIcon: Mail,
    headline: ["Lee los emails", "de tu banco", "por ti"],
    highlightIndex: 1,
    description:
      "Conecta tu correo y PilasFi lee automáticamente las notificaciones de tus bancos. Sin ingresar nada manualmente, nunca más.",
    phone: {
      title: "Transacciones detectadas",
      subtitle: "Hoy • 3 movimientos",
      mainCard: { label: "Nuevo email detectado", value: "Banco Pichincha", progress: null },
      stats: [
        { label: "Este mes", value: "47", color: "#6366F1" },
        { label: "Categorizadas", value: "100%", color: "#10B981" },
      ],
      transactions: [
        { name: "Compra aprobada", amount: "-$125.00", icon: "📧", who: "Tarjeta *4521" },
        { name: "Transferencia recibida", amount: "+$500.00", icon: "📩", who: "Produbanco" },
      ],
    },
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    id: 3,
    badge: "Metas de Ahorro",
    badgeIcon: Target,
    headline: ["Ahorra para", "tus sueños", "sin esfuerzo"],
    highlightIndex: 1,
    description:
      "Define metas de ahorro y observa tu progreso automáticamente. Viajes, emergencias, inversiones... todo bajo control.",
    phone: {
      title: "Mis metas",
      subtitle: "3 metas activas 🎯",
      mainCard: { label: "Vacaciones Galápagos", value: "$1,200 / $2,000", progress: 60 },
      stats: [
        { label: "Ahorrado este mes", value: "$350", color: "#F59E0B" },
        { label: "Meta más cercana", value: "85%", color: "#10B981" },
      ],
      transactions: [
        { name: "Fondo emergencia", amount: "$3,500", icon: "🛡️", who: "70% completado" },
        { name: "Auto nuevo", amount: "$8,000", icon: "🚗", who: "40% completado" },
      ],
    },
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
];

const trustIndicators = [
  { icon: Shield, text: "100% Seguro", color: "#10B981" },
  { icon: Zap, text: "Gratis siempre", color: "#F59E0B" },
  { icon: CheckCircle, text: "7 bancos", color: "#6366F1" },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const slide = slides[currentSlide];

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
        paddingTop: "7rem",
        paddingBottom: "4rem",
      }}
    >
      {/* Animated Background Gradient */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            position: "absolute",
            inset: 0,
            background: slide.gradient,
            filter: "blur(100px)",
          }}
        />
      </AnimatePresence>

      {/* Floating Orbs */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "10%",
            right: "15%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{
            position: "absolute",
            bottom: "10%",
            left: "10%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        <div className="hero-grid-layout">
          {/* Text Content */}
          <div className="hero-text-content">
            {/* Animated Badge */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`badge-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.625rem 1.25rem",
                  borderRadius: "9999px",
                  background: "rgba(99, 102, 241, 0.15)",
                  border: "1px solid rgba(99, 102, 241, 0.3)",
                  marginBottom: "2rem",
                }}
              >
                <slide.badgeIcon size={18} color="#818CF8" />
                <span style={{ color: "#A5B4FC", fontWeight: 600, fontSize: "0.9375rem" }}>
                  {slide.badge}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Animated Headline */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={`headline-${currentSlide}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontSize: "clamp(2.75rem, 5.5vw, 4.5rem)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: "-0.025em",
                  marginBottom: "1.75rem",
                  color: "white",
                }}
              >
                {slide.headline.map((line, i) => (
                  <span key={i} style={{ display: "block" }}>
                    {i === slide.highlightIndex ? (
                      <span
                        style={{
                          background: slide.gradient,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        {line}
                      </span>
                    ) : (
                      line
                    )}
                  </span>
                ))}
              </motion.h1>
            </AnimatePresence>

            {/* Animated Description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                style={{
                  fontSize: "clamp(1.125rem, 2vw, 1.3rem)",
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: 1.7,
                  marginBottom: "2.5rem",
                  maxWidth: "540px",
                }}
              >
                {slide.description}
              </motion.p>
            </AnimatePresence>

            {/* CTA Buttons */}
            <div className="hero-cta-buttons">
              <motion.a
                href="#download"
                whileHover={{ scale: 1.03, boxShadow: "0 12px 40px rgba(99, 102, 241, 0.5)" }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "1.125rem 2.25rem",
                  borderRadius: "14px",
                  background: "linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)",
                  color: "white",
                  fontWeight: 600,
                  fontSize: "1.125rem",
                  textDecoration: "none",
                  boxShadow: "0 8px 30px rgba(99, 102, 241, 0.4)",
                  transition: "box-shadow 0.3s ease",
                }}
              >
                Comenzar Gratis
                <ArrowRight size={20} />
              </motion.a>
              <motion.a
                href="#how-it-works"
                whileHover={{ scale: 1.03, background: "rgba(255,255,255,0.15)" }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "1.125rem 2.25rem",
                  borderRadius: "14px",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "white",
                  fontWeight: 600,
                  fontSize: "1.125rem",
                  textDecoration: "none",
                  transition: "background 0.3s ease",
                }}
              >
                Ver cómo funciona
              </motion.a>
            </div>

            {/* Carousel Dots */}
            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                marginTop: "3rem",
              }}
              className="hero-carousel-dots"
            >
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrentSlide(i);
                    setIsAutoPlaying(false);
                  }}
                  style={{
                    width: currentSlide === i ? "32px" : "10px",
                    height: "10px",
                    borderRadius: "5px",
                    border: "none",
                    cursor: "pointer",
                    background: currentSlide === i
                      ? "linear-gradient(135deg, #6366F1, #06B6D4)"
                      : "rgba(255,255,255,0.3)",
                    transition: "all 0.3s ease",
                  }}
                  aria-label={`Ir a slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="hero-trust-row" style={{ marginTop: "2.5rem" }}>
              {trustIndicators.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <item.icon size={18} color={item.color} />
                  <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", fontWeight: 500 }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="hero-phone-wrapper">
            {/* Glow */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{
                position: "absolute",
                width: "320px",
                height: "320px",
                borderRadius: "50%",
                background: slide.gradient,
                filter: "blur(80px)",
                opacity: 0.4,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "relative",
                zIndex: 10,
                width: "300px",
                height: "600px",
                background: "#1a1a1a",
                borderRadius: "48px",
                padding: "14px",
                boxShadow: `
                  0 60px 120px rgba(0,0,0,0.5),
                  0 0 0 1px rgba(255,255,255,0.1),
                  inset 0 0 0 1px rgba(255,255,255,0.05)
                `,
              }}
            >
              {/* Notch */}
              <div
                style={{
                  position: "absolute",
                  top: "14px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "110px",
                  height: "32px",
                  background: "#0a0a0a",
                  borderRadius: "20px",
                  zIndex: 20,
                }}
              />

              {/* Screen */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`phone-${currentSlide}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)",
                    borderRadius: "38px",
                    overflow: "hidden",
                    padding: "3rem 1.25rem 1.5rem",
                  }}
                >
                  {/* Phone Header */}
                  <div style={{ marginBottom: "1.5rem" }}>
                    <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.75rem", marginBottom: "0.25rem" }}>
                      {slide.phone.title}
                    </p>
                    <p style={{ color: "white", fontSize: "1.125rem", fontWeight: 700 }}>
                      {slide.phone.subtitle}
                    </p>
                  </div>

                  {/* Main Card */}
                  <div
                    style={{
                      background: slide.gradient,
                      borderRadius: "18px",
                      padding: "1.25rem",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.8rem", marginBottom: "0.25rem" }}>
                      {slide.phone.mainCard.label}
                    </p>
                    <p style={{ color: "white", fontSize: "1.75rem", fontWeight: 800, lineHeight: 1.2 }}>
                      {slide.phone.mainCard.value}
                    </p>
                    {slide.phone.mainCard.progress && (
                      <div style={{ marginTop: "0.875rem" }}>
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
                            animate={{ width: `${slide.phone.mainCard.progress}%` }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            style={{
                              height: "100%",
                              borderRadius: "3px",
                              background: "white",
                            }}
                          />
                        </div>
                        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.75rem", marginTop: "0.5rem" }}>
                          {slide.phone.mainCard.progress}% completado
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Stats */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "1.25rem" }}>
                    {slide.phone.stats.map((stat, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        style={{
                          background: "rgba(255,255,255,0.08)",
                          borderRadius: "14px",
                          padding: "1rem",
                        }}
                      >
                        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.7rem", marginBottom: "0.25rem" }}>
                          {stat.label}
                        </p>
                        <p style={{ color: stat.color, fontWeight: 700, fontSize: "1.25rem" }}>{stat.value}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Transactions */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {slide.phone.transactions.map((tx, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          background: "rgba(255,255,255,0.05)",
                          borderRadius: "12px",
                          padding: "0.75rem 1rem",
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <span style={{ fontSize: "1.25rem" }}>{tx.icon}</span>
                          <div>
                            <p style={{ color: "white", fontSize: "0.875rem", fontWeight: 500 }}>{tx.name}</p>
                            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.7rem" }}>{tx.who}</p>
                          </div>
                        </div>
                        <span
                          style={{
                            color: tx.amount.startsWith("+") ? "#10B981" : "white",
                            fontSize: "0.9rem",
                            fontWeight: 600,
                          }}
                        >
                          {tx.amount}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "150px",
          background: "linear-gradient(to top, var(--color-gray-50), transparent)",
          pointerEvents: "none",
        }}
      />
    </section>
  );
}
