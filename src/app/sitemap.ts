import { MetadataRoute } from 'next'
import { client, isSanityConfigured } from '@/sanity/client'

async function getBlogSlugs(): Promise<string[]> {
  if (!isSanityConfigured) return []
  
  try {
    const slugs = await client.fetch<{ slug: { current: string } }[]>(
      `*[_type == "post" && defined(slug.current)]{ slug }` 
    )
    return slugs.map((s) => s.slug.current)
  } catch {
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogSlugs = await getBlogSlugs()
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

  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `https://www.mondistudio.com.ar/blog?slug=${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...blogRoutes]
}
