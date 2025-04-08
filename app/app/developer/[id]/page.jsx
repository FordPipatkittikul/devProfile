"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from 'next/navigation';
import axios from "axios";
import { motion } from "framer-motion";

import { useAppContext } from '@/context/AppContext';
import { assets } from "@/assets/assets";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";

const Developer = () => {
    const [developer, setDeveloper] = useState({})
    const params = useParams();
    const id = params.id;
    const avatars = [assets.avatar1, assets.avatar2, assets.avatar3, assets.avatar4, assets.avatar5, assets.avatar6, assets.avatar7, assets.avatar8, assets.avatar9, assets.avatar10];
    const [avatar, setAvatar] = useState(null);
    
    const fetchDeveloper = async () => {
        try {
            const response = await axios.get(`/api/developer/${id}`);
            setDeveloper(response.data.devWithoutPass);
        } catch (error) {
            console.log("Error fetchUserInfo:", error);
        }
    }

    useEffect(() => {
        const getDeveloper = async () => {
            await fetchDeveloper();
        };
        if (id) {
            getDeveloper();
        }
    }, [id]);

    useEffect(() => {
        setAvatar(avatars[Math.floor(Math.random() * avatars.length)]);
    }, []);

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: { 
                type: "spring", 
                stiffness: 100, 
                damping: 15 
            }
        },
        hover: {
            scale: 1.02,
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
            transition: { 
                type: "spring", 
                stiffness: 400, 
                damping: 10 
            }
        }
    };

    const skillVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: { type: "spring", stiffness: 300, damping: 20 }
        },
        hover: {
            scale: 1.1,
            backgroundColor: "#93C5FD", // Slightly darker blue on hover
            transition: { 
                type: "spring", 
                stiffness: 400, 
                damping: 10 
            }
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />

            {/* Hero Section with Motion */}
            <div className="dev-banner">
                <motion.div 
                    className="absolute inset-0"
                    initial={{ scale: 1.1, opacity: 0.3 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    <div className="absolute inset-0 bg-black opacity-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/30"></div>
                </motion.div>
                
                <div className="">
                    <motion.div 
                        className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-3 shadow-2xl"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ 
                            type: "spring",
                            stiffness: 100,
                            damping: 15,
                            delay: 0.3
                        }}
                        whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
                        }}
                    >
                        {avatar && <Image src={avatar} alt="Developer" width={130} height={130} className="rounded-full" />}
                    </motion.div>
                </div>
            </div>

            <motion.div 
                className="container mx-auto px-4 mt-24"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
            >
                <motion.h2 
                    className="text-center text-4xl md:text-5xl font-bold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                >
                    Hi, I'm {developer.firstName} {developer.lastName}
                </motion.h2>
                
                {developer.userInfo && (
                    <motion.p 
                        className="text-center mt-6 text-xl text-gray-600 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.7 }}
                    >
                        {developer.userInfo.careerInterest && developer.userInfo.careerInterest.join(" | ")}
                    </motion.p>
                )}
            </motion.div>
            
            {/* About Me Section */}
            <motion.div 
                className="border-t-2 mt-20 border-gray-200"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeIn}
            >
                <motion.h2 
                    className="text-center mt-16 text-4xl font-bold text-gray-800"
                    variants={fadeIn}
                >
                    ABOUT ME
                </motion.h2>
                <div className="container mx-auto px-4 py-8 max-w-4xl">
                    <motion.div 
                        className="bg-white rounded-lg shadow-lg p-8 relative overflow-hidden"
                        variants={cardVariants}
                        whileHover="hover"
                    >
                        <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
                        <h3 className="text-2xl font-bold text-gray-800">Developer Profile</h3>
                        
                        {developer.userInfo && (
                            <>
                                <motion.div 
                                    className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6"
                                    variants={staggerContainer}
                                >
                                    <motion.div variants={fadeIn}>
                                        <p className="text-gray-600 flex items-start">
                                            <span className="font-semibold text-gray-800 w-32 mr-2">Career Interest:</span>
                                            <span className="flex-1">{developer.userInfo.careerInterest && developer.userInfo.careerInterest.join(", ")}</span>
                                        </p>
                                        <p className="mt-4 text-gray-600 flex items-start">
                                            <span className="font-semibold text-gray-800 w-32 mr-2">Prefer location:</span>
                                            <span className="flex-1">{developer.userInfo.location}</span>
                                        </p>
                                        <p className="mt-4 text-gray-600 flex items-start">
                                            <span className="font-semibold text-gray-800 w-32 mr-2">Languages:</span>
                                            <span className="flex-1">{developer.userInfo.languages && developer.userInfo.languages.join(", ")}</span>
                                        </p>
                                    </motion.div>
                                    <motion.div variants={fadeIn}>
                                        <p className="text-gray-600 flex items-start">
                                            <span className="font-semibold text-gray-800 w-32 mr-2">Experience:</span>
                                            <span className="flex-1">{developer.userInfo.yearsOfExperience} years</span>
                                        </p>
                                        <p className="mt-4 text-gray-600 flex items-start">
                                            <span className="font-semibold text-gray-800 w-32 mr-2">Phone:</span>
                                            <span className="flex-1">{developer.userInfo.phoneNumber}</span>
                                        </p>
                                        <p className="mt-4 text-gray-600 flex items-start">
                                            <span className="font-semibold text-gray-800 w-32 mr-2">Email:</span>
                                            <span className="flex-1">{developer.email}</span>
                                        </p>
                                    </motion.div>
                                </motion.div>
                                
                                <motion.h3 
                                    className="mt-10 text-2xl font-bold text-gray-800"
                                    variants={fadeIn}
                                >
                                    About myself
                                </motion.h3>
                                <motion.p 
                                    className="mt-4 text-gray-600 leading-relaxed"
                                    variants={fadeIn}
                                >
                                    {developer.userInfo.about}
                                </motion.p>
                            </>
                        )}
                    </motion.div>
                </div>
            </motion.div>

            {/* Education Section */}
            <motion.div 
                className="border-t-2 mt-20 border-gray-200"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeIn}
            >
                <motion.h2 
                    className="text-center mt-16 text-4xl font-bold text-gray-800"
                    variants={fadeIn}
                >
                    EDUCATION
                </motion.h2>
                <motion.div 
                    className="container mx-auto px-4 py-8 max-w-4xl"
                    variants={staggerContainer}
                >
                    {developer.education && developer.education.map((edu, index) => (
                        <motion.div 
                            key={edu._id} 
                            className={`bg-white rounded-lg shadow-lg p-8 relative overflow-hidden ${index > 0 ? 'mt-8' : ''}`}
                            variants={cardVariants}
                            whileHover="hover"
                        >
                            <div className="absolute top-0 left-0 w-2 h-full bg-amber-500"></div>
                            <h3 className="text-2xl font-bold text-amber-500">{edu.institute}</h3>
                            <div className="flex flex-col md:flex-row md:justify-between mt-2">
                                <p className="font-semibold text-gray-700">{edu.degree}</p>
                                <p className="text-gray-600">{edu.graduation}</p>
                            </div>
                            <p className="text-gray-500 mt-2">GPA: {edu.gpa}</p>
                            <p className="mt-4 text-gray-600">
                                <span className="font-bold">Related CourseWork:</span> {edu.relatedCourseworks}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Professional Experience Section */}
            <motion.div 
                className="border-t-2 mt-20 border-gray-200"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeIn}
            >
                <motion.h2 
                    className="text-center mt-16 text-4xl font-bold text-gray-800"
                    variants={fadeIn}
                >
                    PROFESSIONAL EXPERIENCE
                </motion.h2>
                <motion.div 
                    className="container mx-auto px-4 py-8 max-w-4xl"
                    variants={staggerContainer}
                >
                    {developer.professionalExperience && developer.professionalExperience.map((exp, index) => (
                        <motion.div 
                            key={exp._id} 
                            className={`bg-white rounded-lg shadow-lg p-8 relative overflow-hidden ${index > 0 ? 'mt-8' : ''}`}
                            variants={cardVariants}
                            whileHover="hover"
                        >
                            <div className="absolute top-0 left-0 w-2 h-full bg-indigo-600"></div>
                            <h3 className="text-2xl font-bold text-indigo-600">{exp.company}</h3>
                            <div className="flex flex-col md:flex-row md:justify-between mt-2">
                                <p className="font-semibold text-gray-700">{exp.role}</p>
                                <p className="text-gray-600">{exp.period}</p>
                            </div>
                            <p className="mt-4 text-gray-600 leading-relaxed">{exp.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Projects Section */}
            <motion.div 
                className="border-t-2 mt-20 border-gray-200"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeIn}
            >
                <motion.h2 
                    className="text-center mt-16 text-4xl font-bold text-gray-800"
                    variants={fadeIn}
                >
                    PROJECTS
                </motion.h2>
                <motion.div 
                    className="container mx-auto px-4 py-8 max-w-4xl"
                    variants={staggerContainer}
                >
                    {developer.project && developer.project.map((proj, index) => (
                        <motion.div 
                            key={proj._id} 
                            className={`bg-white rounded-lg shadow-lg p-8 relative overflow-hidden ${index > 0 ? 'mt-8' : ''}`}
                            variants={cardVariants}
                            whileHover="hover"
                        >
                            <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
                            <h3 className="text-2xl font-bold text-blue-500">{proj.name}</h3>
                            <div className="mt-4 text-gray-600 whitespace-pre-line leading-relaxed">
                                <span className="font-bold">Description:</span> {proj.description}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Skills Section */}
            <motion.div 
                className="border-t-2 mt-20 border-gray-200 mb-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeIn}
            >
                <motion.h2 
                    className="text-center mt-16 text-4xl font-bold text-gray-800"
                    variants={fadeIn}
                >
                    SKILLS
                </motion.h2>
                <div className="container mx-auto px-4 py-8 max-w-4xl">
                    <motion.div 
                        className="bg-white rounded-lg shadow-lg p-8 relative overflow-hidden"
                        variants={cardVariants}
                    >
                        <div className="absolute top-0 left-0 w-2 h-full bg-green-500"></div>
                        {developer.skill && (
                            <motion.div 
                                className="flex flex-wrap gap-3"
                                variants={staggerContainer}
                            >
                                {developer.skill.skills.map((skill, index) => (
                                    <motion.div 
                                        key={index} 
                                        className="bg-blue-100 text-blue-800 px-5 py-3 rounded-full font-medium text-base"
                                        variants={skillVariants}
                                        whileHover="hover"
                                    >
                                        {skill}
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </motion.div>

            <Footer />
        </div>
    );
};

export default Developer;