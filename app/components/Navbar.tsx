"use client"; // Required for interactivity (useState)

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-100">
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    
                    {/* LOGO - Hydration fixed (no space between spans) */}
                    <div className="text-2xl font-bold tracking-tight">
                        <span className="text-primary font-bold">Adik</span><span className="bg-gradient-to-r from-violet to-blue bg-clip-text text-transparent font-semibold">Labs</span>
                    </div>

                    {/* DESKTOP NAV - Hidden on mobile, flex on medium+ screens */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
                        <Link href="/" className="hover:text-primary transition">Home</Link>        
                        <Link href="/architecture" className="hover:text-primary transition">Architecture</Link>
                        <Link href="/ai-systems" className="hover:text-primary transition">AI Systems</Link>
                        <Link href="/impact" className="hover:text-primary transition">Impact</Link>
                        <Link href="/insights" className="hover:text-primary transition">Insights</Link>
                        <Link href="/case-study" className="hover:text-primary transition">AI Showcase</Link>
                        <Link href="/about" className="hover:text-primary transition">About Us</Link>
                    </div>

                    {/* DESKTOP CTA - Hidden on mobile */}
                    <div className="hidden md:block">
                        <Link
                            href={{ pathname: "/", hash: "contact" }}
                            className="px-5 py-2.5 rounded-lg bg-blue text-white text-sm font-semibold hover:opacity-90 transition shadow-sm"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* MOBILE MENU BUTTON - Visible only on small screens */}
                    <div className="md:hidden">
                        <button 
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-primary p-2 focus:outline-none"
                            aria-label="Toggle Menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* MOBILE NAV DROPDOWN - Visible only when toggled */}
                {isOpen && (
                    <div className="md:hidden mt-4 pb-4 space-y-4 border-t border-gray-100 pt-4 flex flex-col animate-in slide-in-from-top duration-300">
                        <Link 
                            href="/" 
                            onClick={() => setIsOpen(false)}
                            className="text-sm font-medium text-muted hover:text-primary"
                        >
                            Home
                        </Link>
                        <Link 
                            href="/architecture" 
                            onClick={() => setIsOpen(false)}
                            className="text-sm font-medium text-muted hover:text-primary"
                        >
                            Architecture
                        </Link>
                        <Link 
                            href="/ai-systems" 
                            onClick={() => setIsOpen(false)}
                            className="text-sm font-medium text-muted hover:text-primary"
                        >
                            AI Systems
                        </Link>
                        <Link 
                            href="/impact" 
                            onClick={() => setIsOpen(false)}
                            className="text-sm font-medium text-muted hover:text-primary"
                        >
                            Impact
                        </Link>
                        <Link 
                            href="/insights" 
                            onClick={() => setIsOpen(false)}
                            className="text-sm font-medium text-muted hover:text-primary"
                        >
                            Insights
                        </Link>
                        <Link 
                            href="/case-study" 
                            onClick={() => setIsOpen(false)}
                            className="text-sm font-medium text-muted hover:text-primary"
                        >
                            AI Showcase
                        </Link>
                        <Link
                            href={{ pathname: "/", hash: "contact" }}
                            onClick={() => setIsOpen(false)}
                            className="px-5 py-2.5 rounded-lg bg-blue text-white text-sm font-semibold text-center hover:opacity-90 transition"
                        >
                            Contact
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}
