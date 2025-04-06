"use client"

import { useState, useEffect } from "react";
import Link from "next/link";

import { useAppContext } from "@/context/AppContext";

const ProfessionalExperience = () => {
    const { currentUser } = useAppContext();
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        company: currentUser?.company || "",
        role: currentUser?.role || "",
        period: currentUser?.period || "",
        description: currentUser?.description || "",
    });

    const clearFormData = () => {
        setFormData({
            company: currentUser?.company || "",
            role: currentUser?.role || "",
            period: currentUser?.period || "",
            description: currentUser?.description || "",
        });
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
  
    const closeMenu = () => {
        setIsOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        // e.preventDefault();
        // // Assuming you have an updateUser function in your context
        // if (typeof updateUser === 'function') {
        //     updateUser(formData);
        // }
        closeMenu();
    };

    useEffect(() => {
        if (currentUser) {
            clearFormData();
        }
    }, [currentUser]);
    
    return (
        <div className="mt-16">
            <div className="container">
                <h1 className="text-3xl font-bold">Professional experience</h1>
                <button onClick={toggleMenu} className="btn btn-outline mt-6">Add experience</button>

                {/* Overlay */}
                {isOpen && (
                    <div 
                        className="fixed inset-0 bg-black/40 bg-opacity-30 z-10"
                        // onClick={closeMenu}
                    ></div>
                )}

                <div className={`fixed right-0 top-0 w-[5in] h-screen bg-white shadow-lg transition-all duration-300 z-20 overflow-y-auto ${
                            isOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-3xl font-bold">Add experience</h2>
                            <button 
                                onClick={closeMenu}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 gap-4">

                                <div>
                                    <label className="block text-xl font-medium mb-1">
                                        Job title
                                    </label>
                                    <input
                                        type="text"
                                        name="role"
                                        value={formData.role}
                                        onChange={handleChange}
                                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xl font-medium mb-1">
                                        Company name
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xl font-medium mb-1">
                                        Period
                                    </label>
                                    <p className="text-gray-500 text-sm mb-2">Example: Aug 2021 - Jun 2022</p>
                                    <input
                                        type="text"
                                        name="period"
                                        value={formData.period}
                                        onChange={handleChange}
                                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                                    />
                                </div>

                            </div>
                            <div>
                                <label className="block text-xl font-medium mb-1">
                                    Description
                                </label>
                                <textarea
                                    type="text"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                                ></textarea>
                            </div>

                            <div className="flex justify-start space-x-3 pt-4">
                                <button
                                    type="button"
                                    onClick={ () => {
                                        closeMenu()
                                        clearFormData()
                                        }
                                    }
                                    className="cursor-pointer btn btn-outline"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    onClick={ () => {
                                        closeMenu()
                                        }
                                    }
                                    className="cursor-pointer btn"
                                >
                                    Save Changes
                                </button>
                            </div>

                        </form>
                    </div>
                </div>                                
            </div>
        </div>
    );

}

export default ProfessionalExperience;