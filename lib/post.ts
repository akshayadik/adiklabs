import { getAllPosts } from "./mdx";

export function getPostsByCategory(category: string) {
  return getAllPosts().filter((post) => post.category === category)
}