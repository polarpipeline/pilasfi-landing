"use client";

import { motion } from "framer-motion";
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
} from "lucide-react";

const benefits = [
  { icon: Mail, text: "Lee emails de tu banco" },
  { icon: Users, text: "Finanzas en pareja" },
  { icon: PieChart, text: "Dashboard inteligente" },
  { icon: Target, text: "Metas de ahorro" },
];

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
        paddingTop: "6rem",
        paddingBottom: "4rem",
      }}
    >
      {/* Animated Background Elements */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{
            position: "absolute",
            top: "-20%",
            right: "-10%",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          style={{
            position: "absolute",
            bottom: "-30%",
            left: "-10%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        <div className="hero-grid-layout">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="hero-text-content"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 1rem",
                borderRadius: "9999px",
                background: "rgba(99, 102, 241, 0.2)",
                border: "1px solid rgba(99, 102, 241, 0.3)",
                marginBottom: "1.5rem",
              }}
            >
              <Sparkles size={16} color="#818CF8" />
              <span style={{ color: "#818CF8", fontWeight: 600, fontSize: "0.875rem" }}>
                Nuevo en Ecuador
              </span>
            </motion.div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                marginBottom: "1.5rem",
                color: "white",
                letterSpacing: "-0.03em",
              }}
            >
              Controla tus gastos{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #6366F1 0%, #06B6D4 50%, #10B981 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                en pareja
              </span>
              <br />
              <span style={{ color: "rgba(255,255,255,0.9)" }}>automáticamente</span>
            </h1>

            {/* Subheadline */}
            <p
              style={{
                fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
                color: "rgba(255,255,255,0.7)",
                marginBottom: "2rem",
                maxWidth: "600px",
                lineHeight: 1.6,
                marginLeft: "auto",
                marginRight: "auto",
              }}
              className="hero-text-center"
            >
              PilasFi lee los emails de tu banco, organiza los gastos del hogar y te
              ayuda a crear presupuestos compartidos con tu pareja.{" "}
              <strong style={{ color: "white" }}>Sin ingresar nada manualmente.</strong>
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta-buttons">
              <motion.a
                href="#download"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "1rem 2rem",
                  borderRadius: "14px",
                  background: "linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)",
                  color: "white",
                  fontWeight: 600,
                  fontSize: "1.125rem",
                  textDecoration: "none",
                  boxShadow: "0 8px 30px rgba(99, 102, 241, 0.4)",
                }}
                aria-label="Comenzar a usar PilasFi gratis"
              >
                Comenzar Gratis
                <ArrowRight size={20} />
              </motion.a>
              <motion.a
                href="#how-it-works"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "1rem 2rem",
                  borderRadius: "14px",
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "white",
                  fontWeight: 600,
                  fontSize: "1.125rem",
                  textDecoration: "none",
                }}
                aria-label="Ver cómo funciona PilasFi"
              >
                Cómo funciona
              </motion.a>
            </div>

            {/* Benefits Pills */}
            <div className="hero-benefits-row">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.5rem 1rem",
                    borderRadius: "9999px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <benefit.icon size={16} color="#06B6D4" />
                  <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.875rem" }}>
                    {benefit.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="hero-trust-row"
            >
              {[
                { icon: Shield, text: "100% Seguro", color: "#10B981" },
                { icon: Zap, text: "Gratis siempre", color: "#F59E0B" },
                { icon: CheckCircle, text: "7 bancos soportados", color: "#6366F1" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <item.icon size={18} color={item.color} />
                  <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.875rem" }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hero-phone-wrapper"
          >
            {/* Glow Effect Behind Phone */}
            <div
              style={{
                position: "absolute",
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(99, 102, 241, 0.5) 0%, transparent 70%)",
                filter: "blur(60px)",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="phone-mockup"
              style={{
                position: "relative",
                zIndex: 10,
                boxShadow: "0 60px 120px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1)",
              }}
            >
              <div className="phone-screen">
                {/* App Header */}
                <div style={{ marginBottom: "1.25rem" }}>
                  <div className="flex items-center" style={{ justifyContent: "space-between" }}>
                    <div>
                      <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.75rem" }}>
                        Gastos del hogar
                      </p>
                      <div className="flex items-center gap-2">
                        <span style={{ color: "white", fontSize: "1.125rem", fontWeight: 700 }}>
                          Andrés & María
                        </span>
                        <span>👫</span>
                      </div>
                    </div>
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #6366F1, #06B6D4)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Users size={18} color="white" />
                    </div>
                  </div>
                </div>

                {/* Balance Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                  style={{
                    background: "linear-gradient(135deg, #6366F1 0%, #06B6D4 100%)",
                    borderRadius: "16px",
                    padding: "1.25rem",
                    marginBottom: "1rem",
                  }}
                >
                  <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.75rem" }}>
                    Presupuesto del mes
                  </p>
                  <p style={{ color: "white", fontSize: "2rem", fontWeight: 800, lineHeight: 1.2 }}>
                    $2,500
                  </p>
                  <div style={{ marginTop: "0.75rem" }}>
                    <div
                      style={{
                        height: 6,
                        borderRadius: 3,
                        background: "rgba(255,255,255,0.2)",
                        overflow: "hidden",
                      }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "65%" }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        style={{
                          height: "100%",
                          borderRadius: 3,
                          background: "white",
                        }}
                      />
                    </div>
                    <div className="flex items-center" style={{ justifyContent: "space-between", marginTop: "0.5rem" }}>
                      <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.75rem" }}>
                        65% utilizado
                      </span>
                      <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.75rem" }}>
                        $1,625
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Who spent what */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "1rem" }}>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      borderRadius: "12px",
                      padding: "0.875rem",
                    }}
                  >
                    <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.625rem", marginBottom: "0.25rem" }}>
                      Andrés gastó
                    </p>
                    <p style={{ color: "#10B981", fontWeight: 700, fontSize: "1.125rem" }}>$820</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.1 }}
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      borderRadius: "12px",
                      padding: "0.875rem",
                    }}
                  >
                    <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.625rem", marginBottom: "0.25rem" }}>
                      María gastó
                    </p>
                    <p style={{ color: "#06B6D4", fontWeight: 700, fontSize: "1.125rem" }}>$805</p>
                  </motion.div>
                </div>

                {/* Recent transactions */}
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.75rem", marginBottom: "0.5rem" }}>
                  Últimos gastos compartidos
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {[
                    { name: "Supermaxi", amount: "-$85.50", icon: "🛒", who: "María" },
                    { name: "Luz eléctrica", amount: "-$42.00", icon: "💡", who: "Andrés" },
                    { name: "Netflix", amount: "-$15.99", icon: "📺", who: "Compartido" },
                  ].map((tx, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.3 + i * 0.1 }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        background: "rgba(255,255,255,0.05)",
                        borderRadius: "10px",
                        padding: "0.625rem 0.75rem",
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <span style={{ fontSize: "1.25rem" }}>{tx.icon}</span>
                        <div>
                          <p style={{ color: "white", fontSize: "0.875rem", fontWeight: 500 }}>
                            {tx.name}
                          </p>
                          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.625rem" }}>
                            {tx.who}
                          </p>
                        </div>
                      </div>
                      <span style={{ color: "white", fontSize: "0.875rem", fontWeight: 600 }}>
                        {tx.amount}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "120px",
          background: "linear-gradient(to top, var(--color-gray-50), transparent)",
        }}
      />
    </section>
  );
}
