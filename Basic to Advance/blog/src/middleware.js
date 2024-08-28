import { NextResponse } from "next/server";

export function middleware(request) {
    // if(request.nextUrl.pathname!="/login")
    return NextResponse.redirect(new URL('/login', request.url));
}

export const config = {
    // matcher: "/about/:path*" // is sy child be exces nh hongy
    // matcher: ["/about/:path*", "/studentlist/:path*" ]
    matcher: ["/about", "/studentlist/:path*" ]  
    // matcher: "/about" 
} 
//routing request ka res bhjny sy phely execute hota h 