"use client";

import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";

import { useAppContext } from "@/context/AppContext";

const Navbar = () => {
    const { currentUser, router, updateUser } = useAppContext();
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading,setIsLoading] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
  
    const closeMenu = () => {
        setIsOpen(false);
    };

    const httpLogout = async (event) => {
        setIsLoading(true);
        try{
            const response = await axios.post("/api/auth/signout");
            if(response.data.success){
                updateUser(null);
                router.push("/");
                toast.success(response.data.message);
            }
        } catch(error){
            console.log("Error in signout:", error);
        } finally{
            setIsLoading(false)
        }
      }

    return (
        <div className="relative">
            {/* Main Navbar */}
            <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700 bg-white relative z-20">
                <Link href="/" className="cursor-pointer w-28 md:w-32">
                    <span className="text-[var(--primary)] text-2xl font-bold">DevProfile</span>
                </Link>
                
                {/* Desktop Navigation - Hidden on mobile */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8">
                    <Link href="/" className="hover:text-gray-900 transition">
                        Home
                    </Link>
                    <Link href="/developers" className="hover:text-gray-900 transition">
                        Developers
                    </Link>
                    <Link href="/" className="hover:text-gray-900 transition">
                        My Profile
                    </Link>
                </div>

                {/* Desktop Authentication Controls - Hidden on mobile */}
                {!currentUser && (
                    <div className="hidden md:flex items-end gap-4 lg:gap-8">
                        <Link href="/signin" className="btn btn-outline">
                            Sign In
                        </Link>
        
                        <Link href="/signup" className="btn">
                            Sign Up
                        </Link>
                    </div>
                )}

                {/* Hamburger Menu Button - Visible on all screens */}
                <div className="md:hidden">
                    <button 
                        className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none" 
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-gray-700 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>

                {/* User Avatar/Menu - Visible on desktop */}
                {currentUser && (
                    <div className="hidden md:flex items-end">
                        <Link onClick={httpLogout} href="/" className="btn btn-outline">
                            Sign Out
                        </Link>
                    </div>
                )}
            </nav>

            {/* Mobile Menu Below Navbar */}
            <div 
                className={`absolute w-full bg-white shadow-lg transition-all duration-300 z-10 md:hidden ${
                    isOpen ? 'max-h-96 py-4' : 'max-h-0 py-0 overflow-hidden'
                }`}
            >
                <div className="px-6">
                    <ul className="space-y-3">
                        <li>
                            <Link 
                                href="/" 
                                className="block py-2 text-lg font-medium hover:text-[var(--primary)]"
                                onClick={closeMenu}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/developers" 
                                className="block py-2 text-lg font-medium hover:text-[var(--primary)]"
                                onClick={closeMenu}
                            >
                                Developers
                            </Link>
                        </li>
                        {currentUser ? (
                            <>
                                <li>
                                    <Link 
                                        href="/" 
                                        className="block py-2 text-lg font-medium hover:text-[var(--primary)]"
                                        onClick={closeMenu}
                                    >
                                        My Profile
                                    </Link>
                                </li>
                                <li className="pt-4 border-t border-gray-200">
                                    <button 
                                        className="w-full text-left py-2 text-lg font-medium text-red-600 hover:text-red-800"
                                        onClick={() => {
                                            closeMenu();   
                                            httpLogout();  
                                        }}
                                    >
                                        Sign Out
                                    </button>
                                </li>
                            </>
                        ) : (
                            <li className="pt-4 border-t border-gray-200">
                                <div className="flex flex-col space-y-3 py-2">
                                    <Link 
                                        href="/signin" 
                                        className="btn btn-outline w-full text-center"
                                        onClick={closeMenu}
                                    >
                                        Sign In
                                    </Link>
                                    <Link 
                                        href="/signup" 
                                        className="btn w-full text-center"
                                        onClick={closeMenu}
                                    >
                                        Sign Up
                                    </Link>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Navbar;