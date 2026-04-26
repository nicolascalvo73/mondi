'use client'

import { useState, useEffect } from 'react'
import { client } from '@/sanity/client'
import { getAllPostsQuery } from '@/sanity/queries'
import { SanityPost } from '@/sanity/types'
import BlogContent from '@/components/blog/BlogContent'
import { useTranslation } from '@/i18n/useTranslation'

export const revalidate = 3600

export default function BlogPage() {
  const { t } = useTranslation()
  const [posts, setPosts] = useState<SanityPost[]>([])
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await client.fetch<SanityPost[]>(getAllPostsQuery)
        setPosts(data)
      } catch (err) {
        setError(err as Error)
        console.error('[BlogPage] Error fetching posts:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  if (loading) {
    return (
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <p style={{
          fontSize: '1.125rem',
          color: '#666',
          fontFamily: 'var(--font-jakarta), sans-serif'
        }}>
          Loading...
        </p>
      </div>
    )
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
          {t.blog.errorTitle}
        </h1>
        <p style={{
          fontSize: '1.125rem',
          color: '#666',
          fontFamily: 'var(--font-jakarta), sans-serif'
        }}>
          {t.blog.errorSubtitle}
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
          {t.blog.title}
        </h1>
        <p style={{
          fontSize: '1.125rem',
          color: '#666',
          fontFamily: 'var(--font-jakarta), sans-serif'
        }}>
          {t.blog.noPosts}
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
        {t.blog.title}
      </h1>
      <p style={{
        fontSize: '1.125rem',
        color: '#666',
        marginBottom: '3rem',
        fontFamily: 'var(--font-jakarta), sans-serif'
      }}>
        {t.blog.subtitle}
      </p>

      <BlogContent posts={posts} />
    </div>
  )
}
