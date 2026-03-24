import Section from "./components/Section";
import Card from "./components/Card";
import Link from "next/link";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-bg">
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-[400px] bg-gradient-to-r from-violet/10 to-blue/10 blur-3xl opacity-50"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center px-6 py-32">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            <span className="text-primary">Adik</span>
            <span className="bg-gradient-to-r from-violet to-blue bg-clip-text text-transparent"> Labs</span>
          </h1>

          {/* Updated Tagline per Brand Kit */}
          <p className="mt-4 text-xl font-medium text-muted uppercase tracking-widest">
            Scalable AI & Cloud Systems
          </p>

          {/* Updated Core Message */}
          <p className="mt-6 text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Building scalable, intelligent systems using AI and cloud technologies.
          </p>

          <div className="mt-10 flex justify-center gap-4">
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
      </section>

      {/* IMPACT */}
      <Section 
        title={
          <div className="flex justify-between items-end w-full">
            <span>Impact</span>
            <Link href="/impact" className="text-blue text-sm font-semibold hover:underline mb-1">
              View All Impact →
            </Link>
          </div>
        }
      >
        <div className="grid md:grid-cols-3 gap-6">
          <Card
            title="Scaling Real-Time AI Decisioning: High-Throughput Architecture for 15K+ RPS"
            description="A deep dive into engineering a distributed, event-driven system capable of sub-100ms latency at scale using Kafka, Bloom filters, and in-memory caching."
            href="/content/impact/case-study-1"
          />
          <Card
            title="The Architecture of Frugality: Slashing Cloud Costs by 55%"
            description="How we transformed a bloated infrastructure into a lean, cost-aware machine by treating efficiency as a core architectural constraint rather than an operational afterthought."
            href="/content/impact/case-study-2"
          />
          <Card
            title="Architecting for Resilience: A Selective Multi-Cloud Strategy for High Availability"
            description="A technical breakdown of building a cross-provider failover system between AWS and GCP, balancing 99.99% availability requirements against operational complexity."
            href="/content/impact/case-study-4"
          />
          {/* ... other preview cards */}
        </div>
      </Section>

      {/* SYSTEM ARCHITECTURE PREVIEW */}
      <Section 
        title={
          <div className="flex justify-between items-end w-full">
            <span>System Architecture</span>
            <Link href="/architecture" className="text-blue text-sm font-semibold hover:underline mb-1">
              View All Architecture →
            </Link>
          </div>
        }
      >
        <div className="grid md:grid-cols-3 gap-6">
          <Card
            title="System Design 101"
            description="A practical introduction to system design focusing on real-world trade-offs, scalability challenges, and consistency decisions beyond theory."
            href="/content/system-architecture/system-design-101"
          />
          <Card
            title="The Scalability Blueprint: Beyond the 'Just Add More RAM' Myth"
            description="A deep dive into the fundamental strategies for scaling modern systems, from load balancing nuances to edge computing."
            href="/content/system-architecture/the-scalability-blueprint"
          />
          <Card
            title="Rate Limiter"
            description="Token bucket, sliding window, distributed control."
            href="/content/system-architecture/rate-limiter"
          />
          {/* ... other preview cards */}
        </div>
      </Section>

      {/* AI SYSTEMS PREVIEW */}
      <Section 
        title={
          <div className="flex justify-between items-end w-full">
            <span>AI Systems</span>
            <Link href="/ai-systems" className="text-blue text-sm font-semibold hover:underline mb-1">
              View All AI Systems →
            </Link>
          </div>
        }
      >
        <div className="grid md:grid-cols-3 gap-6">
          <Card
            title="LLM Infrastructure"
            description="Serving, scaling and monitoring LLMs."
            href="/content/ai-systems/llm-infrastructure"
          />
          {/* ... other preview cards */}
        </div>
      </Section>

      <Footer />
    </main>
  );
}