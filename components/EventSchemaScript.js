
const EventSchemaScript = ({ event }) => {
    const eventName = encodeURIComponent(event?.name)
    const formattedData = {


        "@context": "https://schema.org",
        "@type": "EducationEvent",
        "name": eventName,
        "startDate": new Date(),
        "endDate": new Date(),
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "eventStatus": "https://schema.org/EventScheduled",
        "location": {
            "@type": "Place",
            "name": event?.location,
        },
        "image": [
            event?.imageUrl
        ],
        "description": event?.details,


        "organizer": {
            "@type": "Organization",
            "name": "LWS",
            "url": "https://learnwithsumit.com"
        }

    }
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(formattedData)
                }}
            ></script>

        </>
    );
};

export default EventSchemaScript;
import React from 'react';

// const EventSchemaScript = ({event}) => {
//     const eventName = encodeURIComponent(event?.name)
//     const formattedData = {
//         "@context": "https://schema.org",
//         "@type": "EducationalEvent",
//         "name": eventName,
//         "startDate":new Date(),
//         "endDate":new Date(),
//         "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
//         "eventStatus": "https://schema.org/EventScheduled",
//         "location": {
//             "@type": "Place",
//             "name": event?.location,
            
//         },
//         "image": [
//             event?.imageUrl
//         ],
//         "description": event?.details,
      
       
//         "organizer": {
//             "@type": "Organization",
//             "name": "Learn With Sumit",
//             "url": "https://learnwithsumit.com"
//         }
//     }
//     return (
//        <>
//        <script 
//                 type="application/ld+json"
//                 dangerouslySetInnerHTML={{
//                     __html: JSON.stringify(formattedData)
//                 }}
//        />
//        </>
//     );
// };

// export default EventSchemaScript;