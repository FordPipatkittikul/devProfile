import { NextResponse } from "next/server";

import { createProject, deleteProjectById, updateProjectById } from "@/models/Project";

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

export async function DELETE(request) {
    const id = request.nextUrl.pathname.split("/").pop();
    try{
        const deletedProject = await deleteProjectById(id)
        return NextResponse.json({ success: true }, { status: 200 });
    }catch(error){
        return NextResponse.json({success: false, message: "Something went wrong!"});
    }
}

export async function PUT(request) {
    const id = request.nextUrl.pathname.split("/").pop();
    const { name, description } = await request.json();
  
    try {
      const updatedProject = await updateProjectById(
        id,
        name, 
        description, 
      );
      return NextResponse.json({ success: true, updatedProject }, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ success: false, message: "Something went wrong!" }, { status: 500 });
    }
}