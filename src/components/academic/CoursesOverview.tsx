import { Link } from "react-router";

interface Course {
  id: number;
  name: string;
  level: string;
  teacher: string;
  schedule: string;
  grade: number;
  attendance: number;
  status: 'active' | 'completed';
  color: string;
}

const courses: Course[] = [
  {
    id: 1,
    name: "Inglés 2025",
    level: "Upper Intermediate (B2)",
    teacher: "Prof. María González",
    schedule: "Lun, Mié, Vie - 18:00",
    grade: 8.5,
    attendance: 95,
    status: 'active',
    color: 'blue'
  },
  {
    id: 2,
    name: "Inglés 2024",
    level: "Intermediate (B1)",
    teacher: "Prof. Carlos Ramírez",
    schedule: "Mar, Jue - 16:00",
    grade: 9.2,
    attendance: 98,
    status: 'completed',
    color: 'green'
  },
  {
    id: 3,
    name: "Inglés 2023",
    level: "Pre-Intermediate (A2)",
    teacher: "Prof. Ana Martínez",
    schedule: "Lun, Mié - 17:00",
    grade: 8.8,
    attendance: 96,
    status: 'completed',
    color: 'purple'
  },
  {
    id: 4,
    name: "Inglés 2022",
    level: "Elementary (A1)",
    teacher: "Prof. Roberto Silva",
    schedule: "Mar, Jue - 15:00",
    grade: 8.0,
    attendance: 94,
    status: 'completed',
    color: 'orange'
  }
];

export default function CoursesOverview() {
  const getGradeColor = (grade: number) => {
    if (grade >= 9) return 'text-green-600 dark:text-green-400';
    if (grade >= 7) return 'text-blue-600 dark:text-blue-400';
    return 'text-orange-600 dark:text-orange-400';
  };

  const getAttendanceColor = (attendance: number) => {
    if (attendance >= 90) return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
    if (attendance >= 75) return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
    return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
  };

  return (
    <div className="rounded-lg border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-black dark:text-white">
            Historial de Cursadas
          </h2>
          <p className="mt-1 text-sm text-body">
            Tu progreso año por año en la academia
          </p>
        </div>
        <span className="rounded-full bg-primary px-3 py-1 text-sm font-medium text-white">
          {courses.length} Años
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {courses.map((course) => (
          <Link
            key={course.id}
            to={`/courses/${course.id}`}
            className="group rounded-lg border border-stroke bg-gray-2 p-5 transition-all hover:border-primary hover:shadow-md dark:border-strokedark dark:bg-meta-4 dark:hover:border-primary"
          >
            <div className="mb-4 flex items-start justify-between">
              <div className="flex-1">
                <h3 className="mb-1 text-lg font-semibold text-black transition-colors group-hover:text-primary dark:text-white dark:group-hover:text-primary">
                  {course.name}
                </h3>
                <p className="text-sm text-body">{course.level}</p>
              </div>
              <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                course.status === 'active' 
                  ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                  : 'bg-gray-100 text-gray-600 dark:bg-gray-900/30 dark:text-gray-400'
              }`}>
                {course.status === 'active' ? 'Cursando' : 'Finalizado'}
              </span>
            </div>

            <div className="mb-4 space-y-2">
              <div className="flex items-center text-sm text-body">
                <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {course.teacher}
              </div>
              <div className="flex items-center text-sm text-body">
                <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {course.schedule}
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-stroke pt-4 dark:border-strokedark">
              <div className="text-center">
                <p className="mb-1 text-xs text-body">Promedio Final</p>
                <p className={`text-2xl font-bold ${getGradeColor(course.grade)}`}>
                  {course.grade.toFixed(1)}
                </p>
              </div>
              <div className="text-center">
                <p className="mb-1 text-xs text-body">Asistencia</p>
                <span className={`rounded-full px-3 py-1 text-sm font-semibold ${getAttendanceColor(course.attendance)}`}>
                  {course.attendance}%
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
