"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Footer() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    // 1. Manage the year in state to prevent server/client mismatch
    const [year, setYear] = useState<number | string>("");

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        // ... (rest of your existing handleSubmit logic)
        setLoading(false);
    }

    return (
        <footer id="contact" className="bg-primary text-white mt-20">
            <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-2xl font-bold">
                        {/* 2. CRITICAL: Keep spans on the same line to remove whitespace text nodes */}
                        <span className="text-white">Adik</span><span className="bg-gradient-to-r from-violet to-blue bg-clip-text text-transparent">Labs</span>
                    </h3>
                    <p className="mt-4 text-gray-300 max-w-md">
                        Scalable AI & Cloud Systems.
                        Building scalable, intelligent systems using AI and cloud technologies.
                    </p>
                    <p className="mt-6 text-sm text-gray-500">
                        {/* 3. Use the year from state */}
                        © {year} AdikLabs
                    </p>
                </div>

                {/* ... CONTACT FORM ... */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">
                        Get in touch
                    </h4>

                    <form onSubmit={handleSubmit} className="space-y-4">

                        <input
                            name="name"
                            placeholder="Your name"
                            required
                            className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-violet-500 outline-none"
                        />

                        <input
                            name="email"
                            type="email"
                            placeholder="Your email"
                            required
                            className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-violet-500 outline-none"
                        />

                        <select
                            name="interest"
                            required
                            className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-violet-500 outline-none"
                        >
                            <option value="">Select your interest</option>
                            <option value="AI Systems">AI Systems</option>
                            <option value="Cloud Architecture">Cloud Architecture</option>
                            <option value="System Design Consulting">System Design Consulting</option>
                            <option value="Collaboration">Collaboration</option>
                        </select>

                        <textarea
                            name="message"
                            rows={4}
                            placeholder="Your message"
                            required
                            className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-violet-500 outline-none"
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 rounded-lg bg-blue font-semibold hover:bg-opacity-90 transition disabled:opacity-50"
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>

                        {success && (
                            <p className="text-green-400 text-sm">
                                Message sent successfully 🚀
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </footer>
    );
}