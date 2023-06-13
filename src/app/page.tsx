import { PageProps } from "../../.next/types/app/page";
import CategoriesBar from "./components/blog/CategoriesBar";
import HeroSection from "./components/blog/HeroSection";
import SubscribeSection from "./components/common/SubscribeSection";
import PostList from "./components/post/PostList";
import { prisma } from "@/db";
import { Post, Category } from "@prisma/client";
import { Suspense } from "react";
import LoadingSkeleton from "./components/post/LoadingSkeleton";

async function getCategories() {
    return await prisma.category.findMany()
}

async function getPosts() {
    return await prisma.post.findMany({
        include: {
            category: {
                select: {
                    name: true
                }
            }
        },
    })
}

export default async function Home({ searchParams }: PageProps) {
    const categories: Category[] = await getCategories()
    let posts: Post[] = await getPosts()

    if (searchParams?.category) {
        posts = posts.filter((post) => post?.category?.name === searchParams?.category)
    }

    return (
        <>
            <HeroSection />
            <CategoriesBar categories={categories} searchParam={searchParams?.category} />
            <Suspense fallback={<LoadingSkeleton postCount={posts.length} />}>
                <PostList posts={posts} />
            </Suspense>
            <SubscribeSection />
        </>
    )
}