import { client } from '@/sanity/client'
import { getAllPostsQuery, getPostBySlugQuery } from '@/sanity/queries'
import { SanityPost } from '@/sanity/types'
import { formatDate } from '@/lib/formatDate'
import { getLanguage } from '@/lib/getLanguage'
import { portableTextComponents } from '@/lib/portableTextComponents'
import { getImageUrl } from '@/lib/sanityImage'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const revalidate = 3600

export async function generateStaticParams() {
  try {
    const posts = await client.fetch<SanityPost[]>(getAllPostsQuery)
    return posts.map((post) => ({
      slug: post.slug.current,
    }))
  } catch (error) {
    console.error('[generateStaticParams] Error:', error)
    return []
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  
  try {
    const post = await client.fetch<SanityPost>(getPostBySlugQuery, { slug })
    
    if (!post) {
      return {
        title: 'Post Not Found',
        description: 'The requested blog post could not be found.',
      }
    }

    let description = post.excerpt || ''
    if (!description && post.body && post.body.length > 0) {
      const firstBlock = post.body.find((block: any) => block._type === 'block')
      if (firstBlock?.children) {
        const text = firstBlock.children
          .filter((child: any) => child._type === 'span')
          .map((child: any) => child.text)
          .join('')
        description = text.slice(0, 160) + (text.length > 160 ? '...' : '')
      }
    }

    const title = `${post.title} | Mondi Studio Blog`
    const url = `https://www.mondistudio.com.ar/blog/${slug}`

    const metadata: Metadata = {
      title,
      description: description || 'Read this article on Mondi Studio Blog',
      alternates: {
        canonical: url,
      },
      openGraph: {
        title: post.title,
        description: description || undefined,
        url,
        siteName: 'Mondi Studio',
        type: 'article',
        publishedTime: post.publishedAt || undefined,
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: description || undefined,
      },
    }

    if (post.mainImage?.asset) {
      try {
        const imageUrl = getImageUrl(post.mainImage, 1200, 630)
        metadata.openGraph!.images = [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: post.mainImage.alt || post.title,
          },
        ]
        metadata.twitter!.images = [imageUrl]
      } catch (error) {
        console.error('[generateMetadata] Error generating image URL:', error)
      }
    }

    return metadata
  } catch (error) {
    console.error(`[generateMetadata] Error fetching post "${slug}":`, error)
    return {
      title: 'Blog Post | Mondi Studio',
      description: 'Read articles on web design and development.',
    }
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const language = await getLanguage()
  let post: SanityPost | null = null
  let fetchError = false
  
  try {
    post = await client.fetch<SanityPost>(getPostBySlugQuery, { slug })
  } catch (error) {
    console.error(`[PostPage] Error fetching post "${slug}":`, error)
    fetchError = true
    post = null
  }
  
  if (!post && !fetchError) {
    notFound()
  }
  
  if (fetchError) {
    return (
      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto', 
        padding: '5rem 2rem',
        textAlign: 'center'
      }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 700, 
          marginBottom: '1rem',
          color: '#1a1a1a',
          fontFamily: 'var(--font-epilogue), sans-serif'
        }}>
          Error loading post
        </h1>
        <p style={{ 
          fontSize: '1.125rem', 
          color: '#666',
          fontFamily: 'var(--font-jakarta), sans-serif'
        }}>
          Unable to load this post. Please try again later.
        </p>
      </div>
    )
  }
  
  if (!post) {
    notFound()
  }
  
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto', padding: '5rem 2rem' }}>
      <header style={{ marginBottom: '3rem' }}>
        <h1 style={{ 
          fontSize: '3rem', 
          fontWeight: 700, 
          marginBottom: '1rem',
          lineHeight: 1.2,
          color: '#1a1a1a',
          fontFamily: 'var(--font-epilogue), sans-serif'
        }}>
          {post.title}
        </h1>
        
        {post.publishedAt && (
          <time 
            dateTime={post.publishedAt}
            style={{ 
              fontSize: '0.875rem', 
              color: '#999', 
              display: 'block', 
              marginBottom: '1rem',
              fontFamily: 'var(--font-jakarta), sans-serif'
            }}
          >
            {formatDate(post.publishedAt, language, { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </time>
        )}
        
        {post.mainImage?.asset && (
          <div style={{ 
            marginTop: '2rem',
            marginBottom: '2rem',
            width: '100%',
            borderRadius: '12px',
            overflow: 'hidden'
          }}>
            <img
              src={getImageUrl(post.mainImage, 1200)}
              alt={post.mainImage.alt || post.title}
              loading="eager"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
          </div>
        )}
        
        {post.excerpt && (
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#666', 
            lineHeight: 1.6,
            fontFamily: 'var(--font-jakarta), sans-serif'
          }}>
            {post.excerpt}
          </p>
        )}
      </header>
      
      {post.body && post.body.length > 0 ? (
        <div style={{ 
          fontSize: '1.0625rem',
          color: '#333'
        }}>
          <PortableText 
            value={post.body} 
            components={portableTextComponents}
          />
        </div>
      ) : (
        <p style={{ 
          color: '#999', 
          fontStyle: 'italic',
          fontFamily: 'var(--font-jakarta), sans-serif'
        }}>
          No content available.
        </p>
      )}
    </article>
  )
}
