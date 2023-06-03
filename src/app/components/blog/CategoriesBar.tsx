import Link from "next/link"
const mockDataCategories = ["Crypto", "Blockchain", "Announcements", "People", "Engineering", "NFT"]

export default function CategoriesBar() {
    return (
        <section className="container mx-auto flex justify-center mt-10">
            <div className="p-2 border border-gray-200 flex items-center gap-x-10">
                <Link className="bg-[#444bff] text-white py-2 px-4 rounded" href="#">View all</Link>
                {mockDataCategories.map((category, index) => (
                    <Link key={index} href={`?category=${category.toLocaleLowerCase()}`}>{category}</Link>
                ))}
            </div>
        </section>
    )
}