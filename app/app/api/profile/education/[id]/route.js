import { NextResponse } from "next/server";

import { findEducationbyId, createEducation, deleteEducationById, updateEducationById } from "@/models/Education";

export async function GET(request) {
    const id = request.nextUrl.pathname.split("/").pop();
    try{
        const education = await findEducationbyId(id);
        return NextResponse.json({ success: true, education }, { status: 200 });
    }catch(error){
        console.log("Error in GET:", error);
        return NextResponse.json({success: false, message: "Something went wrong!"});
    }
}

export async function POST(request) {
    const id = request.nextUrl.pathname.split("/").pop(); // refer to userId
    const { institute, degree, gpa, relatedCourseworks, graduation } = await request.json();
    
    try{
        const newEducation = await createEducation(
            institute, 
            degree, 
            gpa, 
            relatedCourseworks, 
            graduation,
            id
        );
        await newEducation.save();
        return NextResponse.json({ success: true, newEducation }, { status: 201 });
    }catch(error){
        console.log("Error in POST:", error);
        return NextResponse.json({success: false, message: "Something went wrong!"});
    }

}

export async function DELETE(request) {
    const id = request.nextUrl.pathname.split("/").pop();
    try{
        const deletedEducation = await deleteEducationById(id)
        return NextResponse.json({ success: true }, { status: 200 });
    } catch(error){
        return NextResponse.json({success: false, message: "Something went wrong!"});
    }
}

export async function PUT(request) {
    const id = request.nextUrl.pathname.split("/").pop();
    const { institute, degree, gpa, relatedCourseworks, graduation } = await request.json();
  
    try {
      const updatedEducation = await updateEducationById(
        id,
        institute,
        degree,
        gpa,
        relatedCourseworks,
        graduation
      );
  
      return NextResponse.json({ success: true, updatedEducation }, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ success: false, message: "Something went wrong!" }, { status: 500 });
    }
}