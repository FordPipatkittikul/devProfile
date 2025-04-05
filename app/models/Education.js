import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
    institute: { type: String },
    degree: { type: String },
    gpa: { type: Number },
    relatedCourseworks: [{ type: String }],
    graduation: { type: String },
    userId: { type : mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
}, { collection: "education" });

export const Education = mongoose.models.education || mongoose.model("education", educationSchema);

