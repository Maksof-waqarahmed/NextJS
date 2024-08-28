import Image from "next/image";
import profile from '../../../public/vercel.svg'
export default function Images() {
  console.log(profile) // profile ke relaed chey dekhaye ga 
  return (
    <main>
     {/* <Image src={profile} width={500} height={500} />
     <img src={profile.src}/> */}

     <Image src='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' width={500} height={500}/> 
     {/* abi be nh aye ga ye bcz humny config (next config) me domian ko allow krna higa type kr k */}
    </main>
  );
}

//NextJS image Component: ye img k size ko reduce kr k UI par dekhata h 
