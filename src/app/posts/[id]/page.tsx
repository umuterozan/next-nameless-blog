import { prisma } from "@/db"
import Image from "next/image"
import { PageProps } from "../../../../.next/types/app/posts/[id]/page"

async function getPost(postId: number) {
    return await prisma.post.findFirst({
        where: {
            id: postId,
        },
        include: {
            category: {
                select: {
                    name: true,
                }
            }
        }
    })
}

export default async function PostPage({ params }: PageProps) {
    const post = await getPost(Number(params?.id))

    return (
        <section className="container mx-auto mt-20">
            <div className="rounded border-gray-200 max-w-5xl mx-auto">
                <Image className="mx-auto" src="/post.png" alt="post" width={500} height={500} />
                <div className="p-8 border-t-2">
                    <div className="mb-4 flex items-center justify-between">
                        <div className="flex items-center gap-x-4 text-sm">
                            <div className="bg-black text-white py-1 px-2 rounded">
                                {post?.category?.name}
                            </div>
                            <div className="font-semibold">{post?.readTime} read</div>
                        </div>
                        <div className="bg-[#444bff] text-white py-1 px-2 rounded text-sm">
                            Created at {post?.createdAt.toLocaleString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                        </div>
                    </div>
                    <h1 className="font-bold text-xl mb-4">
                        {post?.title}
                    </h1>
                    <p className="opacity-70 mb-4">
                        {post?.body}
                    </p>
                </div>
            </div>
        </section>
    )
}