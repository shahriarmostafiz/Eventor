import Details from '@/components/DetailPage/Details';
import Hero from '@/components/DetailPage/Hero';
import Location from '@/components/DetailPage/Location';
import { getAEvent } from '@/db/queries';
import React from 'react';
export async function generateMetadata({ params: { id } }) {
    const event = await getAEvent(id)
    return {
        title: `Eventry - ${event.name}`,
        description: event?.details,
        openGraph: {
            images: [event?.imageUrl]
        }
    }
}

const page = async ({ params: { id } }) => {
    const event = await getAEvent(id)
    console.log(event);
    return (
        <>
            <Hero event={event} />
            <div className="grid grid-cols-5 gap-12 my-12">
                <Details event={event} />
                <Location event={event} />
            </div>
        </>
    );
};

export default page;