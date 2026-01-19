"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const banks = [
  { name: "Banco Pichincha", emoji: "🏦", supported: true },
  { name: "Banco Guayaquil", emoji: "🏛️", supported: true },
  { name: "Produbanco", emoji: "💼", supported: true },
  { name: "Diners Club", emoji: "💳", supported: true },
  { name: "Pacificard", emoji: "🌊", supported: true },
  { name: "Banco del Pacífico", emoji: "🌅", supported: true },
  { name: "De Una", emoji: "⚡", supported: true },
  { name: "Tu banco aquí", emoji: "➕", supported: false },
];

export default function Banks() {
  return (
    <section id="banks" className="section section-dark">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg" style={{ color: "white" }}>
              Compatible con los bancos de{" "}
              <span className="gradient-text">Ecuador</span>
            </h2>
            <p style={{ color: "var(--color-gray-400)" }}>
              Soportamos los principales bancos y tarjetas de crédito del país.
            </p>
          </motion.div>
        </div>

        {/* Banks Grid */}
        <div
          className="banks-grid"
          style={{
            display: "grid",
            gap: "1rem",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          {banks.map((bank, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bank-card"
            >
              <span style={{ fontSize: "2rem", display: "block", marginBottom: "0.75rem" }}>
                {bank.emoji}
              </span>
              <p
                style={{
                  color: bank.supported ? "white" : "var(--color-gray-500)",
                  fontWeight: 500,
                  fontSize: "0.875rem",
                }}
              >
                {bank.name}
              </p>
              {bank.supported && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.25rem",
                    marginTop: "0.5rem",
                  }}
                >
                  <Check size={14} color="var(--color-success)" />
                  <span style={{ color: "var(--color-success)", fontSize: "0.75rem" }}>
                    Soportado
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Email Providers */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginTop: "3rem" }}
        >
          <p style={{ color: "var(--color-gray-500)", marginBottom: "1rem" }}>
            Funciona con tu email favorito
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["📧 Gmail", "📨 Outlook", "📬 IMAP"].map((provider) => (
              <span
                key={provider}
                style={{
                  padding: "0.5rem 1rem",
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "9999px",
                  color: "white",
                  fontSize: "0.875rem",
                }}
              >
                {provider}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
