import { notFound } from 'next/navigation'
import { Metadata } from 'next'
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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params

  if (!isSanityConfigured) {
    return {
      title: 'Blog - Mondi Studio',
    }
  }

  try {
    const post = await client.fetch<SanityPost>(getPostBySlugQuery, { slug })

    if (!post) {
      return {
        title: 'Artículo no encontrado - Mondi Studio',
      }
    }

    const description = post.excerpt || post.title
    const url = `https://www.mondistudio.com.ar/blog/${slug}`
    const imageUrl = post.mainImage?.asset?.url || '/og-image.png'

    return {
      title: `${post.title} | Mondi Studio`,
      description,
      alternates: {
        canonical: url,
      },
      openGraph: {
        title: post.title,
        description,
        url,
        type: 'article',
        publishedTime: post.publishedAt,
        authors: ['Mondi Studio'],
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description,
        images: [imageUrl],
      },
    }
  } catch (error) {
    console.error('Error generating metadata:', error)
    return {
      title: 'Blog - Mondi Studio',
    }
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
        <Container maxWidth="md" sx={{ py: '5rem' }}>
          <BlogPostClient post={post} />
        </Container>
      </Box>
      <Footer />
    </>
  )
}
