"use client"

import { useState } from "react";
import Link from "next/link";

import { useAppContext } from "@/context/AppContext";

const Languages = () => {
    const { currentUser } = useAppContext();
    
    return (
        <div className="mt-16">
            <div className="container">
                <h1 className="text-3xl font-bold">Languages</h1>
                <button className="btn btn-outline mt-6 mb-16">Add Language</button>
            </div>
        </div>
    );

}

export default Languages;