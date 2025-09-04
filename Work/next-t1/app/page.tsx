import Image from "next/image";
import Link from "next/link";

export default function home(){
  return (
    <div>
      <h1>Hello from Index Page(Page.tsx)</h1>
       {/*<a href="/dashboard">Dashboard</a> This causes the UX to reload on clicking dashbard which isn't ideal. We want client side navigation. We use link component for that*/}

       <Link href="/dashboard">Dashboard</Link>
       <Link href="/abc">ABC Route</Link>
       
    </div>
  )
}