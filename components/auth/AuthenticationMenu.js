"use client"
import useAuth from '@/hooks/useAuth';
import Link from 'next/link';
import React from 'react';

const AuthenticationMenu = () => {
    const { auth, setAuth } = useAuth()
    const handleLogout = () => {
        setAuth(null)
    }

    return (
        <li>
            {
                auth ? (
                    <>
                        <span>Welcome</span>
                        <span className='mx-2'>|</span>
                        <span className='mr-2'>{auth?.name}</span>
                        <span className='cursor-pointer text-red-600 font-bold' onClick={handleLogout}>Logout</span>
                    </>
                ) : (<Link href={"/login"}>Login</Link>)
            }
        </li>
    );
};

export default AuthenticationMenu;