// lib/mdx.tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import Mermaid from '@/app/components/Mermaid';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// Define the structure of your posts based on your brand kit
export interface Post {
  slug: string;
  category: string;
  title: string;
  description: string;
  readTime: string;
  level: string;
  publishedAt: string;
  featured?: boolean;
  order?: number;
  previewImage?: string;
  previewUrl?: string;
  content: string;
}

const basePath = path.join(process.cwd(), 'content');

export function getAllPosts(): Post[] {
  const categories = fs.readdirSync(basePath);
  let posts: Post[] = [];

  categories.forEach((category) => {
    const categoryPath = path.join(basePath, category);
    const files = fs.readdirSync(categoryPath);

    files.forEach((file) => {
      const filePath = path.join(categoryPath, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const { data, content: body } = matter(content);

      posts.push({
        slug: file.replace('.mdx', ''),
        category,
        content: body,
        ...(data as Omit<Post, 'slug' | 'category' | 'content'>),
      });
    });
  });

  return posts;
}

export function getPost(category?: string, slug?: string): Post {
  if (!category || !slug) {
    throw new Error("Category or slug is missing");
  }

  const filePath = path.join(basePath, category, `${slug}.mdx`);
  const content = fs.readFileSync(filePath, 'utf-8');
  const { data, content: body } = matter(content);

  return {
    slug,
    category,
    content: body,
    ...(data as Omit<Post, 'slug' | 'category' | 'content'>),
  };
}

export async function parseMDX(source: string) {
  const { content } = await compileMDX({
    source,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkMath], // Added remarkMath
        rehypePlugins: [rehypeKatex],           // Added rehypeKatex
      },
    },
    components: {
      // Intercept code blocks for Mermaid rendering
      code: (props: any) => {
        const { children, className } = props;
        if (className === "language-mermaid") {
          return <Mermaid chart={children as string} />;
        }
        return <code {...props} />;
      },
      // AdikLabs Branded Elements
      h1: (props) => <h1 className="text-3xl font-bold text-primary mb-4" {...props} />,
      h2: (props) => <h2 className="text-2xl font-semibold text-primary mt-8 mb-4" {...props} />,
      p: (props) => <p className="text-muted leading-relaxed mb-4" {...props} />,
    },
  });

  return content;
}