'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import './login.css'
export default function Login({ children }) { // obj type ka parameter lega. name kuch be likh skty hen
    const pathname = usePathname(); // agr multiple pages par condition lagani hoto hum array bana lengy or us k upper loop chala kr kam kry gy asa 
    return (
        <div>
            <ul className="login-menu">
                {pathname !== "/login/loginteacher" ? (
                    <>
                        <li><h4>Navbar</h4></li>
                        <li><Link href='/login'>Login Main</Link></li>
                        <li><Link href='/login/loginstudent'>Student Login</Link></li>
                        <li><Link href='/login/loginteacher'>Teacher Login</Link></li>
                    </>

                ) : (
                    <>
                        <li><h4>Navbar</h4></li>
                        <li><Link href='/login'>Login Main</Link></li>
                        <li><Link href='/login/loginstudent'>Student Login</Link></li>
                    </>
                )}
            </ul>
            {children}

        </div>
    );
}