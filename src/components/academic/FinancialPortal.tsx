interface Payment {
  id: number;
  concept: string;
  amount: number;
  dueDate: string;
  status: 'paid' | 'pending' | 'overdue';
  paidDate?: string;
  method?: string;
  receipt?: string;
}

interface Transaction {
  id: number;
  date: string;
  concept: string;
  amount: number;
  method: string;
  receipt: string;
}

const currentPayments: Payment[] = [
  {
    id: 1,
    concept: "Cuota Mensual - Noviembre 2025",
    amount: 15000,
    dueDate: "2025-11-30",
    status: 'pending'
  },
  {
    id: 2,
    concept: "Material Didáctico - Inglés",
    amount: 3500,
    dueDate: "2025-11-15",
    status: 'overdue'
  },
  {
    id: 3,
    concept: "Cuota Mensual - Diciembre 2025",
    amount: 15000,
    dueDate: "2025-12-10",
    status: 'pending'
  }
];

const transactionHistory: Transaction[] = [
  {
    id: 1,
    date: "2025-10-25",
    concept: "Cuota Mensual - Octubre 2025",
    amount: 15000,
    method: "Transferencia Bancaria",
    receipt: "REC-2025-10-001"
  },
  {
    id: 2,
    date: "2025-09-28",
    concept: "Cuota Mensual - Septiembre 2025",
    amount: 15000,
    method: "Mercado Pago",
    receipt: "REC-2025-09-001"
  },
  {
    id: 3,
    date: "2025-09-10",
    concept: "Material Didáctico - Matemáticas",
    amount: 2800,
    method: "Efectivo",
    receipt: "REC-2025-09-002"
  },
  {
    id: 4,
    date: "2025-08-20",
    concept: "Cuota Mensual - Agosto 2025",
    amount: 14500,
    method: "Mercado Pago",
    receipt: "REC-2025-08-001"
  }
];

