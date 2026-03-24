import { getPostsByCategory } from '@/lib/post'
import Card from '../components/Card' // Import the branded card

export default function InsightsPage() {
  const posts = getPostsByCategory('insights')

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Insights</h1>
        <p className="text-muted text-lg">
          A collection of field-tested insights on designing and scaling complex systems.          
        </p>
        <p className="text-muted text-lg">Covering distributed architectures, real-time data platforms, and AI-enabled systems—focused on trade-offs, failure modes, and what truly matters in production.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Card
            key={post.slug}
            title={post.title}
            description={post.description}
            href={`/content/${post.category}/${post.slug}`}
          />
        ))}
      </div>
    </div>
  )
}