import type { CollectionConfig } from 'payload'

export const Files: CollectionConfig = {
  slug: 'files',
  labels: { singular: 'Plik', plural: 'Pliki' },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'description',
      type: 'text',
      label: 'Opis',
      required: true,
    },
  ],
  upload: true,
}
