// app/api/content/[category]/[slug]/route.ts
import { NextResponse } from 'next/server';
import { getPost } from '@/lib/mdx';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ category: string; slug: string }> }
) {
    const { category, slug } = await params;
    
    // Fetch the post using your existing robust MDX utility
    const post = getPost(category, slug);

    // Handle 404s gracefully if the AI crawler guesses a wrong URL
    if (!post) {
        return new NextResponse("Article not found", { status: 404 });
    }

    // Return the raw markdown content, completely stripped of HTML/UI components
    return new NextResponse(post.content, {
        headers: {
            'Content-Type': 'text/markdown; charset=utf-8',
            // Cache the response heavily. This keeps your Vercel compute costs down 
            // if AI bots hammer the endpoint, while revalidating once a day.
            'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
        },
    });
}