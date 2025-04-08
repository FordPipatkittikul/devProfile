"use client";

import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext)
}


export const AppContextProvider = (props) => { 
    const router = useRouter()

    const [isClient, setIsClient] = useState(false);

    const [currentUser, setCurrentUser] = useState(null);
    const [currentUserInfo, setCurrentUserInfo] = useState(null);
    const [currentEducation, setCurrentEducation] = useState([]);
    const [currentSkill, setCurrentSkill] = useState(null);
    const [currentExperience, setCurrentExperience] = useState([]);
    const [currentProject, setCurrentProject] = useState([]);

    const [developers, setDevelopers] = useState([]);

    const updateUser = (data) =>{
        setCurrentUser(data)
    }

    const updateUserInfo = (data) => {
        setCurrentUserInfo(data)
    }
    
    const updateEducation = (data) => {
        currentEducation.push(data)
    }

    const updateSkill = (data) => {
        setCurrentSkill(data)
    }

    const updateExperience = (data) => {
        currentExperience.push(data)
    }

    const updateProject = (data) => {
        currentProject.push(data)
    }

    const fetchUserInfo = async () => {
        if (currentUser?._id) {  
            try {
                const response = await axios.get(`/api/user/info/${currentUser._id}`);
                setCurrentUserInfo(response.data.userInfo);
            } catch (error) {
                console.log("Error fetchUserInfo:", error);
            }
        }
    }

    const fetchEducation = async () => {
        if (currentUser?._id) {  
            try {
                const response = await axios.get(`/api/user/education/${currentUser._id}`);
                console.log(response)
                setCurrentEducation(response.data.userEducation);
            } catch (error) {
                console.log("Error fetchEducation:", error);
            }
        }
    }

    const fetchExperience = async () => {
        if (currentUser?._id) {  
            try {
                const response = await axios.get(`/api/user/experience/${currentUser._id}`);
                setCurrentExperience(response.data.userProfessionalExperience);
            } catch (error) {
                console.log("Error fetchExperience:", error);
            }
        }
    }

    const fetchProject = async () => {
        if (currentUser?._id) {  
            try {
                const response = await axios.get(`/api/user/project/${currentUser._id}`);
                setCurrentProject(response.data.userProject);
            } catch (error) {
                console.log("Error fetchExperience:", error);
            }
        }
    }

    const fetchSkill = async () => {
        if (currentUser?._id) {  
            try {
                const response = await axios.get(`/api/user/skill/${currentUser._id}`);
                setCurrentSkill(response.data.userSkill);
            } catch (error) {
                console.log("Error fetchSkill:", error);
            }
        }
    }

    const fetchDevelopers = async () => {
        try {
            const response = await axios.get(`/api/developers`);
            setDevelopers(response.data.devsWithoutPass);
        } catch (error) {
            console.log("Error fetchUserInfo:", error);
        }
    }

    //✅ Load user from localStorage on client only
    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedUser = localStorage.getItem("user");
            if (storedUser) {
                setCurrentUser(JSON.parse(storedUser));
            }
            setIsClient(true); // ✅ Mark client-side ready
        }
    }, []);

    // ✅ Fetch user info, education, expereince, skill whenever currentUser is updated
    useEffect(() => {
        const getUserInfo = async () => {
            await fetchUserInfo();
        };
        
        const getEducation = async () => {
            await fetchEducation();
        }

        const getExperience = async () => {
            await fetchExperience();
        }

        const getProject = async () => {
            return fetchProject();
        }

        const getSkill = async () => {
            await fetchSkill();
        }

        const getDevelopers = async () => {
            await fetchDevelopers();
        };

        if (typeof window !== "undefined" && currentUser && currentUser._id) {
            getUserInfo();
            getEducation();
            getExperience();
            getProject();
            getSkill();
            getDevelopers();
        }
    }, [currentUser]);

    //✅ Keep localStorage in sync
    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("user", JSON.stringify(currentUser));
        }
    }, [currentUser]);

    // //✅ Log the currentUserInfo after it changes
    // useEffect(() => {
    //     console.log("Updated currentUser:", currentUser);
    //     console.log("Updated currentUserInfo:", currentUserInfo);
    //     console.log("Updated careerInterest:", currentUserInfo?.careerInterest);
    //     console.log("Updated languages:", currentUserInfo?.languages);
    //     console.log("Updated currentEducation:", currentEducation);
    //     console.log("Updated currentExperience:", currentExperience);
    //     console.log("Updated project:", currentProject);
    //     console.log("Updated currentSkill:", currentSkill);
    //     // console.log("Updated currentUserInfo:", currentProject);
    // }, [currentUser, currentUserInfo,currentEducation, currentExperience, currentProject,currentSkill]); // This will log whenever currentUserInfo changes

    const value = {
        router, updateUser, updateUserInfo,
        currentUser, currentUserInfo, updateEducation,
        currentEducation,currentSkill, updateSkill,
        currentExperience,currentProject, updateExperience,
        updateProject, developers
    }

    if (!isClient) return null; // ✅ Don't render anything until mounted

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}