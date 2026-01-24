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
      "Todos tus datos financieros están encriptados con AES-256, el mismo estándar que usan los bancos.",
    color: "#7B3FE4",
  },
  {
    icon: Shield,
    title: "Solo Lectura de Emails",
    description:
      "PilasFi solo lee los emails de notificaciones bancarias. Nunca puede enviar emails o modificar tu cuenta.",
    color: "#037D7D",
  },
  {
    icon: Eye,
    title: "Control de Privacidad",
    description:
      "Tú decides qué gastos compartir con tu pareja y cuáles mantener privados.",
    color: "#1A1A3E",
  },
  {
    icon: Server,
    title: "Servidores Seguros",
    description:
      "Nuestros servidores están en centros de datos certificados ISO 27001.",
    color: "#F5A88E",
  },
  {
    icon: Key,
    title: "Autenticación 2FA",
    description:
      "Protege tu cuenta con autenticación de dos factores para máxima seguridad.",
    color: "#7B3FE4",
  },
  {
    icon: FileLock,
    title: "Sin Credenciales",
    description:
      "Nunca almacenamos tus contraseñas bancarias. Solo usamos tokens seguros.",
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
    <section id="security" style={{ background: "#F5F1EB", padding: "5rem 0" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 3rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div
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
            <h2 style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 800,
              color: "#120D31",
              marginBottom: "0.75rem",
              lineHeight: 1.1,
            }}>
              Protegemos tus{" "}
              <span style={{ color: "#7B3FE4" }}>datos financieros</span>
            </h2>
            <p style={{ color: "#535A6A", fontSize: "1rem", lineHeight: 1.6 }}>
              Usamos los mismos protocolos de seguridad que los bancos más grandes del mundo.
              Tu información está segura con nosotros.
            </p>
          </motion.div>
        </div>

        {/* Security Features Grid */}
        <div className="security-grid">
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
                padding: "1.5rem",
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
                  marginBottom: "0.5rem",
                  color: "#120D31",
                }}
              >
                {feature.title}
              </h3>
              <p style={{ color: "#535A6A", fontSize: "0.875rem", lineHeight: 1.6 }}>
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
            marginTop: "3rem",
            padding: "2rem",
            background: "#FFFFFF",
            borderRadius: "20px",
            border: "1px solid #E5E5E5",
          }}
        >
          <h3
            style={{
              textAlign: "center",
              fontSize: "1.125rem",
              fontWeight: 700,
              marginBottom: "1.5rem",
              color: "#120D31",
            }}
          >
            Certificaciones y Estándares
          </h3>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.75rem",
                  padding: "1rem 1.5rem",
                  background: "#F5F1EB",
                  borderRadius: "14px",
                  border: "1px solid #E5E5E5",
                  transition: "all 0.3s ease",
                }}
              >
                <cert.icon size={22} color="#7B3FE4" />
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
            marginTop: "2rem",
            textAlign: "center",
            padding: "2rem",
            background: "#1A1A3E",
            borderRadius: "20px",
          }}
        >
          <Shield size={32} color="#7B3FE4" style={{ marginBottom: "1rem" }} />
          <p
            style={{
              color: "rgba(255, 255, 255, 0.85)",
              fontSize: "1rem",
              lineHeight: 1.7,
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            <strong style={{ color: "white" }}>Nuestro compromiso:</strong> Nunca vendemos tus datos, nunca compartimos
            información con terceros sin tu consentimiento explícito, y siempre te damos control
            total sobre tu información.
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        .security-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        .certifications-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        @media (min-width: 640px) {
          .security-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .certifications-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .security-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
