import { NextResponse } from "next/server";


import { findUserInfo } from "@/models/UserInfo";

export async function GET(request) {
    const id = request.nextUrl.pathname.split("/").pop();
    try{
        const userInfo = await findUserInfo(id);
        if (!userInfo) {
            return NextResponse.json({ success: false, message: "userInfo not found" }, { status: 404 });
        }
        return NextResponse.json({ success: true, userInfo }, { status: 200 });
    }catch(error){
        console.log("Error in GET:", error);
        return NextResponse.json({success: false, message: "Something went wrong!"});
    }
}