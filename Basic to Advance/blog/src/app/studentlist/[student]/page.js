export default function StudenDetail({params}){
    const {student} = params
    return(
        <div>
            <h1>Students Detail</h1> 
            <h2>{`Student Id: ${student}`}</h2>
        </div>
    )
}