'use client'
import { useState, useEffect } from "react";
export default function AddUser() {
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [userCity, setUserCity] = useState('');
    const [userDes, setUserDes] = useState('');

    const adduser = async () => {
        let res = await fetch('http://localhost:3000/api/users' ,{
            method: "Post",
            body: JSON.stringify({userName, userAge, userCity, userDes })
        });
        const data = await res.json();
        console.log(data);
    }
    return (
      <div>
        <h1>Add Users</h1>
        <input type="text" placeholder="Enter Your Name" onChange={(e) => setUserName(e.target.value)} />
        <br/>
        <br/>
        <input type="text" placeholder="Enter Your Age" onChange={(e) => setUserAge(e.target.value)} />
        <br/>
        <br/>
        <input type="text" placeholder="Enter Your City" onChange={(e) => setUserCity(e.target.value)} />
        <br/>
        <br/>
        <input type="text" placeholder="Enter Your Designation" onChange={(e) => setUserDes(e.target.value)} />
        <br/>
        <br/>
        <button onClick={adduser}>Add User</button>
      </div>
    );
  }
  