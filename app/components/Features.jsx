"use client";

import React from "react";

const Features = () => {

    return (
        <div className="features">
            <div className="container">
                <h2 className="text-center mb-16 text-4xl font-bold">Why Choose DevProfile?</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">🚀</div>
                        <h3 className="feature-title">Boost Your Visibility</h3>
                        <p>Get discovered by companies and recruiters looking for your specific skill set.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">💼</div>
                        <h3 className="feature-title">Showcase Your Projects</h3>
                        <p>Display your work in an elegant, professional format that highlights your abilities.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🔗</div>
                        <h3 className="feature-title">Connect & Network</h3>
                        <p>Build relationships with fellow developers and potential employers.</p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Features;