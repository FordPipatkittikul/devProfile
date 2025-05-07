import { NextResponse } from "next/server";
import { User } from "@/models/User";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "3");
    const skip = (page - 1) * limit;

    try {
        // Count total users for pagination metadata
        const total = await User.countDocuments();

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
            { $skip: skip },
            { $limit: limit }
        ]);

        const devsWithoutPass = developers.map(({ password, ...rest }) => rest);

        return NextResponse.json({
            success: true,
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit),
            data: devsWithoutPass
        }, { status: 200 });

    } catch (error) {
        console.log("Error in GET:", error);
        return NextResponse.json({ success: false, message: "Something went wrong!" }, { status: 500 });
    }
}
