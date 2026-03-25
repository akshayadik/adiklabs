import Section from "./components/Section";
import Card from "./components/Card";
import Link from "next/link";
import Footer from "./components/Footer";
import Image from "next/image";
import TrackedLink from "./components/TrackedLink";
import HeroSlider from "./components/HeroSlider";

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-bg">
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-[400px] bg-gradient-to-r from-violet/10 to-blue/10 blur-3xl opacity-50"></div>
        </div>

        <HeroSlider />
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
          <Card
            title="The AI FinOps Framework: From Bill Shock to Flywheel"
            description="Master the 4-stage maturity model of AI cost management and implement the 7 high-impact tactics to reduce LLM overhead."
            href="/content/ai-systems/finops-for-ai"
          />
          <Card
            title="The Evolution of RAG: Why Data Mesh is the Missing Link"
            description="An exploration of how domain ownership and data-as-a-product principles transform RAG from a fragile pipeline into a production-grade API."
            href="/content/ai-systems/evolution-of-rag"
          />
          {/* ... other preview cards */}
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

      <Footer />
    </main>
  );
}