import { NextResponse } from "next/server";

import { User } from "@/models/User";

export async function GET() {
    
    try{
        const developers = await User.aggregate([
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
        // Remove password from each developer
        const devsWithoutPass = developers.map(({ password, ...rest }) => rest);
        if (!devsWithoutPass) {
            return NextResponse.json({ success: false, message: "developers not found" }, { status: 404 });
        }
        return NextResponse.json({ success: true, devsWithoutPass }, { status: 200 });
    }catch(error){
        console.log("Error in GET:", error);
        return NextResponse.json({success: false, message: "Something went wrong!"});
    }
}