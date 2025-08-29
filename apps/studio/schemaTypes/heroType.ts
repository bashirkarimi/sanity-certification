import {defineField, defineType} from 'sanity'
import {TextIcon} from '@sanity/icons'

export const heroType = defineType({
  name: 'hero',
  type: 'object',
  icon: TextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'text',
      type: 'text',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare(selection) {
      const {title, media} = selection
      return {
        title,
        media: media ?? TextIcon,
      }
    },
  },
})
