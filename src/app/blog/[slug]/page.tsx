import { notFound } from 'next/navigation'
import { Box } from '@mui/material'
import { client, isSanityConfigured } from '@/sanity/client'
import { getAllPostsQuery, getPostBySlugQuery } from '@/sanity/queries'
import { SanityPost } from '@/sanity/types'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import BlogPostClient from '@/components/blog/BlogPostClient'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  // Si Sanity no está configurado, retornar array vacío para que Next.js no genere páginas
  if (!isSanityConfigured) {
    // Next.js requiere al menos un parámetro para rutas dinámicas con output: export
    // Retornamos un slug dummy que será manejado por notFound()
    return [{ slug: 'placeholder' }]
  }

  try {
    const posts = await client.fetch<SanityPost[]>(getAllPostsQuery)
    
    // Si no hay posts, retornar al menos un placeholder
    if (!posts || posts.length === 0) {
      return [{ slug: 'placeholder' }]
    }
    
    return posts.map((post) => ({
      slug: post.slug.current,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    // En caso de error, retornar placeholder para evitar fallo de build
    return [{ slug: 'placeholder' }]
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = params

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
