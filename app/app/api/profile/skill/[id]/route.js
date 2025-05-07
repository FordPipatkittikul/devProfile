import { NextResponse } from "next/server";


import { findUserSkill,createandSaveSkill,addskill, deleteskill } from "@/models/Skill";


export async function POST(request) {
    const id = request.nextUrl.pathname.split("/").pop();
    const { skills } = await request.json();
    
    try{
        const userSkillExist = await findUserSkill(id);
        if(!userSkillExist){
            await createandSaveSkill(id);
        }

        const newSkill = await addskill(skills,id)
        if (!newSkill) {
            return NextResponse.json({ success: false, message: "Invalid Credential" }, { status: 401 });
        }
        return NextResponse.json({ success: true, newSkill }, { status: 201 });
    }catch(error){
        console.log("Error in POST:", error);
        return NextResponse.json({success: false, message: "Something went wrong!"});
    }

}

export async function DELETE(request) {
    const id = request.nextUrl.pathname.split("/").pop();
    const { searchParams } = new URL(request.url);
    const skill = searchParams.get("skill");
    
    try{
        const remainingSkill = await deleteskill(skill,id);
        return NextResponse.json({ success: true, remainingSkill }, { status: 200 });
    }catch(error){
        console.log("Error in POST:", error);
        return NextResponse.json({success: false, message: "Something went wrong!"});
    }

}