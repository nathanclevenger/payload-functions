import { CollectionConfig, GlobalConfig } from 'payload/types'

export const Groups = ({ collections, globals}: { collections: CollectionConfig[], globals: GlobalConfig[] }): { collections: CollectionConfig[], globals: GlobalConfig[] } => ({
  collections: collections.map(collection => ({ admin: { group: 'Users', ...collection.admin }, ...collection })),
  globals: globals.map(global => ({ admin: { group: 'Users', ...global.admin }, ...global }))
})

