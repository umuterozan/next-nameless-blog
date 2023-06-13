import { Post } from "@prisma/client";
import PostItem from "./PostItem";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export default async function PostList({ posts }: { posts: Post[] }) {
    await wait(1500)

    return (
        <section className="container mx-auto mt-10 grid grid-cols-3 gap-10">
            {posts.map((post) => (
                <PostItem key={post.id} id={post.id} title={post.title} body={post.body} readTime={post.readTime} category={post?.category?.name} />
            ))}
        </section>
    )
}