import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import { createUser, userExist } from "@/models/Auth";


export async function POST(request) {

    const { firstName, lastName, email, password } = await request.json();
    // console.log("Request body:", { firstname, lastname, email, password });
    try{
        const user = await userExist(email);
        if(user){
            return NextResponse.json({ success: false, message: "email already being used" }, { status: 409 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await createUser(firstName, lastName, email, hashedPassword);
        await newUser.save();

        return NextResponse.json({ success: true, message: "Signup successfully" }, { status: 201 });
    }catch (error) {
        console.log("Error in signup route:", error);
        return NextResponse.json({ success: false, message: "fail to signup" }, { status: 500 });
    }
}