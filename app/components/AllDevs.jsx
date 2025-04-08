"use client";

import { useEffect, useState } from "react";

import Devcard from "./Devcard";
import { useAppContext } from "@/context/AppContext";

const AllDevs = () => {

    const { developers } = useAppContext();

    return (
        <div className="container">
            <div className="dev-grid">
                {developers.map((dev, index) => (
                    <Devcard key={index} dev={dev} />
                ))}
            </div>
        </div>
    );

}

export default AllDevs;