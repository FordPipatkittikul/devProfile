"use client";

import React from "react";
import Link from "next/link";



const SignIn = () => {

    return (
        
        <div className="mt-16 container">
            <div className="logon">
                <div className="logon-card">
                    <h1 className="feature-title text-3xl">Sign in to your account</h1>
                    <p>Don't have an account? <Link href="/signup" className="text-blue-500">Sign up</Link></p>

                    <form>
                        <div>
                            <label className="mt-6 flex text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
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
                                    id="password"
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
                                type="submit"
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