"use client"

import { useState } from "react";
import Link from "next/link";

import { useAppContext } from "@/context/AppContext";

const Education = () => {
    const { currentUser } = useAppContext();
    
    return (
        <div className="mt-16">
            <div className="container">
                <h1 className="text-2xl font-bold">Education</h1>
                <button className="btn btn-outline mt-6">Add education</button>
            </div>
        </div>
    );

}

export default Education;