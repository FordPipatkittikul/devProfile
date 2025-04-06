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

    const [currentUser, setCurrentUser] = useState(null);
    const [currentUserInfo, setCurrentUserInfo] = useState(null);

    const updateUser = (data) =>{
        setCurrentUser(data)
    }

    // ✅ Load user from localStorage on client only
    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedUser = localStorage.getItem("user");
            if (storedUser) {
                setCurrentUser(JSON.parse(storedUser));
            }
        }
    }, []);

    // ✅ Keep localStorage in sync
    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("user", JSON.stringify(currentUser));
        }
    }, [currentUser]);

    const value = {
        router, updateUser,
        currentUser,
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}