import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad - PilasFi",
  description: "Política de privacidad de PilasFi. Conoce cómo protegemos y manejamos tu información personal.",
};

export default function PrivacyPolicy() {
  return (
    <div style={{ 
      maxWidth: "800px", 
      margin: "0 auto", 
      padding: "2rem", 
      fontFamily: "system-ui, -apple-system, sans-serif",
      lineHeight: "1.6",
      color: "#333"
    }}>
      <header style={{ marginBottom: "3rem", borderBottom: "1px solid #eee", paddingBottom: "1rem" }}>
        <Link href="/" style={{ textDecoration: "none", color: "#6366F1", fontWeight: "bold" }}>← Volver a PilasFi</Link>
        <h1 style={{ fontSize: "2.5rem", marginTop: "1rem", marginBottom: "0.5rem" }}>Política de Privacidad</h1>
        <p style={{ color: "#666" }}>Última actualización: 18 de enero de 2026</p>
      </header>

      <main>
        <section style={{ marginBottom: "2rem", padding: "1.5rem", background: "#f8f9fa", borderRadius: "8px" }}>
          <p style={{ margin: 0 }}>
            <strong>Resumen:</strong> PilasFi respeta tu privacidad. Solo leemos emails de notificaciones bancarias
            de tu cuenta de Gmail, nunca accedemos a tu cuenta bancaria, y nunca vendemos tus datos a terceros.
          </p>
        </section>

        <h2>1. Introducción</h2>
        <p>
          <strong>Nombre de la aplicación:</strong> PilasFi<br />
          <strong>Desarrollador:</strong> PilasFi Team<br />
          <strong>Sitio web:</strong> https://pilasfi.com
        </p>
        <p>
          PilasFi ("nosotros", "nuestro" o "la aplicación") se compromete a proteger la privacidad de nuestros
          usuarios. Esta Política de Privacidad explica cómo recopilamos, usamos, almacenamos y protegemos tu
          información personal cuando utilizas nuestra aplicación móvil y servicios relacionados.
        </p>

        <h2>2. Información que Recopilamos</h2>

        <h3>2.1 Información de Cuenta</h3>
        <ul>
          <li>Nombre y apellido</li>
          <li>Dirección de correo electrónico</li>
          <li>Contraseña (almacenada de forma encriptada)</li>
          <li>Foto de perfil (opcional)</li>
        </ul>

        <h3>2.2 Acceso a Gmail (Datos de Google)</h3>
        <p>
          PilasFi utiliza la API de Gmail de Google para acceder a tu cuenta de correo electrónico con
          <strong> permisos de solo lectura</strong>. Este acceso se utiliza exclusivamente para:
        </p>
        <ul>
          <li>Detectar y leer emails de notificaciones bancarias de bancos ecuatorianos</li>
          <li>Extraer información de transacciones (monto, fecha, comercio) de dichos emails</li>
        </ul>
        
        <p><strong>Qué datos de Google recopilamos:</strong></p>
        <ul>
          <li>Tu dirección de correo electrónico de Gmail (para identificar tu cuenta)</li>
          <li>El contenido de emails que provienen específicamente de bancos ecuatorianos</li>
        </ul>

        <p><strong>Qué datos de Google NO recopilamos:</strong></p>
        <ul>
          <li>Emails personales, laborales o de cualquier otro remitente que no sea un banco</li>
          <li>Contactos de Gmail</li>
          <li>Archivos de Google Drive</li>
          <li>Cualquier otro dato de tu cuenta de Google</li>
        </ul>

        <div style={{ margin: "2rem 0", padding: "1.5rem", border: "1px solid #e5e7eb", borderRadius: "8px" }}>
          <p style={{ margin: 0 }}>
            <strong>Cumplimiento con Google API Services User Data Policy:</strong> El uso y transferencia
            a cualquier otra aplicación de la información recibida de las APIs de Google por parte de PilasFi
            cumplirá con la <a href="https://developers.google.com/terms/api-services-user-data-policy" style={{ color: "#6366F1" }}>Política de Datos de Usuario de los Servicios de API de Google</a>, incluyendo los requisitos de Uso Limitado (Limited Use requirements).
          </p>
        </div>

        <h3>2.3 Información de Emails Bancarios</h3>
        <p>
          De tu cuenta de Gmail, PilasFi accede <strong>únicamente</strong> a los emails de notificaciones
          bancarias de los bancos ecuatorianos compatibles.
        </p>

        <h2>3. Cómo Usamos tu Información</h2>
        <ul>
          <li>Proporcionar y mantener el servicio de PilasFi</li>
          <li>Categorizar automáticamente tus transacciones</li>
          <li>Generar reportes y estadísticas de gastos</li>
          <li>Sincronizar información con tu pareja (si has activado esta función)</li>
        </ul>

        <h2>4. Información que NO Recopilamos</h2>
        <p>PilasFi <strong>NUNCA</strong> recopila ni tiene acceso a:</p>
        <ul>
          <li>Credenciales de acceso a tu banco (usuario, contraseña, PIN)</li>
          <li>Números completos de tarjetas de crédito o débito</li>
          <li>Saldos de cuentas bancarias</li>
          <li>Emails personales no bancarios</li>
        </ul>

        <h2>5. Compartir Información</h2>
        <p>
          <strong>No vendemos, alquilamos ni compartimos tu información personal con terceros</strong> para fines
          de marketing o publicidad.
        </p>

        <h2>6. Seguridad de la Información</h2>
        <p>Implementamos medidas de seguridad de nivel bancario como encriptación AES-256 y conexiones TLS 1.3.</p>

        <h2>7. Retención y Eliminación de Datos</h2>
        <p>
          Conservamos tu información mientras mantengas una cuenta activa. Si eliminas tu cuenta, tus datos personales
          serán eliminados en 30 días. Puedes solicitar la eliminación inmediata contactándonos.
        </p>

        <h2>8. Contacto</h2>
        <p>Si tienes preguntas sobre esta política, contáctanos:</p>
        <ul>
          <li>Email: <strong>andreco87@gmail.com</strong></li>
          <li>Soporte: <strong>andreco87@gmail.com</strong></li>
        </ul>
      </main>
      
      <footer style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid #eee", fontSize: "0.9rem", color: "#666" }}>
        <p>© {new Date().getFullYear()} PilasFi. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}