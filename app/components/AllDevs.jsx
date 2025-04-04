"use client";

import React from "react";
import Image from "next/image";

import Devcard from "./Devcard";
import { assets } from "@/assets/assets";

const AllDevs = () => {

    

    // Sample data for developers
    const devs = [
        {
            id: "xasddsa",
            name: "Sarah Johnson",
            title: "Mobile Developer",
            tags: ["React Native", "Flutter", "iOS"],
        },
        {
            id: "ghjkkhj",
            name: "John Doe",
            title: "Web Developer",
            tags: ["React", "Node.js", "Express"],
        },
        
    ];


    return (
        <div className="container">
            <div className="dev-grid">
                {devs.map((dev, index) => (
                    <Devcard key={index} dev={dev} />
                ))}
            </div>
        </div>
    );

}

export default AllDevs;