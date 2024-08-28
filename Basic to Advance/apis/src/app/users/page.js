async function fetchUsers(){
    const data = await fetch('http://localhost:3000/api/users').then((res) => res.json());
    return data
}
import Link from "next/link";
export default async function GetAllUsers(){
    const data = await fetchUsers()
    // console.log("data" , data)
    return (
        <div>
            <h1>Users List</h1>
            {data && data.map((user) => {
                const {id, name, age, city, des} = user
                return(
                    <div key={id}>
                        <Link href={`/users/${id}`}><h3>{name}</h3></Link>
                        <p>{age}</p>
                        <p>{city}</p>
                        <p>{des}</p>
                    </div>
                ) 
            })}
        </div>
    )
}