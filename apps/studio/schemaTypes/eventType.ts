import {defineType, defineField} from 'sanity'
import {CalendarIcon} from '@sanity/icons'
import {DoorsOpenInput} from './components/doors-open-input'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: CalendarIcon,
  groups: [
    {name: 'details', title: 'Details'},
    {name: 'editorial', title: 'Editorial'},
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'name'},
      hidden: ({document}) => !document?.name,
      validation: (rule) => rule.required().error('Slug is required'),
      readOnly: ({value, currentUser}) => {
        if (!value) return false
        if (!currentUser || !Array.isArray(currentUser.roles)) return false
        const isAdmin = currentUser.roles.some((role) => role.name === 'administrator')
        return !isAdmin
      },
    }),
    defineField({
      name: 'eventType',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          {title: 'In person', value: 'in-person'},
          {title: 'Virtual', value: 'virtual'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
    }),
    defineField({
      name: 'doorsOpen',
      title: 'Doors Open',
      type: 'number',
      description: 'Number of minutes before the start time for admission',
      initialValue: 60,
      components: {
        input: DoorsOpenInput,
      },
    }),
    defineField({
      name: 'venue',
      title: 'Venue',
      type: 'reference',
      to: [{type: 'venue'}],
      readOnly: ({value, document}) => !value && document?.eventType === 'virtual',
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'reference',
      to: [{type: 'artist'}],
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'details',
    }),
    defineField({
      name: 'details',
      title: 'Details',
      type: 'array',
      of: [{type: 'block'}],
      group: 'details',
    }),
    defineField({
      name: 'tickets',
      title: 'Tickets',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      artist: 'headline.name',
      venue: 'venue.name',
      media: 'image',
    },
    prepare({title, media, artist, venue}) {
      return {
        title,
        subtitle: artist + ', ' + venue,
        media: media || CalendarIcon,
      }
    },
  },
})
