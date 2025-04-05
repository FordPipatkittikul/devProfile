import mongoose from "mongoose";

const professionalExperienceSchema = new mongoose.Schema({
    company: { type: String },
    role: { type: String },
    period: { type: String },
    description: { type: String },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { collection: "professionalExperience" });

export const ProfessionalExperience = mongoose.models.professionalExperience || mongoose.model("professionalExperience", professionalExperienceSchema);
