import { prisma } from '@/db';
import { redirect } from "next/navigation"
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

async function createUser(data: FormData) {
    'use server'
    await prisma.user.create({
        data: {
            username: data.get('username') as string,
			password: data.get('password') as string,
        }
    })

    redirect("/login")
}

export default async function SignupPage() {
    const session = await getServerSession(authOptions)
    if (session) return redirect("/")
    
    return (
        <section className="container mx-auto mt-20">
            <form className="max-w-sm mx-auto" action={createUser}>
                <div className="flex flex-col gap-y-2 mb-6">
                    <label className="text-sm" htmlFor="username">Username</label>
                    <input className="py-2 px-4 border-2 border-gray-200 rounded" placeholder="Username" type="text" name="username" id="username" required />
                </div>
                <div className="flex flex-col gap-y-2 mb-6">
                    <label className="text-sm" htmlFor="password">Password</label>
                    <input className="py-2 px-4 border-2 border-gray-200 rounded" placeholder="Password" type="password" name="password" id="password" required />
                </div>
                <button className="bg-[#444bff] py-2 px-4 rounded text-white w-full" type="submit">Sign up!</button>
            </form>
        </section>
    )
}