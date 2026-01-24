import { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { Mail, MessageCircle, Clock, HelpCircle, Bug, Lightbulb, Shield, CreditCard } from "lucide-react";

export const metadata: Metadata = {
  title: "Soporte y Ayuda",
  description: "Centro de ayuda y soporte de PilasFi. Encuentra respuestas a tus preguntas o contáctanos.",
};

export default function Support() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Correo Electrónico",
      description: "Respuesta en 24-48 horas hábiles",
      action: "soporte@pilasfi.com",
      href: "mailto:soporte@pilasfi.com",
    },
    {
      icon: MessageCircle,
      title: "Chat en la App",
      description: "Disponible de Lun-Vie 9am-6pm",
      action: "Abrir PilasFi",
      href: "#",
    },
  ];

  const commonTopics = [
    {
      icon: HelpCircle,
      title: "Primeros Pasos",
      questions: [
        "¿Cómo conecto mi correo electrónico?",
        "¿Qué bancos son compatibles?",
        "¿Cómo funciona la lectura de emails?",
        "¿Cómo invito a mi pareja?",
      ],
    },
    {
      icon: CreditCard,
      title: "Transacciones",
      questions: [
        "¿Por qué no aparece una transacción?",
        "¿Cómo cambio la categoría de un gasto?",
        "¿Puedo agregar transacciones manualmente?",
        "¿Por qué hay transacciones duplicadas?",
      ],
    },
    {
      icon: Shield,
      title: "Seguridad y Privacidad",
      questions: [
        "¿Es seguro conectar mi email?",
        "¿Qué información pueden ver otros?",
        "¿Cómo elimino mi cuenta?",
        "¿Dónde se almacenan mis datos?",
      ],
    },
    {
      icon: Bug,
      title: "Problemas Técnicos",
      questions: [
        "La app se cierra inesperadamente",
        "No puedo iniciar sesión",
        "Las notificaciones no funcionan",
        "La sincronización está lenta",
      ],
    },
  ];

  return (
    <LegalLayout title="Centro de Ayuda y Soporte" lastUpdated="18 de enero de 2026">
      <div className="highlight-box">
        <p>
          <strong>¿Necesitas ayuda?</strong> Estamos aquí para asistirte. Revisa las preguntas frecuentes o
          contáctanos directamente.
        </p>
      </div>

      <h2>Contáctanos</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        {contactMethods.map((method, index) => (
          <a
            key={index}
            href={method.href}
            style={{
              display: "block",
              padding: "1.5rem",
              background: "var(--color-gray-50)",
              borderRadius: "12px",
              textDecoration: "none",
              border: "1px solid var(--color-gray-200)",
              transition: "all 0.2s ease",
            }}
          >
            <method.icon
              size={28}
              style={{ color: "var(--color-primary)", marginBottom: "0.75rem" }}
            />
            <h3 style={{ margin: "0 0 0.25rem", color: "var(--color-gray-900)", fontSize: "1.1rem" }}>
              {method.title}
            </h3>
            <p style={{ margin: "0 0 0.5rem", color: "var(--color-gray-500)", fontSize: "0.875rem" }}>
              {method.description}
            </p>
            <span style={{ color: "var(--color-primary)", fontWeight: 600 }}>{method.action}</span>
          </a>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "1rem",
          background: "rgba(99, 102, 241, 0.1)",
          borderRadius: "8px",
          marginBottom: "2rem",
        }}
      >
        <Clock size={20} style={{ color: "var(--color-primary)" }} />
        <span style={{ color: "var(--color-gray-700)", fontSize: "0.9375rem" }}>
          <strong>Horario de atención:</strong> Lunes a Viernes, 9:00 AM - 6:00 PM (Ecuador)
        </span>
      </div>

      <h2>Temas de Ayuda</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
          marginBottom: "2rem",
        }}
      >
        {commonTopics.map((topic, index) => (
          <div
            key={index}
            style={{
              padding: "1.5rem",
              background: "white",
              borderRadius: "12px",
              border: "1px solid var(--color-gray-200)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <topic.icon size={20} color="white" />
              </div>
              <h3 style={{ margin: 0, fontSize: "1.1rem", color: "var(--color-gray-900)" }}>
                {topic.title}
              </h3>
            </div>
            <ul style={{ margin: 0, paddingLeft: "1.25rem" }}>
              {topic.questions.map((question, qIndex) => (
                <li
                  key={qIndex}
                  style={{ color: "var(--color-gray-600)", marginBottom: "0.5rem", fontSize: "0.9375rem" }}
                >
                  {question}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2>Preguntas Frecuentes</h2>

      <h3>¿Qué es PilasFi?</h3>
      <p>
        PilasFi es una aplicación de finanzas personales diseñada para Ecuador. Lee automáticamente las
        notificaciones de transacciones de tu banco desde tu email, las categoriza y te ayuda a entender y
        controlar tus gastos.
      </p>

      <h3>¿Es seguro conectar mi email?</h3>
      <p>
        Sí, completamente. PilasFi solo tiene acceso a los emails de notificaciones bancarias de los bancos
        compatibles. No leemos ni almacenamos ningún otro tipo de email personal o laboral. Además, nunca
        tenemos acceso a tus credenciales bancarias ni a tu cuenta bancaria directamente.
      </p>

      <h3>¿Qué bancos son compatibles?</h3>
      <p>Actualmente soportamos notificaciones de:</p>
      <ul>
        <li>Emails de notificaciones de transacciones bancarias</li>
        <li>Alertas de movimientos financieros</li>
        <li>Confirmaciones de operaciones</li>
        <li>Estados y transacciones de tarjetas</li>
        <li>Notificaciones de consumos</li>
        <li>Alertas transaccionales</li>
        <li>Notificaciones de movimientos</li>
      </ul>

      <h3>¿Cuánto cuesta PilasFi?</h3>
      <p>
        PilasFi es actualmente <strong>100% gratuito</strong>. No hay costos de suscripción, planes premium ni
        cargos ocultos.
      </p>

      <h3>¿Puedo compartir mis finanzas con mi pareja?</h3>
      <p>
        Sí, PilasFi incluye una función de finanzas compartidas. Puedes invitar a tu pareja y decidir qué gastos
        compartir (gastos del hogar) y cuáles mantener privados (gastos personales).
      </p>

      <h3>¿Cómo elimino mi cuenta?</h3>
      <p>Puedes eliminar tu cuenta de varias formas:</p>
      <ol>
        <li>Desde la app: Configuración → Cuenta → Eliminar mi cuenta</li>
        <li>
          Por email: Envía un correo a{" "}
          <a href="mailto:eliminar@pilasfi.com">eliminar@pilasfi.com</a>
        </li>
        <li>
          Visita nuestra página de <a href="/eliminar-datos">Eliminación de Datos</a>
        </li>
      </ol>

      <h3>¿Mis datos se venden a terceros?</h3>
      <p>
        <strong>No, nunca.</strong> No vendemos, alquilamos ni compartimos tu información personal con terceros
        para fines de marketing o publicidad. Tu privacidad es nuestra prioridad.
      </p>

      <h2>Reportar un Problema</h2>
      <p>Si encuentras un error o problema técnico, por favor incluye en tu reporte:</p>
      <ul>
        <li>Descripción detallada del problema</li>
        <li>Pasos para reproducir el error</li>
        <li>Modelo de tu dispositivo y versión del sistema operativo</li>
        <li>Versión de la app PilasFi</li>
        <li>Capturas de pantalla si es posible</li>
      </ul>
      <p>
        Envía tu reporte a: <a href="mailto:bugs@pilasfi.com">bugs@pilasfi.com</a>
      </p>

      <h2>Sugerencias y Mejoras</h2>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "1rem",
          padding: "1.5rem",
          background: "var(--color-gray-50)",
          borderRadius: "12px",
          marginBottom: "1.5rem",
        }}
      >
        <Lightbulb size={24} style={{ color: "var(--color-secondary)", flexShrink: 0, marginTop: "2px" }} />
        <div>
          <p style={{ margin: "0 0 0.5rem", fontWeight: 600, color: "var(--color-gray-900)" }}>
            ¿Tienes una idea para mejorar PilasFi?
          </p>
          <p style={{ margin: 0, color: "var(--color-gray-600)" }}>
            Nos encanta escuchar sugerencias de nuestros usuarios. Envíanos tus ideas a{" "}
            <a href="mailto:ideas@pilasfi.com">ideas@pilasfi.com</a> y las consideraremos para futuras
            actualizaciones.
          </p>
        </div>
      </div>

      <h2>Contactos por Departamento</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1rem" }}>
        <thead>
          <tr style={{ borderBottom: "2px solid var(--color-gray-200)" }}>
            <th style={{ textAlign: "left", padding: "0.75rem" }}>Departamento</th>
            <th style={{ textAlign: "left", padding: "0.75rem" }}>Email</th>
            <th style={{ textAlign: "left", padding: "0.75rem" }}>Propósito</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: "1px solid var(--color-gray-100)" }}>
            <td style={{ padding: "0.75rem" }}>Soporte General</td>
            <td style={{ padding: "0.75rem" }}>
              <a href="mailto:soporte@pilasfi.com">soporte@pilasfi.com</a>
            </td>
            <td style={{ padding: "0.75rem" }}>Ayuda general y preguntas</td>
          </tr>
          <tr style={{ borderBottom: "1px solid var(--color-gray-100)" }}>
            <td style={{ padding: "0.75rem" }}>Privacidad</td>
            <td style={{ padding: "0.75rem" }}>
              <a href="mailto:privacidad@pilasfi.com">privacidad@pilasfi.com</a>
            </td>
            <td style={{ padding: "0.75rem" }}>Temas de privacidad y datos</td>
          </tr>
          <tr style={{ borderBottom: "1px solid var(--color-gray-100)" }}>
            <td style={{ padding: "0.75rem" }}>Eliminación de Datos</td>
            <td style={{ padding: "0.75rem" }}>
              <a href="mailto:eliminar@pilasfi.com">eliminar@pilasfi.com</a>
            </td>
            <td style={{ padding: "0.75rem" }}>Solicitar eliminación de cuenta</td>
          </tr>
          <tr style={{ borderBottom: "1px solid var(--color-gray-100)" }}>
            <td style={{ padding: "0.75rem" }}>Errores Técnicos</td>
            <td style={{ padding: "0.75rem" }}>
              <a href="mailto:bugs@pilasfi.com">bugs@pilasfi.com</a>
            </td>
            <td style={{ padding: "0.75rem" }}>Reportar bugs y errores</td>
          </tr>
          <tr style={{ borderBottom: "1px solid var(--color-gray-100)" }}>
            <td style={{ padding: "0.75rem" }}>Sugerencias</td>
            <td style={{ padding: "0.75rem" }}>
              <a href="mailto:ideas@pilasfi.com">ideas@pilasfi.com</a>
            </td>
            <td style={{ padding: "0.75rem" }}>Ideas y mejoras</td>
          </tr>
          <tr style={{ borderBottom: "1px solid var(--color-gray-100)" }}>
            <td style={{ padding: "0.75rem" }}>Legal</td>
            <td style={{ padding: "0.75rem" }}>
              <a href="mailto:legal@pilasfi.com">legal@pilasfi.com</a>
            </td>
            <td style={{ padding: "0.75rem" }}>Asuntos legales</td>
          </tr>
        </tbody>
      </table>

      <div className="highlight-box">
        <p>
          <strong>Tiempo de respuesta:</strong> Nos esforzamos por responder todas las consultas dentro de 24-48
          horas hábiles. Para asuntos urgentes de seguridad, contáctanos inmediatamente a{" "}
          <a href="mailto:seguridad@pilasfi.com">seguridad@pilasfi.com</a>.
        </p>
      </div>
    </LegalLayout>
  );
}
