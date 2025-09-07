import Link from 'next/link';
import {Button} from '@/components/ui/button';

export function Navbar(){
    return(
        <nav className="py-5 flex items-center justify-between">
            <div className= "flex items-center gap-x-6">
                <Link href="/">
                    <h1 className="text-3xl font-semibold">Blog 
                        <span className="text-blue-500">Sagar</span>
                    </h1>
                </Link>

                <div className="hidden sm:flex items-center gap-6">
                    <Link className="navStyle" href="/dashboard">Dashboard</Link>
                </div>

                <div className="hidden sm:flex items-center gap-6">
                    <Link className="navStyle" href="/dashboard/customers">Customer Page</Link>
                </div>

                <div className="hidden sm:flex items-center gap-6">
                    <Link className="navStyle" href="/dashboard/invoices">Invoices Page</Link>
                </div>
            </div>
            <div className="flex items-center gap-4" >
            <Button>Login</Button>
            <Button variant="secondary">Sign Up</Button>
            </div>

        </nav>
    )
}