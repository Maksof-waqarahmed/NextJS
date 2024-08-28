import { users } from "@/util/db"
import { NextResponse } from "next/server";

//Get All users
export function GET(){
    const data = users;
    return NextResponse.json(data, {status: 200});
}

export async function POST(req, res){
    let payload = await req.json();
    const {userName, userAge, userCity, userDes} = payload
    if(!userName || !userAge || !userCity || !userDes) return NextResponse.json({message: "Required filed not found"} , {status: 404});

    return NextResponse.json({payload, message: "New User Created"}, {status: 200});
}