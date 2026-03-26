'use client'

import { useState, useMemo } from 'react'
import { SanityPost } from '@/sanity/types'
import BlogPostCard from './BlogPostCard'
import CategoryFilter from './CategoryFilter'

interface BlogContentProps {
  posts: SanityPost[]
}

export default function BlogContent({ posts }: BlogContentProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Extraer todas las categorías únicas de los posts
  const allCategories = useMemo(() => {
    const categoriesSet = new Set<string>()
    posts.forEach((post) => {
      post.categories?.forEach((category) => {
        categoriesSet.add(category)
      })
    })
    return Array.from(categoriesSet).sort()
  }, [posts])

  // Filtrar posts por categoría seleccionada
  const filteredPosts = useMemo(() => {
    if (!selectedCategory) {
      return posts
    }
    return posts.filter((post) => 
      post.categories?.includes(selectedCategory)
    )
  }, [posts, selectedCategory])

  return (
    <>
      {allCategories.length > 0 && (
        <CategoryFilter
          categories={allCategories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      )}

      {filteredPosts.length === 0 ? (
        <div style={{ 
          textAlign: 'center',
          padding: '3rem 0',
        }}>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#666',
            fontFamily: 'var(--font-jakarta), sans-serif'
          }}>
            No hay posts en esta categoría.
          </p>
        </div>
      ) : (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
          gap: '2rem' 
        }}>
          {filteredPosts.map((post) => (
            <BlogPostCard key={post._id} post={post} />
          ))}
        </div>
      )}
    </>
  )
}
