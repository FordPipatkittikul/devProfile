import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name: { type: String },
    description: { type: String },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { collection: "project" });

export const Project = mongoose.models.project || mongoose.model("project", projectSchema);

