import { MetadataRoute } from 'next'
import { client, isSanityConfigured } from '@/sanity/client'

interface SanityPost {
  slug: { current: string }
  publishedAt?: string
}

async function getBlogPosts(): Promise<SanityPost[]> {
  if (!isSanityConfigured) return []
  
  try {
    return await client.fetch<SanityPost[]>(
      `*[_type == "post" && defined(slug.current)]{ slug, publishedAt }` 
    )
  } catch {
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBlogPosts()
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: 'https://www.mondistudio.com.ar',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: 'https://www.mondistudio.com.ar/blog',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://www.mondistudio.com.ar/blog/${post.slug.current}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...blogRoutes]
}
