"use client";

import React from "react";

const SearchBar = () => {

    return (
        <div className="container">
            <div className="search-filter">
                <div className="search-row">
                    <input type="text" className="search-input" placeholder="Search by name or skill..."/>
                    <button className="btn">Search</button>
                </div>
                <div className="filter-row">
                    <select className="filter-select">
                        <option>All Skills</option>
                        <option>JavaScript</option>
                        <option>Python</option>
                        <option>React</option>
                        <option>Node.js</option>
                        <option>PHP</option>
                    </select>
                    <select className="filter-select">
                        <option>All Locations</option>
                        <option>Bangkok</option>
                        <option>Chaingmai</option>
                        <option>Nonthaburi</option>
                        <option>Hatyai</option>
                        <option>Remote</option>
                    </select>
                    <select className="filter-select">
                        <option>Experience Level</option>
                        <option>Junior (0-2 years)</option>
                        <option>Mid-level (3-5 years)</option>
                        <option>Senior (5+ years)</option>
                    </select>
                </div>
            </div>
        </div>
    );

}

export default SearchBar;