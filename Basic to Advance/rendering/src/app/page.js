import Link from "next/link";
import custom from './custom.module.css'
// agr folder bana kar moduler file ka usko kesy import kry gy
// import outside from '@/foldername/filename.module.css'
export default function Home() {
  return (
    <main>
      <h1>Welcome in Ecommerce Website</h1>
      <h4>Hi Waqar</h4>
      <Link href='/productlist'>Go to Client Side Product List page</Link>
      <br />
      <br />
      <Link href='/serverproductlist'>Go to Server Side Product List page</Link>
      <h1 className={custom.col}>CSS Module</h1>

    </main>
  );
}

/*
Global CSS means Exernal CSS h idr internal CSS nh hoti h 2 trh ke hoti h inline ya Global
Moduler CSS be hoti h or style with component be hoti h.
*/
//CSS Modules: as a object css import krni hoti h. is sy CSS overwrite nh hoti. is file ko bananay k lye .module.css extension lazm h 

//Rendering: means convert code into html and show on the browser.
//2 Types of rendering environment: Server side, client Side
// we can redering on componenet-levell client and server side rendering

//Pre-rendering: Isi k ander server side renderinh ati h. (generate HTMl in advance on the server side)
//It has 2 parts: Static Generation, Sever side rendering
//Static generation: build k time he html me convert ho jati h vo uth kar ab par par 
//Sever side rendering: Dynamic html generate hota h jis wqt ap req krty ho.

//how to check its aclient side or ssr redering: go to inspect ====> network ===> select docs ===> refresh page ==> click on render page ====> then chech preview
//ctrl + u: is sy be check kr skty h agr html mela to vo ssr h otherwise vo csr

// SSR Advantage: 
//site fast hoti h.
// SEO hoti j
// Secure hoti h


//How SEO works

// Google Bot ====> URL ====> crawling(Get info from URL) ====> Indexing in search engine