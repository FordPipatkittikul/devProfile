"use client"

import { useEffect, useState } from "react";
import Image from "next/image";

import { assets } from "@/assets/assets";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";

const Developer = () => {

    // Sample data for developers
    const devs = [
        {
            id: "xasddsa",
            name: "Sarah Johnson",
            title: "Mobile Developer",
            tags: ["React Native", "Flutter", "iOS"],
            email: "xasddsa@gmail.com",
            phone: "055-555-4352", 
            github: "xasddsa"
        },
        {
            id: "ghjkkhj",
            name: "John Doe",
            title: "Web Developer",
            tags: ["React", "Node.js", "Express"],
            email: "ghjkkhj@gmail.com",
            phone: "055-222-3333", 
            github: "ghjkkhj"
        },
        
    ];

    const avatars = [assets.avatar1, assets.avatar2, assets.avatar3, assets.avatar4, assets.avatar5, assets.avatar6, assets.avatar7, assets.avatar8, assets.avatar9, assets.avatar10];
    const [avatar, setAvatar] = useState(null);

    useEffect(() => {
        setAvatar(avatars[Math.floor(Math.random() * avatars.length)]);
    }, []);

    return (
        <div>
            <Navbar />

            <div className="dev-banner">
                {avatar && <Image src={avatar} alt="Developer" width={100} height={100} className="dev-avatar" />}
            </div>
            <div className="container">
                <h2 className="text-center mt-16 text-4xl font-bold">Hi, my name is Lorem Ipsum</h2>

                <ContactUs/>
            </div>
            
            
            <div className="border-t-2 mt-16 border-gray-400">
                <h2 className="text-center mt-16 text-4xl font-bold">ABOUT ME</h2>
                <div className="container">
                    <h1 className="mt-2 text-2xl font-bold">Developer Profile</h1>
                    <p className="mt-2">Career Interest: </p>
                    <p className="mt-2">Prefer location : Bangkok, Remote</p>
                    <p className="mt-2">languages : Thai, English</p>
                    <p className="mt-2">Total years of experience: 5 </p>
                    <h1 className="mt-2 text-2xl font-bold">About myself</h1>
                    <p className="mt-2">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>

            <div className="border-t-2 mt-16 border-gray-400">
                <h2 className="text-center mt-16 text-4xl font-bold">EDUCATION</h2>
                <div className="container">
                    <h1 className="text-amber-300 text-2xl font-bold">Chulalongkorn university</h1>
                    <div className="flex flex-row justify-between">
                        <p>B.S. in Computer Science</p>
                        <p>Graduated: May 2025</p>
                    </div>
                    <p className="text-gray-400">GPA: 3.5</p>
                    <p className="mt-4">- <span className="font-bold">Related CourseWork</span>: Data Structures & Algorithms, Introduction to Software Development, 
                        Computer Organization, Programming Language Concepts, Networks and Applications, Web 
                        Application Development with Python, Software Engineering Fundamentals by Java 
                    </p>
                </div>
            </div>

            <div className="border-t-2 mt-16 border-gray-400">
                <h2 className="text-center mt-16 text-4xl font-bold">PROFESSIONAL EXPERIENCE</h2>
                <div className="container">
                    <h1 className="text-amber-300 text-2xl font-bold">MEOW company</h1>
                    <div className="flex flex-row justify-between">
                        <p>Stupid developer</p>
                        <p>March 2024 – Present</p>
                    </div>

                    <p className="mt-4">- Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>

            <div className="border-t-2 mt-16 border-gray-400">
                <h2 className="text-center mt-16 text-4xl font-bold">PROJECTS</h2>
                <div className="container">
                    <h1 className="text-amber-300 text-2xl font-bold">MEOW Poject</h1>
                    <p className="mt-4">- <span className="font-bold">Description</span>: Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>

            <div className="mb-16 border-t-2 mt-16 border-gray-400">
                <h2 className="text-center mt-16 text-4xl font-bold">SKILLS</h2>
                <div className="container">

                    <p className="mt-4">- <span className="font-bold">Skills</span>: Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>

            <Footer/>

        </div>

    )
}

export default Developer;