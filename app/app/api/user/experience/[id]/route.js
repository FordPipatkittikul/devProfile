import { NextResponse } from "next/server";

import { findProfessionalExperience } from "@/models/ProfessionalExperience";

export async function GET(request) {
    const id = request.nextUrl.pathname.split("/").pop();
    try{
        const userProfessionalExperience = await findProfessionalExperience(id);
        if (!userProfessionalExperience) {
            return NextResponse.json({ success: false, message: "userProfessionalExperience not found" }, { status: 404 });
        }
        return NextResponse.json({ success: true, userProfessionalExperience }, { status: 200 });
    }catch(error){
        console.log("Error in GET:", error);
        return NextResponse.json({success: false, message: "Something went wrong!"});
    }
}