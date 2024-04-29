"use client"
import { AuthContext } from '@/context/AuthContext';
import React, { useState } from 'react';

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null)
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;