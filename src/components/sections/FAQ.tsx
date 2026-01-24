"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Shield, Lock, Mail, Eye, Users, Zap, HelpCircle } from "lucide-react";

const faqs = [
  {
    category: "Seguridad y Privacidad",
    icon: Shield,
    color: "#7B3FE4",
    questions: [
      {
        question: "¿Es seguro conectar mi email bancario?",
        answer:
          "Absolutamente. PilasFi solo lee los emails de notificaciones bancarias usando conexiones encriptadas. Nunca almacenamos tus credenciales bancarias ni accedemos a otros emails. Usamos los mismos protocolos de seguridad que los servicios bancarios más grandes del mundo.",
      },
      {
        question: "¿Qué información pueden ver mi pareja y yo?",
        answer:
          "Tú decides qué gastos son compartidos y cuáles son privados. Por defecto, solo los gastos que marques como 'compartidos' serán visibles para tu pareja. Tus gastos personales permanecen completamente privados.",
      },
      {
        question: "¿Dónde se almacenan mis datos?",
        answer:
          "Todos tus datos están encriptados y almacenados en servidores seguros en la nube. Usamos encriptación de extremo a extremo y cumplimos con los estándares internacionales de protección de datos.",
      },
      {
        question: "¿PilasFi tiene acceso a mi cuenta bancaria?",
        answer:
          "No. PilasFi nunca tiene acceso directo a tu cuenta bancaria. Solo leemos los emails de notificaciones que tu banco te envía automáticamente. Es como tener un asistente que organiza tus recibos por ti.",
      },
    ],
  },
  {
    category: "Funcionalidad",
    icon: Zap,
    color: "#037D7D",
    questions: [
      {
        question: "¿Funciona con cualquier banco?",
        answer:
          "PilasFi funciona con la mayoría de bancos que envían notificaciones por email. Nuestro sistema de aprendizaje automático se adapta automáticamente a los formatos de diferentes instituciones financieras. Si tu banco envía notificaciones por email, PilasFi puede leerlas.",
      },
      {
        question: "¿Funciona con cualquier email?",
        answer:
          "Sí, funciona con Gmail, Outlook, Yahoo y cualquier proveedor de email que soporte IMAP. Solo necesitas autorizar el acceso a los emails de notificaciones bancarias.",
      },
      {
        question: "¿Cuánto tiempo toma configurar PilasFi?",
        answer:
          "Menos de 2 minutos. Solo necesitas: 1) Conectar tu email, 2) Autorizar el acceso a notificaciones bancarias, 3) Invitar a tu pareja (opcional). PilasFi comenzará a detectar tus gastos automáticamente.",
      },
      {
        question: "¿Necesito ingresar mis gastos manualmente?",
        answer:
          "No. Una vez conectado tu email, PilasFi detecta automáticamente cada compra, retiro o transferencia de tus bancos. Solo necesitas revisar y categorizar ocasionalmente si el sistema no está seguro de algo.",
      },
    ],
  },
  {
    category: "Parejas y Compartir",
    icon: Users,
    color: "#F5A88E",
    questions: [
      {
        question: "¿Cómo invito a mi pareja?",
        answer:
          "Desde la app, ve a 'Configuración' > 'Pareja' y envía una invitación por email o mensaje. Tu pareja solo necesita descargar PilasFi y aceptar la invitación. Una vez conectados, verán los gastos compartidos juntos.",
      },
      {
        question: "¿Qué pasa si no tengo pareja?",
        answer:
          "PilasFi funciona perfectamente para uso individual también. Puedes usar todas las funciones de presupuestos, metas de ahorro y categorización sin necesidad de compartir con nadie.",
      },
      {
        question: "¿Puedo ocultar ciertos gastos de mi pareja?",
        answer:
          "Sí. Cada gasto puede marcarse como 'privado' o 'compartido'. Los gastos privados solo los ves tú, perfecto para regalos sorpresa o gastos personales que prefieres mantener en privado.",
      },
      {
        question: "¿Qué pasa si nos separamos o deseo desconectar a mi pareja?",
        answer:
          "Puedes desconectar a tu pareja en cualquier momento desde la configuración. Todos los datos compartidos se mantienen en tu cuenta, pero ya no se sincronizarán con la otra persona.",
      },
    ],
  },
  {
    category: "Precios y Disponibilidad",
    icon: Zap,
    color: "#1A1A3E",
    questions: [
      {
        question: "¿Cuánto cuesta PilasFi?",
        answer:
          "PilasFi es 100% gratis. No hay planes premium, suscripciones ocultas ni costos adicionales. Creemos que el control financiero debe ser accesible para todos.",
      },
      {
        question: "¿Está disponible en mi país?",
        answer:
          "PilasFi funciona en cualquier país donde tu banco envíe notificaciones por email. Nuestro sistema de aprendizaje automático se adapta a diferentes formatos e idiomas. Si puedes recibir emails de tu banco, puedes usar PilasFi.",
      },
      {
        question: "¿Necesito internet para usar la app?",
        answer:
          "Sí, necesitas conexión a internet para que PilasFi lea tus emails y sincronice los datos. Sin embargo, puedes ver tus datos guardados sin conexión una vez que se hayan descargado.",
      },
    ],
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section" style={{ background: "#F5F1EB" }}>
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
              <HelpCircle size={16} />
              <span>Resolvemos tus dudas</span>
            </div>
            <h2 className="display-lg">
              Preguntas{" "}
              <span style={{ color: "#7B3FE4" }}>Frecuentes</span>
            </h2>
            <p>
              Todo lo que necesitas saber sobre PilasFi, la seguridad de tus datos y cómo funciona.
            </p>
          </motion.div>
        </div>

        {/* FAQ Categories */}
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              style={{ marginBottom: "3rem" }}
            >
              {/* Category Header */}
              <div
                className="flex items-center gap-3"
                style={{ marginBottom: "1.5rem" }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "12px",
                    background: category.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <category.icon size={22} color={category.color === "#F5A88E" ? "#120D31" : "white"} />
                </div>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "#120D31",
                  }}
                >
                  {category.category}
                </h3>
              </div>

              {/* Questions */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = categoryIndex * 100 + questionIndex;
                  const isOpen = openIndex === globalIndex;

                  return (
                    <motion.div
                      key={questionIndex}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (categoryIndex * 0.1) + (questionIndex * 0.05) }}
                      whileHover={{
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                      }}
                      style={{
                        padding: "1.25rem 1.5rem",
                        cursor: "pointer",
                        background: "#FFFFFF",
                        borderRadius: "16px",
                        border: `1px solid ${isOpen ? "#7B3FE4" : "#E5E5E5"}`,
                        transition: "all 0.3s ease",
                      }}
                      onClick={() => toggleQuestion(globalIndex)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          toggleQuestion(globalIndex);
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      aria-expanded={isOpen}
                    >
                      <div
                        className="flex items-center justify-between"
                        style={{ gap: "1rem" }}
                      >
                        <h4
                          style={{
                            fontSize: "1rem",
                            fontWeight: 600,
                            color: "#120D31",
                            flex: 1,
                          }}
                        >
                          {faq.question}
                        </h4>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown
                            size={20}
                            color="#86909E"
                          />
                        </motion.div>
                      </div>
                      <motion.div
                        initial={false}
                        animate={{
                          height: isOpen ? "auto" : 0,
                          opacity: isOpen ? 1 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                        style={{ overflow: "hidden" }}
                      >
                        <p
                          style={{
                            color: "#535A6A",
                            marginTop: "1rem",
                            lineHeight: 1.8,
                            fontSize: "0.9375rem",
                          }}
                        >
                          {faq.answer}
                        </p>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginTop: "3rem" }}
        >
          <p style={{ color: "#86909E", marginBottom: "1.25rem" }}>
            ¿Tienes más preguntas?
          </p>
          <motion.a
            href="mailto:hola@pilasfi.com"
            className="btn btn-secondary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{ gap: "0.5rem" }}
          >
            <Mail size={18} />
            Contáctanos
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
