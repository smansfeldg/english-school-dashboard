import PageMeta from "../../components/common/PageMeta";
import CommunicationsCenter from "../../components/academic/CommunicationsCenter";

export default function CommunicationsPage() {
  return (
    <>
      <PageMeta
        title="Comunicaciones | Sistema de Gestión Académica"
        description="Centro de comunicaciones con novedades y mensajes"
      />
      <CommunicationsCenter />
    </>
  );
}
