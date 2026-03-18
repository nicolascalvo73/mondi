import { groq } from 'next-sanity'

export const getAllPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    publishedAt,
    author,
    categories
  }
`

export const getPostBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    publishedAt,
    author,
    categories,
    body
  }
`

export const getRecentPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    excerpt,
    mainImage {
      asset->{
        _id,
        url
      },
      alt
    },
    publishedAt,
    author,
    categories
  }
`
