import { notFound } from 'next/navigation'
import { Box } from '@mui/material'
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

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params

  if (!isSanityConfigured) {
    notFound()
  }

  let post: SanityPost | null = null

  try {
    post = await client.fetch<SanityPost>(getPostBySlugQuery, { slug })
  } catch (error) {
    console.error('Error fetching post:', error)
    notFound()
  }

  if (!post) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <Box component="main" id="main-content">
        <BlogPostClient post={post} />
      </Box>
      <Footer />
    </>
  )
}
