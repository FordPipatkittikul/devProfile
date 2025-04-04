"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {

    return (
        <footer>
        <div className="container">
            <div className="footer-grid">

                <div>
                    <a href="/" className="footer-logo">DevProfile</a>
                    <p className="footer-description">Website for developers to showcase their skills and connect with opportunities.</p>
                </div>

                <div>
                    <h3 className="footer-heading">Contact Us</h3>
                    <ul className="footer-links">
                        <li className="footer-link">DevProfile@gmail.com</li>
                    </ul>
                </div>

                {/* <div>
                    <h3 className="footer-heading">Legal</h3>
                    <ul className="footer-links">
                        <li className="footer-link">Privacy Policy</li>
                        <li className="footer-link">Terms of Service</li>
                        <li className="footer-link">Cookie Policy</li>
                        <li className="footer-link">GDPR</li>
                    </ul>
                </div> */}

            </div>
          <div className="copyright">
            &copy; 2025 DevProfile. All rights reserved.
          </div>
        </div>
      </footer>
    );

}

export default Footer;