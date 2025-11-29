import PageMeta from "../../components/common/PageMeta";
import CoursesOverview from "../../components/academic/CoursesOverview";

export default function CoursesPage() {
  return (
    <>
      <PageMeta
        title="Mis Cursos | Sistema de Gestión Académica"
        description="Vista de todos los cursos activos con calificaciones y asistencia"
      />
      <CoursesOverview />
    </>
  );
}
