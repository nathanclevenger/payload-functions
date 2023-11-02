import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
// import { slateEditor } from '@payloadcms/richtext-slate'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Config, buildConfig } from 'payload/config'

import { Users } from './collections/Users'

export const withPayload = (config: Partial<Config>) => buildConfig({
  ...config,
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
    ...(config.admin ?? {}),
  },
  editor: lexicalEditor({}),
  collections: [ ...(config.collections ?? []), Users ],
  globals: [ ...(config.globals ?? []) ],
  typescript: {
    outputFile: path.resolve(__dirname, 'types.ts'),
    ...(config.typescript ?? {}),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'schema.graphql'),
    ...(config.graphQL ?? {}),
  },
  plugins: [payloadCloud(), ...(config.plugins ?? [])],

  // TODO: Add support for Postgres by checking for POSTGRES_URI vs MONGODB_URI
  db: config.db ?? mongooseAdapter({
    url: process.env.MONGODB_URI,
  }),
})

export default withPayload({})