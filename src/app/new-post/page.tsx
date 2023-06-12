import { prisma } from "@/db"
import { redirect } from "next/navigation"
import { Category } from "@prisma/client"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"

async function getCategories() {
    return await prisma.category.findMany()
}

async function createPost(data: FormData) {
    'use server'

    await prisma.post.create({
        data: {
            title: data.get("title") as string,
            body: data.get("body") as string,
            readTime: data.get("read_time") as string,
            categoryId: Number(data.get("category")) as number,
			userId: Number(data.get("user_id")) as number,
        }
    })

    redirect("/")
}

export default async function NewPostPage() {
    const session = await getServerSession(authOptions)
    if (!session) return redirect("/")
    const categories: Category[] = await getCategories()

    return (
        <section className="container mx-auto mt-20">
            <form className="max-w-4xl mx-auto" action={createPost}>
                <input type="hidden" name="user_id" id="user_id" value={session?.user?.id} />
                <div className="flex flex-col gap-y-2 mb-6">
                    <label className="text-sm" htmlFor="category">Category</label>
                    <select className="py-2 px-4 border-2 border-gray-200 rounded" name="category" id="category" required>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))}
                    </select>                
                </div>
                <div className="flex flex-col gap-y-2 mb-6">
                    <label className="text-sm" htmlFor="read_time">Read time</label>
                    <input className="py-2 px-4 border-2 border-gray-200 rounded" placeholder="5 min" type="text" name="read_time" id="read_time" required />
                </div>
                <div className="flex flex-col gap-y-2 mb-6">
                    <label className="text-sm" htmlFor="username">Title</label>
                    <input className="py-2 px-4 border-2 border-gray-200 rounded" placeholder="Title" type="text" name="title" id="title" required />
                </div>
                <div className="flex flex-col gap-y-2 mb-6">
                    <label className="text-sm" htmlFor="password">Body</label>
                    <textarea className="py-2 px-4 border-2 border-gray-200 rounded" rows={10} placeholder="Body" name="body" id="body" required />
                </div>
                <button className="bg-[#444bff] py-2 px-4 rounded text-white w-full" type="submit">Create post!</button>
            </form>
        </section>
    )
}