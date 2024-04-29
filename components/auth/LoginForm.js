"use client"
import { loginAuthentication } from '@/actions';
import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';

import React, { useState } from 'react';

const LoginForm = () => {
    const [error, setError] = useState("")
    const { setAuth } = useAuth()
    const router = useRouter()
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const formData = new FormData(e.currentTarget)
            const user = await loginAuthentication(formData)
            if (user) {
                setAuth(user)
                router.push("/")
                // console.log(user._id.toString());

            } else {
                setError("Invalid Credentials")
            }

        } catch (err) {
            setError(err.message)
        }

    }
    return (
        <>
            <div className='text-red-600'>{error}</div>
            <form className="login-form" onSubmit={handleSubmit}>
                {/* email */}
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email" />
                </div>
                {/* password */}
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <button
                    type="submit"
                    className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
                >
                    Login
                </button>
            </form>
        </>


    );
};

export default LoginForm;