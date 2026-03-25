"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import TrackedLink from "./TrackedLink";

const slides = [
    {
        id: "personal",
        tagline: "System builder for founders who want scale, not chaos.",
        title: (
            <>
                Hi, I’m <span className="text-violet">Founder @ AdikLabs</span>
            </>
        ),
        subtitle: "I design scalable AI & system architectures that turn founders into operators of predictable, high-leverage businesses.",
        description: "Turning ideas into structured, scalable businesses using technology, strategy, and systems.",
        ctaPrimary: { text: "Let’s build your scalable system", href: "/contact", event: "click_work_with_me" },
        ctaSecondary: { text: "Explore AdikLabs", href: "/impact", event: "click_explore_labs" },
    },
    {
        id: "authority",
        tagline: "Authority Block",
        title: "Why listen to me?",
        points: [
            "I help founders build scalable systems that scale businesses beyond dependency",
            "Built using the AdikLabs Scaling System™ and combine technology + strategy to create leverage",
            "I focus on long-term growth, not short-term hacks",
        ],
        ctaPrimary: { text: "View Impact", href: "/impact", event: "click_authority_impact" },
    },
    {
        id: "signature",
        tagline: "AdikLabs Scaling System™",
        title: "The 3-Step Scaling Framework",
        steps: [
            { label: "1. Diagnose 🔍", desc: "Identify bottlenecks, gaps, and growth blockers" },
            { label: "2. Build ⚙️", desc: "Create systems, automation, and structure" },
            { label: "3. Scale 🚀", desc: "Optimize and expand for consistent growth" },
        ],
        ctaPrimary: { text: "Start Your Journey", href: "/case-study", event: "click_start_journey" },
    },
    {
        id: "brand",
        content: (
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-4">
                    <span className="text-primary">Adik</span>
                    <span className="bg-gradient-to-r from-violet to-blue bg-clip-text text-transparent"> Labs</span>
                </h1>
                <p className="text-xl font-medium text-muted uppercase tracking-widest mb-6">
                    Scalable AI & Cloud Systems
                </p>
                <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed mb-10">
                    Building scalable, intelligent systems using AI and cloud technologies.
                </p>
                <div className="flex justify-center gap-4">
                    <Link
                        href="/architecture"
                        className="px-6 py-3 rounded-xl bg-blue text-white font-semibold shadow-md hover:bg-opacity-90 transition"
                    >
                        Explore Architecture
                    </Link>
                    <Link
                        href="/insights"
                        className="px-6 py-3 rounded-xl border border-gray-300 text-primary font-medium hover:bg-white transition"
                    >
                        Read Insights
                    </Link>
                </div>
            </div>
        ),
    },
];

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);

    // Auto-play timer
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 10000); // 10 seconds per slide for better readability
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-[700px] flex items-center overflow-hidden bg-bg">
            {/* Background Gradients from original Hero */}
            <div className="absolute inset-0 -z-10">
                <div className="w-full h-[400px] bg-gradient-to-r from-violet/10 to-blue/10 blur-3xl opacity-50"></div>
            </div>

            <div className="max-w-6xl mx-auto px-6 w-full py-20">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                        className="w-full"
                    >
                        {slides[current].id === "brand" ? (
                            // Original Brand Content Slide
                            slides[current].content
                        ) : (
                            // New Personal/Authority/System Slides
                            <div className="flex flex-col items-center text-center">
                                <span className="text-sm font-bold tracking-[0.2em] text-blue uppercase mb-6">
                                    {slides[current].tagline}
                                </span>

                                <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-primary leading-tight mb-8">
                                    {slides[current].title}
                                </h2>

                                {slides[current].id === "personal" && (
                                    <div className="max-w-2xl">
                                        <p className="text-xl md:text-2xl font-medium text-muted mb-4">
                                            {slides[current].subtitle}
                                        </p>
                                        <p className="text-lg text-muted leading-relaxed">
                                            {slides[current].description}
                                        </p>
                                    </div>
                                )}

                                {slides[current].id === "authority" && (
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-left w-full max-w-4xl">
                                        {slides[current].points?.map((point, i) => (
                                            <div key={i} className="p-6 rounded-2xl bg-white/50 border border-violet/10 backdrop-blur-sm">
                                                <div className="w-8 h-8 rounded-full bg-violet/10 text-violet flex items-center justify-center mb-4 font-bold">✓</div>
                                                <p className="font-medium text-primary">{point}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {slides[current].id === "signature" && (
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 w-full max-w-4xl text-left">
                                        {slides[current].steps?.map((step, i) => (
                                            <div key={i} className="p-6 rounded-2xl bg-blue/5 border border-blue/10">
                                                <h3 className="text-lg font-bold text-blue mb-2">{step.label}</h3>
                                                <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* CTAs for new slides using TrackedLink */}
                                <div className="mt-10 flex flex-wrap justify-center gap-4">
                                    {slides[current].ctaPrimary && (
                                        <TrackedLink
                                            href={slides[current].ctaPrimary.href}
                                            eventName={slides[current].ctaPrimary.event}
                                            eventCategory="hero_slider"
                                            className="px-8 py-4 rounded-xl bg-blue text-white font-bold shadow-lg hover:bg-opacity-90 transition-all"
                                        >
                                            {slides[current].ctaPrimary.text}
                                        </TrackedLink>
                                    )}
                                    {slides[current].ctaSecondary && (
                                        <TrackedLink
                                            href={slides[current].ctaSecondary.href}
                                            eventName={slides[current].ctaSecondary.event}
                                            eventCategory="hero_slider"
                                            className="px-8 py-4 rounded-xl border border-gray-300 text-primary font-bold hover:bg-white transition-all"
                                        >
                                            {slides[current].ctaSecondary.text}
                                        </TrackedLink>
                                    )}
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Slide Indicators */}
                <div className="flex justify-center gap-3 mt-16">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`h-1.5 transition-all rounded-full ${current === i ? "w-10 bg-blue" : "w-4 bg-gray-300"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}