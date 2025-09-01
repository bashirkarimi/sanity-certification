import {defineType, defineArrayMember} from 'sanity'

export const pageBuilderType = defineType({
  name: 'pageBuilder',
  type: 'array',
  of: [
    defineArrayMember({type: 'hero'}),
    defineArrayMember({type: 'reference', to: [{type: 'event'}]}),
    defineArrayMember({type: 'features'}),
  ],
  options: {
    insertMenu: {
      views: [
        {name: "grid",
          previewImageUrl: (schemaType) => `/block-previews/${schemaType}.png`
        }
      ]
    }
  },
})
