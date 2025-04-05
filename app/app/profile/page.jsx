"use client"

import { useEffect, useState } from "react";
import Image from "next/image";

import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import Education from "@/components/Education";
import ProfessionalExperience from "@/components/ProfessionalExperience";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import { useAppContext } from '@/context/AppContext';

const ProfilePage = ({ params }) => {

    const { router,currentUser } = useAppContext();

    return (
            <>
                <Navbar/>
                <Header header="Developer Profile" description="Edit your profile here!" showLinks={false} />
                <AboutMe/>
                <Education/>
                <ProfessionalExperience/>
                <Skills/>
                <Footer/>
            </>
    );
}

export default ProfilePage;