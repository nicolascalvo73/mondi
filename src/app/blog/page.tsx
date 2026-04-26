'use client'

import { useEffect, useState } from 'react'
import { Container, Box } from '@mui/material'
import { client, isSanityConfigured } from '@/sanity/client'
import { getAllPostsQuery } from '@/sanity/queries'
import { SanityPost } from '@/sanity/types'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import BlogListingClient from '@/components/blog/BlogListingClient'

export default function BlogPage() {
  const [posts, setPosts] = useState<SanityPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      if (!isSanityConfigured) {
        setLoading(false)
        return
      }

      try {
        const data = await client.fetch<SanityPost[]>(getAllPostsQuery)
        setPosts(data)
      } catch (error) {
        console.error('Error fetching posts:', error)
        setPosts([])
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return (
      <>
        <Navbar />
        <Box component="main" id="main-content">
          <Container maxWidth="lg" sx={{ py: '5rem' }}>
            <div>Cargando...</div>
          </Container>
        </Box>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <Box component="main" id="main-content">
        <Container maxWidth="lg" sx={{ py: '5rem' }}>
          <BlogListingClient posts={posts} />
        </Container>
      </Box>
      <Footer />
    </>
  )
}
