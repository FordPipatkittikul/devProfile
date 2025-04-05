"use client"

import { useState } from "react";
import Link from "next/link";

import { useAppContext } from "@/context/AppContext";

const ProfessionalExperience = () => {
    const { currentUser } = useAppContext();
    
    return (
        <div className="mt-16">
            <div className="container">
                <h1 className="text-2xl font-bold">Professional experience</h1>
                <button className="btn btn-outline mt-6">Add experience</button>
            </div>
        </div>
    );

}

export default ProfessionalExperience;