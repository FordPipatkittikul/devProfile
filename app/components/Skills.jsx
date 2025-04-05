"use client"

import { useState } from "react";
import Link from "next/link";

import { useAppContext } from "@/context/AppContext";

const Skills = () => {
    const { currentUser } = useAppContext();
    
    return (
        <div className="mt-16">
            <div className="container">
                <h1 className="text-2xl font-bold">Skills</h1>
                <button className="btn btn-outline mt-6 mb-16">Add skills</button>
            </div>
        </div>
    );

}

export default Skills;