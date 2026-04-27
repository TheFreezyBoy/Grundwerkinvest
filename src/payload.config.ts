import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import Cities from '@/collections/Cities'
import Listings from '@/collections/Listings'
import { SEO } from '@/globals/SEO'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const rawDatabaseUrl = process.env.DATABASE_URL || ''
const databaseUrl = rawDatabaseUrl.replace(/['"]/g, '').trim()

if (!databaseUrl) {
  console.warn('DEBUG: DATABASE_URL is EMPTY!')
} else {
  console.log('DEBUG: DATABASE_URL starts with:', databaseUrl.substring(0, 15))
}

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  localization: {
    locales: ['en', 'de'],
    defaultLocale: 'ву',
  },
  collections: [Users, Media, Cities, Listings],
  globals: [SEO],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: databaseUrl,
    },
  }),
  sharp,
  plugins: [],
})
