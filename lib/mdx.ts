import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'

const basePath = path.join(process.cwd(), 'content');

export function getAllPosts() {
  const categories = fs.readdirSync(basePath);

  let posts: any[] = [];

  categories.forEach((category) => {
    const categoryPath = path.join(basePath, category);
    const files = fs.readdirSync(categoryPath);

    files.forEach((file) => {
      const filePath = path.join(categoryPath, file);
      const content = fs.readFileSync(filePath, 'utf-8');

      const { data } = matter(content);

      posts.push({
        slug: file.replace('.mdx', ''),
        category,
        ...data,
      });
    });
  });

  return posts;
}

export function getPost(category?: string, slug?: string) {
  if (!category || !slug) {
    throw new Error("Category or slug is missing");
  }

  const filePath = path.join(basePath, category, `${slug}.mdx`);

  const content = fs.readFileSync(filePath, 'utf-8');

  const { data, content: body } = matter(content);

  return {
    slug,
    category,
    ...data,
    content: body,
  };
}

export async function parseMDX(source: string) {
  const { content } = await compileMDX({
    source,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  })

  return content
}