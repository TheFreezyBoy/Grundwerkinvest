// collections/Properties.ts
import { CollectionConfig } from 'payload'

const Properties: CollectionConfig = {
  slug: 'properties',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      hooks: {
        beforeValidate: [
          ({ data }) => {
            if (data?.title) {
              return data.title.toLowerCase().replace(/\s+/g, '-')
            }
          },
        ],
      },
    },
    {
      name: 'location',
      type: 'text',
      required: true,
    },
    {
      name: 'city',
      type: 'relationship',
      relationTo: 'cities',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
    },
    {
      name: 'monthlyIncome',
      type: 'number',
    },
    {
      name: 'roi',
      type: 'number',
      label: 'ROI (%)',
    },
    {
      name: 'bedrooms',
      type: 'number',
    },
    {
      name: 'yearBuilt',
      type: 'text',
    },
    {
      name: 'size',
      type: 'number',
      label: 'Size (m²)',
    },
    {
      name: 'garage',
      type: 'text'
    },
    {
      name: 'type',
      type: 'select',
      options: [
        { label: 'Apartment', value: 'Apartment' },
        { label: 'Penthouse', value: 'Penthouse' },
        { label: 'House', value: 'House' },
        { label: 'Loft', value: 'Loft' },
        { label: 'Villa', value: 'Villa' },
        { label: 'Office', value: 'Office' },
        { label: 'Building', value: 'Building' },
      ],
    },
    {
      name: 'images',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'meta',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
        },
      ],
    },
  ],
}

export default Properties
