import { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Información sobre el uso de cookies y tecnologías similares en PilasFi.",
};

export default function CookiePolicy() {
  return (
    <LegalLayout title="Política de Cookies" lastUpdated="18 de enero de 2026">
      <div className="highlight-box">
        <p>
          <strong>Resumen:</strong> Usamos cookies mínimas y esenciales para que la aplicación funcione
          correctamente. No usamos cookies de publicidad ni rastreo de terceros.
        </p>
      </div>

      <h2>1. ¿Qué son las Cookies?</h2>
      <p>
        Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio
        web o usas una aplicación. Permiten recordar tus preferencias y mejorar tu experiencia de usuario.
      </p>

      <h2>2. Cookies que Utilizamos</h2>

      <h3>2.1 Cookies Esenciales</h3>
      <p>Estas cookies son necesarias para el funcionamiento básico de PilasFi:</p>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1rem" }}>
        <thead>
          <tr style={{ borderBottom: "2px solid var(--color-gray-200)" }}>
            <th style={{ textAlign: "left", padding: "0.75rem" }}>Nombre</th>
            <th style={{ textAlign: "left", padding: "0.75rem" }}>Propósito</th>
            <th style={{ textAlign: "left", padding: "0.75rem" }}>Duración</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: "1px solid var(--color-gray-100)" }}>
            <td style={{ padding: "0.75rem" }}>session_token</td>
            <td style={{ padding: "0.75rem" }}>Mantener tu sesión iniciada</td>
            <td style={{ padding: "0.75rem" }}>30 días</td>
          </tr>
          <tr style={{ borderBottom: "1px solid var(--color-gray-100)" }}>
            <td style={{ padding: "0.75rem" }}>csrf_token</td>
            <td style={{ padding: "0.75rem" }}>Seguridad contra ataques CSRF</td>
            <td style={{ padding: "0.75rem" }}>Sesión</td>
          </tr>
          <tr style={{ borderBottom: "1px solid var(--color-gray-100)" }}>
            <td style={{ padding: "0.75rem" }}>device_id</td>
            <td style={{ padding: "0.75rem" }}>Identificar tu dispositivo para seguridad</td>
            <td style={{ padding: "0.75rem" }}>1 año</td>
          </tr>
        </tbody>
      </table>

      <h3>2.2 Cookies de Preferencias</h3>
      <p>Guardan tus preferencias de uso:</p>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1rem" }}>
        <thead>
          <tr style={{ borderBottom: "2px solid var(--color-gray-200)" }}>
            <th style={{ textAlign: "left", padding: "0.75rem" }}>Nombre</th>
            <th style={{ textAlign: "left", padding: "0.75rem" }}>Propósito</th>
            <th style={{ textAlign: "left", padding: "0.75rem" }}>Duración</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: "1px solid var(--color-gray-100)" }}>
            <td style={{ padding: "0.75rem" }}>theme</td>
            <td style={{ padding: "0.75rem" }}>Tema claro/oscuro preferido</td>
            <td style={{ padding: "0.75rem" }}>1 año</td>
          </tr>
          <tr style={{ borderBottom: "1px solid var(--color-gray-100)" }}>
            <td style={{ padding: "0.75rem" }}>currency_format</td>
            <td style={{ padding: "0.75rem" }}>Formato de moneda preferido</td>
            <td style={{ padding: "0.75rem" }}>1 año</td>
          </tr>
          <tr style={{ borderBottom: "1px solid var(--color-gray-100)" }}>
            <td style={{ padding: "0.75rem" }}>notifications</td>
            <td style={{ padding: "0.75rem" }}>Preferencias de notificaciones</td>
            <td style={{ padding: "0.75rem" }}>1 año</td>
          </tr>
        </tbody>
      </table>

      <h3>2.3 Cookies de Análisis</h3>
      <p>Nos ayudan a entender cómo usas la aplicación para mejorarla:</p>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1rem" }}>
        <thead>
          <tr style={{ borderBottom: "2px solid var(--color-gray-200)" }}>
            <th style={{ textAlign: "left", padding: "0.75rem" }}>Nombre</th>
            <th style={{ textAlign: "left", padding: "0.75rem" }}>Propósito</th>
            <th style={{ textAlign: "left", padding: "0.75rem" }}>Duración</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: "1px solid var(--color-gray-100)" }}>
            <td style={{ padding: "0.75rem" }}>_ga (Google Analytics)</td>
            <td style={{ padding: "0.75rem" }}>Análisis de uso anónimo</td>
            <td style={{ padding: "0.75rem" }}>2 años</td>
          </tr>
        </tbody>
      </table>

      <h2>3. Cookies que NO Utilizamos</h2>
      <p>PilasFi NO utiliza:</p>
      <ul>
        <li>Cookies de publicidad o remarketing</li>
        <li>Cookies de seguimiento de terceros para publicidad</li>
        <li>Cookies de redes sociales (Facebook Pixel, etc.)</li>
        <li>Cookies para vender o compartir tus datos</li>
      </ul>

      <h2>4. Tecnologías Similares</h2>
      <p>Además de cookies, utilizamos:</p>
      <ul>
        <li>
          <strong>Local Storage:</strong> Para almacenar datos de la aplicación en tu dispositivo
        </li>
        <li>
          <strong>Session Storage:</strong> Para datos temporales durante tu sesión
        </li>
        <li>
          <strong>IndexedDB:</strong> Para almacenar datos de transacciones localmente para uso offline
        </li>
      </ul>

      <h2>5. Cómo Gestionar las Cookies</h2>

      <h3>5.1 En tu Navegador</h3>
      <p>
        Puedes configurar tu navegador para bloquear o eliminar cookies. Ten en cuenta que esto puede afectar
        el funcionamiento de PilasFi.
      </p>
      <ul>
        <li>
          <strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies
        </li>
        <li>
          <strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies
        </li>
        <li>
          <strong>Safari:</strong> Preferencias → Privacidad → Cookies
        </li>
        <li>
          <strong>Edge:</strong> Configuración → Privacidad → Cookies
        </li>
      </ul>

      <h3>5.2 En la Aplicación Móvil</h3>
      <p>
        En la app móvil de PilasFi, puedes gestionar el almacenamiento de datos desde Configuración →
        Privacidad → Gestionar datos.
      </p>

      <h2>6. Consentimiento</h2>
      <p>
        Las cookies esenciales se activan automáticamente ya que son necesarias para el funcionamiento de
        PilasFi. Para las cookies de análisis, solicitamos tu consentimiento la primera vez que usas la
        aplicación.
      </p>
      <p>Puedes cambiar tu preferencia de cookies en cualquier momento desde Configuración → Privacidad.</p>

      <h2>7. Actualizaciones</h2>
      <p>
        Podemos actualizar esta política cuando cambiemos las cookies que utilizamos. La fecha de "última
        actualización" indica cuándo se realizaron cambios.
      </p>

      <h2>8. Contacto</h2>
      <p>Si tienes preguntas sobre nuestra política de cookies:</p>
      <ul>
        <li>
          <strong>Email:</strong> <a href="mailto:privacidad@pilasfi.com">privacidad@pilasfi.com</a>
        </li>
      </ul>
    </LegalLayout>
  );
}
