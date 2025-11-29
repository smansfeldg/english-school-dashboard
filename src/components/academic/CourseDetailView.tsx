interface Evaluation {
  id: number;
  name: string;
  date: string;
  grade: number;
  maxGrade: number;
  weight: number;
}

interface CourseDetail {
  id: number;
  name: string;
  level: string;
  teacher: string;
  teacherImage: string;
  evaluations: Evaluation[];
  attendance: number;
  feedback: string[];
  materials: { name: string; type: string; date: string }[];
}

const courseDetail: CourseDetail = {
  id: 1,
  name: "Inglés Avanzado",
  level: "C1",
  teacher: "Prof. María González",
  teacherImage: "/images/user/user-0.png",
  evaluations: [
    { id: 1, name: "Examen Oral - Unit 1", date: "15/10/2025", grade: 9, maxGrade: 10, weight: 20 },
    { id: 2, name: "Writing Assignment", date: "22/10/2025", grade: 8.5, maxGrade: 10, weight: 15 },
    { id: 3, name: "Grammar Test", date: "05/11/2025", grade: 8, maxGrade: 10, weight: 20 },
    { id: 4, name: "Listening Comprehension", date: "18/11/2025", grade: 9.5, maxGrade: 10, weight: 15 },
    { id: 5, name: "Final Presentation", date: "Pendiente", grade: 0, maxGrade: 10, weight: 30 }
  ],
  attendance: 95,
  feedback: [
    "Excelente progreso en pronunciación y fluidez. Ha demostrado gran mejoría en conversaciones espontáneas.",
    "Se recomienda reforzar el uso de phrasal verbs y expresiones idiomáticas.",
    "Muy buen desempeño en comprensión auditiva. Continuar practicando con podcasts nativos.",
    "La escritura ha mejorado significativamente. Prestar atención a la estructura de essays académicos."
  ],
  materials: [
    { name: "Unit 5 - Advanced Grammar.pdf", type: "PDF", date: "20/11/2025" },
    { name: "Listening Practice - Podcast Episode.mp3", type: "Audio", date: "18/11/2025" },
    { name: "Vocabulary List - Business English.pdf", type: "PDF", date: "15/11/2025" },
    { name: "Class Recording - 12 Nov.mp4", type: "Video", date: "12/11/2025" }
  ]
};

export default function CourseDetailView() {
  const averageGrade = courseDetail.evaluations
    .filter(e => e.grade > 0)
    .reduce((acc, e) => acc + e.grade, 0) / courseDetail.evaluations.filter(e => e.grade > 0).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="rounded-lg border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="mb-2 text-2xl font-bold text-black dark:text-white">
              {courseDetail.name}
            </h1>
            <p className="text-body">{courseDetail.level}</p>
          </div>
          <div className="flex items-center gap-3">
            <img
              src={courseDetail.teacherImage}
              alt={courseDetail.teacher}
              className="h-12 w-12 rounded-full"
            />
            <div>
              <p className="text-sm text-body">Profesor</p>
              <p className="font-semibold text-black dark:text-white">{courseDetail.teacher}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-meta-4">
            <p className="mb-1 text-sm text-body">Promedio Actual</p>
            <p className="text-3xl font-bold text-primary">{averageGrade.toFixed(1)}</p>
          </div>
          <div className="rounded-lg bg-green-50 p-4 dark:bg-meta-4">
            <p className="mb-1 text-sm text-body">Asistencia</p>
            <p className="text-3xl font-bold text-green-600">{courseDetail.attendance}%</p>
          </div>
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-meta-4">
            <p className="mb-1 text-sm text-body">Evaluaciones</p>
            <p className="text-3xl font-bold text-purple-600">
              {courseDetail.evaluations.filter(e => e.grade > 0).length}/{courseDetail.evaluations.length}
            </p>
          </div>
        </div>
      </div>

      {/* Evaluations */}
      <div className="rounded-lg border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark">
        <h2 className="mb-4 text-xl font-bold text-black dark:text-white">
          Calificaciones
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="px-4 py-4 font-medium text-black dark:text-white">Evaluación</th>
                <th className="px-4 py-4 font-medium text-black dark:text-white">Fecha</th>
                <th className="px-4 py-4 font-medium text-black dark:text-white">Nota</th>
                <th className="px-4 py-4 font-medium text-black dark:text-white">Peso</th>
              </tr>
            </thead>
            <tbody>
              {courseDetail.evaluations.map((evaluation) => (
                <tr key={evaluation.id} className="border-b border-stroke dark:border-strokedark">
                  <td className="px-4 py-4">
                    <p className="font-medium text-black dark:text-white">{evaluation.name}</p>
                  </td>
                  <td className="px-4 py-4">
                    <p className="text-body">{evaluation.date}</p>
                  </td>
                  <td className="px-4 py-4">
                    {evaluation.grade > 0 ? (
                      <p className="font-semibold text-primary">
                        {evaluation.grade} / {evaluation.maxGrade}
                      </p>
                    ) : (
                      <span className="rounded bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
                        Pendiente
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-4">
                    <p className="text-body">{evaluation.weight}%</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Teacher Feedback */}
      <div className="rounded-lg border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark">
        <h2 className="mb-4 text-xl font-bold text-black dark:text-white">
          Comentarios del Profesor
        </h2>
        <div className="space-y-3">
          {courseDetail.feedback.map((comment, index) => (
            <div key={index} className="flex gap-3 rounded-lg bg-gray-2 p-4 dark:bg-meta-4">
              <svg className="mt-1 h-5 w-5 flex-shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-body">{comment}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Materials */}
      <div className="rounded-lg border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark">
        <h2 className="mb-4 text-xl font-bold text-black dark:text-white">
          Material de Clase
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {courseDetail.materials.map((material, index) => (
            <div key={index} className="flex items-center justify-between rounded-lg border border-stroke p-4 transition-colors hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  {material.type === 'PDF' && (
                    <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  )}
                  {material.type === 'Audio' && (
                    <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                  )}
                  {material.type === 'Video' && (
                    <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )}
                </div>
                <div>
                  <p className="font-medium text-black dark:text-white">{material.name}</p>
                  <p className="text-sm text-body">{material.date}</p>
                </div>
              </div>
              <button className="text-primary hover:text-primary/80">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
