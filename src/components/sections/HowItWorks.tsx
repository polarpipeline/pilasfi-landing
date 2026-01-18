"use client";

import { motion } from "framer-motion";
import { Mail, Sparkles, BarChart3, Target, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Mail,
    title: "Conecta tu email",
    description:
      "Autoriza a PilasFi a leer los correos de tus bancos. Usamos OAuth seguro de Google o Microsoft. Solo leemos notificaciones bancarias, nada más.",
    highlight: "2 minutos de configuración",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Detectamos tus transacciones",
    description:
      "Nuestro sistema identifica automáticamente cada compra, retiro o transferencia de tus emails. Soportamos Banco Pichincha, Guayaquil, Produbanco, Diners y más.",
    highlight: "7 bancos ecuatorianos",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Visualiza tu panorama financiero",
    description:
      "Ve en tiempo real cuánto gastas, en qué categorías, y cómo se compara con meses anteriores. Dashboard claro y fácil de entender.",
    highlight: "Actualización en tiempo real",
  },
  {
    number: "04",
    icon: Target,
    title: "Alcanza tus metas",
    description:
      "Define presupuestos, metas de ahorro y recibe alertas inteligentes. Toma decisiones informadas y mejora tu salud financiera.",
    highlight: "Alertas automáticas",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[var(--color-primary-teal)]/10 text-[var(--color-primary-teal)] text-sm font-medium mb-4">
            Cómo Funciona
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            De cero a control total{" "}
            <span className="gradient-text">en minutos</span>
          </h2>
          <p className="text-lg text-[var(--color-foreground-secondary)] max-w-2xl mx-auto">
            No necesitas ingresar nada manualmente. Conecta tu email y deja que
            PilasFi haga el trabajo pesado.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-primary-blue)] via-[var(--color-primary-teal)] to-[var(--color-primary-blue)] opacity-20" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Content */}
                <div
                  className={`${index % 2 === 1 ? "lg:col-start-2" : ""} mb-8 lg:mb-0 ${
                    index % 2 === 1 ? "lg:text-left" : "lg:text-right"
                  }`}
                >
                  <div
                    className={`flex items-center gap-4 mb-4 ${
                      index % 2 === 1 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    <span className="text-6xl font-bold text-[var(--color-gray-200)]">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                    {step.title}
                  </h3>
                  <p className="text-[var(--color-foreground-secondary)] text-lg mb-4">
                    {step.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[var(--color-primary-blue)] font-medium">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-primary-blue)]" />
                    {step.highlight}
                  </span>
                </div>

                {/* Visual */}
                <div
                  className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative"
                  >
                    <div className="gradient-border p-8 lg:p-12">
                      <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl gradient-primary flex items-center justify-center mx-auto glow-primary">
                        <step.icon className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Center Dot */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full gradient-primary glow-primary" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <a href="#download" className="btn-primary text-lg py-4 px-8">
            Comenzar Ahora
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
