import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
    skills: [{ type: String }],
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
}, { collection: "skill" });

export const Skill = mongoose.models.skill || mongoose.model("skill", skillSchema);

