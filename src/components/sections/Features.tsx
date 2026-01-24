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
} from "lucide-react";

// ═══════════════════════════════════════════════════════════════════════════
// SVG ILLUSTRATIONS - No external files needed
// ═══════════════════════════════════════════════════════════════════════════

// Animated Bar Chart SVG
function ChartIllustration() {
  const bars = [
    { height: 40, color: "rgba(255,255,255,0.3)" },
    { height: 65, color: "rgba(255,255,255,0.3)" },
    { height: 45, color: "rgba(255,255,255,0.3)" },
    { height: 80, color: "rgba(255,255,255,0.3)" },
    { height: 55, color: "rgba(255,255,255,0.3)" },
    { height: 70, color: "rgba(255,255,255,0.3)" },
    { height: 90, color: "#FFFFFF" },
  ];

  return (
    <svg viewBox="0 0 200 100" style={{ width: "100%", height: "100px", marginTop: "1rem" }}>
      {bars.map((bar, i) => (
        <motion.rect
          key={i}
          x={15 + i * 26}
          y={100 - bar.height}
          width="18"
          height={bar.height}
          rx="4"
          fill={bar.color}
          initial={{ height: 0, y: 100 }}
          whileInView={{ height: bar.height, y: 100 - bar.height }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
        />
      ))}
      {/* Trend line */}
      <motion.path
        d="M 24 70 Q 80 50, 120 60 T 180 25"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="2"
        fill="none"
        strokeDasharray="5,5"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 1 }}
      />
    </svg>
  );
}

// Animated Brain/AI SVG
function AIIllustration() {
  return (
    <svg viewBox="0 0 120 120" style={{ width: "100%", height: "100px", marginTop: "1rem" }}>
      {/* Central Brain */}
      <motion.circle
        cx="60"
        cy="60"
        r="25"
        fill="#7B3FE4"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      />
      {/* Pulse rings */}
      {[35, 45, 55].map((r, i) => (
        <motion.circle
          key={i}
          cx="60"
          cy="60"
          r={r}
          fill="none"
          stroke="rgba(123, 63, 228, 0.3)"
          strokeWidth="1"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ delay: i * 0.3, duration: 2, repeat: Infinity }}
        />
      ))}
      {/* Connection nodes */}
      {[
        { x: 30, y: 35 },
        { x: 90, y: 35 },
        { x: 25, y: 75 },
        { x: 95, y: 75 },
        { x: 60, y: 20 },
        { x: 60, y: 100 },
      ].map((pos, i) => (
        <motion.g key={i}>
          <motion.line
            x1="60"
            y1="60"
            x2={pos.x}
            y2={pos.y}
            stroke="rgba(123, 63, 228, 0.4)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
          />
          <motion.circle
            cx={pos.x}
            cy={pos.y}
            r="6"
            fill="#10B981"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
          />
        </motion.g>
      ))}
      {/* Brain icon in center */}
      <motion.text
        x="60"
        y="65"
        textAnchor="middle"
        fill="white"
        fontSize="20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
      >
        🧠
      </motion.text>
    </svg>
  );
}

// Email/Inbox Animation
function EmailIllustration() {
  const emails = [
    { y: 20, icon: "💳", text: "Banco Chile", amount: "-$85" },
    { y: 50, icon: "📱", text: "Movistar", amount: "-$25" },
    { y: 80, icon: "⚡", text: "Enel", amount: "-$42" },
  ];

  return (
    <div style={{ marginTop: "1rem" }}>
      {emails.map((email, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.15 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "rgba(255,255,255,0.15)",
            borderRadius: "10px",
            padding: "0.625rem 0.875rem",
            marginBottom: "0.5rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ fontSize: "1.25rem" }}>{email.icon}</span>
            <span style={{ color: "white", fontSize: "0.875rem", fontWeight: 500 }}>{email.text}</span>
          </div>
          <span style={{ color: "#10B981", fontSize: "0.875rem", fontWeight: 700 }}>{email.amount}</span>
        </motion.div>
      ))}
    </div>
  );
}

// Couple/Shared SVG
function CoupleIllustration() {
  return (
    <svg viewBox="0 0 200 80" style={{ width: "100%", height: "80px", marginTop: "1.5rem" }}>
      {/* Person A */}
      <motion.g initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
        <circle cx="50" cy="40" r="25" fill="#7B3FE4" />
        <text x="50" y="47" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">A</text>
      </motion.g>

      {/* Connection line with animation */}
      <motion.line
        x1="80"
        y1="40"
        x2="120"
        y2="40"
        stroke="rgba(18,13,49,0.3)"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.4 }}
      />

      {/* Heart in middle */}
      <motion.text
        x="100"
        y="28"
        textAnchor="middle"
        fontSize="16"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, type: "spring" }}
      >
        ❤️
      </motion.text>

      {/* Person M */}
      <motion.g initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }}>
        <circle cx="150" cy="40" r="25" fill="#037D7D" />
        <text x="150" y="47" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">M</text>
      </motion.g>
    </svg>
  );
}

