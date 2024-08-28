import Link from "next/link"
export default function About({children}){
    return(
        <div>
            <h1>Common Layout for About Screen</h1>
            <ul>
                <li><Link href='/about'>About Main</Link></li>
                <li><Link href='/about/aboutstudent'>Student About</Link></li>
                <li><Link href='/about/aboutcollege'>College About</Link></li>
            </ul>
            {children}
        </div>
    )
}