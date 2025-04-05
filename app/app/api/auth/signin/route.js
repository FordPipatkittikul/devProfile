import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import { generateToken, userExist } from "@/models/Auth";

export async function POST(request) {
    const {email, password} = await request.json();

    try{
        const user = await userExist(email);
        if(!user){
            return NextResponse.json({ success: false, message: "Invalid Credential" }, { status: 401 });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            return NextResponse.json({ success: false, message: "Invalid Credential" }, { status: 401 });
        }

        const {password:userPassword, ...userInfo} = user._doc;
        const week = 1000 * 60 * 60 * 24 * 7;
        const token = generateToken(user, week);
        
        const response = NextResponse.json({ success: true, userInfo, message: "login successfully" }, { status: 200 });
        response.cookies.set("token", token, { 
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
            path: "/", 
            maxAge: week 
        });
        
        return response;
    }catch (error) {
        console.log("Error in signin route:", error);
        return NextResponse.json({ success: false, message: "fail to signin" }, { status: 500 });
    }
}