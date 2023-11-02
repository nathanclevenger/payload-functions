import { CollectionConfig } from 'payload/types'
import { Text, Json } from '../fields'

export const Dynamic = (slug: string, config: Partial<CollectionConfig> = {}): CollectionConfig => ({
  ...config, 
  slug,
  admin: {  useAsTitle: 'email', ...(config.admin ?? {}) },
  fields: [ Text.name(), Json.data(), ...(config.fields ?? []) ],
})
