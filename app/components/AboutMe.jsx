"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";

const AboutMe = () => {
    const { currentUser, updateUser, currentUserInfo } = useAppContext();
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        firstName: currentUser?.firstName || "",
        lastName: currentUser?.lastName || "",
        email: currentUser?.email || "",
        phoneNumber: currentUserInfo?.phoneNumber || "",
        location: currentUserInfo?.location || "",
        yearsOfExperience: currentUserInfo?.yearsOfExperience || "",
        about: currentUserInfo?.about || ""
    });

    const clearFormData = () => {
        setFormData({
            firstName: currentUser?.firstName || "",
            lastName: currentUser?.lastName || "",
            email: currentUser?.email || "",
            phoneNumber: currentUserInfo?.phoneNumber || "",
            location: currentUserInfo?.location || "",
            yearsOfExperience: currentUserInfo?.yearsOfExperience || "",
            about: currentUserInfo?.about || ""
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
        if (currentUser && currentUserInfo) {
            clearFormData();
        }
    }, [currentUser,currentUserInfo]);

    return (
        <div className="mt-16 relative">
            <div className="container">
                <h1 className="text-3xl font-bold">Personal Detail</h1>
                <div className="mt-6">
                    <div className="grid grid-cols-2 gap-4">

                        <div>
                            <p className="text-gray-500 text-xl">First name</p>
                            <p className="font-medium">{currentUser?.firstName || ""}</p>
                        </div>
                        <div>
                            <p className="text-gray-500 text-xl">Last name</p>
                            <p className="font-medium">{currentUser?.lastName || ""}</p>
                        </div>
                        <div>
                            <p className="text-gray-500 text-xl">Email</p>
                            <p className="font-medium">{currentUser?.email || ""}</p>
                        </div>
                        <div>
                            <p className="text-gray-500 text-xl">Phone number</p>
                            <p className="font-medium">{currentUserInfo?.phoneNumber || ""}</p>
                        </div>
                        <div>
                            <p className="text-gray-500 text-xl">Location</p>
                            <p className="font-medium">{currentUserInfo?.location || ""}</p>
                        </div>
                        <div>
                            <p className="text-gray-500 text-xl">Years of experience</p>
                            <p className="font-medium">{currentUserInfo?.yearsOfExperience || ""}</p>
                        </div>

                        {currentUserInfo?.about && (
                            <div>
                                <p className="text-gray-500 text-xl">About Me</p>
                                <p className="font-medium">{currentUserInfo.about}</p>
                            </div>
                        )}
                    </div>
                    
                </div>

                <button 
                    onClick={toggleMenu} 
                    className="btn btn-outline mt-6"
                >
                    Edit
                </button>

            </div>

            {/* Overlay */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black/40 bg-opacity-30 z-10"
                    // onClick={closeMenu}
                ></div>
            )}

            {/* Edit Form Sidebar */}
            <div 
                className={`fixed right-0 top-0 w-[5in] h-screen bg-white shadow-lg transition-all duration-300 z-20 overflow-y-auto ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-3xl font-bold">Edit Personal Details</h2>
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
                        <div className="grid grid-cols-2 gap-4">

                            <div>
                                <label className="block text-xl font-medium mb-1">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                                />
                            </div>
                            <div>
                                <label className="block text-xl font-medium mb-1">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                                />
                            </div>
                            <div>
                                <label className="block text-xl font-medium mb-1">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                                />
                            </div>
                            <div>
                                <label className="block text-xl font-medium mb-1">
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                                />
                            </div>
                            <div>
                                <label className="block text-xl font-medium mb-1">
                                    Location
                                </label>
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                                />
                            </div>
                            <div>
                                <label className="block text-xl font-medium mb-1">
                                    Years of experience
                                </label>
                                <input
                                    type="number"
                                    name="yearsOfExperience"
                                    value={formData.yearsOfExperience}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                                />
                            </div>

                        </div>

                        <div>
                            <label className="block text-xl font-medium mb-1">
                                About Me
                            </label>
                            <textarea
                                type="text"
                                name="about"
                                value={formData.about}
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
    );
}

export default AboutMe;