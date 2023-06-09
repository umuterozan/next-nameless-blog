"use client"

import { signIn, useSession } from "next-auth/react"
import { useState } from "react"
import { redirect } from "next/navigation"

export default function LoginPage() {
    const { data: session } = useSession()
    if (session) return redirect("/")
    
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setLoading(true)
        const data = new FormData(e.currentTarget)
        
        const signInResponse: any = await signIn("credentials", {
            username: data.get("username"),
            password: data.get("password"),
            redirect: false
        })

        setLoading(false)
        if (signInResponse && signInResponse.error) {
            return setError("Your credentials is wrong!")
        }
    }

    return (
        <section className="container mx-auto mt-20">
            <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
                {error && (
                    <div className="mb-6 bg-red-500 text-white rounded py-2 px-4 text-sm">
                        {error}
                    </div>
                )}
                <div className="flex flex-col gap-y-2 mb-6">
                    <label className="text-sm" htmlFor="username">Username</label>
                    <input className="py-2 px-4 border-2 border-gray-200 rounded" placeholder="Username" type="text" name="username" id="username" required />
                </div>
                <div className="flex flex-col gap-y-2 mb-6">
                    <label className="text-sm" htmlFor="password">Password</label>
                    <input className="py-2 px-4 border-2 border-gray-200 rounded" placeholder="Password" type="password" name="password" id="password" required />
                </div>
                <button className="bg-[#444bff] py-2 px-4 rounded text-white w-full disabled:bg-gray-300 disabled:cursor-wait disabled:text-black" type="submit" disabled={loading}>{loading ? "Loading..." : "Login!"}</button>
            </form>
        </section>
    )
}