import { NextResponse } from "next/server";

import { createProfessionalExperience, deleteProfessionalExperienceById, updateProfessionalExperienceById } from "@/models/ProfessionalExperience";

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

export async function DELETE(request) {
    const id = request.nextUrl.pathname.split("/").pop();
    try{
        const deletedProfessionalExperience = await deleteProfessionalExperienceById(id)
        return NextResponse.json({ success: true }, { status: 200 });
    }catch(error){
        return NextResponse.json({success: false, message: "Something went wrong!"});
    }
}

export async function PUT(request) {
    const id = request.nextUrl.pathname.split("/").pop();
    const { company, role, period, description } = await request.json();
  
    try {
      const updatedExperience = await updateProfessionalExperienceById(
        id,
        company, 
        role, 
        period, 
        description,
      );
      return NextResponse.json({ success: true, updatedExperience }, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ success: false, message: "Something went wrong!" }, { status: 500 });
    }
}