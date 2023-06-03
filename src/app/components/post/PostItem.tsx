import Image from "next/image"

export default function PostItem() {
    return (
        <div className="border-2 rounded border-gray-200">
            <Image src="/post.png" alt="post" width={500} height={500} />
            <div className="p-4 border-t-2">
                <div className="flex items-center gap-x-4 text-sm mb-4">
                    <div className="bg-black text-white py-1 px-2 rounded">Blockchain</div>
                    <div className="font-semibold">5 min read</div>
                </div>
                <h1 className="font-bold text-xl mb-4">A begginers guide to blockchain for engineers</h1>
                <p className="opacity-70 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                </p>
                <button className="border-2 border-black py-2 px-5 font-semibold text-sm rounded">Read more</button>
            </div>
        </div>
    )
}