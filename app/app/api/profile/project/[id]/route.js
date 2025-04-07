import { NextResponse } from "next/server";

import { createProject } from "@/models/Project";

export async function POST(request) {
    const id = request.nextUrl.pathname.split("/").pop();
    const { name, description } = await request.json();
    
    try{
        const newProject = await createProject(
            name, 
            description, 
            id
        );
        await newProject.save();
        return NextResponse.json({ success: true, newProject }, { status: 201 });
    }catch(error){
        console.log("Error in POST:", error);
        return NextResponse.json({success: false, message: "Something went wrong!"});
    }
}