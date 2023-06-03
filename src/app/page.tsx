import CategoriesBar from "./components/blog/CategoriesBar";
import HeroSection from "./components/blog/HeroSection";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import SubscribeSection from "./components/common/SubscribeSection";
import PostList from "./components/post/PostList";

export default function Home() {
    return (
        <>
            <Header />
            <HeroSection />
            <CategoriesBar />
            <PostList />
            <SubscribeSection />
            <Footer />
        </>
    )
}