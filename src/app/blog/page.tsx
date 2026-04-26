import { client } from '@/sanity/client'
import { getAllPostsQuery } from '@/sanity/queries'
import { SanityPost } from '@/sanity/types'
import BlogContent from '@/components/blog/BlogContent'

export const revalidate = 3600

export default async function BlogPage() {
  let posts: SanityPost[] = []
  let error: Error | null = null

  try {
    posts = await client.fetch<SanityPost[]>(getAllPostsQuery)
  } catch (err) {
    error = err as Error
    console.error('[BlogPage] Error fetching posts:', error)
    posts = []
  }

  if (error) {
    return (
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 700, 
          marginBottom: '1rem',
          color: '#1a1a1a',
          fontFamily: 'var(--font-epilogue), sans-serif'
        }}>
          Error loading posts
        </h1>
        <p style={{ 
          fontSize: '1.125rem', 
          color: '#666',
          fontFamily: 'var(--font-jakarta), sans-serif'
        }}>
          Unable to load blog posts. Please try again later.
        </p>
      </div>
    )
  }

  if (posts.length === 0) {
    return (
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 700, 
          marginBottom: '1rem',
          color: '#1a1a1a',
          fontFamily: 'var(--font-epilogue), sans-serif'
        }}>
          Blog
        </h1>
        <p style={{ 
          fontSize: '1.125rem', 
          color: '#666',
          fontFamily: 'var(--font-jakarta), sans-serif'
        }}>
          No posts yet. Check back soon!
        </p>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>
      <h1 style={{ 
        fontSize: '3rem', 
        fontWeight: 700, 
        marginBottom: '0.5rem',
        color: '#1a1a1a',
        fontFamily: 'var(--font-epilogue), sans-serif'
      }}>
        Blog
      </h1>
      <p style={{ 
        fontSize: '1.125rem', 
        color: '#666', 
        marginBottom: '3rem',
        fontFamily: 'var(--font-jakarta), sans-serif'
      }}>
        Artículos sobre diseño, desarrollo y tecnología
      </p>
      
      <BlogContent posts={posts} />
    </div>
  )
}
