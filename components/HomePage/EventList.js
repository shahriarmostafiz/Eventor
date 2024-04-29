import React from 'react';
import EventCard from './EventCard';
import { getAllEvents } from '@/db/queries';

const EventList = async () => {
    const allEvents = await getAllEvents()

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {
                allEvents.map(aEvent => <EventCard key={aEvent.id} aEvent={aEvent} />)
            }

        </div>
    );
};

export default EventList;