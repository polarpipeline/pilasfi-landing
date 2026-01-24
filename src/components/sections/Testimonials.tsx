"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Star, Quote, TrendingUp } from "lucide-react";

// Catchy phrases component
const catchyPhrases = [
  "Ponte pilas con tus finanzas",
  "Tu coach de gastos",
  "Adiós Excel",
  "Finanzas inteligentes",
  "Aprendizaje automático",
];

function CatchyPhrasesBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{
        marginBottom: "4rem",
        padding: "2rem",
        background: "#FFFFFF",
        borderRadius: "20px",
        border: "1px solid #E5E5E5",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "3rem",
          flexWrap: "wrap",
        }}
      >
        {catchyPhrases.map((phrase) => (
          <motion.span
            key={phrase}
            whileHover={{ scale: 1.05, color: "#7B3FE4" }}
            style={{
              color: "#86909E",
              fontSize: "1rem",
              fontWeight: 700,
              letterSpacing: "0.02em",
              cursor: "default",
              transition: "color 0.3s ease",
            }}
          >
            {phrase}
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
    color: "#7B3FE4",
  },
  {
    name: "Ana Lucía",
    role: "Emprendedora",
    avatar: "/avatars/ana.jpg",
    initials: "AL",
    content:
      "Mi esposo y yo manejamos negocios separados pero gastos del hogar juntos. PilasFi nos permite ver los gastos compartidos sin mezclar lo personal.",
    rating: 5,
    color: "#037D7D",
  },
  {
    name: "Roberto & Diana",
    role: "Recién casados",
    avatar: "/avatars/couple2.jpg",
    initials: "RD",
    content:
      "Empezamos a vivir juntos y no sabíamos cómo manejar el dinero. PilasFi nos enseñó a crear presupuestos y ahora ahorramos juntos para nuestra casa.",
    rating: 5,
    color: "#1A1A3E",
  },
  {
    name: "Valentina",
    role: "Diseñadora",
    avatar: "/avatars/valentina.jpg",
    initials: "V",
    content:
      "El diseño es hermoso y súper fácil. Los gráficos me muestran mis patrones de gasto de un vistazo. Lo mejor: mi novio también lo usa y vemos todo junto.",
    rating: 5,
    color: "#F5A88E",
  },
  {
    name: "Diego",
    role: "Ingeniero",
    avatar: "/avatars/diego.jpg",
    initials: "D",
    content:
      "Las alertas de presupuesto me salvaron. Ya no me paso de mis límites. Y lo mejor es que mi esposa ve cuando gasto de más en tecnología.",
    rating: 5,
    color: "#7B3FE4",
  },
  {
    name: "Camila & Luis",
    role: "Novios",
    avatar: "/avatars/couple3.jpg",
    initials: "CL",
    content:
      "Aunque no vivimos juntos, usamos PilasFi para planear viajes y gastos compartidos. Podemos ver cuánto aportó cada uno. ¡Súper útil!",
    rating: 5,
    color: "#037D7D",
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
      whileHover={{ y: -6 }}
      style={{
        background: "#FFFFFF",
        borderRadius: "20px",
        padding: "1.75rem",
        border: "1px solid #E5E5E5",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        transition: "all 0.3s ease",
      }}
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
        <Quote size={40} color="#120D31" />
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
          color: "#535A6A",
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
            background: testimonial.color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            color: testimonial.color === "#F5A88E" ? "#120D31" : "white",
            fontSize: "0.875rem",
          }}
        >
          {testimonial.initials}
        </div>
        <div>
          <p style={{ fontWeight: 600, color: "#120D31" }}>
            {testimonial.name}
          </p>
          <p style={{ fontSize: "0.8125rem", color: "#86909E" }}>
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
        background: "#7B3FE4",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "2rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
      className="stats-banner"
    >
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
    <section id="testimonials" className="section" style={{ background: "#FFFFFF" }}>
      <div className="container">
        {/* Catchy Phrases Bar */}
        <CatchyPhrasesBar />

        {/* Header */}
        <div className="section-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="badge-light"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 1rem",
                borderRadius: "9999px",
                marginBottom: "1rem",
                background: "rgba(123, 63, 228, 0.1)",
                color: "#7B3FE4",
                fontSize: "0.875rem",
                fontWeight: 600,
              }}
            >
              <TrendingUp size={16} />
              <span>+5,000 parejas confían en nosotros</span>
            </div>
            <h2 className="display-lg">
              Lo que dicen las{" "}
              <span style={{ color: "#7B3FE4" }}>parejas</span>
            </h2>
            <p>
              Miles de usuarios ya controlan sus finanzas con PilasFi. Sin Excel, sin complicaciones.
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
