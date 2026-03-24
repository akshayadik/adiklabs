import Section from "./components/Section";
import Card from "./components/Card";
import Link from "next/link";
import Footer from "./components/Footer";
import Image from "next/image";
import TrackedLink from "./components/TrackedLink";

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
      {/* AI SHOWCASE PREVIEW */}
      <Section
        title={
          <div className="flex justify-between items-end w-full">
            <span>AI Showcase</span>
            <Link href="/case-study" className="text-blue text-sm font-semibold hover:underline mb-1">
              View All Tools →
            </Link>
          </div>
        }
      >
        <div className="grid md:grid-cols-1 gap-6">
          <div className="relative p-8 rounded-2xl border-2 border-blue/20 bg-gradient-to-br from-white to-blue/5 overflow-hidden group">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <span className="px-3 py-1 rounded-full bg-violet/10 text-violet text-xs font-bold uppercase tracking-wider">
                  Featured Tool
                </span>
                <h3 className="text-3xl font-bold text-primary mt-4 mb-3">
                  AI Architecture Reviewer
                </h3>
                <p className="text-lg text-muted mb-6">
                  Upload your system diagrams or descriptions and get instant AI-driven feedback on scalability bottlenecks, single points of failure, and cost optimization.
                </p>
                <div className="flex gap-4">
                  {/* 2. Swap <Link> for <TrackedLink> and add the event props */}
                  <TrackedLink
                    href="/case-study"
                    eventName="click_live_demo"
                    eventCategory="homepage_showcase"
                    className="inline-flex items-center px-6 py-3 rounded-xl bg-blue text-white font-semibold hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg"
                  >
                    Try Live Demo <span className="ml-2">→</span>
                  </TrackedLink>
                </div>
              </div>
              {/* Direct Image Integration */}
              <div className="w-full md:w-1/2 flex justify-center">
                {/* Wrapper div adds subtle styling and shadow to make the image pop */}
                <div className="relative w-full max-w-[500px] rounded-xl overflow-hidden shadow-2xl border border-gray-800/20 group-hover:-translate-y-1 transition-transform duration-300">
                  <Image
                    src="/ai-reviewer-terminal.png"
                    alt="AdikLabs AI Architecture Reviewer Output"
                    width={600}
                    height={400}
                    className="w-full h-auto object-contain"
                    priority
                  />
                  {/* Subtle overlay effect matching the brand */}
                  <div className="absolute inset-0 bg-blue/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </Section>

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
            href="/content/impact/impact1"
          />
          <Card
            title="The Architecture of Frugality: Slashing Cloud Costs by 55%"
            description="How we transformed a bloated infrastructure into a lean, cost-aware machine by treating efficiency as a core architectural constraint rather than an operational afterthought."
            href="/content/impact/impact2"
          />
          <Card
            title="Architecting for Resilience: A Selective Multi-Cloud Strategy for High Availability"
            description="A technical breakdown of building a cross-provider failover system between AWS and GCP, balancing 99.99% availability requirements against operational complexity."
            href="/content/impact/impact4"
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
            title="Agentic Workflows and Multi-Agent Orchestration"
            description="A deep dive into the reasoning cores, reAct loops, and topological patterns that define modern autonomous AI systems."
            href="/content/ai-systems/multi-agent-orchestration"
          />
          {/* ... other preview cards */}
        </div>
      </Section>

      <Footer />
    </main>
  );
}