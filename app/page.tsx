import Section from "./components/Section";
import Card from "./components/Card";
import Link from "next/link";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>

      {/* HERO */

      }
      <section className="relative overflow-hidden bg-bg">

        {/* GRADIENT BACKGROUND GLOW */}
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-[400px] bg-gradient-to-r from-violet/20 to-blue/20 blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center px-6 py-32">

          {/* BRAND NAME */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            <span className="text-primary">Adik</span>
            <span className="bg-gradient-to-r from-violet to-blue bg-clip-text text-transparent">
              Labs
            </span>
          </h1>

          {/* TAGLINE */}
          <p className="mt-4 text-lg text-muted">
            AI.Cloud.System Solution
          </p>

          {/* VALUE PROP */}
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Designing scalable distributed systems and building intelligent AI solutions
            with modern cloud-native architectures.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-10 flex justify-center gap-4">

            <Link
              href="/architecture"
              className="px-6 py-3 rounded-xl bg-primary text-white font-medium shadow-md hover:shadow-lg transition"
            >
              Explore Architecture
            </Link>

            <Link
              href="/insights"
              className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
            >
              Read Insights
            </Link>

          </div>

        </div>
      </section>

      {/* ARCHITECTURE */}
      <Section title="System Architecture">
        <div className="grid md:grid-cols-3 gap-6">
          <Card
            title="Rate Limiter"
            description="Token bucket, sliding window, distributed control."
            href="/content/system-architecture/rate-limiter"
          />
          <Card
            title="Blob Storage"
            description="Token bucket, sliding window, distributed control."
            href="/content/system-architecture/rate-limiter"
          />
          <Card
            title="Pub/Sub"
            description="Token bucket, sliding window, distributed control."
            href="/content/system-architecture/rate-limiter"
          />
        </div>
      </Section>

      {/* AI SYSTEMS */}
      <Section title="AI Systems">
        <div className="grid md:grid-cols-3 gap-6">
          <Card
            title="LLM Infrastructure"
            description="Serving, scaling and monitoring LLMs."
            href="/content/system-architecture/rate-limiter"
          />
          <Card
            title="Vector Databases"
            description="Similarity search and embeddings."
            href="/content/system-architecture/rate-limiter"
          />
          <Card
            title="AI Pipelines"
            description="End-to-end AI workflows and observability."
            href="/content/system-architecture/rate-limiter"
          />
        </div>
      </Section>

      {/* IMPACT */}
      <Section title="Impact">
        <p className="text-muted max-w-3xl">
          Helping organizations build resilient distributed systems and adopt AI responsibly
          for real-world business outcomes.
        </p>
      </Section>

      <Footer />
    </main>
  );
}