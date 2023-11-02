import { CollectionConfig } from 'payload/types'
import { Relationship, Text, Json } from 'payload-functions'

export const Nodes: CollectionConfig = {
  slug: 'nodes',
  admin: { useAsTitle: 'name' },
  fields: [ Text.name(), Json.data(),
  ],
}
