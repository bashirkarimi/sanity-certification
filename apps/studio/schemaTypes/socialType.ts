import { defineType, defineField } from "sanity";

export const socialType = defineType({
  name: "social",
  title: "Social",
  type: "object",
  fields: [
    defineField({
      name: "linkedIn",
      title: "LinkedIn",
      type: "text",
      rows: 3
    }),
    defineField({
      name: "x",
      title: "X",
      type: "text",
      rows: 3
    }),
  ],
});
