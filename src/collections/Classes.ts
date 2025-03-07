import type { CollectionConfig } from 'payload'

export const Classes: CollectionConfig = {
  slug: 'classes',
  labels: { singular: 'Klasa', plural: 'Klasy' },

  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Nazwa klasy',
      required: true,
    },
    {
      name: 'relatedFiles',
      type: 'join',
      collection: 'files',
      on: 'class',
      label: 'Pliki klasy',
    },
  ],
}
