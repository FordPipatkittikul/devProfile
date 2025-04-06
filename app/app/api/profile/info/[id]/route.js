import { NextResponse } from "next/server";

import connectDB from '@/config/db';
import { User } from "@/models/User";
import { UserInfo } from "@/models/UserInfo";
import { createPersonalDetail,findUserInfo } from "@/models/UserInfo";

export async function POST(request) {
    const id = request.nextUrl.pathname.split("/").pop();
    const { firstName, lastName, email, phoneNumber, location, yearsOfExperience, about } = await request.json();
    
    try{
        await connectDB();
        const updatedUser = await User.findByIdAndUpdate(
            id,
            { firstName, lastName, email },
            { new: true, runValidators: true }
        );
        if (!updatedUser) {
            return NextResponse.json({ success: false, message: "Invalid Credential" }, { status: 401 });
        }

        const {password, ...userWithoutPassword} = updatedUser._doc

        const userInfoExist = await findUserInfo(id);
        if(!userInfoExist){
            const newPersonalDetail = await createPersonalDetail(
                phoneNumber,
                location,
                yearsOfExperience,
                about,
                id
            );
            await newPersonalDetail.save();
            return NextResponse.json({ success: true, userWithoutPassword }, { status: 201 });
        }else{
            const updatedUserInfo = await UserInfo.updateOne(
                {userId:id},
                { phoneNumber, location, yearsOfExperience, about }
            )

            return NextResponse.json({ success: true, userWithoutPassword }, { status: 200 });
        }

    }catch(error){
        console.log("Error in POST:", error);
        return NextResponse.json({success: false, message: "Something went wrong!"}, { status: 500 });
    }

}