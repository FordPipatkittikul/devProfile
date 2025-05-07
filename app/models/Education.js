import mongoose from "mongoose";

import connectDB from '@/config/db';

const educationSchema = new mongoose.Schema({
    institute: { type: String },
    degree: { type: String },
    gpa: { type: Number },
    relatedCourseworks: { type: String },
    graduation: { type: String },
    userId: { type : mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
}, { collection: "education" });

export const Education = mongoose.models.education || mongoose.model("education", educationSchema);

export async function createEducation(institute, degree, gpa, relatedCourseworks, graduation, id) {
    await connectDB();
    const education = new Education({
        institute,
        degree,
        gpa,
        relatedCourseworks,
        graduation,
        userId:id,
    });
    return education;
}

export async function findEducation(id) {
    await connectDB();
    const education = await Education.find({ userId:id });
    return education; 
}

export async function findEducationbyId(id) {
    await connectDB();
    const education = await Education.findById(id);
    return education; 
}


export async function deleteEducationById(id) {
    await connectDB();
    const education = await Education.findByIdAndDelete(id);
    return education
}

export async function updateEducationById(id, institute, degree, gpa, relatedCourseworks, graduation) {
    await connectDB();
    const objectId = new mongoose.Types.ObjectId(id);
    const updatedEducation = await Education.findByIdAndUpdate(
        objectId,
        {
            institute,
            degree,
            gpa,
            relatedCourseworks,
            graduation,
        },
        { new: true, runValidators: true }
    );
    return updatedEducation
}