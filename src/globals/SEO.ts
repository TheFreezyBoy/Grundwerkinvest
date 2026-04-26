import type { GlobalConfig } from 'payload'

export const SEO: GlobalConfig = {
  slug: 'seo',
  label: 'SEO Settings',
  admin: {
    group: 'Settings',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Deutsch (DE)',
          fields: [
            {
              name: 'title_de',
              type: 'text',
              label: 'Page Title (DE)',
              defaultValue: 'Grundwerkinvest – Immobilieninvestments in Deutschland',
              admin: {
                description: 'Optimal: 50-60 Zeichen',
              },
            },
            {
              name: 'description_de',
              type: 'textarea',
              label: 'Meta Description (DE)',
              defaultValue:
                'Ihr Partner für schlüsselfertige Immobilieninvestments in Deutschland.',
              admin: {
                description: 'Optimal: 150-160 Zeichen',
              },
            },
            {
              name: 'keywords_de',
              type: 'text',
              label: 'Keywords (DE)',
              admin: {
                description: 'Komma-getrennt',
              },
            },
          ],
        },
        {
          label: 'English (EN)',
          fields: [
            {
              name: 'title_en',
              type: 'text',
              label: 'Page Title (EN)',
              defaultValue: 'Grundwerkinvest – Real Estate Investments in Germany',
              admin: {
                description: 'Optimal: 50-60 characters',
              },
            },
            {
              name: 'description_en',
              type: 'textarea',
              label: 'Meta Description (EN)',
              defaultValue: 'Your partner for ready-made real estate investments in Germany.',
              admin: {
                description: 'Optimal: 150-160 characters',
              },
            },
            {
              name: 'keywords_en',
              type: 'text',
              label: 'Keywords (EN)',
              admin: {
                description: 'Comma-separated',
              },
            },
          ],
        },
        {
          label: 'Open Graph & Social',
          fields: [
            {
              name: 'ogImage',
              type: 'upload',
              relationTo: 'media',
              label: 'OG Image (1200×630)',
            },
            {
              name: 'siteName',
              type: 'text',
              label: 'Site Name',
              defaultValue: 'Grundwerkinvest',
            },
            {
              name: 'twitterHandle',
              type: 'text',
              label: 'Twitter Handle',
              admin: {
                placeholder: '@grundwerkinvest',
              },
            },
          ],
        },
        {
          label: 'Technical',
          fields: [
            {
              name: 'canonicalUrl',
              type: 'text',
              label: 'Canonical URL',
              defaultValue: 'https://grundwerkinvest.de',
              admin: {
                description: 'Base URL for canonical tags',
              },
            },
            {
              name: 'robotsIndex',
              type: 'checkbox',
              label: 'Allow Search Engines (index)',
              defaultValue: true,
            },
            {
              name: 'robotsFollow',
              type: 'checkbox',
              label: 'Allow Following Links (follow)',
              defaultValue: true,
            },
          ],
        },
      ],
    },
  ],
}
