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
    <section id="security" className="section section-gray">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="badge" style={{ margin: "0 auto 1rem" }}>
              <Shield size={16} />
              <span>Tu seguridad es nuestra prioridad</span>
            </div>
            <h2 className="heading-lg">
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
                  fontWeight: 600,
                  marginBottom: "0.75rem",
                  color: "var(--color-gray-900)",
                }}
              >
                {feature.title}
              </h3>
              <p style={{ color: "var(--color-gray-500)", fontSize: "0.9375rem" }}>
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
            background: "var(--color-white)",
            borderRadius: "20px",
            border: "1px solid var(--color-gray-100)",
          }}
        >
          <h3
            style={{
              textAlign: "center",
              fontSize: "1.25rem",
              fontWeight: 600,
              marginBottom: "2rem",
              color: "var(--color-gray-900)",
            }}
          >
            Certificaciones y Estándares
          </h3>
          <div
            className="flex flex-wrap justify-center gap-6"
            style={{ alignItems: "center" }}
          >
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-3"
                style={{
                  padding: "1rem 1.5rem",
                  background: "var(--color-gray-50)",
                  borderRadius: "12px",
                }}
              >
                <cert.icon
                  size={24}
                  className="text-[var(--color-primary)]"
                />
                <span
                  style={{
                    fontWeight: 600,
                    color: "var(--color-gray-700)",
                    fontSize: "0.9375rem",
                  }}
                >
                  {cert.name}
                </span>
              </div>
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
            padding: "2rem",
            background: "linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(6, 182, 212, 0.05))",
            borderRadius: "16px",
          }}
        >
          <Shield size={32} className="text-[var(--color-primary)]" style={{ marginBottom: "1rem" }} />
          <p
            style={{
              color: "var(--color-gray-700)",
              fontSize: "1.125rem",
              lineHeight: 1.7,
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            <strong>Nuestro compromiso:</strong> Nunca vendemos tus datos, nunca compartimos
            información con terceros sin tu consentimiento explícito, y siempre te damos control
            total sobre tu información. Puedes eliminar todos tus datos en cualquier momento.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
