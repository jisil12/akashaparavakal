import { defineConfig } from 'next-sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas'

export const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  title: 'Akashaparavakal',
  apiVersion: '2024-01-12',
  basePath: '/admin/studio',
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
}) 