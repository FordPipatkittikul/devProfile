import { NextResponse } from 'next/server';

export async function POST() {
    try{
        const response = NextResponse.json({ success: true, message: 'Logout Successfully' }, { status: 200 });
        response.cookies.set('token', '', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
            path: '/',
            maxAge: 0,
        });
        return response
    }catch (error) {
        console.log("Error in signout route:", error);
        return NextResponse.json({ success: false, message: "fail to signout" }, { status: 500 });
    }

}