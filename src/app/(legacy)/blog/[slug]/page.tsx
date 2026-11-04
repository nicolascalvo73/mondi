import { notFound } from 'next/navigation'
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
    return [{ slug: '__placeholder__' }]
  }
  try {
    const posts = await client.fetch<SanityPost[]>(getAllPostsQuery)
    const slugs = posts
      .map((post) => post.slug?.current)
      .filter((slug): slug is string => Boolean(slug))

    return slugs.length > 0 ? slugs.map((slug) => ({ slug })) : [{ slug: '__placeholder__' }]
  } catch {
    return [{ slug: '__placeholder__' }]
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params

  if (!isSanityConfigured) {
    notFound()
  }

  const post = await client.fetch<SanityPost>(getPostBySlugQuery, { slug })

  if (!post) {
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
