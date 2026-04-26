'use client'

import { useEffect, useState } from 'react'
import { notFound, useRouter } from 'next/navigation'
import { Container, Box } from '@mui/material'
import { client, isSanityConfigured } from '@/sanity/client'
import { getAllPostsQuery, getPostBySlugQuery } from '@/sanity/queries'
import { SanityPost } from '@/sanity/types'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import BlogPostClient from '@/components/blog/BlogPostClient'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  if (!isSanityConfigured) {
    return []
  }

  try {
    const posts = await client.fetch<SanityPost[]>(getAllPostsQuery)
    return posts.map((post) => ({
      slug: post.slug.current,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

export default function BlogPostPage({ params }: PageProps) {
  const [post, setPost] = useState<SanityPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [notFoundState, setNotFoundState] = useState(false)
  const router = useRouter()

  useEffect(() => {
    async function fetchPost() {
      if (!isSanityConfigured) {
        setNotFoundState(true)
        setLoading(false)
        return
      }

      const resolvedParams = await params
      try {
        const data = await client.fetch<SanityPost>(getPostBySlugQuery, { slug: resolvedParams.slug })
        if (!data) {
          setNotFoundState(true)
        } else {
          setPost(data)
        }
      } catch (error) {
        console.error('Error fetching post:', error)
        setNotFoundState(true)
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [params])

  if (loading) {
    return (
      <>
        <Navbar />
        <Box component="main" id="main-content">
          <Container maxWidth="md" sx={{ py: '5rem' }}>
            <div>Cargando...</div>
          </Container>
        </Box>
        <Footer />
      </>
    )
  }

  if (notFoundState || !post) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <Box component="main" id="main-content">
        <Container maxWidth="md" sx={{ py: '5rem' }}>
          <BlogPostClient post={post} />
        </Container>
      </Box>
      <Footer />
    </>
  )
}