export default function FinancialPortal() {
  const totalPending = currentPayments
    .filter(p => p.status !== 'paid')
    .reduce((sum, p) => sum + p.amount, 0);

  const totalPaid = transactionHistory.reduce((sum, t) => sum + t.amount, 0);

  const getStatusBadge = (status: Payment['status']) => {
    switch (status) {
      case 'paid':
        return (
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800 dark:bg-green-900/30 dark:text-green-300">
            Pagado
          </span>
        );
      case 'pending':
        return (
          <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
            Pendiente
          </span>
        );
      case 'overdue':
        return (
          <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-800 dark:bg-red-900/30 dark:text-red-300">
            Vencido
          </span>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Financial Summary */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="flex items-center justify-between">
            <div>
              <p className="mb-1 text-sm text-body">Total Pendiente</p>
              <h3 className="text-3xl font-bold text-red-600">
                ${totalPending.toLocaleString()}
              </h3>
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
              <svg className="h-7 w-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="flex items-center justify-between">
            <div>
              <p className="mb-1 text-sm text-body">Total Pagado (2025)</p>
              <h3 className="text-3xl font-bold text-green-600">
                ${totalPaid.toLocaleString()}
              </h3>
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
              <svg className="h-7 w-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="flex items-center justify-between">
            <div>
              <p className="mb-1 text-sm text-body">Próximo Vencimiento</p>
              <h3 className="text-2xl font-bold text-orange-600">
                30 Nov
              </h3>
              <p className="text-sm text-body">Quedan 1 días</p>
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30">
              <svg className="h-7 w-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Pending Payments */}
      <div className="rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-6 py-4 dark:border-strokedark">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-black dark:text-white">
              Estado de Cuenta
            </h2>
            <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-800 dark:bg-red-900/30 dark:text-red-300">
              {currentPayments.filter(p => p.status !== 'paid').length} Pendientes
            </span>
          </div>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {currentPayments.map((payment) => (
              <div
                key={payment.id}
                className={`rounded-lg border p-4 transition-all ${
                  payment.status === 'overdue'
                    ? 'border-red-300 bg-red-50 dark:bg-red-900/10'
                    : 'border-stroke bg-gray-2 dark:border-strokedark dark:bg-meta-4'
                }`}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                      {payment.concept}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm text-body">
                      <span className="flex items-center gap-1">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Vence: {new Date(payment.dueDate).toLocaleDateString('es-ES')}
                      </span>
                      <span className="flex items-center gap-1">
                        {getStatusBadge(payment.status)}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm text-body">Monto</p>
                      <p className="text-2xl font-bold text-black dark:text-white">
                        ${payment.amount.toLocaleString()}
                      </p>
                    </div>
                    {payment.status !== 'paid' && (
                      <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 font-medium text-white transition-colors hover:bg-primary/90">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                        Pagar
                      </button>
                    )}
                  </div>
                </div>

                {payment.status === 'overdue' && (
                  <div className="mt-3 flex items-center gap-2 rounded bg-red-100 p-2 text-sm text-red-800 dark:bg-red-900/30 dark:text-red-300">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>Este pago está vencido. Por favor, regularice su situación para evitar recargos.</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="rounded-lg border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark">
        <h3 className="mb-4 text-lg font-bold text-black dark:text-white">
          Métodos de Pago Disponibles
        </h3>
        <div className="grid gap-4 sm:grid-cols-3">
          <button className="flex flex-col items-center gap-3 rounded-lg border border-stroke p-4 transition-all hover:border-primary hover:bg-primary/5 dark:border-strokedark dark:hover:bg-primary/10">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
              <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <div className="text-center">
              <p className="font-semibold text-black dark:text-white">Mercado Pago</p>
              <p className="text-xs text-body">Tarjeta, débito o crédito</p>
            </div>
          </button>

          <button className="flex flex-col items-center gap-3 rounded-lg border border-stroke p-4 transition-all hover:border-primary hover:bg-primary/5 dark:border-strokedark dark:hover:bg-primary/10">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
              <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <div className="text-center">
              <p className="font-semibold text-black dark:text-white">Transferencia</p>
              <p className="text-xs text-body">Banco o billetera virtual</p>
            </div>
          </button>

          <button className="flex flex-col items-center gap-3 rounded-lg border border-stroke p-4 transition-all hover:border-primary hover:bg-primary/5 dark:border-strokedark dark:hover:bg-primary/10">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
              <svg className="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="text-center">
              <p className="font-semibold text-black dark:text-white">Efectivo</p>
              <p className="text-xs text-body">En sede administrativa</p>
            </div>
          </button>
        </div>
      </div>

      {/* Transaction History */}
      <div className="rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-6 py-4 dark:border-strokedark">
          <h2 className="text-xl font-bold text-black dark:text-white">
            Historial de Pagos
          </h2>
        </div>

        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-2 text-left dark:bg-meta-4">
                  <th className="px-4 py-4 font-medium text-black dark:text-white">Fecha</th>
                  <th className="px-4 py-4 font-medium text-black dark:text-white">Concepto</th>
                  <th className="px-4 py-4 font-medium text-black dark:text-white">Método</th>
                  <th className="px-4 py-4 font-medium text-black dark:text-white">Monto</th>
                  <th className="px-4 py-4 font-medium text-black dark:text-white">Recibo</th>
                </tr>
              </thead>
              <tbody>
                {transactionHistory.map((transaction) => (
                  <tr key={transaction.id} className="border-b border-stroke dark:border-strokedark">
                    <td className="px-4 py-4">
                      <p className="text-body">
                        {new Date(transaction.date).toLocaleDateString('es-ES')}
                      </p>
                    </td>
                    <td className="px-4 py-4">
                      <p className="font-medium text-black dark:text-white">
                        {transaction.concept}
                      </p>
                    </td>
                    <td className="px-4 py-4">
                      <p className="text-body">{transaction.method}</p>
                    </td>
                    <td className="px-4 py-4">
                      <p className="font-semibold text-green-600">
                        ${transaction.amount.toLocaleString()}
                      </p>
                    </td>
                    <td className="px-4 py-4">
                      <button className="flex items-center gap-1 text-primary hover:text-primary/80">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {transaction.receipt}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
