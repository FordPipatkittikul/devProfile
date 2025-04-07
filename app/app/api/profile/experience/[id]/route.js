import { NextResponse } from "next/server";

import { createProfessionalExperience } from "@/models/ProfessionalExperience";

export async function POST(request) {
    const id = request.nextUrl.pathname.split("/").pop();
    const { company, role, period, description } = await request.json();
    
    try{
        const newProfessionalExperience = await createProfessionalExperience(
            company, 
            role, 
            period, 
            description,
            id
        );
        await newProfessionalExperience.save();
        return NextResponse.json({ success: true, newProfessionalExperience }, { status: 201 });
    }catch(error){
        console.log("Error in POST:", error);
        return NextResponse.json({success: false, message: "Something went wrong!"});
    }

}