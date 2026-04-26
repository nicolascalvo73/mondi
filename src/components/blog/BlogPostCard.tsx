'use client'

import Link from 'next/link'
import { SanityPost } from '@/sanity/types'
import { formatDate } from '@/lib/formatDate'
import { getImageUrl } from '@/lib/sanityImage'
import { useLanguage } from '@/lib/LanguageContext'
import { useState } from 'react'

interface BlogPostCardProps {
  post: SanityPost
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const { language } = useLanguage()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link 
      href={`/blog/${post.slug.current}`}
      style={{ textDecoration: 'none' }}
    >
      <article 
        style={{
          border: '1px solid #e0e0e0',
          borderRadius: '12px',
          overflow: 'hidden',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'all 0.2s',
          cursor: 'pointer',
          backgroundColor: '#fff',
          borderColor: isHovered ? '#E8622A' : '#e0e0e0',
          transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
          boxShadow: isHovered ? '0 4px 12px rgba(0,0,0,0.1)' : 'none',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {post.mainImage?.asset && (
          <div style={{
            width: '100%',
            height: '200px',
            overflow: 'hidden',
            backgroundColor: '#f5f5f5',
          }}>
            <img
              src={getImageUrl(post.mainImage, 600, 400)}
              alt={post.mainImage.alt || post.title}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.2s',
                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
              }}
            />
          </div>
        )}
        
        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            marginBottom: '0.75rem',
            color: '#1a1a1a',
            fontFamily: 'var(--font-epilogue), sans-serif'
          }}>
            {post.title}
          </h2>
        
        {post.excerpt && (
          <p style={{
            fontSize: '0.9375rem',
            color: '#666',
            lineHeight: 1.6,
            marginBottom: '1rem',
            flex: 1,
            fontFamily: 'var(--font-jakarta), sans-serif'
          }}>
            {post.excerpt}
          </p>
        )}
        
        {post.publishedAt && (
          <time style={{
            fontSize: '0.875rem',
            color: '#999',
            fontFamily: 'var(--font-jakarta), sans-serif'
          }}>
            {formatDate(post.publishedAt, language, {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        )}
        </div>
      </article>
    </Link>
  )
}
