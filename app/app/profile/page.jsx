"use client"

import { useEffect, useState } from "react";
import Image from "next/image";

import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import CareerInterest from "@/components/CareerInterest";
import Education from "@/components/Education";
import ProfessionalExperience from "@/components/ProfessionalExperience";
import Project from "@/components/project";
import Skills from "@/components/Skills";
import Languages from "@/components/Languages";
import Footer from "@/components/Footer";
import { useAppContext } from '@/context/AppContext';

const ProfilePage = ({ params }) => {

    const { router,currentUser } = useAppContext();

    return (
            <>
                <Navbar/>
                <Header header="Developer Profile" description="Edit your profile here!" showLinks={false} />
                <AboutMe/>
                <CareerInterest/>
                <Education/>
                <ProfessionalExperience/>
                <Project/>
                <Skills/>
                <Languages/>
                <Footer/>
            </>
    );
}

export default ProfilePage;