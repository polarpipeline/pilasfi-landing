"use client";

import { motion } from "framer-motion";
import { Check, CreditCard, Mail, Building2 } from "lucide-react";

const banks = [
  { name: "Banco Pichincha", supported: true },
  { name: "Banco Guayaquil", supported: true },
  { name: "Produbanco", supported: true },
  { name: "Diners Club", supported: true },
  { name: "Pacificard", supported: true },
  { name: "Banco del Pacífico", supported: true },
  { name: "De Una", supported: true },
];

// Bank Marquee Component
function BankMarquee() {
  // Duplicate banks for seamless loop
  const duplicatedBanks = [...banks, ...banks, ...banks];

  return (
    <div className="bank-marquee-wrapper" style={{ marginBottom: "4rem" }}>
      <motion.div
        className="bank-marquee"
        animate={{ x: [0, "-33.33%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
        style={{
          display: "flex",
          gap: "2rem",
        }}
      >
        {duplicatedBanks.map((bank, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            style={{
              padding: "1rem 2rem",
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              flexShrink: 0,
              cursor: "default",
              transition: "all 0.3s ease",
            }}
          >
            <Building2 size={20} color="rgba(255, 255, 255, 0.5)" />
            <span
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                fontWeight: 600,
                fontSize: "0.9375rem",
                whiteSpace: "nowrap",
              }}
            >
              {bank.name}
            </span>
            {bank.supported && (
              <Check size={16} color="#10B981" />
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

// Bank Card Grid (Alternative display)
function BankGrid() {
  return (
    <div
      className="banks-grid"
      style={{
        display: "grid",
        gap: "1rem",
        maxWidth: "900px",
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
          whileHover={{
            scale: 1.03,
            background: "rgba(255, 255, 255, 0.06)",
            borderColor: "rgba(99, 102, 241, 0.4)",
          }}
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "20px",
            padding: "1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            cursor: "default",
            transition: "all 0.3s ease",
          }}
        >
          <Building2 size={24} color="rgba(255, 255, 255, 0.5)" />
          <p
            style={{
              color: bank.supported ? "white" : "rgba(255, 255, 255, 0.4)",
              fontWeight: 600,
              fontSize: "1rem",
            }}
          >
            {bank.name}
          </p>
          {bank.supported && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.25rem",
              }}
            >
              <Check size={16} color="#10B981" />
            </div>
          )}
        </motion.div>
      ))}

      {/* Coming Soon Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: banks.length * 0.05 }}
        style={{
          background: "rgba(99, 102, 241, 0.1)",
          border: "1px dashed rgba(99, 102, 241, 0.3)",
          borderRadius: "20px",
          padding: "1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.75rem",
        }}
      >
        <span style={{ fontSize: "1.5rem" }}>➕</span>
        <p
          style={{
            color: "var(--color-primary-light)",
            fontWeight: 600,
            fontSize: "0.9375rem",
          }}
        >
          Tu banco aquí
        </p>
      </motion.div>
    </div>
  );
}

// Email Providers Component
function EmailProviders() {
  const providers = [
    { name: "Gmail", icon: "📧" },
    { name: "Outlook", icon: "📨" },
    { name: "Yahoo", icon: "📬" },
    { name: "IMAP", icon: "🔗" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      style={{
        textAlign: "center",
        marginTop: "4rem",
        padding: "2.5rem",
        background: "rgba(255, 255, 255, 0.02)",
        borderRadius: "24px",
        border: "1px solid rgba(255, 255, 255, 0.05)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.75rem",
          marginBottom: "1.5rem",
        }}
      >
        <Mail size={20} color="#818CF8" />
        <p style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "0.9375rem" }}>
          Funciona con tu email favorito
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {providers.map((provider) => (
          <motion.span
            key={provider.name}
            whileHover={{ scale: 1.05, background: "rgba(255, 255, 255, 0.08)" }}
            style={{
              padding: "0.75rem 1.5rem",
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "12px",
              color: "white",
              fontSize: "0.9375rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              cursor: "default",
              transition: "all 0.3s ease",
            }}
          >
            <span>{provider.icon}</span>
            {provider.name}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Banks() {
  return (
    <section id="banks" className="section" style={{ background: "var(--color-dark-900)" }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="badge" style={{ margin: "0 auto 1.5rem" }}>
              <CreditCard size={16} color="#818CF8" />
              <span>7 bancos conectados</span>
            </div>
            <h2 className="display-lg" style={{ color: "white" }}>
              Compatible con los bancos de{" "}
              <span className="gradient-text">Ecuador</span>
            </h2>
            <p style={{ color: "rgba(255, 255, 255, 0.6)" }}>
              Soportamos los principales bancos y tarjetas de crédito del país.
              Conexión automática a través de tus notificaciones de email.
            </p>
          </motion.div>
        </div>

        {/* Bank Marquee */}
        <BankMarquee />

        {/* Bank Grid */}
        <BankGrid />

        {/* Email Providers */}
        <EmailProviders />
      </div>
    </section>
  );
}
