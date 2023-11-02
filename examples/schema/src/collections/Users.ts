import { CollectionConfig } from 'payload/types'
import { Text } from 'payload-functions'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    Text.name({ required: true })
  ],
}
