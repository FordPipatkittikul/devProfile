"use client"

import { useState,useEffect } from "react";

import { useAppContext } from "@/context/AppContext";
import Loading from "./Loading";

const Languages = () => {
    const { currentUserInfo } = useAppContext();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
  
    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
    }, [currentUserInfo]);
    
    return (
        <div className="mt-16">
            <div className="container">
                <h1 className="text-3xl font-bold">Languages</h1>
                {Array.isArray(currentUserInfo?.languages) ? (
                    currentUserInfo?.languages.map((info, index) => (
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
                <button className="btn btn-outline mt-6 mb-16">Add Language</button>
            </div>
        </div>
    );

}

export default Languages;