import { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Eliminar mis Datos",
  description: "Solicita la eliminación de tus datos personales de PilasFi. Proceso simple y rápido.",
};

export default function DataDeletion() {
  return (
    <LegalLayout title="Eliminar mis Datos" lastUpdated="18 de enero de 2026">
      <div className="highlight-box">
        <p>
          <strong>Tu derecho:</strong> Tienes derecho a solicitar la eliminación completa de todos tus datos
          personales de PilasFi en cualquier momento. El proceso es gratuito y se completa en máximo 30 días.
        </p>
      </div>

      <h2>Opciones para Eliminar tus Datos</h2>

      <h3>Opción 1: Desde la Aplicación (Recomendado)</h3>
      <p>La forma más rápida de eliminar tu cuenta y datos:</p>
      <ol>
        <li>Abre la aplicación PilasFi</li>
        <li>Ve a <strong>Configuración</strong> (ícono de engranaje)</li>
        <li>Selecciona <strong>Cuenta</strong></li>
        <li>Toca <strong>Eliminar mi cuenta</strong></li>
        <li>Confirma tu decisión ingresando tu contraseña</li>
        <li>Tus datos serán eliminados inmediatamente</li>
      </ol>

      <h3>Opción 2: Por Correo Electrónico</h3>
      <p>Si no puedes acceder a la aplicación, envía un correo a:</p>
      <p style={{ fontSize: "1.25rem", fontWeight: 600 }}>
        <a href="mailto:eliminar@pilasfi.com">eliminar@pilasfi.com</a>
      </p>
      <p>Incluye en tu solicitud:</p>
      <ul>
        <li>Asunto: "Solicitud de eliminación de datos"</li>
        <li>Tu nombre completo</li>
        <li>El correo electrónico asociado a tu cuenta PilasFi</li>
        <li>Confirmación de que deseas eliminar todos tus datos</li>
      </ul>

      <h3>Opción 3: Formulario Web</h3>
      <p>
        Completa el formulario de solicitud en{" "}
        <a href="https://pilasfi.com/soporte">pilasfi.com/soporte</a> seleccionando "Eliminar mi cuenta" como
        motivo de contacto.
      </p>

      <h2>¿Qué Datos se Eliminan?</h2>
      <p>Al solicitar la eliminación, se borrarán permanentemente:</p>
      <ul>
        <li>Tu perfil y datos de cuenta (nombre, email, foto)</li>
        <li>Historial completo de transacciones importadas</li>
        <li>Presupuestos y categorías personalizadas</li>
        <li>Metas de ahorro y su progreso</li>
        <li>Configuraciones y preferencias</li>
        <li>Conexión con cuenta de pareja (si aplica)</li>
        <li>Tokens de acceso a tu correo electrónico</li>
        <li>Cualquier otro dato personal almacenado</li>
      </ul>

      <h2>¿Qué Datos NO se Eliminan?</h2>
      <p>Por razones legales o técnicas, podemos retener:</p>
      <ul>
        <li>
          <strong>Registros de transacciones anonimizados:</strong> Datos estadísticos agregados que no pueden
          identificarte (ej: "usuario en Quito gastó $X en supermercados" sin información personal)
        </li>
        <li>
          <strong>Registros legales:</strong> Si la ley nos obliga a conservar ciertos registros
        </li>
        <li>
          <strong>Logs de seguridad:</strong> Registros técnicos para prevenir fraude (se eliminan
          automáticamente después de 90 días)
        </li>
      </ul>

      <h2>Tiempo de Procesamiento</h2>
      <ul>
        <li>
          <strong>Eliminación desde la app:</strong> Inmediata (dentro de 24 horas)
        </li>
        <li>
          <strong>Solicitud por email:</strong> Máximo 7 días hábiles
        </li>
        <li>
          <strong>Eliminación completa de backups:</strong> Hasta 30 días
        </li>
      </ul>

      <h2>Antes de Eliminar tu Cuenta</h2>
      <p>Considera lo siguiente:</p>
      <ul>
        <li>
          <strong>Exporta tus datos:</strong> Puedes descargar un archivo con tu historial desde
          Configuración → Exportar datos
        </li>
        <li>
          <strong>Desconecta tu pareja:</strong> Si tienes finanzas compartidas, notifica a tu pareja antes de
          eliminar tu cuenta
        </li>
        <li>
          <strong>Esta acción es irreversible:</strong> Una vez eliminados, tus datos no pueden recuperarse
        </li>
      </ul>

      <h2>Confirmación de Eliminación</h2>
      <p>
        Una vez completada la eliminación, recibirás un correo electrónico de confirmación en la dirección
        asociada a tu cuenta. Este correo confirma que:
      </p>
      <ul>
        <li>Tu cuenta ha sido eliminada</li>
        <li>Todos tus datos personales han sido borrados</li>
        <li>Ya no tienes acceso a PilasFi con esas credenciales</li>
      </ul>

      <h2>¿Puedo crear una nueva cuenta después?</h2>
      <p>
        Sí, puedes crear una nueva cuenta en cualquier momento después de eliminar la anterior. Sin embargo,
        ninguno de tus datos previos estará disponible; comenzarás desde cero.
      </p>

      <h2>Contacto</h2>
      <p>Si tienes preguntas sobre el proceso de eliminación de datos:</p>
      <ul>
        <li>
          <strong>Email de eliminación:</strong>{" "}
          <a href="mailto:eliminar@pilasfi.com">eliminar@pilasfi.com</a>
        </li>
        <li>
          <strong>Soporte general:</strong> <a href="mailto:soporte@pilasfi.com">soporte@pilasfi.com</a>
        </li>
        <li>
          <strong>Privacidad:</strong> <a href="mailto:privacidad@pilasfi.com">privacidad@pilasfi.com</a>
        </li>
      </ul>

      <div className="highlight-box">
        <p>
          <strong>Nota:</strong> Respetamos tu derecho a la privacidad y a controlar tus datos. El proceso de
          eliminación es completamente gratuito y no requiere justificación. Tu solicitud será procesada sin
          preguntas adicionales.
        </p>
      </div>
    </LegalLayout>
  );
}
