"use client";

import React, { useState } from "react";
import { useAppContext } from "@/context/AppContext";

const SearchBar = () => {
    const { filterDevelopers} = useAppContext();

    const [selectedSkill, setSelectedSkill] = useState("");
    const [selectedCareer, setSelectedCareer] = useState("");
    const [selectedExperience, setSelectedExperience] = useState("");

    const handleFilter = () => {
        filterDevelopers({
            page: 1,
            limit: 3,
            skill: selectedSkill || undefined,
            careerInterest: selectedCareer || undefined,
            experience: selectedExperience || undefined
        });
    };

    const handleClear = () => {
        setSelectedSkill("");
        setSelectedCareer("");
        setSelectedExperience("");
        filterDevelopers({ page: 1, limit: 3 }); // No filters
    };

    return (
        <div className="container">
            <div className="search-filter">
                <div className="filter-row">
                    <select
                        className="filter-select"
                        value={selectedSkill}
                        onChange={(e) => setSelectedSkill(e.target.value)}
                    >
                        <option value="">skill</option>
                        <option>java</option>
                        <option>javaScript</option>
                        <option>python</option>
                        <option>ruby</option>
                        <option>go</option>
                        <option>c</option>
                        <option>c++</option>
                        <option>c#</option>
                        <option>swift</option>
                        <option>kotlin</option>
                        <option>react</option>
                        <option>angular</option>
                        <option>node.js</option>
                        <option>php</option>
                        <option>.net</option>
                        <option>springboot</option>
                    </select>

                    <select
                        className="filter-select"
                        value={selectedCareer}
                        onChange={(e) => setSelectedCareer(e.target.value)}
                    >
                        <option value="">career</option>
                        <option>software-engineer</option>
                        <option>full-stack-developer</option>
                        <option>frontend-developer</option>
                        <option>backend-developer</option>
                        <option>ux/ui-designer</option>
                        <option>mobile-engineer</option>
                        <option>data-scientist</option>
                        <option>data-analyst</option>
                        <option>data-engineer</option>
                        <option>devops</option>
                        <option>machine-learning-engineer</option>
                    </select>

                    <select
                        className="filter-select"
                        value={selectedExperience}
                        onChange={(e) => setSelectedExperience(e.target.value)}
                    >
                        <option value="">experience</option>
                        {Array.from({ length: 10 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>{i + 1}</option>
                        ))}
                    </select>

                    <button className="btn" onClick={handleFilter}>
                        Filter
                    </button>
                    <button className="btn btn-outline" onClick={handleClear}>
                        Clear
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;

