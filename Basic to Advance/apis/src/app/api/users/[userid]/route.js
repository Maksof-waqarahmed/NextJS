import { users } from "@/util/db";
import { NextResponse } from "next/server";

//Get user by ID
export function GET(req, { params }) {
    console.log("User Id", params)
    const userID = params.userid;
    const user = users.find((user) => user.id === Number(userID));

    if (!user) return NextResponse.json({ message: "User Not Found" }, { status: 400 });

    return NextResponse.json(user, { status: 200 });
}

//Update user by ID
export async function PUT(req, content) {
    let payload = await req.json();
    payload.id = content.params.userid;
    console.log(payload);
    if(!payload.name || !payload.age || !payload.city || !payload.des) return NextResponse.json({message: "Required filed not found"} , {status: 404});

    return NextResponse.json(payload, { status: 200 });
}