// collections/Listings.ts
import { CollectionConfig } from 'payload'

const Listings: CollectionConfig = {
  slug: 'listings',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      hooks: {
        beforeValidate: [
          ({ data }) => {
            if (data?.category?.objectType) {
              return `${data.category.objectType}`
            }
          },
        ],
      },
    },
    {
      name: 'url',
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
      access: {
        update: () => false,
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Details',
          fields: [
            {
              type: 'group',
              name: 'category',
              label: 'Object main data',
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'categoryBuy',
                      type: 'select',
                      label: 'Category',
                      admin: {
                        width: '30%',
                      },
                      options: [
                        {
                          label: 'Buy',
                          value: 'buy',
                        },
                        {
                          label: 'Rent',
                          value: 'rent',
                        },
                      ],
                    },
                    {
                      name: 'categoryType',
                      type: 'select',
                      label: 'Category',
                      admin: {
                        width: '30%',
                      },
                      options: [
                        {
                          label: 'Live',
                          value: 'live',
                        },
                        {
                          label: 'Business',
                          value: 'business',
                        },
                      ],
                    },
                  ],
                },
                {
                  type: 'select',
                  name: 'objectType',
                  options: [
                    {
                      label: 'House',
                      value: 'house',
                    },
                    {
                      label: 'Apartment',
                      value: 'apartment',
                    },
                    {
                      label: 'Land',
                      value: 'land',
                    },
                    {
                      label: 'Garage',
                      value: 'garage',
                    },
                    {
                      label: 'Property',
                      value: 'property',
                    },
                    {
                      label: 'Office/Practice',
                      value: 'office',
                    },
                    {
                      label: 'Restaurants/Hotels',
                      value: 'restaurants',
                    },
                    {
                      label: 'Hall/Production',
                      value: 'hall',
                    },
                    {
                      label: 'retail',
                      value: 'retail',
                    },
                  ],
                },
                {
                  name: 'status',
                  type: 'select',
                  required: true,
                  options: [
                    {
                      label: 'Available',
                      value: 'available',
                    },
                    {
                      label: 'Marketing',
                      value: 'marketing',
                    },
                    {
                      label: 'Sold',
                      value: 'sold',
                    },
                    {
                      label: 'Inactive',
                      value: 'inactive',
                    },
                    {
                      label: 'Paused',
                      value: 'paused',
                    },
                  ],
                },
                {
                  name: 'id',
                  label: 'ID',
                  type: 'number',
                  access: {
                    update: () => false,
                  },
                },
              ],
            },

            {
              type: 'group',
              name: 'address',
              label: 'Address details',
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'address',
                      type: 'text',
                      label: 'Address',
                      admin: {
                        width: '50%',
                      },
                    },
                    {
                      name: 'houseNumber',
                      type: 'text',
                      label: 'No.',
                      admin: {
                        width: '10%',
                      },
                    },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'zip',
                      type: 'text',
                      label: 'Zip',
                      admin: {
                        width: '50%',
                      },
                    },
                    {
                      name: 'city',
                      type: 'text',
                      label: 'City',
                      admin: {
                        width: '50%',
                      },
                    },
                  ],
                },
                {
                  name: 'region',
                  type: 'relationship',
                  relationTo: 'listingTypes',
                  label: 'Region',
                },
                {
                  name: 'location',
                  type: 'point',
                  label: 'Location',
                },
                {
                  name: 'doNotDisplayStreet',
                  type: 'checkbox',
                  label: 'Do not display street names',
                },
              ],
            },
            {
              type: 'group',
              name: 'prices',
              label: 'Prices',
              fields: [
                {
                  type: 'number',
                  name: 'price',
                  label: 'Price',
                  min: 0,
                },
                {
                  type: 'checkbox',
                  name: 'onRequest',
                  label: 'Price on request',
                },
                {
                  type: 'checkbox',
                  name: 'negotiable',
                  label: 'Price negotiable',
                },
              ],
            },
            {
              type: 'group',
              name: 'areas',
              label: 'Areas',
              fields: [
                {
                  type: 'number',
                  name: 'landArea',
                  label: 'Land area (m²)',
                  min: 0,
                },
                {
                  type: 'number',
                  name: 'livingSpace',
                  label: 'Living space (m²)',
                  min: 0,
                },
                {
                  type: 'number',
                  name: 'gardenArea',
                  label: 'Garden area (m²)',
                  min: 0,
                },
                {
                  type: 'number',
                  name: 'balconyArea',
                  label: 'Balcony/terrace area (m²)',
                  min: 0,
                },
                {
                  type: 'number',
                  name: 'room',
                  label: 'Rooms',
                  min: 0,
                },
                {
                  type: 'number',
                  name: 'bedroom',
                  label: 'Bedrooms',
                  min: 0,
                },
                {
                  type: 'number',
                  name: 'bathroom',
                  label: 'Bathrooms',
                  min: 0,
                },
                {
                  type: 'number',
                  name: 'floor',
                  label: 'Floor',
                  min: 0,
                },
                {
                  type: 'number',
                  name: 'floorNumber',
                  label: 'Number of floors',
                  min: 0,
                },
              ],
            },
            {
              type: 'group',
              name: 'additional',
              label: 'Further information',
              fields: [
                {
                  type: 'number',
                  name: 'construction',
                  label: 'Year of construction',
                  min: 0,
                },
                {
                  type: 'number',
                  name: 'lastModernization',
                  label: 'Last modernization',
                  min: 0,
                },
                {
                  type: 'select',
                  name: 'quality',
                  label: 'Quality of equipment',
                  options: [
                    {
                      label: 'Luxurious',
                      value: 'luxurious',
                    },
                    {
                      label: 'Upscale',
                      value: 'upscale',
                    },
                    {
                      label: 'Normal',
                      value: 'normal',
                    },
                    {
                      label: 'Simply',
                      value: 'simply',
                    },
                  ],
                },
                {
                  type: 'checkbox',
                  name: 'rented',
                  label: 'Rented',
                },
              ],
            },
            {
              type: 'group',
              name: 'energy',
              label: 'Energy certificate',
              fields: [
                {
                  type: 'date',
                  name: 'created',
                  label: 'Date of creation',
                },
                {
                  type: 'date',
                  name: 'until',
                  label: 'Valid until',
                },
                {
                  type: 'select',
                  name: 'efficiencyClass',
                  label: 'Energy efficiency class',
                  options: [
                    {
                      label: 'A+++',
                      value: 'aPlusPlusPlus',
                    },
                    {
                      label: 'A++',
                      value: 'aPlusPlus',
                    },
                    {
                      label: 'A+',
                      value: 'aPlus',
                    },
                    {
                      label: 'A',
                      value: 'a',
                    },
                    {
                      label: 'B',
                      value: 'b',
                    },
                    {
                      label: 'C',
                      value: 'c',
                    },
                    {
                      label: 'D',
                      value: 'd',
                    },
                    {
                      label: 'E',
                      value: 'e',
                    },
                    {
                      label: 'F',
                      value: 'f',
                    },
                    {
                      label: 'G',
                      value: 'g',
                    },
                    {
                      label: 'H',
                      value: 'h',
                    },
                  ],
                },
              ],
            },
            {
              type: 'group',
              name: 'description',
              label: 'Property description & features',
              fields: [
                {
                  type: 'textarea',
                  name: 'description',
                  label: 'Property description',
                },
                {
                  type: 'textarea',
                  name: 'features',
                  label: 'Features',
                },
                {
                  type: 'textarea',
                  name: 'other',
                  label: 'Other',
                },
              ],
            },
            {
              type: 'group',
              name: 'locationDescription',
              label: 'Location description',
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      type: 'number',
                      name: 'publicTransportMinutes',
                      label: 'Walk to public transport (minutes)',
                      min: 0,
                      admin: {
                        width: '50%',
                      },
                    },
                    {
                      type: 'number',
                      name: 'publicTransportDistance',
                      label: 'Walk to public transport (km)',
                      min: 0,
                      admin: {
                        width: '50%',
                      },
                    },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    {
                      type: 'number',
                      name: 'autobahnMinutes',
                      label: 'Travel time to the nearest Autobahn (minutes)',
                      min: 0,
                      admin: {
                        width: '50%',
                      },
                    },
                    {
                      type: 'number',
                      name: 'autobahnDistance',
                      label: 'Travel time to the nearest Autobahn (km)',
                      min: 0,
                      admin: {
                        width: '50%',
                      },
                    },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    {
                      type: 'number',
                      name: 'mainStationMinutes',
                      label: 'Walk to nearest main station (HBF) (minutes)',
                      min: 0,
                      admin: {
                        width: '50%',
                      },
                    },
                    {
                      type: 'number',
                      name: 'mainStationDistance',
                      label: 'Walk to nearest main station (HBF) (km)',
                      min: 0,
                      admin: {
                        width: '50%',
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Media',
          fields: [
            {
              name: 'Media',
              type: 'upload',
              relationTo: 'media',
              hasMany: true,
            },
          ],
        },
      ],
    },
  ],
}

export default Listings
