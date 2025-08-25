import { defineField , defineType } from "sanity"
import {FeedbackIcon} from '@sanity/icons'

export const feedbackType = defineType({
  name: 'feedback',
  title: 'Feedback',
  type: 'document',
  icon: FeedbackIcon,
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.email().warning('Please enter a valid email address'),
    }),
    defineField({
      name: 'sentiment',
      title: 'Sentiment',
      type: 'string',
      options: {
        list: [
          {title: 'Positive', value: 'positive'},
          {title: 'Neutral', value: 'neutral'},
          {title: 'Negative', value: 'negative'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Pending', value: 'pending'},
          {title: 'Approved', value: 'approved'},
          {title: 'Spam', value: 'spam'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'assignee',
      title: 'Assignee',
      type: 'string',
    }),
    defineField({
      name: 'Notes',
      title: 'Notes',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'content',
      subtitle: 'author',
    },
    prepare(selection) {
      const {title, subtitle} = selection
      return {
        title,
        subtitle: `by ${subtitle}`,
      }
    },
  },
})