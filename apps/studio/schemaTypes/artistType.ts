import { defineField, defineType } from "sanity";
import {UsersIcon} from '@sanity/icons'

export const artistType = defineType({
  name: "artist",
  title: "Artist",
  type: "document",
  icon: UsersIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "photo",
    },
    prepare({title, media}) {
      return {
        title,
        media: media || UsersIcon,
      }
    },
  },
});
