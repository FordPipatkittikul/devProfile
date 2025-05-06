"use client";

import React from "react";

import Navbar from "@/components/Navbar";
import Header from "@/components/Header.jsx";
import SearchBar from "@/components/SearchBar.jsx";
import Stats from "@/components/Stats.jsx";
import AllDevs from "@/components/AllDevs.jsx";
import Footer from "@/components/Footer.jsx";

const Developers = () => {

    return (
        <>
            <Navbar/>
            <Header 
                header={"Find Talented Developers"} 
                description={"Discover skilled developers from around the world"}
                showLinks={false}
            />
            <SearchBar/>
            <Stats/>
            <AllDevs/>
            <Footer/>
        </>
    );

}

export default Developers;