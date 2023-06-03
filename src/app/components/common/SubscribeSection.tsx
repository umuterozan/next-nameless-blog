export default function SubscribeSection() {
    return (
        <section className="container mx-auto flex items-center justify-between mt-20">
            <div>
                <h1 className="font-bold text-3xl">Stay up to date !</h1>
                <p className="font-semibold mt-6">Subscribe to our newsletter to get inbox notifications.</p>
            </div>
            <div>
                <h6 className="font-semibold">Sign up to our newsletter !</h6>
                <div className="flex items-center relative mt-4">
                    <input className="border-2 border-gray-200 py-2 px-3 rounded text-sm" type="email" placeholder="Enter your email" />
                    <button className="bg-[#444bff] text-white py-2 px-5 rounded text-sm font-light">Subscribe</button>
                </div>
            </div>
        </section>
    )
}