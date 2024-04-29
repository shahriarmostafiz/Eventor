"use client"
import { handleInterest } from '@/actions';
import useAuth from '@/hooks/useAuth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, useTransition } from 'react';

const ActionButton = ({ eventId, interestedIds, fromDetails, goingIds }) => {
    const { auth } = useAuth()
    const isInterested = interestedIds.find(id => id === auth?._id.toString())
    const isGoing = goingIds.find(id => id === auth?._id.toString())
    const [interested, setInterested] = useState(isInterested)
    const [going, setGoing] = useState(isGoing)
    const router = useRouter()
    const [isPending, controlInterest] = useTransition()

    const toggleInterest = async () => {
        if (auth) {
            // const userId = auth?._id.toString()
            handleInterest(eventId, auth._id)
            setInterested(!interested)
        } else {
            router.push("/login")
        }
    }
    const markGoing = () => {
        if (auth) {
            router.push(`/payment/${eventId}`)
        } else {
            router.push("/login")
        }
    }


    return (
        <div className={`w-full flex gap-4 mt-4 ${fromDetails && "flex-1"}`}>
            {/* bg-indigo-600 indicating Active */}
            <button
                onClick={() => controlInterest(() => toggleInterest())}
                className={`w-full bg-indigo-600 hover:bg-indigo-800 ${interested && "bg-teal-400 hover:bg-teal-700"}`}>
                {isPending ? "Loading" : " Interested"}
            </button>
            {/* bg-green-600 indicating Active */}
            <button
                disabled={auth && going}
                onClick={() => markGoing()} className={`w-full  hover:bg-purple-600 hover:text-white ${going && "bg-green-600 cursor-default hover:bg-green-600"}`}>
                Going
            </button>
        </div>
    );
};

export default ActionButton;