"use client"

import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

import ProfessionalExperienceFormDrawer from "../drawer/ProfessionalExperienceFormDrawer";
import { useAppContext } from "@/context/AppContext";

const ProfessionalExperience = () => {
    const { currentExperience, currentUser, updateExperience, router  } = useAppContext();
    const [isEdit, setIsEdit] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading,setIsLoading] = useState(false);

    const handleChangeUrl = (id) => {
        const newPath = `/profile/experience/${id}`; // Define the new URL path
        router.push(newPath);
    };

    const toggleEditMenu = () => {
        setIsOpen(!isOpen);
        setIsEdit(!isOpen);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
  
    const closeMenu = () => {
        setIsEdit(false);
        setIsOpen(false);
    };

    const addExperience = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const experience = new FormData(e.target)
        const role = experience.get("role")
        const company = experience.get("company")
        const period = experience.get("period")
        const description = experience.get("description")

        try{
            const res = await axios.post(`/api/profile/experience/${currentUser._id}`,{
                company,
                role,
                period,
                description,
            })
            if(res.data.success){
                updateExperience(res.data.newProfessionalExperience)
                toast.success("Add experience successfully");
            }else {
                toast.error("cannot add experience")
            }
        }catch(error){
            console.log("Error in adding experience:", error);
        }finally{
            setIsLoading(false);
        }
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
                                    <button 
                                        className="p-2 text-blue-500 hover:text-blue-700 cursor-pointer"
                                        onClick={() => {
                                            toggleEditMenu();
                                            handleChangeUrl(exp?._id);
                                            // You can call more functions here
                                        }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
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
                                    <button 
                                        className="p-2 text-blue-500 hover:text-blue-700 cursor-pointer"
                                        onClick={() => {
                                            toggleEditMenu();
                                            handleChangeUrl(currentExperience?._id);
                                            // You can call more functions here
                                        }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : <></>
                }
                
                <button onClick={toggleMenu} className="btn btn-outline mt-6">Add experience</button>

                {/* Overlay */}
                {isOpen && (
                    <div 
                        className="fixed inset-0 bg-black/40 bg-opacity-30 z-10"
                        // onClick={closeMenu}
                    ></div>
                )}

                {/* Add Experience */}
                {/* <div className={`fixed right-0 top-0 w-[5in] h-screen bg-white shadow-lg transition-all duration-300 z-20 overflow-y-auto ${
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

                        <form onSubmit={addExperience} className="space-y-4">
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
                                    rows="4"
                                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                                ></textarea>
                            </div>

                            <div className="flex justify-start space-x-3 pt-4">
                                <button
                                    onClick={ () => {
                                        closeMenu()
                                        }
                                    }
                                    className="cursor-pointer btn btn-outline"
                                >
                                    Cancel
                                </button>
                                <button
                                    disabled={isLoading}
                                    onClick={ () => {
                                        closeMenu()
                                        }
                                    }
                                    className="cursor-pointer btn"
                                >
                                    Add
                                </button>
                            </div>

                        </form>
                    </div>
                </div> */}
                <ProfessionalExperienceFormDrawer
                    isEdit={isEdit}
                    isOpen={isOpen}
                    closeMenu={closeMenu}
                    onSubmit={addExperience}
                    isLoading={isLoading}
                    formTitle={isEdit ? "Edit experience" : "Add experience"}
                    submitButtonLabel={isEdit ? "Edit" : "Add"}
                />
                
                                                
            </div>
        </div>
    );

}

export default ProfessionalExperience;