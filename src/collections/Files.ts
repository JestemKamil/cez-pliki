import type { CollectionConfig } from 'payload'

export const Files: CollectionConfig = {
  slug: 'files',
  labels: { singular: 'Plik', plural: 'Pliki' },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "description"
  },
  fields: [
    {
      name: 'description',
      type: 'text',
      label: 'Opis',
      required: true,
    },
    {
      name: 'class',
      type: 'relationship',
      relationTo: 'classes',
      label: 'Klasa',
      required: true,
    },
  ],
  upload: true,
}
