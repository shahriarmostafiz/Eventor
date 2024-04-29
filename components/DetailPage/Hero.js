import Image from 'next/image';
import React from 'react';
import ActionButton from '../ActionButton';


const Hero = ({ event }) => {

    return (
        <>
            <div className="bg-gradient-to-b  from-slate-200/20 to-slate-800/30">
                <Image
                    src={event.imageUrl}
                    alt="Event 1"
                    className="h-[450px] mx-auto"
                    // height={450}
                    // width={1}
                    height={450}
                    width={1000}

                />
            </div>
            {/* Details */}
            <div className="flex items-end">
                <div className="flex-auto py-4">
                    <h1 className="font-bold text-2xl">{event.name}</h1>
                    <p className="text-[#9C9C9C] text-base mt-1">
                        {event.location}
                    </p>
                    <div className="text-[#737373] text-sm mt-1">
                        <span>{event.interested_ids.length} Interested</span>
                        <span className='mx-2'>|</span>
                        <span>{event.going_ids.length} Going</span>
                    </div>
                </div>
                <ActionButton eventId={event.id} interestedIds={event.interested_ids} goingIds={event.going_ids} fromDetails={true} />
                {/* <div className="w-full flex gap-4 mt-4 flex-1 ">
                    <button className="w-full">Interested</button>
                    <button className="w-full">Going</button>
                </div> */}
            </div>
        </>

    );
};

export default Hero;