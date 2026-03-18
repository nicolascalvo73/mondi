'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Box } from '@mui/material'
import { client, isSanityConfigured } from '@/sanity/client'
import { getAllPostsQuery, getPostBySlugQuery } from '@/sanity/queries'
import { SanityPost } from '@/sanity/types'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import BlogListingClient from '@/components/blog/BlogListingClient'
import BlogPostClient from '@/components/blog/BlogPostClient'

function BlogContent() {
  const searchParams = useSearchParams()
  const slug = searchParams.get('slug')
  
  const [posts, setPosts] = useState<SanityPost[]>([])
  const [currentPost, setCurrentPost] = useState<SanityPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    async function fetchData() {
      if (!isSanityConfigured) {
        setLoading(false)
        return
      }

      try {
        if (slug) {
          // Fetch single post
          const post = await client.fetch<SanityPost>(getPostBySlugQuery, { slug })
          if (post) {
            setCurrentPost(post)
          } else {
            setNotFound(true)
          }
        } else {
          // Fetch all posts for listing
          const data = await client.fetch<SanityPost[]>(getAllPostsQuery)
          setPosts(data)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
        if (slug) {
          setNotFound(true)
        }
      }
      setLoading(false)
    }
    fetchData()
  }, [slug])

  // Show single post view
  if (slug) {
    if (loading) {
      return (
        <>
          <Navbar />
          <Box component="main" id="main-content" sx={{ minHeight: '100vh', pt: '7rem' }}>
            <Box sx={{ textAlign: 'center', py: 8 }}>Cargando...</Box>
          </Box>
          <Footer />
        </>
      )
    }

    if (notFound || !currentPost) {
      return (
        <>
          <Navbar />
          <Box component="main" id="main-content" sx={{ minHeight: '100vh', pt: '7rem' }}>
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Box sx={{ fontSize: '3rem', mb: 2 }}>404</Box>
              <Box>Artículo no encontrado</Box>
            </Box>
          </Box>
          <Footer />
        </>
      )
    }

    return (
      <>
        <Navbar />
        <Box component="main" id="main-content">
          <BlogPostClient post={currentPost} />
        </Box>
        <Footer />
      </>
    )
  }

  // Show listing view
  return (
    <>
      <Navbar />
      <Box component="main" id="main-content">
        <BlogListingClient posts={posts} />
      </Box>
      <Footer />
    </>
  )
}

export default function BlogPage() {
  return (
    <Suspense fallback={
      <>
        <Navbar />
        <Box component="main" id="main-content" sx={{ minHeight: '100vh', pt: '7rem' }}>
          <Box sx={{ textAlign: 'center', py: 8 }}>Cargando...</Box>
        </Box>
        <Footer />
      </>
    }>
      <BlogContent />
    </Suspense>
  )
}
