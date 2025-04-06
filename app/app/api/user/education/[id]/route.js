import { NextResponse } from "next/server";

import { findEducation } from "@/models/Education";

export async function GET(request) {
    const id = request.nextUrl.pathname.split("/").pop();
    try{
        const userEducation = await findEducation(id);
        if (!userEducation) {
            return NextResponse.json({ success: false, message: "userEducation not found" }, { status: 404 });
        }
        return NextResponse.json({ success: true, userEducation }, { status: 200 });
    }catch(error){
        console.log("Error in GET:", error);
        return NextResponse.json({success: false, message: "Something went wrong!"});
    }
}