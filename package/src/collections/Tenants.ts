import { CollectionConfig } from 'payload/types'
// import { Text } from '../fields/Text'
import { Text } from '../fields/ProxyFields'

export const Tenants: CollectionConfig = {
  slug: 'tenants',
  admin: { useAsTitle: 'name' },
  fields: [
    Text.name({ admin: { position: 'sidebar' } }),
  ]
}

export const TenantUsers: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {  useAsTitle: 'email' },
  fields: [
    
  ],
}
