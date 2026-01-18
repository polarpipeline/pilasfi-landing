"use client";

import { motion } from "framer-motion";
import { Apple, Smartphone, ArrowRight, Zap, Shield, Clock } from "lucide-react";

const benefits = [
  { icon: Zap, text: "Configuración en 2 minutos" },
  { icon: Shield, text: "100% seguro y privado" },
  { icon: Clock, text: "Gratis para siempre" },
];

export default function CTA() {
  return (
    <section id="download" className="section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,102,255,0.15) 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-1/2 -right-1/4 w-[800px] h-[800px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,212,170,0.15) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-success)]/10 text-[var(--color-success)] text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-success)] animate-pulse" />
            Disponible ahora
          </motion.div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6">
            Toma el control de{" "}
            <span className="gradient-text">tu dinero hoy</span>
          </h2>

          <p className="text-xl text-[var(--color-foreground-secondary)] mb-8 max-w-2xl mx-auto">
            Únete a miles de ecuatorianos que ya están mejorando su salud
            financiera con PilasFi. Es gratis, seguro y toma solo minutos
            configurar.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 text-[var(--color-foreground-secondary)]"
              >
                <div className="w-8 h-8 rounded-full bg-[var(--color-primary-blue)]/10 flex items-center justify-center">
                  <benefit.icon className="w-4 h-4 text-[var(--color-primary-blue)]" />
                </div>
                <span>{benefit.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-black text-white hover:bg-gray-900 transition-colors"
            >
              <Apple className="w-8 h-8" />
              <div className="text-left">
                <p className="text-xs opacity-80">Descarga en el</p>
                <p className="text-lg font-semibold">App Store</p>
              </div>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-black text-white hover:bg-gray-900 transition-colors"
            >
              <Smartphone className="w-8 h-8" />
              <div className="text-left">
                <p className="text-xs opacity-80">Disponible en</p>
                <p className="text-lg font-semibold">Google Play</p>
              </div>
            </motion.a>
          </div>

          {/* QR Code Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center"
          >
            <p className="text-sm text-[var(--color-foreground-secondary)] mb-4">
              O escanea para descargar
            </p>
            <div className="w-32 h-32 bg-white rounded-2xl p-3 shadow-lg">
              <div className="w-full h-full bg-[var(--color-gray-200)] rounded-lg flex items-center justify-center">
                <span className="text-4xl">📱</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
