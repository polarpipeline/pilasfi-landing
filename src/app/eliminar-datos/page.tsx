import { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Eliminar mis Datos",
  description: "Solicita la eliminación de tus datos personales de PilasFi. Proceso simple y rápido.",
};

export default function DataDeletion() {
  return (
    <LegalLayout title="Eliminar mis Datos" lastUpdated="31 de enero de 2026">
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
        <li>Abre la aplicación PilasFi en tu dispositivo</li>
        <li>
          Toca el ícono <strong>&quot;Config&quot;</strong> en la barra de navegación inferior
          (es el último ícono a la derecha, con forma de engranaje)
        </li>
        <li>Esto te llevará a la pantalla de <strong>Perfil</strong></li>
        <li>Desplázate hacia abajo hasta encontrar la sección <strong>&quot;Cuenta&quot;</strong></li>
        <li>Toca <strong>&quot;Eliminar todos los datos&quot;</strong> (aparece en rojo)</li>
        <li>
          Se mostrará un diálogo de confirmación preguntando si deseas eliminar todos tus datos
        </li>
        <li>Toca <strong>&quot;Eliminar todo&quot;</strong> para confirmar</li>
      </ol>

      <div
        style={{
          background: "#F5F1EB",
          borderRadius: "12px",
          padding: "1.25rem",
          margin: "1.5rem 0",
          border: "1px solid #E5E5E5",
        }}
      >
        <p style={{ margin: 0, fontSize: "0.9375rem" }}>
          <strong>Navegación rápida:</strong> Barra inferior → Config (engranaje) → Sección
          &quot;Cuenta&quot; → Eliminar todos los datos
        </p>
      </div>

      {/* Visual representation of the app screen */}
      <div
        style={{
          background: "#1A1A3E",
          borderRadius: "24px",
          padding: "12px",
          maxWidth: "320px",
          margin: "2rem auto",
          boxShadow: "0 20px 60px rgba(26, 26, 62, 0.3)",
        }}
      >
        {/* Phone mockup */}
        <div
          style={{
            background: "#FFFFFF",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          {/* App header */}
          <div
            style={{
              background: "#FAFAFA",
              padding: "16px 20px",
              borderBottom: "1px solid #E5E5E5",
            }}
          >
            <span style={{ fontWeight: 600, color: "#120D31", fontSize: "18px" }}>Perfil</span>
          </div>

          {/* Profile content */}
          <div style={{ padding: "16px" }}>
            {/* User info */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #818CF8, #4F46E5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 600,
                }}
              >
                U
              </div>
              <div>
                <div style={{ fontWeight: 600, color: "#120D31" }}>Tu nombre</div>
                <div style={{ fontSize: "13px", color: "#86909E" }}>tu@email.com</div>
              </div>
            </div>

            {/* Section: Cuenta */}
            <div
              style={{
                background: "#F8F8F8",
                borderRadius: "12px",
                padding: "4px",
                marginTop: "8px",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#86909E",
                  padding: "8px 12px 4px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Cuenta
              </div>

              {/* Export data option */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "12px",
                  gap: "12px",
                }}
              >
                <div style={{ color: "#535A6A", fontSize: "18px" }}>📥</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "14px", color: "#120D31" }}>Exportar datos</div>
                  <div style={{ fontSize: "12px", color: "#86909E" }}>
                    Descarga tus gastos en CSV/Excel
                  </div>
                </div>
                <div style={{ color: "#C5C5C5" }}>›</div>
              </div>

              {/* Delete data option - highlighted */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "12px",
                  gap: "12px",
                  background: "#FEF2F2",
                  borderRadius: "8px",
                  border: "2px solid #EF4444",
                }}
              >
                <div style={{ color: "#EF4444", fontSize: "18px" }}>🗑️</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "14px", color: "#EF4444", fontWeight: 600 }}>
                    Eliminar todos los datos
                  </div>
                  <div style={{ fontSize: "12px", color: "#F87171" }}>
                    Esta acción no se puede deshacer
                  </div>
                </div>
                <div style={{ color: "#EF4444" }}>›</div>
              </div>
            </div>
          </div>

          {/* Bottom navigation bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              padding: "12px 8px",
              borderTop: "1px solid #E5E5E5",
              background: "#FAFAFA",
            }}
          >
            <div style={{ textAlign: "center", color: "#86909E", fontSize: "10px" }}>
              <div style={{ fontSize: "20px", marginBottom: "2px" }}>🏠</div>
              Home
            </div>
            <div style={{ textAlign: "center", color: "#86909E", fontSize: "10px" }}>
              <div style={{ fontSize: "20px", marginBottom: "2px" }}>📊</div>
              Stats
            </div>
            <div style={{ textAlign: "center", color: "#86909E", fontSize: "10px" }}>
              <div
                style={{
                  fontSize: "24px",
                  marginBottom: "2px",
                  background: "#7B3FE4",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "-12px auto 2px",
                }}
              >
                ➕
              </div>
            </div>
            <div style={{ textAlign: "center", color: "#86909E", fontSize: "10px" }}>
              <div style={{ fontSize: "20px", marginBottom: "2px" }}>📋</div>
              Trans
            </div>
            <div style={{ textAlign: "center", fontSize: "10px" }}>
              <div
                style={{
                  fontSize: "20px",
                  marginBottom: "2px",
                  background: "#7B3FE4",
                  borderRadius: "6px",
                  padding: "2px 6px",
                }}
              >
                ⚙️
              </div>
              <span style={{ color: "#7B3FE4", fontWeight: 600 }}>Config</span>
            </div>
          </div>
        </div>
      </div>
      <p
        style={{
          textAlign: "center",
          color: "#86909E",
          fontSize: "0.875rem",
          marginTop: "-0.5rem",
          marginBottom: "2rem",
        }}
      >
        Vista de la pantalla de Perfil con la opción resaltada
      </p>

      <h3>Opción 2: Por Correo Electrónico</h3>
      <p>Si no puedes acceder a la aplicación, envía un correo a:</p>
      <p style={{ fontSize: "1.25rem", fontWeight: 600 }}>
        <a href="mailto:eliminar@pilasfi.com">eliminar@pilasfi.com</a>
      </p>
      <p>Incluye en tu solicitud:</p>
      <ul>
        <li>Asunto: &quot;Solicitud de eliminación de datos&quot;</li>
        <li>Tu nombre completo</li>
        <li>El correo electrónico asociado a tu cuenta PilasFi</li>
        <li>Confirmación de que deseas eliminar todos tus datos</li>
      </ul>

      <h3>Opción 3: Formulario Web</h3>
      <p>
        Completa el formulario de solicitud en{" "}
        <a href="https://pilasfi.com/soporte">pilasfi.com/soporte</a> seleccionando &quot;Eliminar mi cuenta&quot; como
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
          identificarte (ej: &quot;usuario en Quito gastó $X en supermercados&quot; sin información personal)
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

      <h2>Antes de Eliminar tus Datos</h2>
      <p>Considera lo siguiente:</p>
      <ul>
        <li>
          <strong>Exporta tus datos:</strong> Puedes descargar un archivo con tu historial desde la
          pantalla de Perfil → &quot;Exportar datos&quot; (sección Cuenta). Podrás elegir el mes y
          formato (Excel o CSV).
        </li>
        <li>
          <strong>Desconecta tu pareja:</strong> Si tienes finanzas compartidas, tu pareja será
          notificada automáticamente y la vinculación se eliminará.
        </li>
        <li>
          <strong>Esta acción es irreversible:</strong> Una vez eliminados, tus datos no pueden
          recuperarse.
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
