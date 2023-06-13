import { Category } from "@prisma/client"
import Link from "next/link"

export default function CategoriesBar({ categories, searchParam }: { categories: Category[], searchParam: string }) {
    return (
        <section className="container mx-auto flex justify-center mt-10">
            <div className="py-2 px-4 border border-gray-200 flex items-center gap-x-10">
                <Link className={`py-2 px-4 ${!searchParam ? "bg-[#444bff] text-white rounded" : ""}`} href="/">View all</Link>
                {categories.map((category) => (
                    <Link className={`py-2 px-4 ${category.name === searchParam ? "bg-[#444bff] text-white rounded" : ""}`} key={category.id} href={`?category=${category.name}`}>{category.name}</Link>
                ))}
            </div>
        </section>
    )
}