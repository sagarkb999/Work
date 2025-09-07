// app/dashboard/customers/layout.tsx
import React from "react";

export default function CustomersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Customers Section</h2>
      {children}
    </div>
  );
}
