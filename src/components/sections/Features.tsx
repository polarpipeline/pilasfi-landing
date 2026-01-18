"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Brain,
  PieChart,
  Target,
  Users,
  Bell,
  Shield,
  Smartphone,
  TrendingUp,
  Wallet,
  Clock,
  Lock,
} from "lucide-react";

const features = [
  {
    icon: Mail,
    title: "Lectura Automática de Emails",
    description:
      "Conecta tu correo y PilasFi detecta automáticamente las notificaciones de tus bancos. Cada compra, transferencia o movimiento se registra sin que hagas nada.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Brain,
    title: "Categorización Inteligente",
    description:
      "Nuestro sistema identifica automáticamente si gastaste en comida, transporte, entretenimiento o cualquier otra categoría. Aprende de tus hábitos.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: PieChart,
    title: "Dashboard en Tiempo Real",
    description:
      "Visualiza tus ingresos, gastos y tendencias con gráficos claros. Compara mes a mes y entiende hacia dónde va tu dinero.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Target,
    title: "Metas de Ahorro",
    description:
      "Define cuánto quieres ahorrar y para qué. PilasFi te muestra tu progreso y te motiva a alcanzar tus objetivos financieros.",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Wallet,
    title: "Presupuestos Inteligentes",
    description:
      "Establece límites por categoría. Recibe alertas cuando estés cerca del 80% o lo superes. Toma el control de cada peso.",
    color: "from-red-500 to-rose-500",
  },
  {
    icon: Users,
    title: "Finanzas en Pareja",
    description:
      "Comparte presupuestos con tu pareja. Decide qué gastos son privados y cuáles compartidos. Ideal para manejar el hogar juntos.",
    color: "from-indigo-500 to-violet-500",
  },
  {
    icon: Bell,
    title: "Alertas Personalizadas",
    description:
      "Notificaciones cuando detectamos gastos inusuales, cuando superas un presupuesto o cuando alcanzas una meta de ahorro.",
    color: "from-teal-500 to-cyan-500",
  },
  {
    icon: TrendingUp,
    title: "Proyecciones Financieras",
    description:
      "Basado en tus patrones de gasto, proyectamos cómo terminará el mes. Anticipa problemas antes de que ocurran.",
    color: "from-fuchsia-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "100% Seguro",
    description:
      "Solo leemos emails, nunca accedemos a tu cuenta bancaria. Tus datos están encriptados y protegidos con los más altos estándares.",
    color: "from-emerald-500 to-green-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export default function Features() {
  return (
    <section id="features" className="section bg-[var(--color-gray-100)]">
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
            Funcionalidades
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Todo lo que necesitas para{" "}
            <span className="gradient-text">controlar tu dinero</span>
          </h2>
          <p className="text-lg text-[var(--color-foreground-secondary)] max-w-2xl mx-auto">
            Automatizamos lo tedioso para que tú solo te enfoques en tomar
            mejores decisiones financieras.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card group"
            >
              <div
                className={`feature-icon bg-gradient-to-br ${feature.color}`}
              >
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-[var(--color-foreground-secondary)]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "7+", label: "Bancos soportados" },
            { number: "100%", label: "Gratis" },
            { number: "<5s", label: "Sincronización" },
            { number: "24/7", label: "Monitoreo" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="stat-number mb-2">{stat.number}</div>
              <p className="text-[var(--color-foreground-secondary)]">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
