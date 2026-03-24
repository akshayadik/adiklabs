// app/ai-showcase/page.tsx
import Section from "../components/Section";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function AIShowcase() {
  return (
    <main>
      <Section title="AI Showcase">
        <p className="text-xl text-muted mb-12 max-w-2xl">
          Practical applications of AI in system engineering and data management.
          Each tool is designed to solve specific scalability challenges.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <Card
            title="AI Architecture Reviewer"
            description="Automated audit tool for distributed systems. Checks for CAP theorem trade-offs and consistency patterns."
            href="/content/case-study/ai-architecture-review"
            previewUrl="https://ai-architecture-reviewer2.vercel.app/" // <-- Add your preview URL here
          />
          {/* Future tools go here */}
        </div>
      </Section>
      <Footer />
    </main>
  );
}