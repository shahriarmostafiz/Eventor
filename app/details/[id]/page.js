import Details from '@/components/DetailPage/Details';
import Hero from '@/components/DetailPage/Hero';
import Location from '@/components/DetailPage/Location';
import React from 'react';

const page = () => {
    return (
        <div>
            <Hero />
            <div className="grid grid-cols-5 gap-12 my-12">
                <Details />
                <Location />
            </div>
        </div>
    );
};

export default page;