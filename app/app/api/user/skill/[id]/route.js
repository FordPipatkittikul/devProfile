import { NextResponse } from "next/server";

import { findUserSkill } from "@/models/Skill";

export async function GET(request) {
    const id = request.nextUrl.pathname.split("/").pop();
    try{
        const userSkill = await findUserSkill(id);
        if (!userSkill) {
            return NextResponse.json({ success: false, message: "userSkill not found" }, { status: 404 });
        }
        return NextResponse.json({ success: true, userSkill }, { status: 200 });
    }catch(error){
        console.log("Error in GET:", error);
        return NextResponse.json({success: false, message: "Something went wrong!"});
    }
}