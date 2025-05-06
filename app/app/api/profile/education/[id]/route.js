import { NextResponse } from "next/server";

import { createEducation } from "@/models/Education";

export async function POST(request) {
    const id = request.nextUrl.pathname.split("/").pop();
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
    
}