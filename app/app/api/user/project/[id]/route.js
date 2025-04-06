import { NextResponse } from "next/server";

import { findProject } from "@/models/Project";

export async function GET(request) {
    const id = request.nextUrl.pathname.split("/").pop();
    try{
        const userProject = await findProject(id);
        if (!userProject) {
            return NextResponse.json({ success: false, message: "userProject not found" }, { status: 404 });
        }
        return NextResponse.json({ success: true, userProject }, { status: 200 });
    }catch(error){
        console.log("Error in GET:", error);
        return NextResponse.json({success: false, message: "Something went wrong!"});
    }
}