import {defineField, defineType} from 'sanity'
import {PinIcon} from '@sanity/icons'

export const venueType = defineType({
  name: 'venue',
  title: 'Venue',
  type: 'document',
  icon: PinIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      city: 'city',
      country: 'country',
      media: 'icon',
    },
    prepare({title, city, country, media}) {
      return {
        title,
        subtitle: city + ', ' + country,
        media: media || PinIcon,
      }
    },
  },
})
