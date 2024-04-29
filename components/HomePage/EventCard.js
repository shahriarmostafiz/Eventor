import Image from 'next/image';
import React from 'react';
import ActionButton from '../ActionButton';
import Link from 'next/link';
/**
 *  id,: '662d3bb3cf67b7d698b0bac9',
    name,: 'GITEX Technology Week',
    details,: 'GITEX Technology Week is an annual tech event held in Dubai, United Arab Emirates, showcasing the latest trends and innovations across various sectors.',
    location,: 'Dubai, UAE',
    imageUrl,: 'https://i.ibb.co/C1pjP9v/Gitex-obi5ai.jpg',
    interested_ids,: [],
    going_ids,: []
 */

const EventCard = ({ aEvent }) => {
    const {
        id,
        name,
        details,
        location,
        imageUrl,
        interested_ids,
        going_ids,
    } = aEvent
    return (
        <div className="overflow-clip rounded-md flex flex-col bg-[#242526]">
            <div className='flex-1 relative max-h-60 overflow-hidden  '>
                <div className="absolute inset-0 bg-blue-400 backdrop-filter opacity-5 backdrop-blur-lg"></div>
                <div className="flex justify-center items-center ">
                    <Image
                        src={imageUrl}
                        alt="Event 1"
                        className="w-full rounded-md"
                        height={500}
                        width={500}
                    />
                </div>
            </div>
            <div className="p-3">
                <Link href={`/details/${id}`} className="font-bold text-lg hover:text-blue-600 hover:underline">
                    {name}
                </Link>
                <p className="text-[#9C9C9C] text-sm mt-1">
                    {location}
                </p>
                <div className="text-[#737373] text-sm mt-1">
                    <span>{interested_ids.length} Interested</span>
                    <span className='mx-2'>|</span>
                    <span>{going_ids.length} Going</span>
                </div>
                {/* Buttons */}
                <ActionButton />
            </div>
        </div>

    );
};

export default EventCard;