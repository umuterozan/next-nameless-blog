"use client"

import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function SignOut() {
    const { data: session} = useSession({
        required: true,
        onUnauthenticated() {
            redirect("/login")
        }
    })
    if (!session) return redirect("/login")

    return (
        <section className="container mx-auto mt-20 flex justify-center">
            <div className="max-w-sm flex flex-col justify-center">
                <div className="bg-gray-200 rounded py-4 px-8 text-center text-2xl">Are you sure to sign out?</div>
                <button onClick={() => signOut()} className="bg-red-500 py-2 px-4 text-center text-white">Yes, sign out!</button>
            </div>
        </section>
    )
}