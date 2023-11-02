import { CollectionConfig } from 'payload/types'
import { Text } from 'payload-functions/dist/fields/ProxyFields'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    Text.name()
  ],
}
