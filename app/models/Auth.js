import jwt from 'jsonwebtoken';

import { User } from './User';
import connectDB from '@/config/db';

export function generateToken(user,millisecond) {
    const token = jwt.sign({
        id: user._id, email: user.email
    }, process.env.JWT_SECRET_KEY, { expiresIn:millisecond });
    return token
}


export async function userExist(email) {
    await connectDB();
    const user = await User.findOne({ email });
    return user; 
}

export async function createUser(firstName, lastName, email, hashedPassword) {
    await connectDB();
    const user = new User({
        firstName,
        lastName,
        email,
        password: hashedPassword
    });
    return user;
}