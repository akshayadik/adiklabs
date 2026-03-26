"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TrackedLink from "./TrackedLink";
import Image from "next/image";

const showcaseItems = [
  {
    id: "arch-reviewer",
    title: "AI Architecture Reviewer",
    tagline: "Automated Governance",
    description: "A production-grade tool that analyzes software design diagrams against industry best practices. It identifies bottlenecks in real-time and suggests architectural improvements.",
    techStack: ["Next.js", "GPT-4o", "Mermaid.js", "Tailwind CSS"],
    highlights: [
      "Real-time UML analysis",
      "Automated design pattern detection",
      "Cost-optimized inference tokens"
    ],
    image: "/ai-reviewer-terminal.png",
    href: "/content/case-study/ai-architecture-review",
    color: "bg-blue/5"
  },
  {
    id: "code-reviewer",
    title: "Archon: AI Code Reviewer",
    tagline: "Engineering Guardrails",
    description: "A multi-agent system designed for complex task decomposition. Utilizes a supervisor-worker topology to manage long-running event-driven processes.",
    techStack: ["Python", "LangGraph", "FastAPI", "Redis"],
    highlights: [
      "Context-Aware Analysis (Repo-Tree Injection)",
      "Stateless & Privacy-First Engine",
      "Deep Performance Auditing"
    ],
    image: "/archon.png", // Replace with your project screenshot
    href: "/content/case-study/archon",
    color: "bg-violet/5"
  }
];

export default function AIShowcaseSlider() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="relative w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={`rounded-3xl p-8 md:p-12 ${showcaseItems[current].color} border border-gray-100`}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue mb-4 block">
                {showcaseItems[current].tagline}
              </span>
              <h3 className="text-3xl font-bold text-primary mb-6">
                {showcaseItems[current].title}
              </h3>
              <p className="text-muted mb-8 leading-relaxed">
                {showcaseItems[current].description}
              </p>
              
              <div className="mb-8">
                <h4 className="text-sm font-bold text-primary uppercase mb-3">Core Capabilities</h4>
                <ul className="grid grid-cols-1 gap-2">
                  {showcaseItems[current].highlights.map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-primary/80">
                      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-10">
                {showcaseItems[current].techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-muted">
                    {tech}
                  </span>
                ))}
              </div>

              <TrackedLink
                href={showcaseItems[current].href}
                eventName="view_showcase_detail"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-primary text-white font-bold hover:bg-opacity-90 transition-all"
              >
                View Live Demo <span className="ml-2">→</span>
              </TrackedLink>
            </div>

            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
              <Image 
                src={showcaseItems[current].image} 
                alt={showcaseItems[current].title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center gap-3 mt-8">
        {showcaseItems.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 transition-all rounded-full ${current === i ? "w-12 bg-blue" : "w-4 bg-gray-200"}`}
          />
        ))}
      </div>
    </div>
  );
}