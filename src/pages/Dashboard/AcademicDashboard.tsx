import { Link } from "react-router";
import PageMeta from "../../components/common/PageMeta";

interface QuickStat {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: React.ReactNode;
  color: string;
}

interface UpcomingEvent {
  id: number;
  title: string;
  date: string;
  type: 'clase' | 'examen' | 'evento' | 'pago';
}

const quickStats: QuickStat[] = [
  {
    title: "Promedio General",
    value: "8.5",
    change: "+0.3 vs mes anterior",
    changeType: 'positive',
    color: 'blue',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: "Asistencia",
    value: "92%",
    change: "Excelente",
    changeType: 'positive',
    color: 'green',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },

  {
    title: "Pagos Pendientes",
    value: "$18,500",
    change: "2 pagos vencidos",
    changeType: 'negative',
    color: 'red',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

const upcomingEvents: UpcomingEvent[] = [
  { id: 1, title: "Inglés Avanzado - Clase", date: "Hoy, 18:00", type: 'clase' },
  { id: 2, title: "Vencimiento Cuota Nov", date: "Mañana", type: 'pago' },
  { id: 3, title: "Examen Python", date: "Lun 02/12, 10:00", type: 'examen' },
  { id: 4, title: "Noche de Idiomas", date: "Vie 13/12, 19:00", type: 'evento' },
];

const recentActivity = [
  { id: 1, type: 'grade', text: "Nueva calificación en Inglés Avanzado: 9.5/10", time: "Hace 2 horas" },
  { id: 2, type: 'message', text: "Nuevo mensaje de Prof. María González", time: "Hace 5 horas" },
  { id: 3, type: 'material', text: "Material nuevo disponible en Matemáticas", time: "Ayer" },
  { id: 4, type: 'announcement', text: "Anuncio: Cambio de aula para Inglés Avanzado", time: "Hace 2 días" },
];

export default function AcademicDashboard() {
  return (
    <>
      <PageMeta
        title="Dashboard Académico | Sistema de Gestión Académica"
        description="Panel principal del sistema de gestión académica para estudiantes y familias"
      />

      {/* Welcome Section */}
      <div className="mb-6 rounded-lg border border-stroke bg-gradient-to-r from-blue-500 via-purple-400 to-violet-300 p-6 shadow-default dark:border-strokedark">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="mb-2 text-2xl font-bold text-white drop-shadow-sm md:text-3xl">
              ¡Bienvenido, Franco Corvalan! 👋
            </h1>
            <p className="text-white/90 drop-shadow-sm">
              Viernes, 29 de Noviembre de 2025 - Tienes clases hoy
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/messages"
              className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 font-medium text-primary transition-colors hover:bg-blue-50"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Mensajes
              <span className="rounded-full bg-red-500 px-2 py-0.5 text-xs text-white">2</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {quickStats.map((stat, index) => (
          <div
            key={index}
            className="rounded-lg border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="mb-2 text-sm text-body">{stat.title}</p>
                <h3 className="mb-1 text-3xl font-bold text-black dark:text-white">
                  {stat.value}
                </h3>
                <p className={`text-sm ${
                  stat.changeType === 'positive' ? 'text-green-600' :
                  stat.changeType === 'negative' ? 'text-red-600' :
                  'text-body'
                }`}>
                  {stat.change}
                </p>
              </div>
              <div className={`flex h-14 w-14 items-center justify-center rounded-full bg-${stat.color}-100 dark:bg-${stat.color}-900/30`}>
                <div className={`text-${stat.color}-600`}>
                  {stat.icon}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* Left Column - 2/3 width */}
        <div className="space-y-6 xl:col-span-2">
          {/* Quick Access Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Link
              to="/courses"
              className="group rounded-lg border border-stroke bg-white p-6 shadow-default transition-all hover:border-primary hover:shadow-md dark:border-strokedark dark:bg-boxdark"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 transition-colors group-hover:bg-primary dark:bg-blue-900/30">
                <svg className="h-7 w-7 text-blue-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-black group-hover:text-primary dark:text-white">
                Mi Cursada
              </h3>
              <p className="text-sm text-body">
                Ver notas, asistencia y material de clase
              </p>
            </Link>

            <Link
              to="/communications"
              className="group rounded-lg border border-stroke bg-white p-6 shadow-default transition-all hover:border-primary hover:shadow-md dark:border-strokedark dark:bg-boxdark"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 transition-colors group-hover:bg-primary dark:bg-green-900/30">
                <svg className="h-7 w-7 text-green-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-black group-hover:text-primary dark:text-white">
                Comunicaciones
              </h3>
              <p className="text-sm text-body">
                Novedades, mensajes y anuncios
              </p>
            </Link>

            <Link
              to="/calendar"
              className="group rounded-lg border border-stroke bg-white p-6 shadow-default transition-all hover:border-primary hover:shadow-md dark:border-strokedark dark:bg-boxdark"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-purple-100 transition-colors group-hover:bg-primary dark:bg-purple-900/30">
                <svg className="h-7 w-7 text-purple-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-black group-hover:text-primary dark:text-white">
                Agenda
              </h3>
              <p className="text-sm text-body">
                Horarios, exámenes y eventos
              </p>
            </Link>

            <Link
              to="/payments"
              className="group rounded-lg border border-stroke bg-white p-6 shadow-default transition-all hover:border-primary hover:shadow-md dark:border-strokedark dark:bg-boxdark"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 transition-colors group-hover:bg-primary dark:bg-orange-900/30">
                <svg className="h-7 w-7 text-orange-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-black group-hover:text-primary dark:text-white">
                Pagos
              </h3>
              <p className="text-sm text-body">
                Estado de cuenta y transacciones
              </p>
            </Link>
          </div>

          {/* Recent Activity 
          <div className="rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6 py-4 dark:border-strokedark">
              <h2 className="text-xl font-bold text-black dark:text-white">
                Actividad Reciente
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex gap-4">
                    <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${
                      activity.type === 'grade' ? 'bg-blue-100 dark:bg-blue-900/30' :
                      activity.type === 'message' ? 'bg-green-100 dark:bg-green-900/30' :
                      activity.type === 'material' ? 'bg-purple-100 dark:bg-purple-900/30' :
                      'bg-orange-100 dark:bg-orange-900/30'
                    }`}>
                      {activity.type === 'grade' && (
                        <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                      {activity.type === 'message' && (
                        <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      )}
                      {activity.type === 'material' && (
                        <svg className="h-5 w-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      )}
                      {activity.type === 'announcement' && (
                        <svg className="h-5 w-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-black dark:text-white">
                        {activity.text}
                      </p>
                      <p className="text-sm text-body">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>*/}
        </div>

        {/* Right Column - 1/3 width */}
        <div className="space-y-6 xl:col-span-1">
          {/* Upcoming Events */}
          <div className="rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6 py-4 dark:border-strokedark">
              <h2 className="text-xl font-bold text-black dark:text-white">
                Próximos Eventos
              </h2>
            </div>
            <div className="p-4">
              <div className="space-y-3">
                {upcomingEvents.map((event) => (
                  <div
                    key={event.id}
                    className={`rounded-lg border p-3 ${
                      event.type === 'clase' ? 'border-blue-300 bg-blue-50 dark:bg-blue-900/10' :
                      event.type === 'examen' ? 'border-red-300 bg-red-50 dark:bg-red-900/10' :
                      event.type === 'evento' ? 'border-purple-300 bg-purple-50 dark:bg-purple-900/10' :
                      'border-orange-300 bg-orange-50 dark:bg-orange-900/10'
                    }`}
                  >
                    <p className="mb-1 text-sm font-semibold text-black dark:text-white">
                      {event.title}
                    </p>
                    <p className="text-xs text-body">{event.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Payment Alert 
          <div className="rounded-lg border border-red-300 bg-red-50 p-6 shadow-default dark:bg-red-900/10">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
                <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-red-800 dark:text-red-300">
                  Pago Pendiente
                </h3>
                <p className="text-sm text-red-700 dark:text-red-400">
                  Vence mañana
                </p>
              </div>
            </div>
            <p className="mb-4 text-sm text-red-700 dark:text-red-400">
              Tienes $18,500 en pagos pendientes. 2 pagos están vencidos.
            </p>
            <Link
              to="/payments"
              className="block w-full rounded-lg bg-red-600 py-2 text-center font-medium text-white transition-colors hover:bg-red-700"
            >
              Pagar Ahora
            </Link>
          </div> */}

          {/* Quick Support 
          <div className="rounded-lg border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark">
            <h3 className="mb-4 font-bold text-black dark:text-white">
              ¿Necesitas Ayuda?
            </h3>
            <div className="space-y-3">
              <button className="flex w-full items-center gap-3 rounded-lg bg-blue-50 p-3 text-left transition-colors hover:bg-blue-100 dark:bg-meta-4 dark:hover:bg-meta-4/80">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium text-black dark:text-white">
                  Preguntas Frecuentes
                </span>
              </button>
              <button className="flex w-full items-center gap-3 rounded-lg bg-green-50 p-3 text-left transition-colors hover:bg-green-100 dark:bg-meta-4 dark:hover:bg-meta-4/80">
                <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span className="text-sm font-medium text-black dark:text-white">
                  Contactar Soporte
                </span>
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
