"use client";

import { motion } from "framer-motion";
import Section from "../components/Section";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-bg pt-32 pb-20">
      <Section title="About AdikLabs">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <span className="text-blue font-bold tracking-widest uppercase text-sm mb-4 block">
              The Architect Behind AdikLabs
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-8">
              I build systems that <span className="text-violet">outlast</span> the builder.
            </h1>
            <p className="text-xl text-muted leading-relaxed max-w-2xl">
              I’m Akshay. I help founders and technical leaders move from "doing everything" 
              to "owning a system" using AI, automation, and structured growth architecture.
            </p>
          </motion.div>

          {/* The Story / Philosophy Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg text-muted"
            >
              <h2 className="text-2xl font-bold text-primary">The "Dependency" Problem</h2>
              <p>
                Most businesses fail to scale not because they lack talent, but because 
                they are built on **individual heroics** rather than **repeatable systems**. 
              </p>
              <p>
                When a founder is the bottleneck, the business has a ceiling. My mission 
                through **AdikLabs** is to shatter that ceiling by implementing 
                architectures that provide true leverage.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm"
            >
              <h3 className="text-xl font-bold text-primary mb-4">My Core Pillars</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-violet font-bold">01.</span>
                  <span><strong>Technology:</strong> Using Agentic AI and event-driven workflows to automate the mundane.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-violet font-bold">02.</span>
                  <span><strong>Strategy:</strong> Designing systems that align with long-term business objectives, not short-term hacks.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-violet font-bold">03.</span>
                  <span><strong>Authority:</strong> Building digital presence through technical proof and structured insights.</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Current Focus / Status */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-t border-gray-100 pt-16"
          >
            <h2 className="text-3xl font-bold text-primary mb-8">Beyond the Code</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold text-violet mb-2">Currently Building</h4>
                <p className="text-sm text-muted">Scaling AdikLabs and developing AI-driven architectural review tools.</p>
              </div>
              <div>
                <h4 className="font-bold text-violet mb-2">Technical Focus</h4>
                <p className="text-sm text-muted">Multi-agent orchestration, Scalable Microservices, and FinOps for AI.</p>
              </div>
              <div>
                <h4 className="font-bold text-violet mb-2">Philosophy</h4>
                <p className="text-sm text-muted">Simplicity is the ultimate sophistication in system design.</p>
              </div>
            </div>
          </motion.div>

          {/* CTA Link */}
          <motion.div 
            className="mt-20 p-10 bg-blue/5 rounded-3xl border border-blue/10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-4">Ready to build something scalable?</h3>
            <p className="mb-8 text-muted">Explore my signature system or get in touch to discuss your architecture.</p>
            <div className="flex justify-center gap-4">
              <a href="/contact" className="px-8 py-3 bg-blue text-white font-bold rounded-xl hover:scale-105 transition-all">
                Work With Me
              </a>
              <a href="/architecture" className="px-8 py-3 border border-gray-200 bg-white font-bold rounded-xl hover:bg-gray-50 transition-all">
                The Architecture
              </a>
            </div>
          </motion.div>
        </div>
      </Section>
    </main>
  );
}