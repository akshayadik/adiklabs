"use client";
import React, { useState, useEffect } from 'react';

export default function Footer() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [year, setYear] = useState<number | string>("");

    // Fix hydration: Only calculate year on the client
    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);

        try {
            const formData = new FormData(e.currentTarget);
            const data = Object.fromEntries(formData.entries());

            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setSuccess(true);
                (e.target as HTMLFormElement).reset();
            } else {
                const errorData = await res.json();
                alert(`Error: ${errorData.error || "Failed to send message"}`);
            }
        } catch (err) {
            console.error("Submission error:", err);
            alert("Network error. Please try again later.");
        } finally {
            // Ensure button is re-enabled regardless of success/failure
            setLoading(false);
        }
    }

    return (
        <footer id="contact" className="bg-primary text-white mt-20">
            <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-2xl font-bold">
                        {/* Fix hydration: No whitespace between spans */}
                        <span className="text-white">Adik</span><span className="bg-gradient-to-r from-violet to-blue bg-clip-text text-transparent">Labs</span>
                    </h3>
                    <p className="mt-4 text-gray-300 max-w-md">
                        Scalable AI & Cloud Systems.
                        Building scalable, intelligent systems using AI and cloud technologies.
                    </p>
                    <p className="mt-6 text-sm text-gray-500">
                        © {year} AdikLabs
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                        <input name="name" placeholder="Name" required className="p-3 rounded-lg bg-white/10 border border-white/20 focus:border-blue outline-none transition" />
                        <input name="email" type="email" placeholder="Email" required className="p-3 rounded-lg bg-white/10 border border-white/20 focus:border-blue outline-none transition" />
                    </div>
                    <select name="interest" required className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-blue outline-none transition">
                        <option value="" className="text-black">Select Interest</option>
                        <option value="AI Systems" className="text-black">AI Systems</option>
                        <option value="Cloud Architecture" className="text-black">Cloud Architecture</option>
                        <option value="Collaboration" className="text-black">Collaboration</option>
                        <option value="Suggestion" className="text-black">Suggestion</option>
                    </select>
                    <textarea name="message" placeholder="How can I help you?" rows={4} required className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-blue outline-none transition" />
                    
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 rounded-lg bg-blue font-semibold hover:bg-opacity-90 transition disabled:opacity-50"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                    {success && <p className="text-blue text-sm mt-2">Message sent! I'll get back to you shortly. 🚀</p>}
                </form>
            </div>
        </footer>
    );
}