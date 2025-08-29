import {defineType, defineArrayMember} from 'sanity'

export const pageBuilderType = defineType({
  name: 'pageBuilder',
  type: 'array',
  of: [
    defineArrayMember({type: 'hero'}),
    defineArrayMember({type: 'event'}),
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
