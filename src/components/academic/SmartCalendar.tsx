import { useState } from "react";

interface CalendarEvent {
  id: number;
  title: string;
  type: 'clase' | 'examen' | 'evento' | 'pago';
  date: string;
  time: string;
  location?: string;
  course?: string;
  description?: string;
}

const events: CalendarEvent[] = [
  { id: 1, title: "Inglés Avanzado", type: 'clase', date: "2025-11-29", time: "18:00 - 20:00", location: "Aula 305", course: "Inglés Avanzado" },
  { id: 2, title: "Matemáticas", type: 'clase', date: "2025-11-29", time: "16:00 - 18:00", location: "Aula 102", course: "Matemáticas" },
  { id: 3, title: "Vencimiento Cuota Noviembre", type: 'pago', date: "2025-11-30", time: "Todo el día", description: "Último día para pagar sin recargo" },
  { id: 4, title: "Examen Final Python", type: 'examen', date: "2025-12-02", time: "10:00 - 12:00", location: "Lab. Informática", course: "Programación Python" },
  { id: 5, title: "Inglés Avanzado", type: 'clase', date: "2025-12-01", time: "18:00 - 20:00", location: "Aula 305", course: "Inglés Avanzado" },
  { id: 6, title: "Matemáticas", type: 'clase', date: "2025-12-02", time: "16:00 - 18:00", location: "Aula 102", course: "Matemáticas" },
  { id: 7, title: "Historia Universal", type: 'clase', date: "2025-12-01", time: "14:00 - 16:00", location: "Aula 201", course: "Historia Universal" },
  { id: 8, title: "Noche de Idiomas", type: 'evento', date: "2025-12-13", time: "19:00 - 22:00", location: "Salón Principal", description: "Evento cultural con presentaciones" },
  { id: 9, title: "Examen Matemáticas", type: 'examen', date: "2025-12-15", time: "16:00 - 18:00", location: "Aula 102", course: "Matemáticas" },
  { id: 10, title: "Entrega Proyecto Final", type: 'examen', date: "2025-12-15", time: "Antes de 23:59", course: "Programación Python" },
];

