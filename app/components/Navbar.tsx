import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-100">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* LOGO - Corrected weights and colors */}
                <div className="text-2xl font-bold tracking-tight">
                    <span className="text-primary font-bold">Adik</span>
                    <span className="bg-gradient-to-r from-violet to-blue bg-clip-text text-transparent font-semibold">
                        Labs
                    </span>
                </div>

                {/* NAV LINKS - Using muted color */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
                    <Link href="/" className="hover:text-primary transition">Home</Link>
                    <Link href="/architecture" className="hover:text-primary transition">Architecture</Link>
                    <Link href="/ai-systems" className="hover:text-primary transition">AI Systems</Link>
                    {/* ... other links */}
                </div>

                {/* CTA - Updated to Primary Blue */}
                <div className="hidden md:block">
                    <Link
                        href={{ pathname: "/", hash: "contact" }}
                        className="px-5 py-2.5 rounded-lg bg-blue text-white text-sm font-semibold hover:opacity-90 transition shadow-sm"
                    >
                        Contact
                    </Link>
                </div>

            </div>
        </nav>
    );
}