"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Star, Quote, TrendingUp } from "lucide-react";

// Press logos component
const pressLogos = [
  "El Comercio",
  "El Universo",
  "Vistazo",
  "Ecuavisa",
  "TechCrunch Latam",
];

function PressLogosBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{
        marginBottom: "4rem",
        padding: "2rem",
        background: "rgba(255, 255, 255, 0.02)",
        borderRadius: "20px",
        border: "1px solid rgba(255, 255, 255, 0.05)",
      }}
    >
      <p
        style={{
          textAlign: "center",
          color: "rgba(255, 255, 255, 0.4)",
          fontSize: "0.8125rem",
          marginBottom: "1.25rem",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
        }}
      >
        Como se ha visto en
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "3rem",
          flexWrap: "wrap",
        }}
      >
        {pressLogos.map((logo) => (
          <motion.span
            key={logo}
            whileHover={{ scale: 1.05, color: "rgba(255, 255, 255, 0.8)" }}
            style={{
              color: "rgba(255, 255, 255, 0.4)",
              fontSize: "1rem",
              fontWeight: 700,
              letterSpacing: "0.02em",
              cursor: "default",
              transition: "color 0.3s ease",
            }}
          >
            {logo}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

// Animated counter component
function AnimatedCounter({ target, suffix = "", duration = 2 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="animated-counter">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const testimonials = [
  {
    name: "María & Carlos",
    role: "Casados hace 3 años",
    avatar: "/avatars/couple1.jpg",
    initials: "MC",
    content:
      "Antes peleábamos por dinero. Ahora con PilasFi vemos exactamente quién gastó qué y llevamos el presupuesto del hogar sin dramas. ¡Salvó nuestro matrimonio financiero!",
    rating: 5,
  },
  {
    name: "Ana Lucía",
    role: "Emprendedora",
    avatar: "/avatars/ana.jpg",
    initials: "AL",
    content:
      "Mi esposo y yo manejamos negocios separados pero gastos del hogar juntos. PilasFi nos permite ver los gastos compartidos sin mezclar lo personal.",
    rating: 5,
  },
  {
    name: "Roberto & Diana",
    role: "Recién casados",
    avatar: "/avatars/couple2.jpg",
    initials: "RD",
    content:
      "Empezamos a vivir juntos y no sabíamos cómo manejar el dinero. PilasFi nos enseñó a crear presupuestos y ahora ahorramos juntos para nuestra casa.",
    rating: 5,
  },
  {
    name: "Valentina",
    role: "Diseñadora",
    avatar: "/avatars/valentina.jpg",
    initials: "V",
    content:
      "El diseño es hermoso y súper fácil. Los gráficos me muestran mis patrones de gasto de un vistazo. Lo mejor: mi novio también lo usa y vemos todo junto.",
    rating: 5,
  },
  {
    name: "Diego",
    role: "Ingeniero",
    avatar: "/avatars/diego.jpg",
    initials: "D",
    content:
      "Las alertas de presupuesto me salvaron. Ya no me paso de mis límites. Y lo mejor es que mi esposa ve cuando gasto de más en tecnología.",
    rating: 5,
  },
  {
    name: "Camila & Luis",
    role: "Novios",
    avatar: "/avatars/couple3.jpg",
    initials: "CL",
    content:
      "Aunque no vivimos juntos, usamos PilasFi para planear viajes y gastos compartidos. Podemos ver cuánto aportó cada uno. ¡Súper útil!",
    rating: 5,
  },
];

// Testimonial Card Component
function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="testimonial-card"
    >
      {/* Quote Icon */}
      <div
        style={{
          position: "absolute",
          top: "1.5rem",
          right: "1.5rem",
          opacity: 0.1,
        }}
      >
        <Quote size={40} color="white" />
      </div>

      {/* Stars */}
      <div className="flex gap-1" style={{ marginBottom: "1.25rem" }}>
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star
            key={i}
            size={16}
            fill="#F59E0B"
            color="#F59E0B"
          />
        ))}
      </div>

      {/* Content */}
      <p
        style={{
          color: "rgba(255, 255, 255, 0.8)",
          flex: 1,
          marginBottom: "1.5rem",
          lineHeight: 1.7,
          fontSize: "0.9375rem",
        }}
      >
        &ldquo;{testimonial.content}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            color: "white",
            fontSize: "0.875rem",
          }}
        >
          {testimonial.initials}
        </div>
        <div>
          <p style={{ fontWeight: 600, color: "white" }}>
            {testimonial.name}
          </p>
          <p style={{ fontSize: "0.8125rem", color: "rgba(255, 255, 255, 0.5)" }}>
            {testimonial.role}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// Stats Banner Component
function StatsBanner() {
  const stats = [
    { value: 10000, suffix: "+", label: "Usuarios activos" },
    { value: 5000, suffix: "+", label: "Parejas conectadas" },
    { value: 500000, prefix: "$", suffix: "+", label: "Ahorrados" },
    { value: 4.9, suffix: "", label: "En App Store", isDecimal: true },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{
        marginTop: "5rem",
        padding: "3rem",
        borderRadius: "24px",
        background: "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "2rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
      className="stats-banner"
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          top: "-50%",
          right: "-20%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.1)",
          filter: "blur(60px)",
        }}
      />

      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          style={{ position: "relative", zIndex: 1 }}
        >
          <div
            style={{
              fontSize: "2.5rem",
              fontWeight: 800,
              color: "white",
              lineHeight: 1,
            }}
          >
            {stat.prefix}
            {stat.isDecimal ? (
              stat.value
            ) : (
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
            )}
            {stat.isDecimal && (
              <span style={{ display: "inline-flex", alignItems: "center", marginLeft: "0.25rem" }}>
                <Star size={20} fill="white" color="white" />
              </span>
            )}
          </div>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9375rem", marginTop: "0.5rem" }}>
            {stat.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section" style={{ background: "var(--color-dark-800)" }}>
      <div className="container">
        {/* Press Logos Bar */}
        <PressLogosBar />

        {/* Header */}
        <div className="section-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="badge" style={{ margin: "0 auto 1.5rem" }}>
              <TrendingUp size={16} color="#818CF8" />
              <span>+5,000 parejas confían en nosotros</span>
            </div>
            <h2 className="display-lg">
              Lo que dicen las{" "}
              <span className="gradient-text">parejas</span>
            </h2>
            <p>
              Miles de parejas ecuatorianas ya manejan sus finanzas juntos con PilasFi.
            </p>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid-features">
          {testimonials.map((t, index) => (
            <TestimonialCard key={index} testimonial={t} index={index} />
          ))}
        </div>

        {/* Stats Banner */}
        <StatsBanner />
      </div>
    </section>
  );
}
