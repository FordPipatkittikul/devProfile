"use client";

import React from "react";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

import { useAppContext } from "@/context/AppContext";

const SignUp = () => {

    const { router } = useAppContext();
    const [isLoading,setIsLoading] = useState(false);

    const httpSignUp = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const formData = new FormData(event.target);
        const firstName = formData.get("firstName");
        const lastName = formData.get("lastName");
        const email = formData.get("email");
        const password = formData.get("password");
        try{
            const response = await axios.post("/api/auth/signup", {
                firstName,
                lastName,
                email,
                password
            })
            
            if(response.data.success){
                router.push("/signin");
                toast.success(response.data.message);
            }

        }catch (error) {
            console.log("Error in signup:", error);
            if (error.response) {
                if (error.response.status === 409 || error.response.status === 500) {
                    toast.error(error.response.data.message); // User already exists
                } 
            }
        }finally{
            setIsLoading(false);
        }
    }

    return (
        
        <div className="my-16 container">
            <div className="logon">
                <div className="logon-card">
                    <h1 className="feature-title text-3xl"> Create your account today</h1>
                    <p>Already have an account? <Link href="/signin" className="text-blue-500">Sign in</Link> </p>

                    <form onSubmit={httpSignUp}>

                        <div>
                            <label className="mt-6 flex text-sm font-medium text-gray-700">
                                First Name
                            </label>
                            <div className="mt-1">
                                <input
                                    name="firstName"
                                    type="text"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="john"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="mt-6 flex text-sm font-medium text-gray-700">
                                Last Name
                            </label>
                            <div className="mt-1">
                                <input
                                    name="lastName"
                                    type="text"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="doe"
                                />
                            </div>
                        </div>

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
                                Sign up 
                            </button>
                        </div>
                    </form>


                </div>
            </div>

            
        </div>
        
    );

}

export default SignUp;