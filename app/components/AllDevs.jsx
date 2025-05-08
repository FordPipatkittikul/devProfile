"use client";

import { useEffect } from "react";

import Devcard from "./Devcard";
import { useAppContext } from "@/context/AppContext";

const AllDevs = () => {
    const {
        developers,
        fetchDevelopers,
        currentPage,
        totalPages
    } = useAppContext();

    useEffect(() => {
        // Initial load
        fetchDevelopers(1, 3);
    }, []);

    const handleLoadMore = () => {
        if (currentPage < totalPages) {
            fetchDevelopers(currentPage + 1, 3, true);
        }
    };

    return (
        <div className="container">
            <div className="dev-grid">
                {developers.map((dev, index) => (
                    <Devcard key={index} dev={dev} />
                ))}
            </div>
            {currentPage < totalPages && (
                <div className="flex justify-center mt-5 mb-5">
                    <button className="btn" onClick={handleLoadMore}>View more</button>
                </div>
            )}
        </div>
    );
};

export default AllDevs;
