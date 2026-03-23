import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* LOGO */}
                <div className="text-xl font-bold tracking-tight">
                    <span className="text-primary">Adik</span>
                    <span className="bg-gradient-to-r from-violet to-blue bg-clip-text text-transparent">
                        Labs
                    </span>
                </div>

                {/* NAV LINKS */}
                <div className="hidden md:flex items-center gap-8 text-sm text-gray-700">
                    <Link href="/">Home</Link>
                    <Link href="/architecture">Architecture</Link>
                    <Link href="/ai-systems">AI Systems</Link>
                    <Link href="/insights">Insights</Link>
                    <Link href="/impact">Impact</Link>
                </div>

                {/* CTA */}
                <div className="hidden md:block">
                    <Link
                        href={{ pathname: "/", hash: "contact" }}
                        className="px-4 py-2 rounded-lg bg-primary text-white text-sm hover:opacity-90"
                    >
                        Contact
                    </Link>
                </div>

            </div>
        </nav>
    );
}