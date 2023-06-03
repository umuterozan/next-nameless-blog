import PostItem from "./PostItem";

const mockDataPosts = [
    {
        title: "A begginers guide to blockchain for engineers",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        readTime: "5 min read",
    },
    {
        title: "A begginers guide to blockchain for engineers",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        readTime: "5 min read",
    },
    {
        title: "A begginers guide to blockchain for engineers",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        readTime: "5 min read",
    },
    {
        title: "A begginers guide to blockchain for engineers",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        readTime: "5 min read",
    },
    {
        title: "A begginers guide to blockchain for engineers",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        readTime: "5 min read",
    },
    {
        title: "A begginers guide to blockchain for engineers",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        readTime: "5 min read",
    },
    {
        title: "A begginers guide to blockchain for engineers",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        readTime: "5 min read",
    },
    {
        title: "A begginers guide to blockchain for engineers",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        readTime: "5 min read",
    },
    {
        title: "A begginers guide to blockchain for engineers",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        readTime: "5 min read",
    },
]

export default function PostList() {
    return (
        <section className="container mx-auto mt-10 grid grid-cols-3 gap-10">
            {mockDataPosts.map((post, index) => (
                <PostItem key={index} />
            ))}
        </section>
    )
}