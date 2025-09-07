export default function InvoicesPage() {
  const invoices = [
    { id: 101, customer: "Alice Johnson", amount: 250, status: "Paid" },
    { id: 102, customer: "Bob Smith", amount: 500, status: "Pending" },
    { id: 103, customer: "Charlie Davis", amount: 120, status: "Overdue" },
  ];

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">Invoices</h1>
      <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden shadow">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Invoice #</th>
            <th className="px-4 py-2 text-left">Customer</th>
            <th className="px-4 py-2 text-left">Amount ($)</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((inv) => (
            <tr key={inv.id} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2">{inv.id}</td>
              <td className="px-4 py-2">{inv.customer}</td>
              <td className="px-4 py-2">{inv.amount}</td>
              <td className="px-4 py-2">
                <span
                  className={`px-2 py-1 rounded text-sm ${
                    inv.status === "Paid"
                      ? "bg-green-100 text-green-700"
                      : inv.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {inv.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
