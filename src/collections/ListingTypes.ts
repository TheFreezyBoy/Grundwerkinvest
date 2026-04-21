// collections/ListingTypes.ts
import { CollectionConfig } from 'payload'

const ListingTypes: CollectionConfig = {
  slug: 'listingTypes',
  labels: {
    singular: 'Listing Type',
    plural: 'Listing Types',
  },
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
  ],
}

export default ListingTypes
