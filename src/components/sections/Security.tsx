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
    color: "#7B3FE4",
  },
  {
    icon: Shield,
    title: "Solo Lectura de Emails",
    description:
      "PilasFi solo lee los emails de notificaciones bancarias. Nunca puede enviar emails, modificar tu cuenta o acceder a otros correos. Es un acceso de solo lectura.",
    color: "#037D7D",
  },
  {
    icon: Eye,
    title: "Control de Privacidad",
    description:
      "Tú decides qué gastos compartir con tu pareja y cuáles mantener privados. Cada transacción puede marcarse como privada o compartida según tu preferencia.",
    color: "#1A1A3E",
  },
  {
    icon: Server,
    title: "Servidores Seguros",
    description:
      "Nuestros servidores están alojados en centros de datos de clase mundial con certificaciones ISO 27001 y cumplimiento con estándares internacionales de seguridad.",
    color: "#F5A88E",
  },
  {
    icon: Key,
    title: "Autenticación de Dos Factores",
    description:
      "Protege tu cuenta con autenticación de dos factores (2FA). Cada inicio de sesión requiere verificación adicional para máxima seguridad.",
    color: "#7B3FE4",
  },
  {
    icon: FileLock,
    title: "Sin Almacenamiento de Credenciales",
    description:
      "Nunca almacenamos tus contraseñas bancarias ni credenciales de acceso. Solo usamos tokens de acceso seguros proporcionados por tu proveedor de email.",
    color: "#037D7D",
  },
];

const certifications = [
  { name: "SSL/TLS Encriptado", icon: Globe },
  { name: "GDPR Compliant", icon: CheckCircle2 },
  { name: "ISO 27001", icon: Shield },
];

export default function Security() {
  return (
    <section id="security" className="section" style={{ background: "#F5F1EB" }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="badge-light"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 1rem",
                borderRadius: "9999px",
                marginBottom: "1rem",
                background: "rgba(123, 63, 228, 0.1)",
                color: "#7B3FE4",
                fontSize: "0.875rem",
                fontWeight: 600,
              }}
            >
              <Shield size={16} />
              <span>Tu seguridad es nuestra prioridad</span>
            </div>
            <h2 className="display-lg">
              Protegemos tus{" "}
              <span style={{ color: "#7B3FE4" }}>datos financieros</span>
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
              whileHover={{ y: -6 }}
              style={{
                background: "#FFFFFF",
                borderRadius: "20px",
                padding: "1.75rem",
                border: "1px solid #E5E5E5",
                transition: "all 0.3s ease",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: `${feature.color}15`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                <feature.icon size={24} color={feature.color} />
              </div>
              <h3
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  marginBottom: "0.75rem",
                  color: "#120D31",
                }}
              >
                {feature.title}
              </h3>
              <p style={{ color: "#535A6A", fontSize: "0.9375rem", lineHeight: 1.7 }}>
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
            background: "#FFFFFF",
            borderRadius: "24px",
            border: "1px solid #E5E5E5",
          }}
        >
          <h3
            style={{
              textAlign: "center",
              fontSize: "1.25rem",
              fontWeight: 700,
              marginBottom: "2rem",
              color: "#120D31",
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
                whileHover={{ scale: 1.05, background: "rgba(123, 63, 228, 0.1)" }}
                className="flex items-center gap-3"
                style={{
                  padding: "1rem 1.5rem",
                  background: "#F5F1EB",
                  borderRadius: "14px",
                  border: "1px solid #E5E5E5",
                  transition: "all 0.3s ease",
                }}
              >
                <cert.icon size={24} color="#7B3FE4" />
                <span
                  style={{
                    fontWeight: 600,
                    color: "#120D31",
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
            background: "#1A1A3E",
            borderRadius: "20px",
          }}
        >
          <Shield size={36} color="#7B3FE4" style={{ marginBottom: "1.25rem" }} />
          <p
            style={{
              color: "rgba(255, 255, 255, 0.85)",
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
