import mongoose from "mongoose";

import connectDB from '@/config/db';

const projectSchema = new mongoose.Schema({
    name: { type: String },
    description: { type: String },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { collection: "project" });

export const Project = mongoose.models.project || mongoose.model("project", projectSchema);


export async function createProject(name, description, id) {
    await connectDB();
    const project = new Project({
        name,
        description,
        userId:id,
    });
    return project;
}

export async function findProject(id) {
    await connectDB();
    const project = await Project.find({ userId:id });
    return project; 
}