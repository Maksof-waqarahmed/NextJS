'use client'
export default function Price({price}){
    console.log(price);
    return(
        <div>
            <button onClick={() => alert(price)}>Check price</button>
        </div>
    )

}