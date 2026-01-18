"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María García",
    role: "Emprendedora",
    avatar: "👩‍💼",
    content:
      "Antes gastaba horas ingresando mis gastos manualmente. Ahora PilasFi lo hace todo automático. Por fin sé exactamente a dónde va mi dinero.",
    rating: 5,
  },
  {
    name: "Carlos Mendoza",
    role: "Ingeniero de Software",
    avatar: "👨‍💻",
    content:
      "La función de finanzas en pareja cambió nuestra relación con el dinero. Ahora mi esposa y yo manejamos el presupuesto del hogar sin discusiones.",
    rating: 5,
  },
  {
    name: "Ana Lucía Pérez",
    role: "Médica",
    avatar: "👩‍⚕️",
    content:
      "Las alertas de presupuesto me salvaron. Ya no me paso de mis límites en comida o entretenimiento. Estoy ahorrando más que nunca.",
    rating: 5,
  },
  {
    name: "Roberto Sánchez",
    role: "Contador",
    avatar: "👨‍💼",
    content:
      "Como contador, valoro la precisión. PilasFi detecta cada transacción de mis tarjetas y las categoriza correctamente. Impresionante.",
    rating: 5,
  },
  {
    name: "Valentina Torres",
    role: "Diseñadora",
    avatar: "👩‍🎨",
    content:
      "El diseño es hermoso y súper fácil de usar. Los gráficos me ayudan a entender mis patrones de gasto de un vistazo. Lo recomiendo 100%.",
    rating: 5,
  },
  {
    name: "Diego Alvarado",
    role: "Freelancer",
    avatar: "🧑‍💻",
    content:
      "Con ingresos variables, necesitaba algo que me ayude a planificar. Las proyecciones de PilasFi me muestran cómo voy a terminar el mes.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section bg-[var(--color-gray-100)]">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[var(--color-primary-blue)]/10 text-[var(--color-primary-blue)] text-sm font-medium mb-4">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Lo que dicen nuestros{" "}
            <span className="gradient-text">usuarios</span>
          </h2>
          <p className="text-lg text-[var(--color-foreground-secondary)] max-w-2xl mx-auto">
            Miles de ecuatorianos ya están tomando control de sus finanzas con
            PilasFi.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[var(--color-gray-200)]" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[var(--color-warning)] text-[var(--color-warning)]"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-[var(--color-foreground)] mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-primary-blue)] to-[var(--color-primary-teal)] flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-[var(--color-foreground)]">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-[var(--color-foreground-secondary)]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-8 rounded-3xl gradient-primary"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { number: "10K+", label: "Usuarios activos" },
              { number: "500K+", label: "Transacciones procesadas" },
              { number: "4.9", label: "Calificación promedio" },
              { number: "$2M+", label: "Ahorrados por usuarios" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold mb-1">
                  {stat.number}
                </div>
                <p className="text-white/80 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
