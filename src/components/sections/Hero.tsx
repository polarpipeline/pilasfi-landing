"use client";

import { motion } from "framer-motion";
import {
  Mail,
  TrendingUp,
  PiggyBank,
  Shield,
  Play,
  ChevronDown,
  Sparkles,
} from "lucide-react";

const floatingElements = [
  { icon: Mail, delay: 0, x: -60, y: -40 },
  { icon: TrendingUp, delay: 0.2, x: 60, y: -60 },
  { icon: PiggyBank, delay: 0.4, x: -80, y: 40 },
  { icon: Shield, delay: 0.6, x: 70, y: 60 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,102,255,0.3) 0%, transparent 70%)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,212,170,0.3) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-gray-100)] dark:bg-[var(--color-gray-800)] mb-6"
            >
              <Sparkles className="w-4 h-4 text-[var(--color-primary-blue)]" />
              <span className="text-sm font-medium">
                Disponible para Ecuador
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Tus finanzas{" "}
              <span className="gradient-text">en automático</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-[var(--color-foreground-secondary)] mb-8 max-w-xl mx-auto lg:mx-0">
              PilasFi lee los emails de tu banco y organiza tus gastos
              automáticamente. Sin esfuerzo. Sin errores. Solo resultados.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <motion.a
                href="#download"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary text-lg py-4 px-8"
              >
                <span>Comenzar Gratis</span>
                <ChevronDown className="w-5 h-5 rotate-[-90deg]" />
              </motion.a>
              <motion.a
                href="#how-it-works"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-secondary text-lg py-4 px-8"
              >
                <Play className="w-5 h-5" />
                <span>Ver cómo funciona</span>
              </motion.a>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center gap-6 justify-center lg:justify-start text-sm text-[var(--color-foreground-secondary)]"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[var(--color-success)]" />
                <span>100% Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--color-success)]" />
                <span>Sin acceso a tu cuenta bancaria</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--color-success)]" />
                <span>Gratis para siempre</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center"
          >
            {/* Floating Icons */}
            {floatingElements.map((element, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -10, 0],
                }}
                transition={{
                  delay: element.delay + 0.5,
                  duration: 0.5,
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: element.delay,
                  },
                }}
                className="absolute hidden lg:flex items-center justify-center w-14 h-14 rounded-2xl glass glow-primary"
                style={{
                  left: `calc(50% + ${element.x}px)`,
                  top: `calc(50% + ${element.y}px)`,
                }}
              >
                <element.icon className="w-7 h-7 text-[var(--color-primary-blue)]" />
              </motion.div>
            ))}

            {/* Phone */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="phone-mockup glow-primary"
            >
              <div className="phone-screen p-4">
                {/* Status Bar */}
                <div className="flex justify-between items-center text-white text-xs mb-4 opacity-60">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <span>5G</span>
                    <span>100%</span>
                  </div>
                </div>

                {/* App Header */}
                <div className="mb-6">
                  <p className="text-white/60 text-sm">Buenos días</p>
                  <h3 className="text-white text-xl font-bold">Andrés</h3>
                </div>

                {/* Balance Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="gradient-primary rounded-2xl p-4 mb-4"
                >
                  <p className="text-white/80 text-sm mb-1">Balance Total</p>
                  <p className="text-white text-3xl font-bold">$4,850.00</p>
                  <div className="flex items-center gap-1 mt-2">
                    <TrendingUp className="w-4 h-4 text-white" />
                    <span className="text-white/90 text-sm">+12% este mes</span>
                  </div>
                </motion.div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 }}
                    className="bg-white/10 rounded-xl p-3"
                  >
                    <p className="text-white/60 text-xs mb-1">Ingresos</p>
                    <p className="text-[var(--color-success-light)] font-bold">
                      +$2,500
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.3 }}
                    className="bg-white/10 rounded-xl p-3"
                  >
                    <p className="text-white/60 text-xs mb-1">Gastos</p>
                    <p className="text-[var(--color-error-light)] font-bold">
                      -$1,234
                    </p>
                  </motion.div>
                </div>

                {/* Recent Transactions */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  <p className="text-white/60 text-sm mb-3">Recientes</p>
                  <div className="space-y-3">
                    {[
                      { name: "Amazon", amount: "-$45.99", icon: "🛒" },
                      { name: "Spotify", amount: "-$9.99", icon: "🎵" },
                      { name: "Salario", amount: "+$2,500", icon: "💰" },
                    ].map((tx, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.6 + i * 0.1 }}
                        className="flex items-center justify-between bg-white/5 rounded-lg p-3"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{tx.icon}</span>
                          <span className="text-white text-sm">{tx.name}</span>
                        </div>
                        <span
                          className={`text-sm font-medium ${
                            tx.amount.startsWith("+")
                              ? "text-[var(--color-success-light)]"
                              : "text-white"
                          }`}
                        >
                          {tx.amount}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-[var(--color-foreground-secondary)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
