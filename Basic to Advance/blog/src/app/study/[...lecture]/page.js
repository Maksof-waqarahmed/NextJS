'use client'
export default function Lecture({ params }) {
    console.log("Params", { params })
    return (
        <div>
            {/* <h1>Day of College: {params.lecture[0]}</h1> 
            <h2>Lecture No: {params.lecture[1]}</h2>  */}
            <ul>
                {params.lecture.map((segment, index) => {
                    return <li key={index}>{segment}</li>
                })}
            </ul>
        </div>
    )
}