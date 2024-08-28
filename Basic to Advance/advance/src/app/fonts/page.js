import { Roboto } from "next/font/google";
const roboto = Roboto({
    weight: '100',
    subsets: ['latin'],
    display: 'swap'
});
export default function Fonts() {
    return (
      <div>
        <h1 >Font Optimization in Next</h1>
        {/* <h1 style={{fontFamily: 'Roboto', fontWeight: 100}}>Font with link tag</h1> */}
        <h1 className={roboto.className}>Font with eith next font feature link tag</h1>
      </div>
    );
  }
  
  