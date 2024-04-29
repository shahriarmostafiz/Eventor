// import mongoose, { Schema } from "mongoose";
// const schema = new Schema(
//     {
//         name: {
//             type: String,
//             required: true

//         },
//         details: {
//             type: String,
//             required: true

//         },
//         location: {
//             type: String,
//             required: true

//         }, imageUrl: {
//             type: String,
//             required: true

//         },
//         interested_ids: {
//             type: Array,
//             required: false

//         }, going_ids: {
//             type: Array,
//             required: false

//         }, swags: {
//             type: Array,
//             required: false

//         }

//     }
// )
// // export const eventModel = mongoose.model.events ?? mongoose.model("events", schema)
// export const eventModel = mongoose.models.events ?? mongoose.model("events", schema);

// /**
//  * name
// "Web Summit"
// details
// "Web Summit is an annual technology conference held in Lisbon, Portugal…"
// location
// "Lisbon, Portugal"
// imageUrl
//  * 
// interested_ids
// Array (empty)

// going_ids
// Array (empty)

// swags

//  */
import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    name: {
        required: true,
        type: String
    },
    details: {
        required: true,
        type: String
    },
    location: {
        required: true,
        type: String
    },
    imageUrl: {
        required: true,
        type: String
    },
    interested_ids: {
        required: false,
        type: Array
    },
    going_ids: {
        required: false,
        type: Array
    },
    swags: {
        type: Array,
        required: false

    }
});


export const eventModel = mongoose.models.events ?? mongoose.model("events", schema);