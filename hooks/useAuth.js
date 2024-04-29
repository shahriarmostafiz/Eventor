"use client"

import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";

const useAuth = () => {
    const { auth, setAuth } = useContext(AuthContext)
    return { auth, setAuth }
};

export default useAuth;