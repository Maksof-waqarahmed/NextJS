import Link from "next/link";
export default function StudentList(){
    const stdName = ["Waqar", "Ahad", "Hamza", "Hassan", "Arslan"];
    return(
        <div>
            <h1>Students List</h1>
            <ul>
                {/* <Link href='/studentlist/1'> <li>Waqar</li></Link>
                <br/>
                <Link href='/studentlist/2'><li>Ahad</li></Link>
                <br/>
                <Link href='/studentlist/3'><li>Hamza</li></Link>
                <br/>
                <Link href='/studentlist/4'><li>Arslan</li></Link>
                <br/>
                <Link href='/studentlist/5'><li>Hassan</li></Link> */}
                
                {stdName.map((std) => {
                    return(
                    <>
                    <Link href={`/studentlist/${std}`}> <li>{std}</li></Link> 
                    <br/>
                    </> 
                    ) 
                })}
            </ul>
        </div>
    )
}
//dynamic k lye folder name dynamic dena chaiye 