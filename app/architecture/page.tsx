import { getPostsByCategory } from '@/lib/post'
import Card from '../components/Card' // Import the branded card

export default function ArchitecturePage() {
  const posts = getPostsByCategory('system-architecture')

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Architecture</h1>
        <p className="text-muted text-lg">
          Detailed breakdowns of distributed systems and cloud-native patterns.
        </p>
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