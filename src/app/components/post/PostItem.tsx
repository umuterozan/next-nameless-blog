import Image from "next/image";
import Link from "next/link";

type props = {
    id: number;
    title: string;
    body: string;
    readTime: string;
    category: string;
};

export default function PostItem({ id, title, body, readTime, category }: props) {
    return (
        <div className="border-2 rounded border-gray-200">
            <Image src="/post.png" alt="post" width={500} height={500} />
            <div className="p-4 border-t-2">
                <div className="flex items-center gap-x-4 text-sm mb-4">
                    <div className="bg-black text-white py-1 px-2 rounded">
                        {category}
                    </div>
                    <div className="font-semibold">{readTime} read</div>
                </div>
                <h1 className="font-bold text-xl mb-4">
                    {title}
                </h1>
                <p className="opacity-70 mb-4">
                    {body}
                </p>
                <Link href={`/posts/${id}`}>
                    <button className="border-2 border-black py-2 px-5 font-semibold text-sm rounded">
                        Read more
                    </button>
                </Link>
            </div>
        </div>
    );
}
