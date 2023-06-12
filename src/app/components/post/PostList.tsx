import { Post } from "@prisma/client";
import PostItem from "./PostItem";

export default function PostList({ posts }: { posts: Post[] }) {
    return (
        <section className="container mx-auto mt-10 grid grid-cols-3 gap-10">
            {posts.map((post) => (
                <PostItem key={post.id} id={post.id} title={post.title} body={post.body} readTime={post.readTime} category={post?.category?.name} />
            ))}
        </section>
    )
}