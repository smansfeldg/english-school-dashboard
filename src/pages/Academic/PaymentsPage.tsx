import PageMeta from "../../components/common/PageMeta";
import FinancialPortal from "../../components/academic/FinancialPortal";

export default function PaymentsPage() {
  return (
    <>
      <PageMeta
        title="Portal Financiero | Sistema de Gestión Académica"
        description="Estado de cuenta, historial de pagos y pasarela de pagos"
      />
      <FinancialPortal />
    </>
  );
}
