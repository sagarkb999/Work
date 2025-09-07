import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Welcome to my Blog</h1>

      <Image
        src="/images/sample.jpg"
        width={1060}
        height={620}
        alt="Welcome Photo"
        className="rounded-lg shadow-md"
      />

      {/* <div className="mt-6 flex gap-4">
        <Link className="navStyle" href="/dashboard/customers">Customer Page</Link>
        <Link className="navStyle" href="/dashboard/invoices">Invoices Page</Link>
      </div> */}
    </div>
  );
}
