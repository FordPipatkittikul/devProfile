import { NextResponse } from "next/server";

import connectDB from '@/config/db';
import { UserInfo } from "@/models/UserInfo";

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
        return NextResponse.json({ success: true, message: "add new career interest successfully" }, { status: 201 });
    }catch(error){
        console.log("Error in POST:", error);
        return NextResponse.json({success: false, message: "Something went wrong!"});
    }

}