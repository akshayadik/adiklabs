import { getPost, parseMDX } from '@/lib/mdx';

export default async function PostPage({
    params,
}: {
    params: Promise<{ category: string; slug: string }>;
}) {
    const { category, slug } = await params;

    const post = getPost(category, slug);

    const content = await parseMDX(post.content)

    return (
        <article className="prose prose-lg max-w-3xl mx-auto">
            <h1>{post.title}</h1>
            <h2>{post.description}</h2>
            {content}
        </article>
    );
}