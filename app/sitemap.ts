import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/mdx'; // Reusing your existing MDX utility

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://adiklabs.com';

  // 1. Define Static Routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0, // Homepage is the highest priority
    },
    {
      url: `${baseUrl}/architecture`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ai-systems`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ai-showcase`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // 2. Fetch Dynamic Routes (Your MDX Articles)
  const posts = getAllPosts(); //

  const dynamicRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/content/${post.category}/${post.slug}`, // Maps to your [category]/[slug] folder structure
    // Use the publishedAt frontmatter if available, otherwise use today's date
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(), 
    changeFrequency: 'monthly',
    priority: 0.7, // Slightly lower than index pages, standard for individual articles
  }));

  // 3. Return the combined map
  return [...staticRoutes, ...dynamicRoutes];
}