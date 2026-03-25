"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      interest: formData.get("interest"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-bg pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Work With Me</h1>
          <p className="text-lg text-muted">Let's build scalable systems and digital authority together.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl"
        >
          {status === "success" ? (
            <div className="text-center py-10">
              <div className="text-4xl mb-4">🚀</div>
              <h2 className="text-2xl font-bold text-primary mb-2">Message Sent!</h2>
              <p className="text-muted">Thanks for reaching out. I'll get back to you shortly.</p>
              <button 
                onClick={() => setStatus("idle")}
                className="mt-6 text-blue font-semibold hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">Name</label>
                  <input
                    required
                    name="name"
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue/20 outline-none transition"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">Email</label>
                  <input
                    required
                    name="email"
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue/20 outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-primary mb-2">I'm interested in...</label>
                <select
                  name="interest"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue/20 outline-none transition bg-white"
                >
                  <option value="AI Architecture">AI Architecture Review</option>
                  <option value="Scalable Systems">Scalable Systems Design</option>
                  <option value="Digital Authority">Personal Branding/Authority</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-primary mb-2">Message</label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue/20 outline-none transition"
                  placeholder="Tell me about your project or goals..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 rounded-xl bg-blue text-white font-bold shadow-lg shadow-blue/20 hover:bg-opacity-90 transition-all disabled:opacity-50"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {status === "error" && (
                <p className="text-red-500 text-center text-sm">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </main>
  );
}