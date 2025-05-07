"use client"

import { useState,useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

import { useAppContext } from "@/context/AppContext";
import Loading from "../Loading";

const Skills = () => {
    const { currentUser, currentSkill, updateSkill } = useAppContext();
    const [isLoading,setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const addSkill = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const formdata = new FormData(e.target)
        const skill = formdata.get("skill")
        try{
            const res = await axios.post(`/api/profile/skill/${currentUser._id}`, {
                skills:skill
            })
            if(res.data.success){
                updateSkill(res.data.newSkill)
                toast.success("add new skill successfully")
                closeMenu()
            }
        }catch(error){
            console.log("Error in adding Skill", error);
        }finally{
            setIsLoading(false);
        }
    }

    const deleteSkill = async (skill) => {
        setIsLoading(true);
        try{
            const res = await axios.delete(`/api/profile/skill/${currentUser._id}?skill=${encodeURIComponent(skill)}`);
            if(res.data.success){
                updateSkill(res.data.remainingSkill)
                toast.success("delete skill successfully")
                closeMenu()
            }
        }catch(error){
            console.log("Error in deleting Skill", error);
        }finally{
            setIsLoading(false);
        }
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
  
    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
    }, [currentSkill]);
    
    return (
        <div className="mt-16">
            <div className="container">
                <h1 className="text-3xl font-bold">Skills</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    {Array.isArray(currentSkill?.skills) ? (
                        currentSkill?.skills.map((skill, index) => (
                            <div key={index} className="mt-4 bg-white rounded-lg shadow-md p-4 border border-gray-200">
                                <div className="flex items-start">
                                    <h1 className="text-2xl font-semibold">{skill}</h1>
                                    <div className="flex space-x-2 ml-auto">
                                        <button 
                                            className="p-2 text-red-500 hover:text-red-700 cursor-pointer"
                                            disabled={isLoading}
                                            onClick={ () => {
                                                console.log(skill)
                                                deleteSkill(skill);
                                            }}
                                        >
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
                </div>

                <button onClick={toggleMenu} className="btn btn-outline mt-6">Add skill</button>

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
                            <h2 className="text-3xl font-bold">Add Skill</h2>
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

                        <form onSubmit={addSkill} className="space-y-4">
                            <div className="grid grid-cols-1 gap-4">

                                <div>
                                    <label className="block text-xl font-medium mb-1">
                                        Skill
                                    </label>
                                    <input
                                        minLength="2"
                                        type="text"
                                        name="skill"
                                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                                    />
                                </div>

                            </div>

                            <div className="flex justify-start space-x-3 pt-4">
                                <button
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

export default Skills;