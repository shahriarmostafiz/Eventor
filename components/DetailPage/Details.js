import React from 'react';
/**
 * name: 'CES (Consumer Electronics Show)',
  details: 'CES is an annual trade show organized by the Consumer Technology Association. It showcases the latest innovations in consumer electronics and technology.',
  location: 'Las Vegas, USA',
  imageUrl: 'https://i.ibb.co/Lg54r1h/CES-obrqg5.webp',
  interested_ids: [],
  going_ids: [],
  swags: [],
  id:
 */

const Details = ({ event }) => {
    return (
        <div className="col-span-3">
            <div className="w-full h-full bg-[#242526] p-6 rounded-lg">
                <h2 className="font-bold text-2xl">Details</h2>
                <div className="my-2 text-[#AEAEAE] space-y-4 prose lg:prose-lg max-w-none">
                    <p className="">
                        {event.details}
                    </p>
                    {
                        event?.swags && <ul className="">
                            {event.swags.map(item => <li key={item} >{item}</li>)}
                            {/* <li>🎉 Free Tshirt</li>
                            <li>🕹️ Networking</li>
                            <li>🎯 Networking</li>
                            <li>📌 Free Foods</li>
                            <li>🚀 Free Wifi</li> */}
                        </ul>
                    }
                </div>
            </div>
        </div>

    );
};

export default Details;