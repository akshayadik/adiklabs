// app/content/[category]/[slug]/page.tsx
import { getPost, parseMDX, Post } from '@/lib/mdx'; // Import the Post interface
import Image from "next/image"; // Add this line
import TrackedLink from '@/app/components/TrackedLink'; // Import this for step 3
import { Metadata } from 'next';

// 1. DYNAMIC METADATA GENERATION
export async function generateMetadata({
    params,
}: {
    params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
    const { category, slug } = await params;
    const post: Post = getPost(category, slug);

    return {
        title: post.title,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            // If the post has a preview image, use it. Otherwise fallback to the brand OG image.
            images: post.previewImage ? [post.previewImage] : ['/og-image.png'],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.description,
            images: post.previewImage ? [post.previewImage] : ['/og-image.png'],
        }
    };
}

export default async function PostPage({
    params,
}: {
    params: Promise<{ category: string; slug: string }>;
}) {
    const { category, slug } = await params;

    // Explicitly type the post object
    const post: Post = getPost(category, slug);
    const content = await parseMDX(post.content);

    // 2. CREATE STRUCTURED DATA SCHEMA
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": post.title,
        "description": post.description,
        "author": {
            "@type": "Person",
            "name": "Akshay",
            "url": "https://adiklabs.vercel.app" // Cross-links to your personal branding site for authority
        },
        "timeRequired": `PT${parseInt(post.readTime)}M`, // Formats "5 min" to ISO 8601 duration
        "image": post.previewImage ? `https://adiklabs.com${post.previewImage}` : "https://adiklabs.com/og-image.png",
    };

    return (
        <article className="max-w-3xl mx-auto px-6 py-16">
            {/* Inject the JSON-LD Script silently */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
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
                {/* THE NEW LIVE DEMO CTA BUTTON */}
                {post.previewUrl && (
                    <div className="mt-10 flex justify-center">
                        <TrackedLink
                            href={post.previewUrl}
                            eventName="click_live_demo"
                            eventCategory="article_cta" // Differentiates from 'homepage_showcase' clicks
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center px-8 py-4 rounded-xl bg-primary text-white font-bold overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* ... keeping your existing gradient and pulse animations ... */}
                            <div className="absolute inset-0 bg-gradient-to-r from-violet to-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <span className="relative z-10 flex items-center gap-3">
                                Launch Live Demo
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
                                </span>
                            </span>
                            <span className="relative z-10 ml-3 group-hover:translate-x-1 transition-transform">→</span>
                        </TrackedLink>
                    </div>
                )}
            </header>

            {/* Preview Image */}
            {post.previewImage && (
                <div className="mb-12 rounded-2xl overflow-hidden border border-gray-200 shadow-xl relative w-full aspect-video group">
                    <Image
                        src={post.previewImage}
                        alt={`Preview for ${post.title}`}
                        fill
                        className="object-contain bg-slate-50"
                        priority
                    />
                </div>
            )}

            <div className="prose prose-slate max-w-none">
                {content}
            </div>
        </article>
    );
}