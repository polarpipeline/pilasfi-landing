import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pilas Fi - App de Finanzas Personales para Ecuador | Gratis",
  description: "Pilas Fi es la mejor app gratuita de finanzas personales en Ecuador. Control automático de gastos, presupuestos compartidos en pareja, y metas de ahorro. Compatible con todos los bancos ecuatorianos.",
  keywords: [
    "pilas fi",
    "pilas fi app",
    "pilas fi ecuador", 
    "pilas fi finanzas",
    "pilas fi gratis",
    "app finanzas personales pilas fi",
    "pilas fi banco pichincha",
    "pilas fi control gastos",
    "descargar pilas fi",
    "pilas fi parejas",
    "pilas fi presupuesto familiar"
  ],
  alternates: {
    canonical: "https://pilasfi.com/pilas-fi",
  },
  openGraph: {
    title: "Pilas Fi - Tu Coach de Finanzas Personales en Ecuador",
    description: "La app Pilas Fi lee automáticamente tus emails bancarios y categoriza gastos. Perfecta para parejas y familias en Ecuador. 100% gratis.",
    url: "https://pilasfi.com/pilas-fi",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pilas Fi - App de Finanzas Personales",
      },
    ],
  },
};

export default function PilasFiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Pilas Fi: Tu <span className="text-indigo-600">Coach Financiero</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre por qué miles de ecuatorianos confían en Pilas Fi para controlar sus finanzas personales automáticamente
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              ¿Qué es Pilas Fi?
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                <strong>Pilas Fi</strong> es la aplicación de finanzas personales más avanzada de Ecuador. 
                Nuestro sistema de inteligencia artificial lee automáticamente los emails de notificaciones 
                de tu banco y organiza cada transacción en categorías inteligentes.
              </p>
              <p>
                Con Pilas Fi, tú y tu pareja pueden tener <strong>visibilidad total</strong> de las finanzas 
                del hogar sin discusiones. Saben exactamente en qué se gasta el dinero, quién gastó qué, 
                y cómo están progresando hacia sus metas de ahorro.
              </p>
              <p>
                <strong>Olvidate del Excel</strong> y las apps complicadas. Pilas Fi hace todo el trabajo 
                pesado por ti, manteniendo tus finanzas personales organizadas y bajo control.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Características Principales de Pilas Fi
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span><strong>Lectura automática</strong> de emails bancarios ecuatorianos</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span><strong>Categorización inteligente</strong> con machine learning</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span><strong>Presupuestos compartidos</strong> en pareja</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span><strong>Metas de ahorro</strong> con seguimiento visual</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span><strong>Dashboard en tiempo real</strong> de todas tus finanzas</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                <span><strong>100% gratis</strong> para siempre, sin costos ocultos</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Banks Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Bancos Compatibles con Pilas Fi
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Banco Pichincha",
              "Banco Guayaquil", 
              "Produbanco",
              "Diners Club",
              "Pacificard",
              "Banco del Pacífico",
              "De Una"
            ].map((bank) => (
              <div key={bank} className="bg-indigo-50 rounded-lg p-3 text-center">
                <span className="text-indigo-700 font-medium">{bank}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-4">
            Pilas Fi funciona con todos los bancos principales de Ecuador
          </p>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Usuarios Reales de Pilas Fi
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="text-yellow-400 mb-2">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-600 mb-3">
                "Pilas Fi cambió completamente nuestras finanzas. Mi esposo y yo ahora sabemos 
                exactamente en qué gastamos y hemos ahorrado mucho más."
              </p>
              <p className="font-semibold text-gray-900">- María González, Quito</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="text-yellow-400 mb-2">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-600 mb-3">
                "Increíble que Pilas Fi sea gratis. Lee mis emails del Banco Pichincha 
                automáticamente y ya no tengo que anotar nada manualmente."
              </p>
              <p className="font-semibold text-gray-900">- Carlos Mendoza, Guayaquil</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="text-yellow-400 mb-2">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-600 mb-3">
                "La mejor app de finanzas para parejas. Pilas Fi nos ayuda a mantener 
                nuestro presupuesto familiar sin peleas por dinero."
              </p>
              <p className="font-semibold text-gray-900">- Ana y Roberto, Cuenca</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Descarga Pilas Fi Gratis Hoy
          </h2>
          <p className="text-xl mb-6">
            Únete a miles de ecuatorianos que ya controlan sus finanzas con Pilas Fi
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link 
              href="/#download"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Descargar para iOS
            </Link>
            <Link 
              href="/#download"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Descargar para Android
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Preguntas Frecuentes sobre Pilas Fi
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-gray-900 mb-2">¿Es seguro usar Pilas Fi?</h3>
              <p className="text-gray-600">
                Sí. Pilas Fi usa encriptación de nivel bancario y solo lee emails de notificaciones bancarias. 
                Nunca accedemos a tu cuenta bancaria directamente.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-gray-900 mb-2">¿Pilas Fi realmente es gratis?</h3>
              <p className="text-gray-600">
                100% gratis para siempre. No hay planes premium, suscripciones ocultas ni costos adicionales. 
                Todas las funciones están disponibles sin costo.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-gray-900 mb-2">¿Cómo empiezo a usar Pilas Fi?</h3>
              <p className="text-gray-600">
                Descarga la app, conecta tu email donde recibes notificaciones bancarias, y Pilas Fi 
                automáticamente comenzará a organizar tus gastos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}