import { createClient } from 'next-sanity'

// Fallback para desarrollo sin Sanity configurado
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'dummy-project-id'
const isConfigured = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && 
                     process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'placeholder'

export const client = createClient({
  projectId,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

export const isSanityConfigured = isConfigured
