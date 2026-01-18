"use client";

import { motion } from "framer-motion";
import { Check, Plus } from "lucide-react";

const banks = [
  {
    name: "Banco Pichincha",
    status: "supported",
    logo: "🏦",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    name: "Banco Guayaquil",
    status: "supported",
    logo: "🏛️",
    color: "from-red-500 to-red-600",
  },
  {
    name: "Produbanco",
    status: "supported",
    logo: "💼",
    color: "from-blue-600 to-blue-700",
  },
  {
    name: "Diners Club",
    status: "supported",
    logo: "💳",
    color: "from-gray-700 to-gray-800",
  },
  {
    name: "Pacificard",
    status: "supported",
    logo: "🌊",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    name: "Banco del Pacífico",
    status: "supported",
    logo: "🌅",
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "De Una",
    status: "supported",
    logo: "⚡",
    color: "from-purple-500 to-purple-600",
  },
  {
    name: "Tu banco aquí",
    status: "coming",
    logo: "➕",
    color: "from-gray-400 to-gray-500",
  },
];

export default function Banks() {
  return (
    <section id="banks" className="section section-dark">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
            Compatibilidad
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Conecta los bancos de{" "}
            <span className="gradient-text">Ecuador</span>
          </h2>
          <p className="text-lg text-[var(--color-gray-400)] max-w-2xl mx-auto">
            Soportamos los principales bancos y tarjetas de crédito del país.
            ¿No ves el tuyo? Contáctanos y lo agregamos.
          </p>
        </motion.div>

        {/* Banks Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6"
        >
          {banks.map((bank, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`relative p-6 rounded-2xl border ${
                bank.status === "supported"
                  ? "bg-white/5 border-white/10 hover:border-[var(--color-primary-blue)]/50"
                  : "bg-white/[0.02] border-dashed border-white/20"
              } transition-all duration-300`}
            >
              {/* Status Badge */}
              {bank.status === "supported" && (
                <div className="absolute top-3 right-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-success)] flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                </div>
              )}

              {/* Bank Logo */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${bank.color} flex items-center justify-center text-2xl mb-4`}
              >
                {bank.logo}
              </div>

              {/* Bank Name */}
              <h3
                className={`font-semibold ${
                  bank.status === "supported"
                    ? "text-white"
                    : "text-[var(--color-gray-400)]"
                }`}
              >
                {bank.name}
              </h3>

              {/* Status Text */}
              <p
                className={`text-sm mt-1 ${
                  bank.status === "supported"
                    ? "text-[var(--color-success)]"
                    : "text-[var(--color-gray-500)]"
                }`}
              >
                {bank.status === "supported" ? "Disponible" : "Próximamente"}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Email Providers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-[var(--color-gray-400)] mb-6">
            Funciona con tu proveedor de correo favorito
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { name: "Gmail", icon: "📧" },
              { name: "Outlook", icon: "📨" },
              { name: "IMAP", icon: "📬" },
            ].map((provider, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10"
              >
                <span className="text-2xl">{provider.icon}</span>
                <span className="text-white font-medium">{provider.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
