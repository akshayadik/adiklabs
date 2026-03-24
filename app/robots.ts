// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://adiklabs.com';

  return {
    rules: [
      {
        // 1. Allow standard search engines (Google, Bing, etc.)
        userAgent: '*',
        allow: '/',
      },
      {
        // 2. Explicitly welcome AI and Data Crawlers
        // GPTBot (OpenAI), ClaudeBot/Claude-Web (Anthropic), 
        // Google-Extended (Gemini), CCBot (Common Crawl - open source models)
        userAgent: ['GPTBot', 'ClaudeBot', 'Claude-Web', 'Google-Extended', 'CCBot'],
        allow: '/',
      }
    ],
    // Point crawlers to the dynamic sitemap we built earlier
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}