interface NewsItem {
  id: number;
  title: string;
  content: string;
  date: string;
  category: 'all' | 'curso' | 'evento' | 'admin';
  target: string;
  image?: string;
  priority: 'normal' | 'urgent';
}

interface Message {
  id: number;
  from: string;
  fromRole: 'profesor' | 'admin';
  subject: string;
  preview: string;
  date: string;
  read: boolean;
  avatar: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Feriado Nacional - 25 de Diciembre",
    content: "Informamos que no habrá clases el día 25 de diciembre por feriado nacional. Las clases se reanudarán normalmente el 27 de diciembre.",
    date: "22/11/2025",
    category: 'all',
    target: "Todos los estudiantes",
    priority: 'urgent',
    image: "/images/carousel/carousel-0.jpg"
  },
  {
    id: 2,
    title: "Cambio de Aula - Inglés Avanzado",
    content: "A partir del lunes 02/12, las clases de Inglés Avanzado se realizarán en el Aula 305 (tercer piso). Por favor, tener en cuenta este cambio.",
    date: "20/11/2025",
    category: 'curso',
    target: "Alumnos de Inglés Avanzado",
    priority: 'urgent'
  },
  {
    id: 3,
    title: "Exámenes de Fin de Año",
    content: "El período de exámenes finales será del 15 al 20 de diciembre. Los horarios específicos se publicarán la próxima semana en el calendario.",
    date: "18/11/2025",
    category: 'all',
    target: "Todos los estudiantes",
    priority: 'normal',
    image: "/images/carousel/carousel-0.jpg"
  },
  {
    id: 4,
    title: "Inscripciones Abiertas - Ciclo 2026",
    content: "Ya están abiertas las inscripciones para el ciclo lectivo 2026. Aprovecha el descuento por inscripción anticipada hasta el 31 de diciembre.",
    date: "15/11/2025",
    category: 'admin',
    target: "Todos",
    priority: 'normal'
  },
  {
    id: 5,
    title: "Evento Cultural - Noche de Idiomas",
    content: "Los invitamos a nuestra Noche de Idiomas el viernes 13/12 a las 19:00. Habrá presentaciones de los alumnos, música y comida internacional.",
    date: "10/11/2025",
    category: 'evento',
    target: "Todos los estudiantes y familias",
    priority: 'normal',
    image: "/images/carousel/carousel-02.jpg"
  }
];

const messages: Message[] = [
  {
    id: 1,
    from: "Prof. María González",
    fromRole: 'profesor',
    subject: "Excelente trabajo en la última presentación",
    preview: "Hola! Quería felicitarte por tu presentación de ayer. Tu fluidez ha mejorado notablemente...",
    date: "Hoy, 14:30",
    read: false,
    avatar: "/images/user/user-0.png"
  },
  {
    id: 2,
    from: "Administración",
    fromRole: 'admin',
    subject: "Recordatorio: Vencimiento de Cuota",
    preview: "Estimado alumno, te recordamos que el vencimiento de la cuota de noviembre es el 30/11...",
    date: "Ayer, 10:15",
    read: false,
    avatar: "/images/user/user-0.png"
  },
  {
    id: 3,
    from: "Prof. Carlos Ramírez",
    fromRole: 'profesor',
    subject: "Material adicional - Trigonometría",
    preview: "Adjunto te envío ejercicios adicionales de trigonometría para practicar antes del examen...",
    date: "22/11/2025",
    read: true,
    avatar: "/images/user/user-0.png"
  },
  {
    id: 4,
    from: "Prof. Ana Martínez",
    fromRole: 'admin',
    subject: "Proyecto Final - Fecha de entrega",
    preview: "Recuerda que la fecha límite para entregar el proyecto final de Python es el 15/12...",
    date: "20/11/2025",
    read: true,
    avatar: "/images/user/user-0.png"
  }
];

