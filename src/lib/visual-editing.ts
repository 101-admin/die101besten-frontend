import { enableVisualEditing } from '@sanity/visual-editing/next-pages-router'
import { client } from './config/sanity'

export const { href, navigate, query } = enableVisualEditing({
  client,
  studioUrl: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || 'http://localhost:3333/studio',
})
