import CategoriesBar from "./components/blog/CategoriesBar";
import HeroSection from "./components/blog/HeroSection";
import SubscribeSection from "./components/common/SubscribeSection";
import PostList from "./components/post/PostList";

export default function Home() {
    return (
        <>
            <HeroSection />
            <CategoriesBar />
            <PostList />
            <SubscribeSection />
        </>
    )
}