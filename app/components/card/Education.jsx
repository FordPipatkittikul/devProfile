"use client"

import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

import { useAppContext } from "@/context/AppContext";
import EducationFormDrawer from "../drawer/EducationFormDrawer ";

const Education = () => {
    const { currentUser,currentEducation, updateEducation, router} = useAppContext();
    const [isOpen, setIsOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [isLoading,setIsLoading] = useState(false);

    const handleChangeUrl = (id) => {
        const newPath = `/profile/education/${id}`; // Define the new URL path
        router.push(newPath);
    };

    const toggleEditMenu = () => {
        setIsOpen(!isOpen);
        setIsEdit(!isOpen);
    };

    const toggleAddMenu = () => {
        setIsOpen(!isOpen);
    };
  
    const closeMenu = () => {
        setIsEdit(false);
        setIsOpen(false);
    };

    const addEducation = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const education = new FormData(e.target)
        const degree = education.get("degree")
        const institute = education.get("institute")
        const gpa = education.get("gpa")
        const graduation = education.get("graduation")
        const relatedCourseworks = education.get("relatedCourseWorks")

        try{
            const res = await axios.post(`/api/profile/education/${currentUser._id}`,{
                institute,
                degree,
                gpa,
                relatedCourseworks,
                graduation,
            })
            if(res.data.success){
                updateEducation(res.data.newEducation)
                toast.success("Add education successfully");
            }else {
                toast.error("cannot add Education")
            }
        }catch(error){
            console.log("Error in add education:", error);
        }finally{
            setIsLoading(false);
        }

    };

    useEffect(() => {
    }, [currentEducation]);

    return (
        <div className="mt-16">
            <div className="container">

                <h1 className="text-3xl font-bold">Education</h1>
                {/* Education Card Display */}
                {Array.isArray(currentEducation) ? (
                    currentEducation.map((edu, index) => (
                        <div key={index} className="mt-4 bg-white rounded-lg shadow-md p-4 border border-gray-200">
                            <div className="flex justify-between items-start">
                                <div className="flex-1">
                                    <h2 className="text-3xl font-semibold">{edu?.degree}</h2>
                                    <p className="text-gray-700 mt-1">{edu?.institute}</p>
                                    <p className="text-gray-700 mt-1">{edu?.graduation}</p>
                                    <p className="text-gray-600 mt-1">GPA: {edu?.gpa}</p>
                                    <div className="mt-2">
                                        <p className="text-xl">Related Courseworks:</p>
                                        <p className="text-gray-600">{edu?.relatedCourseworks}</p>
                                    </div>
                                </div>
                                <div className="flex space-x-2">
                                    <button 
                                        className="p-2 text-blue-500 hover:text-blue-700 cursor-pointer"
                                        onClick={() => {
                                            toggleEditMenu();
                                            handleChangeUrl(edu?._id);
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
                    ) : currentEducation ? (
                        <div className="mt-4 bg-white rounded-lg shadow-md p-4 border border-gray-200">
                            <div className="flex justify-between items-start">
                                <div className="flex-1">
                                    <h2 className="text-3xl font-semibold">{currentEducation?.degree}</h2>
                                    <p className="text-gray-700 mt-1">{currentEducation?.institute}</p>
                                    <p className="text-gray-700 mt-1">{currentEducation?.graduation}</p>
                                    <p className="text-gray-600 mt-1">GPA: {currentEducation?.gpa}</p>
                                    <div className="mt-2">
                                        <p className="text-xl">Related Courseworks:</p>
                                        <p className="text-gray-600">{currentEducation?.relatedCourseworks}</p>
                                    </div>
                                </div>
                                <div className="flex space-x-2">
                                    <button 
                                        className="p-2 text-blue-500 hover:text-blue-700"
                                        onClick={() => {
                                            toggleEditMenu();
                                            handleChangeUrl(currentEducation?._id);
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
                    ) : <></>}

                <button 
                    onClick={toggleAddMenu} 
                    className="btn btn-outline mt-6"
                >
                    Add Education
                </button>

                {/* Overlay */}
                {isOpen && (
                    <div 
                        className="fixed inset-0 bg-black/40 bg-opacity-30 z-10"
                        // onClick={closeMenu}
                    ></div>
                )}
                
                {/* Add Education */}
                <EducationFormDrawer
                    isEdit={isEdit}
                    isOpen={isOpen}
                    closeMenu={closeMenu}
                    onSubmit={addEducation}
                    isLoading={isLoading}
                    formTitle={isEdit ? "Edit Education" : "Add Education"}
                    submitButtonLabel={isEdit ? "Edit" : "Add"}
                />

            </div>
        </div>
    );

}

export default Education;