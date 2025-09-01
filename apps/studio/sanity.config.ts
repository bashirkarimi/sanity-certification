import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {presentationTool} from 'sanity/presentation'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'
import {defaultDocumentNode} from './structure/default-document-node'
import {media} from 'sanity-plugin-media'
import {resolve} from './presentation/resolve'

export default defineConfig({
  name: 'default',
  title: 'Sanity Certification - Content Operations',

  projectId: 'uklo41u5',
  dataset: 'production',

  plugins: [
    structureTool({structure, defaultDocumentNode}),
    visionTool(),
    media(),
    presentationTool({
      resolve,
      previewUrl: {
        previewMode: {
          enable: 'http://localhost:3000/api/draft-mode/enable',
        },
      },
      allowOrigins: ['http://localhost:3000', 'http://127.0.0.1:3000'],
    }),
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    newDocumentOptions: (prev) => prev.filter((item) => item.templateId !== 'siteSettings'),
  },
})
