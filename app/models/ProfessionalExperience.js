import mongoose from "mongoose";

import connectDB from '@/config/db';

const professionalExperienceSchema = new mongoose.Schema({
    company: { type: String },
    role: { type: String },
    period: { type: String },
    description: { type: String },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { collection: "professionalExperience" });

export const ProfessionalExperience = mongoose.models.professionalExperience || mongoose.model("professionalExperience", professionalExperienceSchema);

export async function createProfessionalExperience(company, role, period, description, id) {
    await connectDB();
    const professionalExperience = new ProfessionalExperience({
        company,
        role,
        period,
        description,
        userId:id,
    });
    return professionalExperience;
}

export async function findProfessionalExperience(id) {
    await connectDB();
    const professionalExperience = await ProfessionalExperience.find({ userId:id });
    return professionalExperience; 
}

export async function deleteProfessionalExperienceById(id) {
    await connectDB();
    const professionalExperience = await ProfessionalExperience.findByIdAndDelete(id);
    return professionalExperience
}

export async function updateProfessionalExperienceById(id, company, role, period, description) {
    await connectDB();
    const objectId = new mongoose.Types.ObjectId(id);
    const updatedProfessionalExperience = await ProfessionalExperience.findByIdAndUpdate(
        objectId,
        {
            company, 
            role, 
            period, 
            description
        },
        { new: true, runValidators: true }
    );
    return updatedProfessionalExperience
}