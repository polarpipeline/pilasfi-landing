import { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Contrato de Licencia de Usuario Final (EULA)",
  description: "Contrato de licencia de usuario final para la aplicación PilasFi.",
};

export default function EULA() {
  return (
    <LegalLayout title="Contrato de Licencia de Usuario Final (EULA)" lastUpdated="18 de enero de 2026">
      <div className="highlight-box">
        <p>
          <strong>Resumen:</strong> Este acuerdo te otorga una licencia limitada para usar la aplicación PilasFi
          en tus dispositivos personales. La aplicación es propiedad de PilasFi y está protegida por leyes de
          propiedad intelectual.
        </p>
      </div>

      <h2>1. Aceptación del Acuerdo</h2>
      <p>
        Este Contrato de Licencia de Usuario Final (&quot;EULA&quot; o &quot;Acuerdo&quot;) es un acuerdo legal
        vinculante entre tú (&quot;Usuario&quot;) y PilasFi (&quot;Licenciante&quot;, &quot;nosotros&quot; o
        &quot;nuestro&quot;) para el uso de la aplicación móvil PilasFi (&quot;Aplicación&quot; o
        &quot;Software&quot;).
      </p>
      <p>
        Al descargar, instalar o usar la Aplicación, aceptas estar vinculado por los términos de este EULA. Si
        no estás de acuerdo, no descargues, instales ni uses la Aplicación.
      </p>

      <h2>2. Concesión de Licencia</h2>

      <h3>2.1 Licencia Limitada</h3>
      <p>
        Sujeto al cumplimiento de este EULA, PilasFi te otorga una licencia personal, limitada, no exclusiva,
        intransferible y revocable para:
      </p>
      <ul>
        <li>Descargar e instalar la Aplicación en dispositivos que poseas o controles</li>
        <li>Usar la Aplicación para tus fines personales y no comerciales</li>
        <li>Acceder a las funcionalidades de la Aplicación según lo previsto</li>
      </ul>

      <h3>2.2 Restricciones de la Licencia</h3>
      <p>NO puedes:</p>
      <ul>
        <li>Copiar, modificar o distribuir la Aplicación</li>
        <li>Realizar ingeniería inversa, descompilar o desensamblar el código</li>
        <li>Eliminar avisos de derechos de autor o marcas</li>
        <li>Usar la Aplicación para fines comerciales sin autorización</li>
        <li>Sublicenciar, vender, revender o transferir la Aplicación</li>
        <li>Usar la Aplicación de manera que viole las leyes aplicables</li>
        <li>Intentar obtener acceso no autorizado a sistemas o redes</li>
        <li>Transmitir virus, malware o código malicioso</li>
        <li>Usar bots, scripts o herramientas automatizadas no autorizadas</li>
      </ul>

      <h2>3. Propiedad Intelectual</h2>

      <h3>3.1 Propiedad del Software</h3>
      <p>
        La Aplicación y todo su contenido, incluyendo pero no limitado a código fuente, diseño, texto,
        gráficos, logos, iconos, imágenes, clips de audio, descargas digitales y compilaciones de datos, son
        propiedad exclusiva de PilasFi o sus licenciantes y están protegidos por las leyes de propiedad
        intelectual de Ecuador y tratados internacionales.
      </p>

      <h3>3.2 Marcas Registradas</h3>
      <p>
        &quot;PilasFi&quot;, el logo de PilasFi y otras marcas, gráficos y logos utilizados en la Aplicación son
        marcas registradas o de servicio de PilasFi. No se te otorga ningún derecho o licencia para usar estas
        marcas.
      </p>

      <h3>3.3 Contenido del Usuario</h3>
      <p>
        Conservas la propiedad de cualquier contenido que proporciones a través de la Aplicación. Sin embargo,
        al usar la Aplicación, nos otorgas una licencia limitada para procesar tus datos según sea necesario
        para proporcionar el servicio.
      </p>

      <h2>4. Actualizaciones y Modificaciones</h2>
      <p>
        PilasFi puede, a su discreción, desarrollar y proporcionar actualizaciones de la Aplicación. Las
        actualizaciones pueden incluir:
      </p>
      <ul>
        <li>Correcciones de errores y mejoras de rendimiento</li>
        <li>Nuevas funcionalidades</li>
        <li>Parches de seguridad</li>
        <li>Cambios en la interfaz de usuario</li>
      </ul>
      <p>
        Algunas actualizaciones pueden ser automáticas. El uso continuado de la Aplicación después de una
        actualización constituye tu aceptación de los cambios.
      </p>

      <h2>5. Servicios de Terceros</h2>

      <h3>5.1 Tiendas de Aplicaciones</h3>
      <p>
        La Aplicación está disponible a través de Apple App Store y Google Play Store. Tu uso de la Aplicación
        también está sujeto a los términos y condiciones de estas plataformas.
      </p>

      <h3>5.2 Servicios Integrados</h3>
      <p>
        La Aplicación puede integrarse con servicios de terceros (como proveedores de email). Estos servicios
        tienen sus propios términos y políticas de privacidad que debes revisar.
      </p>

      <h2>6. Exención de Garantías</h2>
      <p>
        LA APLICACIÓN SE PROPORCIONA &quot;TAL CUAL&quot; Y &quot;SEGÚN DISPONIBILIDAD&quot;, SIN GARANTÍAS DE
        NINGÚN TIPO, YA SEAN EXPRESAS O IMPLÍCITAS, INCLUYENDO, PERO NO LIMITADO A:
      </p>
      <ul>
        <li>Garantías implícitas de comerciabilidad</li>
        <li>Idoneidad para un propósito particular</li>
        <li>No infracción de derechos de terceros</li>
        <li>Disponibilidad ininterrumpida o libre de errores</li>
        <li>Exactitud o integridad de la información procesada</li>
      </ul>
      <p>
        No garantizamos que la Aplicación cumpla con todos tus requisitos o que opere de manera ininterrumpida,
        segura o libre de errores.
      </p>

      <h2>7. Limitación de Responsabilidad</h2>
      <p>
        EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEY APLICABLE, PILASFI NO SERÁ RESPONSABLE POR:
      </p>
      <ul>
        <li>Daños indirectos, incidentales, especiales, consecuentes o punitivos</li>
        <li>Pérdida de ganancias, datos, uso o buena voluntad</li>
        <li>Interrupción del negocio</li>
        <li>Costos de obtención de bienes o servicios sustitutos</li>
      </ul>
      <p>
        Nuestra responsabilidad total por cualquier reclamo bajo este EULA no excederá el monto que hayas pagado
        por la Aplicación en los últimos doce (12) meses.
      </p>

      <h2>8. Indemnización</h2>
      <p>
        Aceptas indemnizar, defender y mantener indemne a PilasFi, sus directores, empleados, agentes y
        afiliados de cualquier reclamo, daño, pérdida, responsabilidad, costo o gasto (incluyendo honorarios
        legales razonables) que surja de:
      </p>
      <ul>
        <li>Tu uso de la Aplicación</li>
        <li>Tu violación de este EULA</li>
        <li>Tu violación de cualquier derecho de terceros</li>
        <li>Tu conducta en relación con la Aplicación</li>
      </ul>

      <h2>9. Terminación</h2>

      <h3>9.1 Por el Usuario</h3>
      <p>
        Puedes terminar esta licencia en cualquier momento eliminando la Aplicación de todos tus dispositivos y
        eliminando tu cuenta.
      </p>

      <h3>9.2 Por PilasFi</h3>
      <p>
        Este EULA es efectivo hasta que sea terminado. Podemos terminar o suspender tu licencia inmediatamente,
        sin previo aviso, si:
      </p>
      <ul>
        <li>Incumples cualquier término de este EULA</li>
        <li>Usas la Aplicación de manera fraudulenta o ilegal</li>
        <li>Tu conducta daña a PilasFi, otros usuarios o terceros</li>
        <li>Lo requiere la ley o una orden judicial</li>
      </ul>

      <h3>9.3 Efectos de la Terminación</h3>
      <p>Al terminar este EULA:</p>
      <ul>
        <li>Todos los derechos otorgados bajo este EULA cesarán inmediatamente</li>
        <li>Debes dejar de usar la Aplicación y eliminarla de tus dispositivos</li>
        <li>Las secciones que por su naturaleza deban sobrevivir, sobrevivirán</li>
      </ul>

      <h2>10. Cumplimiento de Leyes de Exportación</h2>
      <p>
        Aceptas cumplir con todas las leyes y regulaciones de exportación aplicables. No puedes exportar o
        reexportar la Aplicación a países, personas o entidades prohibidas.
      </p>

      <h2>11. Usuarios del Gobierno</h2>
      <p>
        Si eres un empleado o agente del Gobierno de los Estados Unidos, la Aplicación se proporciona con
        &quot;Derechos Restringidos&quot; según las regulaciones federales aplicables.
      </p>

      <h2>12. Disposiciones de Apple App Store</h2>
      <p>Si descargaste la Aplicación desde Apple App Store:</p>
      <ul>
        <li>Este EULA es entre tú y PilasFi, no con Apple</li>
        <li>Apple no tiene obligación de proporcionar servicios de mantenimiento o soporte</li>
        <li>
          Apple no es responsable por reclamos relacionados con la posesión o uso de la Aplicación
        </li>
        <li>
          Apple es un tercero beneficiario de este EULA y puede hacer cumplir sus términos
        </li>
        <li>Debes cumplir con los términos de uso aplicables de terceros</li>
      </ul>

      <h2>13. Disposiciones de Google Play Store</h2>
      <p>Si descargaste la Aplicación desde Google Play Store:</p>
      <ul>
        <li>Este EULA es entre tú y PilasFi, no con Google</li>
        <li>
          Google no es responsable de la Aplicación y no tiene obligación de mantenimiento o soporte
        </li>
        <li>Debes cumplir con los términos de servicio de Google Play</li>
      </ul>

      <h2>14. Ley Aplicable y Jurisdicción</h2>
      <p>
        Este EULA se rige por las leyes de la República del Ecuador, sin referencia a sus principios de
        conflicto de leyes. Cualquier disputa será sometida a la jurisdicción exclusiva de los tribunales
        competentes de la ciudad de Quito, Ecuador.
      </p>

      <h2>15. Resolución de Disputas</h2>
      <p>
        Antes de iniciar cualquier procedimiento legal, aceptas intentar resolver cualquier disputa de manera
        informal contactándonos. Si no podemos resolver la disputa informalmente dentro de treinta (30) días,
        cualquiera de las partes puede proceder con los remedios legales disponibles.
      </p>

      <h2>16. Divisibilidad</h2>
      <p>
        Si alguna disposición de este EULA se considera inválida o inaplicable, dicha disposición será
        modificada e interpretada para lograr los objetivos de dicha disposición en la mayor medida posible bajo
        la ley aplicable, y las disposiciones restantes continuarán en pleno vigor y efecto.
      </p>

      <h2>17. Acuerdo Completo</h2>
      <p>
        Este EULA, junto con nuestra Política de Privacidad y Términos de Servicio, constituye el acuerdo
        completo entre tú y PilasFi con respecto al uso de la Aplicación y reemplaza todos los acuerdos y
        entendimientos anteriores.
      </p>

      <h2>18. Renuncia</h2>
      <p>
        La falta de ejercicio por parte de PilasFi de cualquier derecho o disposición de este EULA no
        constituirá una renuncia a dicho derecho o disposición.
      </p>

      <h2>19. Modificaciones a este EULA</h2>
      <p>
        Nos reservamos el derecho de modificar este EULA en cualquier momento. Te notificaremos sobre cambios
        materiales publicando el nuevo EULA en la Aplicación o por correo electrónico. Tu uso continuado de la
        Aplicación después de dichas modificaciones constituye tu aceptación del EULA modificado.
      </p>

      <h2>20. Contacto</h2>
      <p>Si tienes preguntas sobre este EULA, contáctanos:</p>
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

      <div className="highlight-box">
        <p>
          <strong>Nota:</strong> Al usar PilasFi, confirmas que has leído, entendido y aceptado este Contrato de
          Licencia de Usuario Final en su totalidad.
        </p>
      </div>
    </LegalLayout>
  );
}
