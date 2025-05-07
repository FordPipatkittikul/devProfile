"use client"

import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { usePathname } from 'next/navigation';

import { useAppContext } from "@/context/AppContext";
import Loading from "../Loading";
import ProjectFormDrawer from "../drawer/ProjectFormDrawer";

const Project = () => {
    const { currentProject, currentUser, updateProject, router } = useAppContext();
    const pathname = usePathname();
    const [isEdit, setIsEdit] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading,setIsLoading] = useState(false);

    const handleChangeUrl = (id) => {
        const newPath = `/profile/project/${id}`; // Define the new URL path
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

    const addProject = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const project = new FormData(e.target)
        const name = project.get("name")
        const description = project.get("description")

        try{
            const res = await axios.post(`/api/profile/project/${currentUser._id}`,{
                name,
                description,
            })
            if(res.data.success){
                updateProject(res.data.newProject)
                toast.success("Add project successfully");
                closeMenu();
            }else {
                toast.error("cannot add project")
            }
        }catch(error){
            console.log("Error in adding project:", error);
        }finally{
            setIsLoading(false);
        }
    };

    const editProject = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const id = pathname.split("/").pop();

        const project = new FormData(e.target)
        const name = project.get("name")
        const description = project.get("description")

        try{
            const res = await axios.put(`/api/profile/project/${id}`,{
                name,
                description,
            })
            if(res.data.success){
                toast.success("Edit project successfully");
                closeMenu();
            }else {
                toast.error("cannot edit project")
            }
        }catch(error){
            console.log("Error in editting project:", error);
        }finally{
            setIsLoading(false);
        }
    };

    const deleteProject = async () => {
        setIsLoading(true);
        try{
            const id = pathname.split("/").pop();
            const res = await axios.delete(`/api/profile/project/${id}`)
            if(res.data.success){
                toast.success("Deleted project successfully");
                closeMenu();
            }else {
                toast.error("Could not delete project")
            }
        }catch(error){
            console.log("Error deleting project:", error);
        }finally{
            setIsLoading(false);
        }
    }

    const handleSubmit = (e) => {
        console.log("isEdit in handleSubmit:", isEdit)
        if (isEdit) {
            editProject(e);
        } else {
            addProject(e);
        }
    };

    useEffect(() => {
    }, [currentProject]);

    return (
        <div className="mt-16">
            <div className="container">

                <h1 className="text-3xl font-bold">Project</h1>
                {/* Project Card Display */}
                {Array.isArray(currentProject) ? (
                    currentProject.map((p, index) => (
                        <div key={index} className="mt-4 bg-white rounded-lg shadow-md p-4 border border-gray-200">
                            <div className="flex justify-between items-start">
                                <div className="flex-1">
                                    <h2 className="text-3xl font-semibold">{p?.name}</h2>
                                    <div className="mt-2">
                                        <p className="text-xl">Description:</p>
                                        <p className="text-gray-600">{p?.description}</p>
                                    </div>
                                </div>
                                <div className="flex space-x-2">
                                    <button 
                                        className="p-2 text-blue-500 hover:text-blue-700 cursor-pointer"
                                        onClick={() => {
                                            toggleEditMenu();
                                            handleChangeUrl(p?._id);
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
                    ) : currentProject ? (
                        <div className="mt-4 bg-white rounded-lg shadow-md p-4 border border-gray-200">
                            <div className="flex justify-between items-start">
                                <div className="flex-1">
                                    <h2 className="text-3xl font-semibold">{currentProject?.name}</h2>
                                    <div className="mt-2">
                                        <p className="text-xl">Description:</p>
                                        <p className="text-gray-600">{currentProject?.description}</p>
                                    </div>
                                </div>
                                <div className="flex space-x-2">
                                    <button 
                                        className="p-2 text-blue-500 hover:text-blue-700 cursor-pointer"
                                        onClick={() => {
                                            toggleEditMenu();
                                            handleChangeUrl(currentProject?._id);
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
                    onClick={toggleMenu} 
                    className="btn btn-outline mt-6"
                >
                    Add Project
                </button>

                {/* Overlay */}
                {isOpen && (
                    <div 
                        className="fixed inset-0 bg-black/40 bg-opacity-30 z-10"
                        // onClick={closeMenu}
                    ></div>
                )}

                <ProjectFormDrawer
                    isEdit={isEdit}
                    isOpen={isOpen}
                    closeMenu={closeMenu}
                    onSubmit={handleSubmit}
                    onDelete={deleteProject}
                    isLoading={isLoading}
                    formTitle={isEdit ? "Edit project" : "Add project"}
                    submitButtonLabel={isEdit ? "Edit" : "Add"}
                />

            </div>
        </div>
    );

}

export default Project;