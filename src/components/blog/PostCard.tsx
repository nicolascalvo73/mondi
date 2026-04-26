'use client'

import { Card, CardContent, Typography, Box, Chip } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Link from 'next/link'
import Image from 'next/image'
import { SanityPost } from '@/sanity/types'
import { useTranslations } from '@/lib/useTranslations'
import { useLanguage } from '@/lib/LanguageContext'

interface PostCardProps {
  post: SanityPost
  featured?: boolean
}

export default function PostCard({ post, featured = false }: PostCardProps) {
  const { t } = useTranslations()
  const { language } = useLanguage()
  
  const locale = language === 'es' ? 'es-AR' : language === 'pt' ? 'pt-BR' : 'en-US'
  
  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null

  const displayCategories = post.categories?.slice(0, 2) || []

  if (featured) {
    return (
      <Link
        href={`/blog?slug=${post.slug.current}`}
        style={{ textDecoration: 'none', display: 'block' }}
      >
        <Box
          sx={{
            position: 'relative',
            borderRadius: '1rem',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            minHeight: { xs: 'auto', md: '31.25rem' },
            backgroundColor: '#f6f3ee',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: '#ebe8e3',
            },
            cursor: 'pointer',
            group: {},
          }}
        >
          {/* Image Section */}
          <Box
            sx={{
              width: { xs: '100%', md: '60%' },
              height: { xs: '18.75rem', md: 'auto' },
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {post.mainImage?.asset?.url ? (
              <>
                <Image
                  src={post.mainImage.asset.url}
                  alt={post.mainImage.alt || post.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to right, rgba(246,243,238,0.4), transparent)',
                  }}
                />
              </>
            ) : (
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#e8e2da',
                }}
              >
                <Typography sx={{ fontSize: '5rem', opacity: 0.3 }}>📝</Typography>
              </Box>
            )}
          </Box>

          {/* Content Section */}
          <Box
            sx={{
              width: { xs: '100%', md: '40%' },
              p: { xs: '2rem', md: '3rem' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '1.5rem',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.625rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'primary.main',
              }}
            >
              <Box
                sx={{
                  width: '0.5rem',
                  height: '0.5rem',
                  borderRadius: '50%',
                  backgroundColor: 'primary.main',
                }}
              />
              {t('blog.featured')}
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontFamily: 'var(--font-epilogue)',
                fontSize: { xs: '1.875rem', md: '2.25rem' },
                fontWeight: 700,
                lineHeight: 1.2,
                color: 'text.primary',
              }}
            >
              {post.title}
            </Typography>

            {post.excerpt && (
              <Typography
                sx={{
                  color: 'text.secondary',
                  fontSize: '1.125rem',
                  lineHeight: 1.6,
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {post.excerpt}
              </Typography>
            )}

            <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem', pt: '1rem' }}>
              <Box
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'primary.contrastText',
                  px: '2rem',
                  py: '0.75rem',
                  borderRadius: '9999rem',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 0.625rem 1.25rem rgba(232, 98, 42, 0.2)',
                  },
                  '&:active': {
                    transform: 'scale(0.95)',
                  },
                }}
              >
                {t('blog.readArticle')}
              </Box>
            </Box>
          </Box>
        </Box>
      </Link>
    )
  }

  // Regular card
  return (
    <Link
      href={`/blog?slug=${post.slug.current}`}
      style={{ textDecoration: 'none', display: 'block', height: '100%' }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
          height: '100%',
          cursor: 'pointer',
        }}
      >
        {/* Image */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            aspectRatio: '4 / 3',
            borderRadius: '1rem',
            overflow: 'hidden',
            backgroundColor: '#f6f3ee',
            '& img': {
              transition: 'transform 0.5s ease',
            },
            '&:hover img': {
              transform: 'scale(1.1)',
            },
          }}
        >
          {post.mainImage?.asset?.url ? (
            <Image
              src={post.mainImage.asset.url}
              alt={post.mainImage.alt || post.title}
              fill
              style={{
                objectFit: 'cover',
              }}
            />
          ) : (
            <Box
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0.3,
              }}
            >
              <Typography sx={{ fontSize: '3rem' }}>📝</Typography>
            </Box>
          )}
        </Box>

        {/* Content */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', flexGrow: 1 }}>
          {/* Meta */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              fontSize: '0.625rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'text.secondary',
              opacity: 0.6,
            }}
          >
            {displayCategories[0] && <span>{displayCategories[0]}</span>}
            {formattedDate && (
              <>
                <Box
                  sx={{
                    width: '0.25rem',
                    height: '0.25rem',
                    borderRadius: '50%',
                    backgroundColor: '#e0bfb4',
                  }}
                />
                <span>{formattedDate}</span>
              </>
            )}
          </Box>

          {/* Title */}
          <Typography
            variant="h3"
            sx={{
              fontFamily: 'var(--font-epilogue)',
              fontSize: '1.5rem',
              fontWeight: 700,
              lineHeight: 1.3,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              transition: 'color 0.2s ease',
              '&:hover': {
                color: 'primary.main',
              },
            }}
          >
            {post.title}
          </Typography>

          {/* Excerpt */}
          {post.excerpt && (
            <Typography
              sx={{
                color: 'text.secondary',
                fontSize: '0.875rem',
                lineHeight: 1.6,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {post.excerpt}
            </Typography>
          )}

          {/* Read more */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'primary.main',
              fontWeight: 700,
              fontSize: '0.75rem',
              pt: '0.5rem',
              mt: 'auto',
            }}
          >
            5 {t('blog.readTime')}
            <ArrowForwardIcon sx={{ fontSize: '0.875rem' }} />
          </Box>
        </Box>
      </Box>
    </Link>
  )
}
