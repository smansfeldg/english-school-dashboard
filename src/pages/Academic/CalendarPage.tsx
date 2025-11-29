import PageMeta from "../../components/common/PageMeta";
import SmartCalendar from "../../components/academic/SmartCalendar";

export default function CalendarPage() {
  return (
    <>
      <PageMeta
        title="Agenda Académica | Sistema de Gestión Académica"
        description="Calendario unificado con clases, exámenes y eventos"
      />
      <SmartCalendar />
    </>
  );
}
