// app/content/[category]/[slug]/page.tsx
import { getPost, parseMDX, Post } from '@/lib/mdx'; // Import the Post interface

export default async function PostPage({
    params,
}: {
    params: Promise<{ category: string; slug: string }>;
}) {
    const { category, slug } = await params;
    
    // Explicitly type the post object
    const post: Post = getPost(category, slug);
    const content = await parseMDX(post.content);

    return (
        <article className="max-w-3xl mx-auto px-6 py-16">
            <header className="mb-12 border-b border-gray-100 pb-8">
                {/* Brand Navy for Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                    {post.title}
                </h1>
                
                {/* Brand Dark Gray for Description */}
                <p className="text-xl text-muted leading-relaxed">
                    {post.description}
                </p>
                
                <div className="mt-6 flex gap-4 text-sm font-medium text-blue">
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span className="capitalize">{post.level}</span>
                </div>
            </header>

            <div className="prose prose-slate max-w-none">
                {content}
            </div>
        </article>
    );
}