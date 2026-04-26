import { Container, Box } from '@mui/material'
import { client } from '@/sanity/client'
import { getAllPostsQuery } from '@/sanity/queries'
import { SanityPost } from '@/sanity/types'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import BlogListingClient from '@/components/blog/BlogListingClient'

export default async function BlogPage() {
  let posts: SanityPost[] = []

  try {
    posts = await client.fetch<SanityPost[]>(getAllPostsQuery)
  } catch (error) {
    console.error('Error fetching posts:', error)
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
