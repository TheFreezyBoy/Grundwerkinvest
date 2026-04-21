// collections/Cities.ts

import type { CollectionConfig } from 'payload'

const Cities: CollectionConfig = {
  slug: 'cities',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'url',
      type: 'text',
      required: true,
      unique: true,
      access: {
        update: () => false,
      },
      validate: (value) => {
        const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
        if (!slugRegex.test(value)) {
          return 'Url должен содержать только строчные буквы, цифры и дефисы, например "house-in-berlin"'
        }
        return true
      },
    },
  ],
}

export default Cities