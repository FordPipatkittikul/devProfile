"use client"

import { useState,useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

import { useAppContext } from "@/context/AppContext";


const CareerInterest = () => {
    const { currentUserInfo, currentUser, updateUserInfo } = useAppContext();
    const [isLoading,setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
  
    const closeMenu = () => {
        setIsOpen(false);
    };

    const addCareerInterest = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const careerInterest = new FormData(e.target)
        const career = careerInterest.get("careerInterest")
        try{
            const res = await axios.post(`/api/profile/careerInterest/${currentUser._id}`, {
                careerInterest:career
            })
            if(res.data.success){
                updateUserInfo(res.data.newCareerInterest)
                toast.success("add new career interest successfully")
                closeMenu()
            }
            
        }catch(error){
            console.log("Error in adding CareerInterest", error);
        }finally{
            setIsLoading(false);
        }
    };

    useEffect(() => {
    }, [currentUserInfo]);
    
    return (
        <div className="mt-16">
            <div className="container">
                <h1 className="text-3xl font-bold">Career interest</h1>
                {/* Education Card Display */}
                {Array.isArray(currentUserInfo?.careerInterest) ? (
                    currentUserInfo?.careerInterest.map((info, index) => (
                        <div key={index} className="mt-4 bg-white rounded-lg shadow-md p-4 border border-gray-200">
                            <div className="flex items-start">
                                <h1 className="text-2xl font-semibold">{info}</h1>
                                <div className="flex space-x-2 ml-auto">
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
                ) : <></>}

                <button onClick={toggleMenu} className="btn btn-outline mt-6">Add career interest</button>
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
                            <h2 className="text-3xl font-bold">Add career interest</h2>
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

                        <form onSubmit={addCareerInterest} className="space-y-4">
                            <div className="grid grid-cols-1 gap-4">

                                <div>
                                    <label className="block text-xl font-medium mb-1">
                                        Career
                                    </label>
                                    <p className="text-gray-500 text-sm mb-2">Example: fullstack dev</p>
                                    <input
                                        type="text"
                                        name="careerInterest"
                                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                                    />
                                </div>

                            </div>

                            <div className="flex justify-start space-x-3 pt-4">
                                <button
                                    minLength="2"
                                    type="submit"
                                    className="cursor-pointer btn"
                                    disabled={isLoading}
                                >
                                    Add
                                </button>
                            </div>

                        </form>
                    </div>
                </div>                

            </div>
        </div>
    );

}

export default CareerInterest;