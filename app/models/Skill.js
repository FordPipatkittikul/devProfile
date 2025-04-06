import mongoose from "mongoose";

import connectDB from '@/config/db';

const skillSchema = new mongoose.Schema({
    skills: [{ type: String }],
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
}, { collection: "skill" });

export const Skill = mongoose.models.skill || mongoose.model("skill", skillSchema);


export async function checkUserSkill(id) {
    await connectDB();
    const userSkill = await Skill.findOne({ userId:id });
    return userSkill; 
}

export async function createandSaveSkill(id) {
    await connectDB();
    const skill = new Skill({
        skills:[],
        userId:id
    });
    await skill.save();
}

export async function addskill(skills,id) {
    await connectDB();
    const newSkill = await Skill.findOneAndUpdate(
        { userId:id },
        {
            $addToSet: { skills: { $each: [skills] } }
        },
        { new: true, runValidators: true }
    );
    return newSkill;
}

