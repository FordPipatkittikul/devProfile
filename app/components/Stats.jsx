"use client";

import React from "react";

const stats = () => {

    return (
        <div className="stats-row">
            
            <div className="stat-card">
                <div className="stat-number">5,432</div>
                <div className="stat-label">Registered Developers</div>
            </div>
            <div className="stat-card">
                <div className="stat-number">12,780</div>
                <div className="stat-label">Projects Showcased</div>
            </div>
            <div className="stat-card">
                <div className="stat-number">3,254</div>
                <div className="stat-label">Companies Hiring</div>
            </div>
            
        </div>
    );

}

export default stats;