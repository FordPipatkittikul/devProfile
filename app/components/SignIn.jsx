"use client";

import React from "react";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

import { useAppContext } from "@/context/AppContext";

const SignIn = () => {

    const { router,updateUser } = useAppContext();
    const [isLoading,setIsLoading] = useState(false);

    const httpSignIn = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const formData = new FormData(event.target);
        const email = formData.get("email");
        const password = formData.get("password");

        try{
            const response = await axios.post("/api/auth/signin", {
                email,
                password
            })

            if(response.data.success){
                updateUser(response.data.userInfo);
                router.push("/");
                toast.success(response.data.message);
            }

        }catch (error) {
            console.log("Error in signin:", error);
            if (error.response) {
                if (error.response.status === 401 || error.response.status === 500) {
                    toast.error(error.response.data.message); // User already exists
                } 
            }
        }finally{
            setIsLoading(false);
        }
    }

    return (
        
        <div className="mt-16 container">
            <div className="logon">
                <div className="logon-card">
                    <h1 className="feature-title text-3xl">Sign in to your account</h1>
                    <p>Don't have an account? <Link href="/signup" className="text-blue-500">Sign up</Link></p>

                    <form onSubmit={httpSignIn}>
                        <div>
                            <label className="mt-6 flex text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    name="email"
                                    type="text"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="example@email.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="mt-6 flex text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    name="password"
                                    type="text"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                disabled={isLoading}
                                className="btn mt-6"
                                >
                                Sign in 
                            </button>
                        </div>
                    </form>


                </div>
            </div>
        </div>
        
    );

}

export default SignIn;