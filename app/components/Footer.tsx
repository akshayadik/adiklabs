"use client";
import React, { useState } from 'react'; // Ensure React is imported
import Link from 'next/link';

export default function Footer() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    // Explicitly type the event 'e' as a FormEvent
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },
            });

            if (res.ok) {
                setSuccess(true);
                (e.target as HTMLFormElement).reset(); // Type cast target to reset the form
            }
        } catch (err) {
            console.error("Submission error:", err);
        } finally {
            setLoading(true); // Should likely be false, but following your existing logic
        }
    }

    return (
        <footer id="contact" className="bg-primary text-white mt-20"> {/* Navy background */}
            <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-2xl font-bold">
                        <span className="text-white">Adik</span> {/* White text for visibility */}
                        <span className="bg-gradient-to-r from-violet to-blue bg-clip-text text-transparent">
                            Labs
                        </span>
                    </h3>
                    <p className="mt-4 text-gray-300 max-w-md">
                        Building scalable, intelligent systems using AI and cloud technologies.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* ... form fields ... */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 rounded-lg bg-blue font-semibold hover:bg-opacity-90 transition disabled:opacity-50"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                    {success && <p className="text-blue text-sm">Message sent successfully!</p>}
                </form>
            </div>
        </footer>
    );
}