export default function CommunicationsCenter() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {/* News Feed - 2 columns */}
      <div className="lg:col-span-2">
        <div className="rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-6 py-4 dark:border-strokedark">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-black dark:text-white">
                Cartelera de Novedades
              </h2>
              <div className="flex gap-2">
                <button className="rounded bg-primary px-3 py-1 text-xs font-medium text-white hover:bg-primary/90">
                  Todas
                </button>
                <button className="rounded bg-gray-2 px-3 py-1 text-xs font-medium text-body hover:bg-gray-3 dark:bg-meta-4">
                  Cursos
                </button>
                <button className="rounded bg-gray-2 px-3 py-1 text-xs font-medium text-body hover:bg-gray-3 dark:bg-meta-4">
                  Eventos
                </button>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              {newsItems.map((news) => (
                <div
                  key={news.id}
                  className="rounded-lg border border-stroke p-4 transition-shadow hover:shadow-md dark:border-strokedark"
                >
                  <div className="mb-3 flex items-start justify-between">
                    <div className="flex-1">
                      <div className="mb-2 flex items-center gap-2">
                        <h3 className="text-lg font-semibold text-black dark:text-white">
                          {news.title}
                        </h3>
                        {news.priority === 'urgent' && (
                          <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900/30 dark:text-red-300">
                            Urgente
                          </span>
                        )}
                      </div>
                      <div className="mb-2 flex items-center gap-3 text-sm text-body">
                        <span className="flex items-center gap-1">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {news.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          {news.target}
                        </span>
                      </div>
                    </div>
                  </div>

                  {news.image && (
                    <img
                      src={news.image}
                      alt={news.title}
                      className="mb-3 h-40 w-full rounded-lg object-cover"
                    />
                  )}

                  <p className="text-body">{news.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Messages Inbox - 1 column */}
      <div className="lg:col-span-1">
        <div className="rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-6 py-4 dark:border-strokedark">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-black dark:text-white">
                Mensajes
              </h2>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white">
                {messages.filter(m => !m.read).length}
              </span>
            </div>
          </div>

          <div className="p-4">
            <div className="space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`cursor-pointer rounded-lg border p-3 transition-all hover:shadow-md ${
                    message.read
                      ? 'border-stroke bg-white dark:border-strokedark dark:bg-boxdark'
                      : 'border-primary bg-primary/5 dark:border-primary dark:bg-primary/10'
                  }`}
                >
                  <div className="mb-2 flex items-start gap-3">
                    <img
                      src={message.avatar}
                      alt={message.from}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="mb-1 flex items-center justify-between">
                        <p className={`text-sm font-semibold ${!message.read ? 'text-black dark:text-white' : 'text-body'}`}>
                          {message.from}
                        </p>
                        {!message.read && (
                          <span className="h-2 w-2 rounded-full bg-primary"></span>
                        )}
                      </div>
                      <p className="mb-1 text-xs text-body">{message.date}</p>
                    </div>
                  </div>
                  <p className={`mb-1 text-sm ${!message.read ? 'font-semibold text-black dark:text-white' : 'text-body'}`}>
                    {message.subject}
                  </p>
                  <p className="line-clamp-2 text-xs text-body">{message.preview}</p>
                </div>
              ))}
            </div>

            <button className="mt-4 w-full rounded-lg bg-primary py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90">
              Ver Todos los Mensajes
            </button>
          </div>
        </div>

        {/* Quick Contact */}
        <div className="mt-6 rounded-lg border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark">
          <h3 className="mb-4 text-lg font-bold text-black dark:text-white">
            Contacto Rápido
          </h3>
          <div className="space-y-3">
            <button className="flex w-full items-center gap-3 rounded-lg bg-blue-50 p-3 transition-colors hover:bg-blue-100 dark:bg-meta-4 dark:hover:bg-meta-4/80">
              <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="font-medium text-black dark:text-white">Nuevo Mensaje</span>
            </button>
            <button className="flex w-full items-center gap-3 rounded-lg bg-green-50 p-3 transition-colors hover:bg-green-100 dark:bg-meta-4 dark:hover:bg-meta-4/80">
              <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span className="font-medium text-black dark:text-white">Soporte</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
