"use client"

import { useState } from "react";
import Link from "next/link";

import { useAppContext } from "@/context/AppContext";

const CareerInterest = () => {
    const { currentUser } = useAppContext();
    
    return (
        <div className="mt-16">
            <div className="container">
                <h1 className="text-3xl font-bold">Career interest</h1>
                <button className="btn btn-outline mt-6">Add career interest</button>
            </div>
        </div>
    );

}

export default CareerInterest;