import { PortableTextBlock } from '@portabletext/react'

export interface SanityImageAsset {
  _id: string
  url: string
}

export interface SanityImage {
  asset: SanityImageAsset
  alt?: string
}

export interface SanityPost {
  _id: string
  title: string
  slug: { current: string }
  excerpt?: string
  mainImage?: SanityImage
  publishedAt?: string
  author?: string
  categories?: string[]
  body?: PortableTextBlock[]
}
