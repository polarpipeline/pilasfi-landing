"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María & Carlos",
    role: "Casados hace 3 años",
    avatar: "👫",
    content:
      "Antes peleábamos por dinero. Ahora con PilasFi vemos exactamente quién gastó qué y llevamos el presupuesto del hogar sin dramas. ¡Salvó nuestro matrimonio financiero!",
  },
  {
    name: "Ana Lucía",
    role: "Emprendedora",
    avatar: "👩‍💼",
    content:
      "Mi esposo y yo manejamos negocios separados pero gastos del hogar juntos. PilasFi nos permite ver los gastos compartidos sin mezclar lo personal.",
  },
  {
    name: "Roberto & Diana",
    role: "Recién casados",
    avatar: "💑",
    content:
      "Empezamos a vivir juntos y no sabíamos cómo manejar el dinero. PilasFi nos enseñó a crear presupuestos y ahora ahorramos juntos para nuestra casa.",
  },
  {
    name: "Valentina",
    role: "Diseñadora",
    avatar: "👩‍🎨",
    content:
      "El diseño es hermoso y súper fácil. Los gráficos me muestran mis patrones de gasto de un vistazo. Lo mejor: mi novio también lo usa y vemos todo junto.",
  },
  {
    name: "Diego",
    role: "Ingeniero",
    avatar: "👨‍💻",
    content:
      "Las alertas de presupuesto me salvaron. Ya no me paso de mis límites. Y lo mejor es que mi esposa ve cuando gasto de más en tecnología 😅",
  },
  {
    name: "Camila & Luis",
    role: "Novios",
    avatar: "❤️",
    content:
      "Aunque no vivimos juntos, usamos PilasFi para planear viajes y gastos compartidos. Podemos ver cuánto aportó cada uno. ¡Súper útil!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section section-gray">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg">
              Lo que dicen las{" "}
              <span className="gradient-text">parejas</span>
            </h2>
            <p>
              Miles de parejas ecuatorianas ya manejan sus finanzas juntos con PilasFi.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid-features">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="testimonial-card"
            >
              {/* Stars */}
              <div className="flex gap-1" style={{ marginBottom: "1rem" }}>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="var(--color-warning)"
                    color="var(--color-warning)"
                  />
                ))}
              </div>

              {/* Content */}
              <p
                style={{
                  color: "var(--color-gray-700)",
                  flex: 1,
                  marginBottom: "1.5rem",
                  lineHeight: 1.7,
                }}
              >
                &ldquo;{t.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <span style={{ fontSize: "2rem" }}>{t.avatar}</span>
                <div>
                  <p style={{ fontWeight: 600, color: "var(--color-gray-900)" }}>
                    {t.name}
                  </p>
                  <p style={{ fontSize: "0.875rem", color: "var(--color-gray-500)" }}>
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            marginTop: "4rem",
            padding: "2.5rem",
            borderRadius: "20px",
            background: "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "2rem",
            textAlign: "center",
          }}
        >
          <style jsx global>{`
            @media (min-width: 768px) {
              .stats-banner { grid-template-columns: repeat(4, 1fr) !important; }
            }
          `}</style>
          {[
            { number: "10K+", label: "Usuarios activos" },
            { number: "5K+", label: "Parejas conectadas" },
            { number: "$500K+", label: "Ahorrados" },
            { number: "4.9★", label: "En App Store" },
          ].map((stat, i) => (
            <div key={i}>
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 800,
                  color: "white",
                }}
              >
                {stat.number}
              </div>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.875rem" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
