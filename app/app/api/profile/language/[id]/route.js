import { NextResponse } from "next/server";

import connectDB from '@/config/db';
import { UserInfo, deletelanguage } from "@/models/UserInfo";

export async function POST(request) {
    const id = request.nextUrl.pathname.split("/").pop();
    const { languages } = await request.json();
    try{
        await connectDB();
        const newLanguage = await UserInfo.findOneAndUpdate(
            { userId:id },
            {
                $addToSet: { languages: { $each: [languages] } }
            },
            { new: true, runValidators: true }
        );
        if (!newLanguage) {
            return NextResponse.json({ success: false, message: "Invalid Credential" }, { status: 401 });
        }
        return NextResponse.json({ success: true, newLanguage }, { status: 201 });
    }catch(error){
        console.log("Error in POST:", error);
        return NextResponse.json({success: false, message: "Something went wrong!"});
    }

}

export async function DELETE(request) {
    const id = request.nextUrl.pathname.split("/").pop();
    const { searchParams } = new URL(request.url);
    const language = searchParams.get("language");
    
    try{
        const remainingUserInfo = await deletelanguage(language,id);
        return NextResponse.json({ success: true, remainingUserInfo }, { status: 200 });
    }catch(error){
        console.log("Error in DELETE:", error);
        return NextResponse.json({success: false, message: "Something went wrong!"});
    }

}