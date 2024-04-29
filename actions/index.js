"use server"

import { UpdateGoing, findUserByCred, registerUser, updateInterested } from "@/db/queries"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function registration(formData) {

    const user = Object.fromEntries(formData)
    const created = await registerUser(user)
    redirect("/login")
}
export async function loginAuthentication(formData) {
    try {
        const cred = {}
        cred.email = formData.get("email")
        cred.password = formData.get("password")
        const found = await findUserByCred(cred)
        return found

    } catch (error) {
        throw error
    }


    // if (found) {
    //     redirect("/")
    // }
    // else {
    //     throw new Error(`User with the email ${formData.get(email)} is not found `)
    // }

}
export async function handleInterest(eventId, userId) {
    try {
        await updateInterested(userId.toString(), eventId)
    } catch (error) {
        throw error
    }
    revalidatePath("/")
}
export async function handleGoing(eventId, user) {
    // console.log(eventId);
    try {
        await UpdateGoing(eventId, user._id.toString())
    } catch (error) {
        throw error
    }
    revalidatePath("/")
    redirect("/")

}