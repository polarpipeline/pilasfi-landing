import { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad de PilasFi. Conoce cómo protegemos y manejamos tu información personal.",
};

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Política de Privacidad" lastUpdated="18 de enero de 2026">
      <div className="highlight-box">
        <p>
          <strong>Resumen:</strong> PilasFi respeta tu privacidad. Solo leemos emails de notificaciones bancarias,
          nunca accedemos a tu cuenta bancaria, y nunca vendemos tus datos a terceros.
        </p>
      </div>

      <h2>1. Introducción</h2>
      <p>
        PilasFi ("nosotros", "nuestro" o "la aplicación") se compromete a proteger la privacidad de nuestros
        usuarios. Esta Política de Privacidad explica cómo recopilamos, usamos, almacenamos y protegemos tu
        información personal cuando utilizas nuestra aplicación móvil y servicios relacionados.
      </p>
      <p>
        Al usar PilasFi, aceptas las prácticas descritas en esta política. Si no estás de acuerdo con alguna
        parte, te recomendamos no utilizar nuestros servicios.
      </p>

      <h2>2. Información que Recopilamos</h2>

      <h3>2.1 Información de Cuenta</h3>
      <ul>
        <li>Nombre y apellido</li>
        <li>Dirección de correo electrónico</li>
        <li>Contraseña (almacenada de forma encriptada)</li>
        <li>Foto de perfil (opcional)</li>
      </ul>

      <h3>2.2 Información de Emails Bancarios</h3>
      <p>
        PilasFi accede <strong>únicamente</strong> a los emails de notificaciones bancarias de los bancos
        ecuatorianos compatibles. Específicamente:
      </p>
      <ul>
        <li>Emails de Emails de notificaciones de transacciones bancarias (notificaciones de transacciones)</li>
        <li>Emails de Alertas de movimientos financieros (alertas de movimientos)</li>
        <li>Emails de Confirmaciones de operaciones (confirmaciones de operaciones)</li>
        <li>Emails de Estados y transacciones de tarjetas (estados y transacciones)</li>
        <li>Emails de Notificaciones de consumos (notificaciones de consumos)</li>
        <li>Emails de Alertas transaccionales (alertas transaccionales)</li>
        <li>Emails de Notificaciones de movimientos (notificaciones de movimientos)</li>
      </ul>
      <p>
        <strong>Importante:</strong> NO leemos, accedemos ni almacenamos ningún otro tipo de email personal,
        laboral o de cualquier otra naturaleza.
      </p>

      <h3>2.3 Información de Transacciones</h3>
      <p>De los emails bancarios, extraemos:</p>
      <ul>
        <li>Monto de la transacción</li>
        <li>Fecha y hora</li>
        <li>Comercio o descripción</li>
        <li>Tipo de transacción (compra, transferencia, retiro)</li>
        <li>Últimos 4 dígitos de la tarjeta (cuando está disponible)</li>
      </ul>

      <h3>2.4 Información del Dispositivo</h3>
      <ul>
        <li>Tipo de dispositivo y modelo</li>
        <li>Sistema operativo y versión</li>
        <li>Identificador único del dispositivo</li>
        <li>Información de red (solo tipo de conexión)</li>
      </ul>

      <h3>2.5 Información de Uso</h3>
      <ul>
        <li>Funciones utilizadas dentro de la app</li>
        <li>Frecuencia de uso</li>
        <li>Errores y crashes (para mejora del servicio)</li>
      </ul>

      <h2>3. Cómo Usamos tu Información</h2>
      <p>Utilizamos la información recopilada para:</p>
      <ul>
        <li>Proporcionar y mantener el servicio de PilasFi</li>
        <li>Categorizar automáticamente tus transacciones</li>
        <li>Generar reportes y estadísticas de gastos</li>
        <li>Sincronizar información con tu pareja (si has activado esta función)</li>
        <li>Enviarte notificaciones sobre tus gastos y presupuestos</li>
        <li>Mejorar y optimizar la aplicación</li>
        <li>Comunicarnos contigo sobre actualizaciones importantes</li>
        <li>Prevenir fraudes y mantener la seguridad</li>
      </ul>

      <h2>4. Información que NO Recopilamos</h2>
      <div className="highlight-box">
        <p>
          PilasFi <strong>NUNCA</strong> recopila ni tiene acceso a:
        </p>
      </div>
      <ul>
        <li>Credenciales de acceso a tu banco (usuario, contraseña, PIN)</li>
        <li>Números completos de tarjetas de crédito o débito</li>
        <li>Saldos de cuentas bancarias</li>
        <li>Emails personales, laborales o de cualquier otra naturaleza</li>
        <li>Contactos de tu teléfono</li>
        <li>Fotos o archivos de tu dispositivo</li>
        <li>Ubicación GPS en tiempo real</li>
        <li>Mensajes de texto (SMS)</li>
        <li>Historial de navegación</li>
      </ul>

      <h2>5. Compartir Información</h2>
      <p>
        <strong>No vendemos, alquilamos ni compartimos tu información personal con terceros</strong> para fines
        de marketing o publicidad.
      </p>
      <p>Podemos compartir información limitada en los siguientes casos:</p>
      <ul>
        <li>
          <strong>Con tu pareja:</strong> Si activas la función de finanzas compartidas, tu pareja podrá ver
          los gastos que marques como "del hogar". Los gastos marcados como "personales" permanecen privados.
        </li>
        <li>
          <strong>Proveedores de servicios:</strong> Utilizamos servicios de terceros para hosting, análisis y
          mejora del servicio. Estos proveedores están obligados contractualmente a proteger tu información.
        </li>
        <li>
          <strong>Requerimientos legales:</strong> Podemos divulgar información si la ley lo requiere o en
          respuesta a solicitudes legales válidas de autoridades públicas.
        </li>
      </ul>

      <h2>6. Seguridad de la Información</h2>
      <p>Implementamos medidas de seguridad de nivel bancario:</p>
      <ul>
        <li>Encriptación AES-256 para datos en reposo</li>
        <li>Conexiones TLS 1.3 para datos en tránsito</li>
        <li>Autenticación de dos factores (2FA) disponible</li>
        <li>Servidores protegidos con firewalls y monitoreo 24/7</li>
        <li>Auditorías de seguridad periódicas</li>
        <li>Acceso restringido a datos personales (principio de mínimo privilegio)</li>
      </ul>

      <h2>7. Retención de Datos</h2>
      <p>
        Conservamos tu información mientras mantengas una cuenta activa en PilasFi. Si eliminas tu cuenta:
      </p>
      <ul>
        <li>Tus datos personales serán eliminados dentro de 30 días</li>
        <li>Los datos de transacciones serán anonimizados o eliminados</li>
        <li>Algunos datos pueden conservarse por requerimientos legales</li>
      </ul>

      <h2>8. Tus Derechos</h2>
      <p>Tienes derecho a:</p>
      <ul>
        <li>
          <strong>Acceso:</strong> Solicitar una copia de tus datos personales
        </li>
        <li>
          <strong>Rectificación:</strong> Corregir información inexacta
        </li>
        <li>
          <strong>Eliminación:</strong> Solicitar la eliminación de tus datos
        </li>
        <li>
          <strong>Portabilidad:</strong> Exportar tus datos en formato legible
        </li>
        <li>
          <strong>Oposición:</strong> Objetar ciertos procesamientos de datos
        </li>
        <li>
          <strong>Retiro del consentimiento:</strong> Retirar permisos otorgados en cualquier momento
        </li>
      </ul>
      <p>
        Para ejercer estos derechos, contáctanos en{" "}
        <a href="mailto:privacidad@pilasfi.com">privacidad@pilasfi.com</a>
      </p>

      <h2>9. Privacidad de Menores</h2>
      <p>
        PilasFi no está dirigido a menores de 18 años. No recopilamos intencionalmente información de menores.
        Si descubrimos que hemos recopilado datos de un menor, los eliminaremos inmediatamente.
      </p>

      <h2>10. Transferencias Internacionales</h2>
      <p>
        Tus datos pueden ser procesados en servidores ubicados fuera de Ecuador. En estos casos, nos
        aseguramos de que existan salvaguardas adecuadas para proteger tu información conforme a estándares
        internacionales.
      </p>

      <h2>11. Cambios a esta Política</h2>
      <p>
        Podemos actualizar esta política ocasionalmente. Te notificaremos sobre cambios significativos a
        través de la aplicación o por correo electrónico. La fecha de "última actualización" al inicio
        indica cuándo se realizaron cambios.
      </p>

      <h2>12. Contacto</h2>
      <p>Si tienes preguntas sobre esta política de privacidad, contáctanos:</p>
      <ul>
        <li>
          <strong>Email:</strong> <a href="mailto:privacidad@pilasfi.com">privacidad@pilasfi.com</a>
        </li>
        <li>
          <strong>Soporte:</strong> <a href="mailto:soporte@pilasfi.com">soporte@pilasfi.com</a>
        </li>
        <li>
          <strong>Sitio web:</strong> <a href="https://pilasfi.com/soporte">pilasfi.com/soporte</a>
        </li>
      </ul>

      <h2>13. Jurisdicción y Ley Aplicable</h2>
      <p>
        Esta política se rige por las leyes de la República del Ecuador. Cualquier disputa será resuelta en
        los tribunales competentes de la ciudad de Quito, Ecuador.
      </p>
    </LegalLayout>
  );
}
