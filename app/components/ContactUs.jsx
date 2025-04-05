"use client";

import React from "react";

const ContactUs = () => {

    return (
        <div className="mt-4 max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-sm border-2 border-gray-400">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
                
                <div className="flex items-center space-x-3 p-3 hover:bg-gray-50 transition-colors lg:border-r-2 border-gray-400">
                    <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                        <div className="text-xs text-gray-500 font-medium">Email</div>
                        <a href="mailto:ghjkkhj@gmail.com" className="text-sm font-medium text-gray-900 hover:text-blue-600">
                            ghjkkhj@gmail.com
                        </a>
                    </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 hover:bg-gray-50 transition-colors lg:border-r-2 border-gray-400">
                    <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                        <div className="text-xs text-gray-500 font-medium">Phone</div>
                        <a href="#" className="text-sm font-medium text-gray-900 hover:text-blue-600">
                            055-222-3333
                        </a>
                    </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 hover:bg-gray-50 transition-colors lg:border-r-2 border-gray-400">
                    <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <div>
                        <div className="text-xs text-gray-500 font-medium">Github</div>
                        <a href="#" className="text-sm font-medium text-gray-900 hover:text-blue-600">
                            ghjkkhj
                        </a>
                    </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-50 transition-colors">
                    <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <div>
                        <div className="text-xs text-gray-500 font-medium">Line</div>
                        <span className="text-sm font-medium text-gray-900">
                            055-222-3333
                        </span>
                    </div>
                </div>
                
            </div>
        </div> 
    );

}

export default ContactUs;






