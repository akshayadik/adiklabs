import { getAllPosts } from "./mdx";

export function getPostsByCategory(category: string) {
  return getAllPosts().filter((post) => post.category === category)
    .sort((a, b) => (a.article ?? 999) - (b.article ?? 999));
}