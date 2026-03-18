import { Box } from '@mui/material'
import { client, isSanityConfigured } from '@/sanity/client'
import { getAllPostsQuery } from '@/sanity/queries'
import { SanityPost } from '@/sanity/types'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import BlogListingClient from '@/components/blog/BlogListingClient'

export default async function BlogPage() {
  let posts: SanityPost[] = []

  if (isSanityConfigured) {
    try {
      posts = await client.fetch<SanityPost[]>(getAllPostsQuery)
    } catch (error) {
      console.error('Error fetching posts:', error)
    }
  }

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
