import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'
import {defaultDocumentNode} from './structure/default-document-node'
import {media} from 'sanity-plugin-media'

export default defineConfig({
  name: 'default',
  title: 'Sanity Certification - Content Operations',

  projectId: 'uklo41u5',
  dataset: 'production',

  plugins: [
    structureTool({structure, defaultDocumentNode}), 
    visionTool(),
    media()
  ],

  schema: {
    types: schemaTypes,
  },
})
