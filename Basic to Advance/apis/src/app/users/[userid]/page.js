async function fetchUsers(id) {
    const data = await fetch(`http://localhost:3000/api/users/${id}`).then((res) => res.json());
    return data
}
export default async function GetAllUsers({ params }) {
    const data = await fetchUsers(params.userid)
    console.log("data" , data)
    return (
        <div>
            <h1>User Detail</h1>
            {
            <div key={data.id}>
                <h3>{data.name}</h3>
                <p>{data.age}</p>
                <p>{data.city}</p>
                <p>{data.des}</p>
            </div>
            }
        </div>
    )
}