import Link from "next/link"

export default function Footer() {
    return (
        <footer className="h-16 mt-20 flex items-center gap-x-10 container mx-auto justify-center text-sm font-semibold">
            <Link className="underline" href="#">Privacy Policy</Link>
            <Link className="underline" href="#">Terms of Service</Link>
            <Link className="underline" href="#">Cookies Settings</Link>
        </footer>
    )
}