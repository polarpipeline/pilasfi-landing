"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  Server,
  CheckCircle2,
  FileLock,
  Key,
  Globe,
} from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "Encriptación End-to-End",
    description:
      "Todos tus datos financieros están encriptados desde el momento en que los recibimos hasta que los almacenamos. Usamos encriptación AES-256, el mismo estándar que usan los bancos.",
  },
  {
    icon: Shield,
    title: "Solo Lectura de Emails",
    description:
      "PilasFi solo lee los emails de notificaciones bancarias. Nunca puede enviar emails, modificar tu cuenta o acceder a otros correos. Es un acceso de solo lectura.",
  },
  {
    icon: Eye,
    title: "Control de Privacidad",
    description:
      "Tú decides qué gastos compartir con tu pareja y cuáles mantener privados. Cada transacción puede marcarse como privada o compartida según tu preferencia.",
  },
  {
    icon: Server,
    title: "Servidores Seguros",
    description:
      "Nuestros servidores están alojados en centros de datos de clase mundial con certificaciones ISO 27001 y cumplimiento con estándares internacionales de seguridad.",
  },
  {
    icon: Key,
    title: "Autenticación de Dos Factores",
    description:
      "Protege tu cuenta con autenticación de dos factores (2FA). Cada inicio de sesión requiere verificación adicional para máxima seguridad.",
  },
  {
    icon: FileLock,
    title: "Sin Almacenamiento de Credenciales",
    description:
      "Nunca almacenamos tus contraseñas bancarias ni credenciales de acceso. Solo usamos tokens de acceso seguros proporcionados por tu proveedor de email.",
  },
];

const certifications = [
  { name: "SSL/TLS Encriptado", icon: Globe },
  { name: "GDPR Compliant", icon: CheckCircle2 },
  { name: "ISO 27001", icon: Shield },
];

export default function Security() {
  return (
    <section id="security" className="section" style={{ background: "var(--color-dark-800)" }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="badge" style={{ margin: "0 auto 1.5rem" }}>
              <Shield size={16} color="#818CF8" />
              <span>Tu seguridad es nuestra prioridad</span>
            </div>
            <h2 className="display-lg">
              Protegemos tus{" "}
              <span className="gradient-text">datos financieros</span>
            </h2>
            <p>
              Usamos los mismos protocolos de seguridad que los bancos más grandes del mundo.
              Tu información está segura con nosotros.
            </p>
          </motion.div>
        </div>

        {/* Security Features Grid */}
        <div className="grid-features">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="card"
            >
              <div className="feature-icon">
                <feature.icon size={28} />
              </div>
              <h3
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  marginBottom: "0.75rem",
                  color: "white",
                }}
              >
                {feature.title}
              </h3>
              <p style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "0.9375rem", lineHeight: 1.7 }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            marginTop: "4rem",
            padding: "2.5rem",
            background: "rgba(255, 255, 255, 0.03)",
            borderRadius: "24px",
            border: "1px solid rgba(255, 255, 255, 0.06)",
          }}
        >
          <h3
            style={{
              textAlign: "center",
              fontSize: "1.25rem",
              fontWeight: 700,
              marginBottom: "2rem",
              color: "white",
            }}
          >
            Certificaciones y Estándares
          </h3>
          <div
            className="flex flex-wrap justify-center gap-6"
            style={{ alignItems: "center" }}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, background: "rgba(99, 102, 241, 0.15)" }}
                className="flex items-center gap-3"
                style={{
                  padding: "1rem 1.5rem",
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "14px",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  transition: "all 0.3s ease",
                }}
              >
                <cert.icon size={24} color="#818CF8" />
                <span
                  style={{
                    fontWeight: 600,
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: "0.9375rem",
                  }}
                >
                  {cert.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            marginTop: "3rem",
            textAlign: "center",
            padding: "2.5rem",
            background: "linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(6, 182, 212, 0.1))",
            borderRadius: "20px",
            border: "1px solid rgba(99, 102, 241, 0.2)",
          }}
        >
          <Shield size={36} color="#818CF8" style={{ marginBottom: "1.25rem" }} />
          <p
            style={{
              color: "rgba(255, 255, 255, 0.8)",
              fontSize: "1.125rem",
              lineHeight: 1.8,
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            <strong style={{ color: "white" }}>Nuestro compromiso:</strong> Nunca vendemos tus datos, nunca compartimos
            información con terceros sin tu consentimiento explícito, y siempre te damos control
            total sobre tu información. Puedes eliminar todos tus datos en cualquier momento.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
