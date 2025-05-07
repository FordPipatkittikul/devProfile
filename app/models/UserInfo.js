import mongoose from "mongoose";

import connectDB from '@/config/db';

const userInfoSchema = new mongoose.Schema({
    phoneNumber: { type: String },
    careerInterest: [{ type: String }],
    location: { type: String },
    yearsOfExperience: { type: Number },
    about: { type: String },
    languages: [{ type: String }],
    userId: { type : mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
}, { collection: "userInfo" });

export const UserInfo = mongoose.models.userInfo || mongoose.model('userInfo', userInfoSchema);

export async function createPersonalDetail(phoneNumber, location, yearsOfExperience, about, id) {
    await connectDB();
    const userInfo = new UserInfo({
        phoneNumber,
        careerInterest: [],
        location,
        yearsOfExperience,
        about,
        languages: [],
        userId:id,
    });
    return userInfo;
}

export async function findUserInfo(id) {
    await connectDB();
    const userInfo = await UserInfo.findOne({ userId:id });
    return userInfo; 
}

export async function deletelanguage(language,id) {
    await connectDB();
    await UserInfo.updateOne(
        { userId:id },
        { $pull: { languages: language } }
    );
    const languages = await UserInfo.findOne({ userId:id });
    return languages;
}

export async function deleteCareerInterest(careerInterest,id) {
    await connectDB();
    await UserInfo.updateOne(
        { userId:id },
        { $pull: { careerInterest: careerInterest } }
    );
    const careerInterests = await UserInfo.findOne({ userId:id });
    return careerInterests;
}
