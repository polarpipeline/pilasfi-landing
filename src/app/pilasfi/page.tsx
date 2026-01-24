import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PilasFi - App de Finanzas Personales Inteligentes | Ecuador",
  description: "PilasFi: La app #1 de finanzas personales en Ecuador con IA. Categorización automática de gastos, presupuestos compartidos para parejas, y metas de ahorro. Compatible con 7 bancos ecuatorianos.",
  keywords: [
    "pilasfi",
    "pilasfi app",
    "pilasfi ecuador",
    "pilasfi finanzas",
    "pilasfi gratis",
    "app finanzas personales pilasfi",
    "pilasfi banco pichincha",
    "pilasfi gastos automaticos",
    "pilasfi parejas",
    "pilasfi presupuesto familiar"
  ],
  alternates: {
    canonical: "https://pilasfi.com/pilasfi",
  },
  openGraph: {
    title: "PilasFi - Inteligencia Artificial para tus Finanzas",
    description: "PilasFi usa IA para leer tus emails bancarios automáticamente y crear presupuestos inteligentes. La mejor app para parejas en Ecuador.",
    url: "https://pilasfi.com/pilasfi",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PilasFi - Finanzas con Inteligencia Artificial",
      },
    ],
  },
};

export default function PilasFiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            PilasFi: <span className="text-purple-600">Inteligencia Artificial</span> para tus Finanzas
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La revolucionaria app que usa machine learning para transformar cómo manejas tu dinero en Ecuador
          </p>
        </div>

        {/* AI Features Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            ¿Qué hace a PilasFi diferente?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤖</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Aprendizaje Automático</h3>
              <p className="text-gray-600">
                PilasFi aprende tus patrones de gasto y mejora la categorización con el tiempo
              </p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Análisis Predictivo</h3>
              <p className="text-gray-600">
                Predice gastos futuros y te alerta antes de exceder tu presupuesto
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Insights Inteligentes</h3>
              <p className="text-gray-600">
                Recomendaciones personalizadas para optimizar tus finanzas
              </p>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Tecnología detrás de PilasFi
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                <strong>PilasFi</strong> utiliza tecnología de vanguardia para ofrecerte la mejor experiencia 
                en gestión financiera. Nuestro sistema procesa millones de transacciones mensualmente usando 
                algoritmos de machine learning optimizados para el mercado ecuatoriano.
              </p>
              <p>
                La aplicación está construida con una arquitectura cloud-native que garantiza 
                <strong>seguridad de nivel empresarial</strong> y disponibilidad 24/7. Todos tus datos 
                están encriptados tanto en tránsito como en reposo.
              </p>
              <p>
                El motor de IA de PilasFi está entrenado específicamente con datos de transacciones 
                ecuatorianas, reconociedo patrones de consumo locales y adaptándose a tu estilo de vida 
                personal único.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Beneficios Inteligentes de PilasFi
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">🎯</span>
                <div>
                  <strong>Detección Automática:</strong> Identifica gastos recurrentes y anomalías
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">🔍</span>
                <div>
                  <strong>Categorización Contextual:</strong> Entiende el contexto de cada transacción
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">📈</span>
                <div>
                  <strong>Reportes Dinámicos:</strong> Visualizaciones interactivas de tus finanzas
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">💰</span>
                <div>
                  <strong>Optimización de Ahorro:</strong> Sugiere oportunidades de ahorro personalizadas
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">👥</span>
                <div>
                  <strong>Inteligencia Colectiva:</strong> Aprende de usuarios similares para mejores predicciones
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">🔐</span>
                <div>
                  <strong>Seguridad Cuántica:</strong> Protección de datos con estándares bancarios
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Integration Section */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Integración Perfecta con tu Vida Digital
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl mb-2">📧</div>
                <p className="font-semibold">Email Banking</p>
                <p className="text-sm opacity-90">7 bancos ecuatorianos</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl mb-2">📱</div>
                <p className="font-semibold">Multiplataforma</p>
                <p className="text-sm opacity-90">iOS, Android, Web</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl mb-2">☁️</div>
                <p className="font-semibold">Cloud Sync</p>
                <p className="text-sm opacity-90">Sincronización instantánea</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl mb-2">🔗</div>
                <p className="font-semibold">API Abierta</p>
                <p className="text-sm opacity-90">Integraciones futuras</p>
              </div>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            El Impacto de PilasFi en Números
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">50K+</div>
              <p className="text-gray-600">Usuarios Activos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">$2M+</div>
              <p className="text-gray-600">Gastos Procesados</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">35%</div>
              <p className="text-gray-600">Aumento de Ahorro</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">4.9⭐</div>
              <p className="text-gray-600">Calificación Usuarios</p>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Especificaciones Técnicas de PilasFi
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-xl mb-4 text-gray-900">Infraestructura</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Servidores en AWS (us-east-1)</li>
                <li>• Base de datos encriptada PostgreSQL</li>
                <li>• CDN global con Cloudflare</li>
                <li>• Certificados SSL/TLS automáticos</li>
                <li>• Backup diario y replicación geográfica</li>
                <li>• Monitoreo 24/7 con alertas proactivas</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-xl mb-4 text-gray-900">Seguridad y Privacidad</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Encriptación AES-256 de extremo a extremo</li>
                <li>• Autenticación multifactor (2FA)</li>
                <li>• Cumplimiento GDPR y normativas locales</li>
                <li>• Auditorías de seguridad trimestrales</li>
                <li>• Política de cero conocimiento sobre contraseñas</li>
                <li>• Recuperación segura de datos con múltiples factores</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Experimenta el Poder de PilasFi
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Únete a la revolución financiera con inteligencia artificial
          </p>
          <Link 
            href="/#download"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-indigo-700 transition inline-block"
          >
            Descargar PilasFi Gratis
          </Link>
        </div>
      </div>
    </div>
  );
}