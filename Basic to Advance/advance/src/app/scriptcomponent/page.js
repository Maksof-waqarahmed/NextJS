'use client'
import Script from "next/script";

export default function Home() {
    return (
        <main>
            <h1>Get User Location</h1>
            <Script src="/location.js" onLoad={() => console.log("File Loaded")} />
        </main>
    );
}

//Script Component: External librraies use krni hoti h bht dfa kabi un k npm pkg nh bane hoty phr cdn us krni hoti hya download kr k phr use krna hota h

//Differnece html script and next script: agr ap htmml wala use kro gy to vo pury project k sth us chz ko connect kr dega but script component usko specific compoent k ander load kry ga.