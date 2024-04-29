"use server"

import { findUserByCred, registerUser, updateInterested } from "@/db/queries"
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
    async function handleInterested(eventId, userId) {
        try {
            await updateInterested(userId, eventId)
        } catch (error) {
            throw error
        }
    }

    // if (found) {
    //     redirect("/")
    // }
    // else {
    //     throw new Error(`User with the email ${formData.get(email)} is not found `)
    // }

}