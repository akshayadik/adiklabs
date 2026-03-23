import { getAllPosts } from "./mdx";

export function getPostsByCategory(category: string) {
  return getAllPosts().filter((post) => post.category === category)
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}