// Budget Progress Animation
function BudgetIllustration() {
  const categories = [
    { name: "Hogar", percent: 65, color: "#10B981" },
    { name: "Transporte", percent: 45, color: "#7B3FE4" },
    { name: "Comida", percent: 80, color: "#F59E0B" },
  ];

  return (
    <div style={{ marginTop: "1.25rem" }}>
      {categories.map((cat, i) => (
        <div key={i} style={{ marginBottom: "0.75rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.25rem" }}>
            <span style={{ color: "rgba(18,13,49,0.7)", fontSize: "0.75rem" }}>{cat.name}</span>
            <span style={{ color: "#120D31", fontSize: "0.75rem", fontWeight: 600 }}>{cat.percent}%</span>
          </div>
          <div style={{ height: "8px", background: "rgba(0,0,0,0.1)", borderRadius: "4px", overflow: "hidden" }}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${cat.percent}%` }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.6, ease: "easeOut" }}
              style={{ height: "100%", background: cat.color, borderRadius: "4px" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

// Alert Animation
function AlertIllustration() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      style={{
        background: "rgba(255,255,255,0.15)",
        borderRadius: "12px",
        padding: "0.875rem",
        marginTop: "1rem",
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
      }}
    >
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "10px",
          background: "#EF4444",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Bell size={20} color="white" />
      </motion.div>
      <div>
        <p style={{ color: "white", fontSize: "0.875rem", fontWeight: 600 }}>⚠️ Límite alcanzado</p>
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.75rem" }}>Comida: 95% del presupuesto</p>
      </div>
    </motion.div>
  );
}

// Goal/Target Animation
function GoalIllustration() {
  return (
    <div style={{ marginTop: "1.25rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
        <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.8rem" }}>Meta de ahorro</span>
        <span style={{ color: "white", fontSize: "1rem", fontWeight: 700 }}>$1,875 / $3,000</span>
      </div>
      <div style={{ height: "12px", background: "rgba(255,255,255,0.2)", borderRadius: "6px", overflow: "hidden" }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "62.5%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          style={{ height: "100%", background: "#10B981", borderRadius: "6px" }}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.5rem" }}>
        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.7rem" }}>62.5% completado</span>
        <span style={{ color: "#10B981", fontSize: "0.75rem", fontWeight: 600 }}>🎯 ¡Sigue así!</span>
      </div>
    </div>
  );
}

// Home Control Tags
function HomeIllustration() {
  const items = [
    { icon: "🏠", name: "Arriendo", amount: "$450" },
    { icon: "💡", name: "Luz", amount: "$42" },
    { icon: "💧", name: "Agua", amount: "$28" },
    { icon: "📶", name: "Internet", amount: "$35" },
    { icon: "🛒", name: "Super", amount: "$180" },
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1rem" }}>
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + i * 0.08, type: "spring", stiffness: 200 }}
          style={{
            background: "rgba(255,255,255,0.2)",
            borderRadius: "8px",
            padding: "0.5rem 0.75rem",
            display: "flex",
            alignItems: "center",
            gap: "0.375rem",
          }}
        >
          <span>{item.icon}</span>
          <span style={{ color: "white", fontSize: "0.75rem", fontWeight: 500 }}>{item.name}</span>
          <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.7rem" }}>{item.amount}</span>
        </motion.div>
      ))}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════

export default function Features() {
  return (
    <section id="features" style={{ background: "#F5F1EB", padding: "5rem 0" }}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "3rem" }}
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
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, color: "#120D31", marginBottom: "0.5rem" }}>
            Todo lo que necesitas para{" "}
            <span style={{ color: "#7B3FE4" }}>controlar tu dinero</span>
          </h2>
        </motion.div>

        {/* Bento Grid - Using inline responsive styles */}
        <div className="features-bento-grid">
          {/* Row 1: 3 cards */}
          {/* Card 1: Visibilidad - Purple Large */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="bento-card bento-card-1"
            style={{ background: "#7B3FE4", borderRadius: "20px", padding: "1.5rem" }}
          >
            <PieChart size={22} color="white" />
            <h3 style={{ color: "white", fontSize: "1.375rem", fontWeight: 700, marginTop: "0.75rem", lineHeight: 1.2 }}>
              Visibilidad total de tus gastos
            </h3>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.875rem", marginTop: "0.5rem" }}>
              Ve exactamente en qué gastas tu dinero cada mes
            </p>
            <ChartIllustration />
          </motion.div>

          {/* Card 2: IA - Navy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="bento-card bento-card-2"
            style={{ background: "#1A1A3E", borderRadius: "20px", padding: "1.5rem" }}
          >
            <Brain size={22} color="#7B3FE4" />
            <h3 style={{ color: "white", fontSize: "1.125rem", fontWeight: 700, marginTop: "0.75rem" }}>
              Categorización con IA
            </h3>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.8125rem", marginTop: "0.375rem" }}>
              Aprendizaje automático que categoriza tus gastos
            </p>
            <AIIllustration />
          </motion.div>

          {/* Card 3: Email - Teal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="bento-card bento-card-3"
            style={{ background: "#037D7D", borderRadius: "20px", padding: "1.5rem" }}
          >
            <Mail size={22} color="white" />
            <h3 style={{ color: "white", fontSize: "1.125rem", fontWeight: 700, marginTop: "0.75rem" }}>
              Lectura de emails
            </h3>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.8125rem", marginTop: "0.375rem" }}>
              Detectamos tus notificaciones bancarias
            </p>
            <EmailIllustration />
          </motion.div>

          {/* Row 2: 3 cards */}
          {/* Card 4: Gastos Compartidos - Coral */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -4 }}
            className="bento-card bento-card-4"
            style={{ background: "#F5A88E", borderRadius: "20px", padding: "1.5rem" }}
          >
            <Users size={22} color="#120D31" />
            <h3 style={{ color: "#120D31", fontSize: "1.25rem", fontWeight: 700, marginTop: "0.75rem" }}>
              Gastos compartidos con tu pareja
            </h3>
            <p style={{ color: "rgba(18,13,49,0.7)", fontSize: "0.875rem", marginTop: "0.375rem" }}>
              Vean juntos los gastos del hogar sin conflictos
            </p>
            <CoupleIllustration />
          </motion.div>

          {/* Card 5: Presupuestos - White */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -4 }}
            className="bento-card bento-card-5"
            style={{ background: "#FFFFFF", borderRadius: "20px", padding: "1.5rem", border: "1px solid #E5E5E5" }}
          >
            <Wallet size={22} color="#7B3FE4" />
            <h3 style={{ color: "#120D31", fontSize: "1.125rem", fontWeight: 700, marginTop: "0.75rem" }}>
              Presupuestos inteligentes
            </h3>
            <p style={{ color: "#535A6A", fontSize: "0.8125rem", marginTop: "0.375rem" }}>
              Crea presupuestos por categoría en segundos
            </p>
            <BudgetIllustration />
          </motion.div>

          {/* Card 6: Alertas - Purple */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            whileHover={{ y: -4 }}
            className="bento-card bento-card-6"
            style={{ background: "#7B3FE4", borderRadius: "20px", padding: "1.5rem" }}
          >
            <Bell size={22} color="white" />
            <h3 style={{ color: "white", fontSize: "1.125rem", fontWeight: 700, marginTop: "0.75rem" }}>
              Alertas inteligentes
            </h3>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.8125rem", marginTop: "0.375rem" }}>
              Notificaciones cuando te acerques al límite
            </p>
            <AlertIllustration />
          </motion.div>

          {/* Row 3: 2 cards */}
          {/* Card 7: Metas - Navy Large */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            whileHover={{ y: -4 }}
            className="bento-card bento-card-7"
            style={{ background: "#1A1A3E", borderRadius: "20px", padding: "1.5rem" }}
          >
            <Target size={22} color="#10B981" />
            <h3 style={{ color: "white", fontSize: "1.25rem", fontWeight: 700, marginTop: "0.75rem" }}>
              Metas de ahorro
            </h3>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.875rem", marginTop: "0.375rem" }}>
              Define cuánto quieres ahorrar y ve tu progreso en tiempo real
            </p>
            <GoalIllustration />
          </motion.div>

          {/* Card 8: Control Hogar - Teal Large */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            whileHover={{ y: -4 }}
            className="bento-card bento-card-8"
            style={{ background: "#037D7D", borderRadius: "20px", padding: "1.5rem" }}
          >
            <Home size={22} color="white" />
            <h3 style={{ color: "white", fontSize: "1.25rem", fontWeight: 700, marginTop: "0.75rem" }}>
              Control del hogar
            </h3>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.875rem", marginTop: "0.375rem" }}>
              Arriendo, servicios, supermercado. Todo organizado automáticamente.
            </p>
            <HomeIllustration />
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="features-stats-row"
        >
          {[
            { number: "98%", label: "Gastos categorizados" },
            { number: "100%", label: "Gratis siempre" },
            { number: "5,000+", label: "Usuarios activos" },
            { number: "4.9", label: "Rating App Store" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ textAlign: "center" }}
            >
              <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "#7B3FE4" }}>{stat.number}</div>
              <p style={{ color: "#86909E", fontSize: "0.75rem", marginTop: "0.25rem" }}>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .features-bento-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        .features-stats-row {
          margin-top: 3rem;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          background: #FFFFFF;
          border-radius: 16px;
          padding: 1.5rem;
          border: 1px solid #E5E5E5;
        }

        @media (min-width: 640px) {
          .features-bento-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .features-stats-row {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .features-bento-grid {
            grid-template-columns: repeat(12, 1fr);
          }

          /* Row 1 */
          .bento-card-1 { grid-column: span 5; }
          .bento-card-2 { grid-column: span 4; }
          .bento-card-3 { grid-column: span 3; }

          /* Row 2 */
          .bento-card-4 { grid-column: span 4; }
          .bento-card-5 { grid-column: span 4; }
          .bento-card-6 { grid-column: span 4; }

          /* Row 3 */
          .bento-card-7 { grid-column: span 6; }
          .bento-card-8 { grid-column: span 6; }
        }
      `}</style>
    </section>
  );
}
