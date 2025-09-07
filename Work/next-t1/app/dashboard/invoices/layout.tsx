import React from "react";

export default function InvoicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Invoices Section</h2>
      {children}
    </div>
  );
}
