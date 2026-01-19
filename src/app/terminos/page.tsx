import { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Términos y condiciones de uso de PilasFi. Lee las reglas y condiciones para usar nuestra aplicación.",
};

export default function TermsAndConditions() {
  return (
    <LegalLayout title="Términos y Condiciones" lastUpdated="18 de enero de 2026">
      <div className="highlight-box">
        <p>
          <strong>Resumen:</strong> Al usar PilasFi, aceptas estos términos. PilasFi es una herramienta de
          organización financiera personal, no un servicio bancario ni asesoría financiera.
        </p>
      </div>

      <h2>1. Aceptación de los Términos</h2>
      <p>
        Bienvenido a PilasFi. Estos Términos y Condiciones ("Términos") constituyen un acuerdo legal entre tú
        ("Usuario" o "tú") y PilasFi ("nosotros", "nuestro" o "la Compañía") respecto al uso de la aplicación
        móvil PilasFi y todos los servicios relacionados (colectivamente, el "Servicio").
      </p>
      <p>
        Al crear una cuenta, acceder o usar PilasFi, confirmas que has leído, entendido y aceptas estar
        vinculado por estos Términos. Si no estás de acuerdo, no debes usar el Servicio.
      </p>

      <h2>2. Descripción del Servicio</h2>
      <p>PilasFi es una aplicación de gestión de finanzas personales que:</p>
      <ul>
        <li>Lee automáticamente emails de notificaciones de bancos ecuatorianos</li>
        <li>Categoriza y organiza transacciones financieras</li>
        <li>Permite crear presupuestos personales y compartidos</li>
        <li>Facilita el seguimiento de metas de ahorro</li>
        <li>Genera reportes y estadísticas de gastos</li>
        <li>Permite compartir información financiera con tu pareja (opcional)</li>
      </ul>

      <h3>2.1 Lo que PilasFi NO es</h3>
      <ul>
        <li>NO es un banco ni institución financiera</li>
        <li>NO ofrece asesoría financiera, fiscal o de inversiones</li>
        <li>NO realiza transacciones bancarias en tu nombre</li>
        <li>NO tiene acceso a tus cuentas bancarias</li>
        <li>NO garantiza la exactitud de la información extraída de emails</li>
      </ul>

      <h2>3. Elegibilidad</h2>
      <p>Para usar PilasFi, debes:</p>
      <ul>
        <li>Tener al menos 18 años de edad</li>
        <li>Residir en Ecuador o tener cuentas en bancos ecuatorianos compatibles</li>
        <li>Tener capacidad legal para celebrar contratos vinculantes</li>
        <li>Proporcionar información veraz y completa durante el registro</li>
        <li>No haber sido previamente suspendido o eliminado del Servicio</li>
      </ul>

      <h2>4. Registro y Cuenta</h2>

      <h3>4.1 Creación de Cuenta</h3>
      <p>
        Para acceder a las funciones completas de PilasFi, debes crear una cuenta proporcionando información
        precisa y actualizada. Eres responsable de mantener la confidencialidad de tus credenciales.
      </p>

      <h3>4.2 Seguridad de la Cuenta</h3>
      <ul>
        <li>Eres responsable de todas las actividades realizadas bajo tu cuenta</li>
        <li>Debes notificarnos inmediatamente de cualquier uso no autorizado</li>
        <li>No debes compartir tus credenciales con terceros</li>
        <li>Recomendamos activar la autenticación de dos factores</li>
      </ul>

      <h3>4.3 Una Cuenta por Persona</h3>
      <p>
        Cada persona debe tener una única cuenta. Las cuentas múltiples pueden resultar en la suspensión del
        servicio.
      </p>

      <h2>5. Permisos y Acceso a Datos</h2>

      <h3>5.1 Acceso a Email</h3>
      <p>
        Al conectar tu cuenta de correo electrónico, nos autorizas expresamente a acceder{" "}
        <strong>únicamente</strong> a los emails de notificaciones de los bancos ecuatorianos compatibles. Este
        permiso es revocable en cualquier momento desde la configuración de tu cuenta.
      </p>

      <h3>5.2 Bancos Compatibles</h3>
      <p>Actualmente soportamos notificaciones de:</p>
      <ul>
        <li>Banco Pichincha</li>
        <li>Banco Guayaquil</li>
        <li>Produbanco</li>
        <li>Diners Club Ecuador</li>
        <li>Pacificard</li>
        <li>Banco del Pacífico</li>
        <li>De Una</li>
      </ul>

      <h3>5.3 Limitación de Acceso</h3>
      <p>
        PilasFi NO accede, lee ni almacena emails que no sean notificaciones bancarias de los bancos
        mencionados. No tenemos acceso a tus credenciales bancarias, cuentas bancarias ni cualquier otra
        información no autorizada expresamente.
      </p>

      <h2>6. Uso Aceptable</h2>
      <p>Al usar PilasFi, te comprometes a:</p>
      <ul>
        <li>Usar el Servicio solo para fines personales y no comerciales</li>
        <li>No intentar acceder a cuentas de otros usuarios</li>
        <li>No realizar ingeniería inversa, descompilar o modificar la aplicación</li>
        <li>No usar el Servicio para actividades ilegales o fraudulentas</li>
        <li>No interferir con el funcionamiento normal del Servicio</li>
        <li>No transmitir virus, malware o código malicioso</li>
        <li>No recopilar información de otros usuarios sin su consentimiento</li>
        <li>No usar bots, scripts o herramientas automatizadas no autorizadas</li>
      </ul>

      <h2>7. Función de Finanzas Compartidas</h2>

      <h3>7.1 Invitación a Pareja</h3>
      <p>
        PilasFi permite invitar a tu pareja para compartir información financiera del hogar. Al enviar una
        invitación, confirmas que tienes el consentimiento de esa persona para compartir datos.
      </p>

      <h3>7.2 Información Compartida</h3>
      <ul>
        <li>Solo los gastos marcados como "del hogar" serán visibles para ambos</li>
        <li>Los gastos marcados como "personales" permanecen privados</li>
        <li>Cada usuario mantiene control sobre qué información comparte</li>
        <li>Cualquier usuario puede terminar la conexión compartida en cualquier momento</li>
      </ul>

      <h3>7.3 Responsabilidad</h3>
      <p>
        PilasFi no es responsable de disputas entre usuarios que compartan información financiera. El uso de
        esta función es bajo tu propia responsabilidad.
      </p>

      <h2>8. Propiedad Intelectual</h2>

      <h3>8.1 Nuestra Propiedad</h3>
      <p>
        PilasFi, incluyendo su código, diseño, logos, marcas, textos, gráficos y otros materiales, es
        propiedad exclusiva de PilasFi o sus licenciantes y está protegido por leyes de propiedad intelectual.
      </p>

      <h3>8.2 Licencia Limitada</h3>
      <p>
        Te otorgamos una licencia limitada, no exclusiva, no transferible y revocable para usar la aplicación
        PilasFi para tu uso personal, sujeto a estos Términos.
      </p>

      <h3>8.3 Restricciones</h3>
      <p>No puedes:</p>
      <ul>
        <li>Copiar, modificar o distribuir la aplicación</li>
        <li>Crear trabajos derivados basados en la aplicación</li>
        <li>Usar nuestras marcas sin autorización escrita</li>
        <li>Remover avisos de derechos de autor o propiedad</li>
      </ul>

      <h2>9. Costo del Servicio</h2>
      <p>
        PilasFi es actualmente un servicio <strong>gratuito</strong>. No hay costos de suscripción, planes
        premium ni cargos ocultos. Nos reservamos el derecho de introducir funciones de pago en el futuro, las
        cuales serán claramente identificadas y opcionales.
      </p>

      <h2>10. Disponibilidad del Servicio</h2>
      <p>
        Nos esforzamos por mantener PilasFi disponible 24/7, pero no garantizamos disponibilidad
        ininterrumpida. El Servicio puede no estar disponible por:
      </p>
      <ul>
        <li>Mantenimiento programado o de emergencia</li>
        <li>Actualizaciones de software</li>
        <li>Problemas técnicos o de infraestructura</li>
        <li>Causas fuera de nuestro control</li>
      </ul>

      <h2>11. Limitación de Responsabilidad</h2>

      <h3>11.1 Sin Garantías</h3>
      <p>
        PilasFi se proporciona "tal cual" y "según disponibilidad". No ofrecemos garantías expresas o
        implícitas sobre:
      </p>
      <ul>
        <li>La exactitud de la información procesada de emails bancarios</li>
        <li>La disponibilidad ininterrumpida del servicio</li>
        <li>La ausencia de errores o defectos</li>
        <li>La compatibilidad con todos los dispositivos o sistemas</li>
      </ul>

      <h3>11.2 Limitación de Daños</h3>
      <p>
        En la máxima medida permitida por la ley, PilasFi no será responsable por daños indirectos,
        incidentales, especiales, consecuentes o punitivos, incluyendo pérdida de ganancias, datos o uso.
      </p>

      <h3>11.3 Responsabilidad Máxima</h3>
      <p>
        Nuestra responsabilidad total por cualquier reclamo relacionado con el Servicio no excederá el monto
        que hayas pagado por el Servicio en los últimos 12 meses (o $0 USD si el servicio es gratuito).
      </p>

      <h2>12. Indemnización</h2>
      <p>
        Aceptas indemnizar y mantener indemne a PilasFi, sus directores, empleados y agentes de cualquier
        reclamo, daño, pérdida o gasto (incluyendo honorarios legales) derivados de:
      </p>
      <ul>
        <li>Tu uso del Servicio</li>
        <li>Tu violación de estos Términos</li>
        <li>Tu violación de derechos de terceros</li>
        <li>Información que proporciones o compartas</li>
      </ul>

      <h2>13. Terminación</h2>

      <h3>13.1 Terminación por el Usuario</h3>
      <p>
        Puedes eliminar tu cuenta en cualquier momento desde la configuración de la aplicación o contactando a
        soporte@pilasfi.com.
      </p>

      <h3>13.2 Terminación por PilasFi</h3>
      <p>Podemos suspender o terminar tu cuenta si:</p>
      <ul>
        <li>Violas estos Términos</li>
        <li>Usas el Servicio de manera fraudulenta o ilegal</li>
        <li>Tu conducta afecta a otros usuarios o al Servicio</li>
        <li>Lo requiere la ley o una orden judicial</li>
      </ul>

      <h3>13.3 Efectos de la Terminación</h3>
      <p>Al terminar tu cuenta:</p>
      <ul>
        <li>Perderás acceso al Servicio inmediatamente</li>
        <li>Tus datos serán eliminados según nuestra Política de Privacidad</li>
        <li>Las licencias otorgadas bajo estos Términos cesarán</li>
      </ul>

      <h2>14. Modificaciones</h2>
      <p>
        Podemos modificar estos Términos ocasionalmente. Te notificaremos cambios significativos con al menos
        30 días de anticipación a través de la aplicación o por correo electrónico. El uso continuado del
        Servicio después de los cambios constituye tu aceptación de los nuevos Términos.
      </p>

      <h2>15. Ley Aplicable y Jurisdicción</h2>
      <p>
        Estos Términos se rigen por las leyes de la República del Ecuador. Cualquier disputa será sometida a
        los tribunales competentes de la ciudad de Quito, Ecuador, renunciando expresamente a cualquier otro
        fuero que pudiera corresponder.
      </p>

      <h2>16. Disposiciones Generales</h2>
      <ul>
        <li>
          <strong>Acuerdo Completo:</strong> Estos Términos, junto con la Política de Privacidad, constituyen
          el acuerdo completo entre tú y PilasFi.
        </li>
        <li>
          <strong>Separabilidad:</strong> Si alguna disposición es inválida, las demás permanecerán en vigor.
        </li>
        <li>
          <strong>Renuncia:</strong> Nuestra falta de ejercer un derecho no constituye renuncia al mismo.
        </li>
        <li>
          <strong>Cesión:</strong> No puedes ceder estos Términos sin nuestro consentimiento escrito.
        </li>
      </ul>

      <h2>17. Contacto</h2>
      <p>Para preguntas sobre estos Términos:</p>
      <ul>
        <li>
          <strong>Email:</strong> <a href="mailto:legal@pilasfi.com">legal@pilasfi.com</a>
        </li>
        <li>
          <strong>Soporte:</strong> <a href="mailto:soporte@pilasfi.com">soporte@pilasfi.com</a>
        </li>
        <li>
          <strong>Sitio web:</strong> <a href="https://pilasfi.com">pilasfi.com</a>
        </li>
      </ul>
    </LegalLayout>
  );
}
