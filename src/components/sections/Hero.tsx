"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Zap,
  Users,
  Sparkles,
  Star,
  ChevronDown,
  Play,
} from "lucide-react";

// Trust indicators
const trustIndicators = [
  { icon: Shield, text: "Datos 100% seguros", color: "#10B981" },
  { icon: Zap, text: "100% Gratis", color: "#F6851B" },
  { icon: Users, text: "5,000+ usuarios", color: "#8B5CF6" },
];

// Particle System
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
    alpha: number;
    pulse: number;
  }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize particles
    const colors = ["#F6851B", "#8B5CF6", "#06B6D4", "#FFB23F"];
    const particleCount = 80;

    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.2,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, i) => {
        // Update pulse
        particle.pulse += 0.02;
        const pulseFactor = Math.sin(particle.pulse) * 0.3 + 0.7;

        // Mouse interaction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          const force = (150 - dist) / 150;
          particle.vx -= (dx / dist) * force * 0.02;
          particle.vy -= (dy / dist) * force * 0.02;
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Keep in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        // Damping
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Draw particle with glow
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * pulseFactor * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.globalAlpha = particle.alpha * pulseFactor;
        ctx.fill();

        // Draw core
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * pulseFactor, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.alpha + 0.3;
        ctx.fill();

        // Connect nearby particles
        particlesRef.current.slice(i + 1).forEach((other) => {
          const dx2 = particle.x - other.x;
          const dy2 = particle.y - other.y;
          const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          if (dist2 < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = particle.color;
            ctx.globalAlpha = (1 - dist2 / 120) * 0.15;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="particle-canvas"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
}

// Floating Orb with Parallax
function FloatingOrb({
  size,
  color,
  position,
  delay = 0,
  blur = 80,
}: {
  size: number;
  color: string;
  position: { top?: string; left?: string; right?: string; bottom?: string };
  delay?: number;
  blur?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 1.5, ease: "easeOut" }}
      className="glow-orb"
      style={{
        position: "absolute",
        ...position,
        width: size,
        height: size,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: `blur(${blur}px)`,
        pointerEvents: "none",
      }}
    />
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        style={{
          background: "linear-gradient(135deg, #F6851B 0%, #E07916 100%)",
          borderRadius: "18px",
          padding: "1.25rem",
          marginBottom: "1rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Shimmer effect */}
        <div
          className="shimmer"
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "18px",
          }}
        />
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.75rem", marginBottom: "0.25rem", position: "relative" }}>
          Presupuesto disponible
        </p>
        <p style={{ color: "white", fontSize: "2rem", fontWeight: 800, lineHeight: 1.1, position: "relative" }}>
          $1,875
        </p>
        <div style={{ marginTop: "0.75rem", position: "relative" }}>
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
              transition={{ delay: 1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
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
      </motion.div>

      {/* Stats Row - Categories */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "1rem" }}>
        {[
          { label: "Hogar", value: "$620", color: "#10B981" },
          { label: "Transporte", value: "$280", color: "#8B5CF6" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 + i * 0.15 }}
            style={{
              background: "rgba(255,255,255,0.06)",
              borderRadius: "14px",
              padding: "0.875rem",
              border: "1px solid rgba(255,255,255,0.08)",
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
            transition={{ delay: 1.4 + i * 0.12 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "rgba(255,255,255,0.04)",
              borderRadius: "12px",
              padding: "0.625rem 0.875rem",
              marginBottom: "0.5rem",
              border: "1px solid rgba(255,255,255,0.05)",
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

// 3D Floating Phone Component
function Floating3DPhone({
  delay = 0,
  isMain = false,
}: {
  delay?: number;
  isMain?: boolean;
}) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const phoneRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!phoneRef.current || !isMain) return;
    const rect = phoneRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateY = ((e.clientX - centerX) / window.innerWidth) * 20;
    const rotateX = ((e.clientY - centerY) / window.innerHeight) * -10;
    setRotation({ x: rotateX, y: rotateY });
  }, [isMain]);

  useEffect(() => {
    if (isMain) {
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [isMain, handleMouseMove]);

  return (
    <motion.div
      ref={phoneRef}
      initial={{ opacity: 0, y: 80, rotateX: -20 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ delay, duration: 1, ease: [0.16, 1, 0.3, 1] }}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        animate={{
          rotateX: isMain ? rotation.x : 0,
          rotateY: isMain ? rotation.y : 0,
          y: [0, isMain ? -15 : -8, 0],
        }}
        transition={{
          rotateX: { duration: 0.1 },
          rotateY: { duration: 0.1 },
          y: { duration: isMain ? 6 : 5, repeat: Infinity, ease: "easeInOut" },
        }}
        style={{
          width: isMain ? "280px" : "200px",
          height: isMain ? "560px" : "400px",
          background: "#0a0a0a",
          borderRadius: isMain ? "44px" : "32px",
          padding: isMain ? "12px" : "8px",
          boxShadow: `
            0 50px 100px rgba(0,0,0,0.6),
            0 0 0 1px rgba(255,255,255,0.1),
            inset 0 1px 1px rgba(255,255,255,0.1),
            0 0 80px rgba(246, 133, 27, ${isMain ? 0.15 : 0.05})
          `,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Notch */}
        <div
          style={{
            position: "absolute",
            top: isMain ? "12px" : "8px",
            left: "50%",
            transform: "translateX(-50%)",
            width: isMain ? "90px" : "60px",
            height: isMain ? "26px" : "18px",
            background: "#000",
            borderRadius: "16px",
            zIndex: 20,
          }}
        />
        {/* Screen */}
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "linear-gradient(180deg, #12121a 0%, #0a0a12 100%)",
            borderRadius: isMain ? "36px" : "26px",
            overflow: "hidden",
            padding: isMain ? "2.5rem 1.25rem 1.5rem" : "1.5rem 0.75rem 1rem",
          }}
        >
          {isMain ? <PhoneScreenContent /> : (
            <div style={{
              height: "100%",
              background: "linear-gradient(135deg, rgba(246,133,27,0.1) 0%, rgba(139,92,246,0.1) 100%)",
              borderRadius: "20px",
            }} />
          )}
        </div>
        {/* Reflection */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: isMain ? "44px" : "32px",
            background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)",
            pointerEvents: "none",
          }}
        />
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

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      ref={sectionRef}
      className="hero-metamask"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        paddingTop: "8rem",
        paddingBottom: "6rem",
      }}
    >
      {/* Particle Canvas Background */}
      <ParticleCanvas />

      {/* Mesh Gradient Background */}
      <div className="mesh-gradient-bg" />

      {/* Grid Pattern */}
      <div className="grid-pattern" />

      {/* Floating Orbs */}
      <FloatingOrb
        size={700}
        color="rgba(246, 133, 27, 0.25)"
        position={{ top: "-20%", right: "0%" }}
        delay={0.2}
        blur={100}
      />
      <FloatingOrb
        size={500}
        color="rgba(139, 92, 246, 0.2)"
        position={{ bottom: "0%", left: "5%" }}
        delay={0.4}
        blur={80}
      />
      <FloatingOrb
        size={400}
        color="rgba(6, 182, 212, 0.15)"
        position={{ top: "40%", left: "25%" }}
        delay={0.6}
        blur={60}
      />

      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Spotlight Effect (follows scroll slightly) */}
      <motion.div
        className="spotlight"
        style={{ top: "30%", left: "20%", y: y2 }}
      />

      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        {/* Animated Glow Line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="glow-line"
          style={{
            width: "200px",
            margin: "0 auto 3rem",
          }}
        />

        <div className="hero-grid-layout">
          {/* Text Content */}
          <motion.div
            className="hero-text-content"
            style={{ opacity, scale }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="badge badge-glow"
              style={{ display: "inline-flex" }}
            >
              <Sparkles size={16} color="#F6851B" />
              <span>Potenciado con Inteligencia Artificial</span>
            </motion.div>

            {/* Headline - Display XL */}
            <motion.h1
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{
                fontSize: "1.35rem",
                fontWeight: 600,
                color: "rgba(255, 255, 255, 0.8)",
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
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-body-lg"
              style={{
                marginBottom: "2.5rem",
                maxWidth: "540px",
              }}
            >
              PilasFi categoriza tus gastos automáticamente con IA avanzada.
              Comparte gastos con tu pareja, crea presupuestos inteligentes y
              olvídate de las hojas de cálculo para siempre.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="hero-cta-buttons"
            >
              <motion.a
                href="#download"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-metamask btn-lg pulse-ring"
                style={{
                  gap: "0.75rem",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <span style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  Comenzar Gratis
                  <ArrowRight size={20} />
                </span>
              </motion.a>
              <motion.a
                href="#how-it-works"
                whileHover={{ scale: 1.02, background: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-secondary btn-lg"
                style={{ gap: "0.5rem" }}
              >
                <Play size={18} />
                Ver cómo funciona
              </motion.a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="hero-trust-row"
            >
              {trustIndicators.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 8,
                      background: `${item.color}20`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <item.icon size={14} color={item.color} />
                  </div>
                  <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.875rem", fontWeight: 500 }}>
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
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
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + i * 0.1 }}
                  style={{ textAlign: "left" }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                    <span
                      style={{
                        fontSize: "1.85rem",
                        fontWeight: 800,
                        background: "linear-gradient(135deg, #F6851B 0%, #8B5CF6 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {stat.value}
                    </span>
                    {stat.icon && <stat.icon size={16} fill="#F6851B" color="#F6851B" />}
                  </div>
                  <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8125rem" }}>
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Floating 3D Phone */}
          <motion.div
            className="hero-phone-wrapper"
            style={{
              height: "600px",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              y: y1,
            }}
          >
            {/* Glow behind main phone */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{
                position: "absolute",
                width: "350px",
                height: "350px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, rgba(246, 133, 27, 0.35), rgba(139, 92, 246, 0.25))",
                filter: "blur(80px)",
                zIndex: 0,
              }}
            />

            {/* Main Phone (Center) */}
            <div style={{ position: "relative", zIndex: 3 }}>
              <Floating3DPhone delay={0.4} isMain={true} />
            </div>

            {/* Left Phone (Smaller, rotated) */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 0.5, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              style={{
                position: "absolute",
                left: "-5%",
                top: "55%",
                transform: "translateY(-50%) rotate(-15deg)",
                zIndex: 1,
              }}
            >
              <Floating3DPhone delay={0.8} />
            </motion.div>

            {/* Right Phone (Smaller, rotated) */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 0.5, x: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              style={{
                position: "absolute",
                right: "-5%",
                top: "45%",
                transform: "translateY(-50%) rotate(15deg)",
                zIndex: 1,
              }}
            >
              <Floating3DPhone delay={0.9} />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="scroll-indicator"
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Scroll
          </span>
          <ChevronDown size={20} color="rgba(255,255,255,0.4)" />
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "200px",
          background: "linear-gradient(to top, var(--color-dark-800), transparent)",
          pointerEvents: "none",
          zIndex: 5,
        }}
      />
    </section>
  );
}
