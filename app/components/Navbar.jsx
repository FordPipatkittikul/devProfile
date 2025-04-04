"use client";

import React from "react";
import Link from "next/link";

const Navbar = () => {

    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
            
            <Link href="/" className="cursor-pointer w-28 md:w-32 ">
                <span className="text-[var(--primary)] text-2xl font-bold">DevProfile</span>
            </Link>
            
            <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
                <Link href="/" className="hover:text-gray-900 transition">
                    Home
                </Link>
                <Link href="/developers" className="hover:text-gray-900 transition">
                    Developers
                </Link>
            </div>

            <div className="flex items-end gap-4 lg:gap-8 max-md:hidden">
                <Link href="/signin" className="btn btn-outline">
                    Sign In
                </Link>

                <Link href="/signup" className="btn">
                    Sign Up
                </Link>
            </div>

        </nav>
    );

}

export default Navbar;