"use client"

import Link from "next/link"
import { useSession } from "next-auth/react"

export default function Header() {
    const { data: session } = useSession()

    return (
        <header className="h-16">
            <div className="h-full flex items-center justify-between container mx-auto">
                <div className="text-[#444bff]">
                    <Link className="font-bold" href="/">nameless</Link>
                </div>
                <div className="flex items-center gap-x-16">
                    <Link href="/">Home</Link>
                    <Link href="/">Our story</Link>
                    <Link href="/">Blog</Link>
                    <Link href="/">Contact</Link>
                </div>
                <div className="flex items-center gap-x-10">
                    <Link href={session ? "/new-post" : "/login"}>{session ? "New Post" : "Login"}</Link>
                    <Link className="bg-[#444bff] py-2 px-4 rounded text-white" href={session ? "/sign-out" : "/sign-up"}>{session ? "Sign out" : "Sign up"}</Link>
                </div>
            </div>
        </header>
    )
}