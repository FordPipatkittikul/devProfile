import mongoose from "mongoose";

const userInfoSchema = new mongoose.Schema({
    careerInterest: { type: String },
    locations: [{ type: String }],
    yearsOfExperience: { type: Number },
    about: { type: String },
    languages: [{ type: String }],
    userId: { type : mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
}, { collection: "userInfo" });

export const UserInfo = mongoose.models.userInfo || mongoose.model('userInfo', userInfoSchema);

