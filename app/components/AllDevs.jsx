"use client";

import React from "react";

import Devcard from "./Devcard";


const AllDevs = () => {

    

    // Sample data for developers
    const devs = [
        {
            id: "xasddsa",
            firstName: "Sarah",
            lastName: "Doe",
            title: "Mobile Developer",
            tags: ["React Native", "Flutter", "iOS"],
        },
        {
            id: "ghjkkhj",
            firstName: "John",
            lastName: "Doe",
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