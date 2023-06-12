import CategoriesBar from "./components/blog/CategoriesBar";
import HeroSection from "./components/blog/HeroSection";
import SubscribeSection from "./components/common/SubscribeSection";
import PostList from "./components/post/PostList";
import { prisma } from "@/db";
import { Post } from "@prisma/client";

async function getPosts() {
    return await prisma.post.findMany({
        include: {
            category: {
                select: {
                    name: true
                }
            }
        }
    })
}

export default async function Home() {
    const posts: Post[] = await getPosts()
    
    return (
        <>
            <HeroSection />
            <CategoriesBar />
            <PostList posts={posts} />
            <SubscribeSection />
        </>
    )
}