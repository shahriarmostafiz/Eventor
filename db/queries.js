// const { eventModel } = require("@/models/dataModels");
import { eventModel } from "@/models/dataModels"
import { userModel } from "@/models/userModel";
import connectMongo, { dbConnect } from "@/services/mongo";
import { replaceId, replaceObjectId } from "@/utils/dataUtils";
import mongoose from "mongoose";

export async function getAllEvents() {
    await connectMongo()
    const allEvents = await eventModel.find().lean()

    return replaceId(allEvents)
}
export async function getAEvent(id) {
    await connectMongo()
    const aEvent = await eventModel.findById(id).lean()
    return replaceObjectId(aEvent)

    // return replaceId(allEvents)
}
export async function registerUser(user) {
    await connectMongo()
    return userModel.create(user)

}
export async function findUserByCred(cred) {
    await connectMongo()
    const user = userModel.findOne(cred).lean()
    return user
}
export async function updateInterested(userId, eventId) {
    const event = await eventModel.findById(eventId)
    if (event) {
        const foundUser = event.interested_ids.find(id => id.toString() === userId)
        if (foundUser) {
            event.interested_ids.pull(new mongoose.Types.ObjectId(userId))
        } else {
            event.interested_ids.push(new mongoose.Types.ObjectId(userId))
        }
        event.save()

    }
}