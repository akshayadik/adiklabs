// app/ai-showcase/page.tsx
import Section from "../components/Section";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { getPostsByCategory } from "@/lib/post";

export default function AIShowcase() {
  const posts = getPostsByCategory('case-study')
  return (
    <main>
      <Section title="AI Showcase">
        <p className="text-xl text-muted mb-12 max-w-2xl">
          Practical applications of AI in system engineering and data management.
          Each tool is designed to solve specific scalability challenges.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
                    <Card
                      key={post.slug}
                      title={post.title}
                      description={post.description}
                      href={`/content/${post.category}/${post.slug}`}
                      previewUrl={post.previewUrl} // <-- Add your preview URL here
                    />
                  ))}
        </div>
      </Section>
      <Footer />
    </main>
  );
}