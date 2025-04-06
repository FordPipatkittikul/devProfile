"use client"

import { useState, useEffect } from "react";
import Link from "next/link";

import { useAppContext } from "@/context/AppContext";
import Loading from "./Loading";

const ProfessionalExperience = () => {
    const { currentExperience } = useAppContext();
    const [isOpen, setIsOpen] = useState(false);

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

    }, [currentExperience]);
    
    return (
        <div className="mt-16">
            <div className="container">
                <h1 className="text-3xl font-bold">Professional experience</h1>
                {/* currentExperience Card Display */}
                {Array.isArray(currentExperience) ? (
                    currentExperience.map((exp, index) => (
                        <div key={index} className="mt-4 bg-white rounded-lg shadow-md p-4 border border-gray-200">
                            <div className="flex justify-between items-start">
                                <div className="flex-1">
                                    <h2 className="text-3xl font-semibold">{exp?.company}</h2>
                                    <p className="text-gray-700 mt-1">{exp?.role}</p>
                                    <p className="text-gray-700 mt-1">{exp?.period}</p>
                                    <div className="mt-2">
                                        <p className="text-2xl">Description:</p>
                                        <p className="text-gray-600">{exp?.description}</p>
                                    </div>
                                </div>
                                <div className="flex space-x-2">
                                    <button className="p-2 text-blue-500 hover:text-blue-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                        </svg>
                                    </button>
                                    <button className="p-2 text-red-500 hover:text-red-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="3 6 5 6 21 6"></polyline>
                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                            <line x1="10" y1="11" x2="10" y2="17"></line>
                                            <line x1="14" y1="11" x2="14" y2="17"></line>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                    ) : currentExperience ? (
                        <div className="mt-4 bg-white rounded-lg shadow-md p-4 border border-gray-200">
                            <div className="flex justify-between items-start">
                                <div className="flex-1">
                                    <h2 className="text-3xl font-semibold">{currentExperience?.company}</h2>
                                    <p className="text-gray-700 mt-1">{currentExperience?.role}</p>
                                    <p className="text-gray-700 mt-1">{currentExperience?.period}</p>
                                    <div className="mt-2">
                                        <p className="text-2xl">Description:</p>
                                        <p className="text-gray-600">{currentExperience?.description}</p>
                                    </div>
                                </div>
                                <div className="flex space-x-2">
                                    <button className="p-2 text-blue-500 hover:text-blue-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                        </svg>
                                    </button>
                                    <button className="p-2 text-red-500 hover:text-red-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="3 6 5 6 21 6"></polyline>
                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                            <line x1="10" y1="11" x2="10" y2="17"></line>
                                            <line x1="14" y1="11" x2="14" y2="17"></line>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : <Loading/>
                }
                
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