import PageMeta from "../../components/common/PageMeta";
import CourseDetailView from "../../components/academic/CourseDetailView";

export default function CourseDetailPage() {
  return (
    <>
      <PageMeta
        title="Detalle del Curso | Sistema de Gestión Académica"
        description="Información detallada del curso con calificaciones, feedback y materiales"
      />
      <CourseDetailView />
    </>
  );
}
