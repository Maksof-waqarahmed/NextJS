'use client' // hooks use kr rhy h jbi client lagaya
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const navigate = (name) => {
    router.push(name)
  }
  return (
    <main>
      <h1>Linking & Navigation</h1>
      <Link href='/login'>Go to Login Page</Link> 
      <br/>
      <br/>
      <Link href='/about'>Go to About Page</Link>
      <br/>
      <br/>
      {/* <button onClick={() => router.push('/login')}>Go to Login Page</button> */}
      <button onClick={() => navigate('/login')}>Go to Login Page</button>
      <br/>
      <br/>
      {/* <button onClick={() => router.push('/about')}>Go to About Page</button> */}
      <button onClick={() => navigate('/about')}>Go to About Page</button>
    </main>
  );
}

//Common Layout: Jo chz har screen me aye like header, footer, sidebar usko khety h common layout.

// layout.js: ye file apny children ko common area degi 

//kese be chz k choty choty parts ko hum segment kehty h: jb hame pta nh hota k URL me kitny segment aye gy us wqt ye use kty h 