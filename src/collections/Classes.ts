import type { CollectionConfig } from 'payload'

export const Classes: CollectionConfig = {
  slug: 'classes',
  labels: { singular: 'Klasa', plural: 'Klasy' },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Nazwa klasy',
      required: true,
    },
  ],
}
