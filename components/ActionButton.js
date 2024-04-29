"use client"
import Link from 'next/link';
import React from 'react';

const ActionButton = ({ eventId, interestedIds, fromDetails }) => {
    return (
        <div className={`w-full flex gap-4 mt-4 ${fromDetails && "flex-1"}`}>
            {/* bg-indigo-600 indicating Active */}
            <button className="w-full bg-indigo-600 hover:bg-indigo-800">
                Interested
            </button>
            {/* bg-green-600 indicating Active */}
            <Link href={"/payment"} className="w-full">
                <button className='w-full  hover:bg-green-500 hover:text-white'>Going</button>
            </Link>
        </div>
    );
};

export default ActionButton;