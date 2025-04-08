import { NextResponse } from "next/server";
import mongoose from "mongoose";

import { User } from "@/models/User";

export async function GET(request) {
    const id = request.nextUrl.pathname.split("/").pop();
    try{
        const objectId = new mongoose.Types.ObjectId(id);
        const developer = await User.aggregate([
            {
                $match: { _id: objectId }
            },
            {
              $lookup: {
                from: "userInfo",
                localField: "_id",
                foreignField: "userId",
                as: "userInfo"
              }
            },
            {
              $lookup: {
                from: "education",
                localField: "_id",
                foreignField: "userId",
                as: "education"
              }
            },
            {
                $lookup: {
                  from: "skill",
                  localField: "_id",
                  foreignField: "userId",
                  as: "skill"
                }
            },
            {
                $lookup: {
                  from: "professionalExperience",
                  localField: "_id",
                  foreignField: "userId",
                  as: "professionalExperience"
                }
            },
            {
                $lookup: {
                  from: "project",
                  localField: "_id",
                  foreignField: "userId",
                  as: "project"
                }
            },
            {
                $unwind: {
                  path: "$userInfo",
                  preserveNullAndEmptyArrays: true
                }
            },
            {
                $unwind: {
                  path: "$skill",
                  preserveNullAndEmptyArrays: true
                }
            },
        ]);
        const {password:userPass, ...devWithoutPass} = developer[0]
        if (!devWithoutPass) {
            return NextResponse.json({ success: false, message: "developer not found" }, { status: 404 });
        }
        return NextResponse.json({ success: true, devWithoutPass }, { status: 200 });
    }catch(error){
        console.log("Error in GET:", error);
        return NextResponse.json({success: false, message: "Something went wrong!"});
    }
}