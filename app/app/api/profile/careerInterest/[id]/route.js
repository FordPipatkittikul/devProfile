import { NextResponse } from "next/server";

import connectDB from '@/config/db';
import { UserInfo, deleteCareerInterest } from "@/models/UserInfo";

export async function POST(request) {
    const id = request.nextUrl.pathname.split("/").pop();
    const { careerInterest } = await request.json();
    try{
        await connectDB();
        const newCareerInterest = await UserInfo.findOneAndUpdate(
            { userId:id },
            {
                $addToSet: { careerInterest: { $each: [careerInterest] } }
            },
            { new: true, runValidators: true }
        );
        if (!newCareerInterest) {
            return NextResponse.json({ success: false, message: "Invalid Credential" }, { status: 401 });
        }
        return NextResponse.json({ success: true, newCareerInterest }, { status: 200 });
    }catch(error){
        console.log("Error in POST:", error);
        return NextResponse.json({success: false, message: "Something went wrong!"});
    }

}

export async function DELETE(request) {
    const id = request.nextUrl.pathname.split("/").pop();
    const { searchParams } = new URL(request.url);
    const careerInterest = searchParams.get("careerInterest");
    
    try{
        const remainingUserInfo = await deleteCareerInterest(careerInterest,id);
        return NextResponse.json({ success: true, remainingUserInfo }, { status: 200 });
    }catch(error){
        console.log("Error in DELETE:", error);
        return NextResponse.json({success: false, message: "Something went wrong!"});
    }

}