export default function SmartCalendar() {
  const [selectedDate, setSelectedDate] = useState("2025-11-29");
  const [viewMode, setViewMode] = useState<'day' | 'week' | 'month'>('week');

  // Generate week days
  const weekDays = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
  const currentWeek = [
    { date: '2025-11-24', day: 24 },
    { date: '2025-11-25', day: 25 },
    { date: '2025-11-26', day: 26 },
    { date: '2025-11-27', day: 27 },
    { date: '2025-11-28', day: 28 },
    { date: '2025-11-29', day: 29 },
    { date: '2025-11-30', day: 30 },
  ];

  const getEventsByDate = (date: string) => {
    return events.filter(event => event.date === date);
  };

  const getEventColor = (type: CalendarEvent['type']) => {
    switch (type) {
      case 'clase':
        return 'bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-900/30 dark:text-blue-300';
      case 'examen':
        return 'bg-red-100 text-red-800 border-red-300 dark:bg-red-900/30 dark:text-red-300';
      case 'evento':
        return 'bg-purple-100 text-purple-800 border-purple-300 dark:bg-purple-900/30 dark:text-purple-300';
      case 'pago':
        return 'bg-orange-100 text-orange-800 border-orange-300 dark:bg-orange-900/30 dark:text-orange-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  const getEventIcon = (type: CalendarEvent['type']) => {
    switch (type) {
      case 'clase':
        return (
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case 'examen':
        return (
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case 'evento':
        return (
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        );
      case 'pago':
        return (
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
    }
  };

  const todayEvents = getEventsByDate(selectedDate);

  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
      {/* Calendar View - 2 columns */}
      <div className="xl:col-span-2">
        <div className="rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          {/* Calendar Header */}
          <div className="border-b border-stroke px-6 py-4 dark:border-strokedark">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-black dark:text-white">
                  Agenda Académica
                </h2>
                <p className="text-sm text-body">Noviembre - Diciembre 2025</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('day')}
                  className={`rounded px-3 py-1 text-sm font-medium transition-colors ${
                    viewMode === 'day'
                      ? 'bg-primary text-white'
                      : 'bg-gray-2 text-body hover:bg-gray-3 dark:bg-meta-4'
                  }`}
                >
                  Día
                </button>
                <button
                  onClick={() => setViewMode('week')}
                  className={`rounded px-3 py-1 text-sm font-medium transition-colors ${
                    viewMode === 'week'
                      ? 'bg-primary text-white'
                      : 'bg-gray-2 text-body hover:bg-gray-3 dark:bg-meta-4'
                  }`}
                >
                  Semana
                </button>
                <button
                  onClick={() => setViewMode('month')}
                  className={`rounded px-3 py-1 text-sm font-medium transition-colors ${
                    viewMode === 'month'
                      ? 'bg-primary text-white'
                      : 'bg-gray-2 text-body hover:bg-gray-3 dark:bg-meta-4'
                  }`}
                >
                  Mes
                </button>
              </div>
            </div>
          </div>

          {/* Week View */}
          <div className="p-6">
            <div className="mb-4 grid grid-cols-7 gap-2">
              {weekDays.map((day) => (
                <div key={day} className="text-center text-sm font-semibold text-body">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {currentWeek.map((day) => {
                const dayEvents = getEventsByDate(day.date);
                const isSelected = day.date === selectedDate;
                const isToday = day.date === "2025-11-29";

                return (
                  <div
                    key={day.date}
                    onClick={() => setSelectedDate(day.date)}
                    className={`min-h-24 cursor-pointer rounded-lg border p-2 transition-all hover:shadow-md ${
                      isSelected
                        ? 'border-primary bg-primary/5 dark:bg-primary/10'
                        : 'border-stroke dark:border-strokedark'
                    }`}
                  >
                    <div className="mb-2 flex items-center justify-center">
                      <span
                        className={`flex h-7 w-7 items-center justify-center rounded-full text-sm font-semibold ${
                          isToday
                            ? 'bg-primary text-white'
                            : isSelected
                            ? 'text-primary'
                            : 'text-black dark:text-white'
                        }`}
                      >
                        {day.day}
                      </span>
                    </div>
                    <div className="space-y-1">
                      {dayEvents.slice(0, 3).map((event) => (
                        <div
                          key={event.id}
                          className={`rounded px-1 py-0.5 text-xs ${getEventColor(event.type)}`}
                          title={event.title}
                        >
                          <div className="truncate">{event.title}</div>
                        </div>
                      ))}
                      {dayEvents.length > 3 && (
                        <div className="text-xs text-body">+{dayEvents.length - 3} más</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Events List - 1 column */}
      <div className="xl:col-span-1">
        <div className="rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-6 py-4 dark:border-strokedark">
            <h3 className="text-lg font-bold text-black dark:text-white">
              Eventos del Día
            </h3>
            <p className="text-sm text-body">
              {new Date(selectedDate).toLocaleDateString('es-ES', { 
                weekday: 'long', 
                day: 'numeric', 
                month: 'long' 
              })}
            </p>
          </div>

          <div className="p-4">
            {todayEvents.length > 0 ? (
              <div className="space-y-3">
                {todayEvents.map((event) => (
                  <div
                    key={event.id}
                    className={`rounded-lg border p-4 ${getEventColor(event.type)}`}
                  >
                    <div className="mb-2 flex items-center gap-2">
                      {getEventIcon(event.type)}
                      <span className="text-xs font-semibold uppercase">
                        {event.type}
                      </span>
                    </div>
                    <h4 className="mb-2 font-semibold">{event.title}</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center gap-2">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {event.time}
                      </div>
                      {event.location && (
                        <div className="flex items-center gap-2">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {event.location}
                        </div>
                      )}
                      {event.course && (
                        <div className="flex items-center gap-2">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                          {event.course}
                        </div>
                      )}
                      {event.description && (
                        <p className="mt-2 italic">{event.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-8 text-center">
                <svg className="mx-auto mb-3 h-12 w-12 text-body" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-body">No hay eventos para este día</p>
              </div>
            )}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 rounded-lg border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark">
          <h4 className="mb-4 text-sm font-bold text-black dark:text-white">Leyenda</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-blue-500"></div>
              <span className="text-sm text-body">Clases</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <span className="text-sm text-body">Exámenes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-purple-500"></div>
              <span className="text-sm text-body">Eventos</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-orange-500"></div>
              <span className="text-sm text-body">Vencimientos de Pago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
