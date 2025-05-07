"use client";

import React from "react";
import Link from "next/link";

const Header = ({ header, description, showLinks = true }) => {

    return (
        <div className="header">
            <div className="container">
                <h1>{header}</h1>
                <p>{description}</p>
                {showLinks && ( // Render links only if showLinks is true
                    <div className="header-buttons">
                        <Link href="/developers" className="btn header-btn btn-white">Find Developers</Link>
                    </div>
                )}
            </div>
        </div>
    );

}

export default Header;