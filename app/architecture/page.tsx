import { getAllPosts } from '@/lib/mdx'
import { getPostsByCategory } from '@/lib/post'
import Link from 'next/link'

export default function ArchitecturePage() {
  // const posts = getAllPosts()
  const posts = getPostsByCategory('system-architecture')

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">Architecture</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/content/${post.category}/${post.slug}`}   // ✅ FIXED
            className="group block border rounded-xl p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold group-hover:text-blue-600">
              {post.title}
            </h2>

            <p className="text-gray-600 mt-2">
              {post.description}
            </p>

            <div className="mt-4 text-blue-600">
              Read More →
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}