import {defineType, defineField} from 'sanity'
import {VscFeedback} from 'react-icons/vsc'

export const partnerTestimonials = defineType({
  name: 'partnerTestimonials',
  title: 'Partner Testimonials',
  type: 'document',
  icon: () => <VscFeedback />,

  fields: [
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
    }),
    // defineField({
    //   name: 'name',
    //   title: 'Name',
    //   type: 'string',
    //   validation: (rule) => rule.required(),
    // }),
    // defineField({
    //   name: 'title',
    //   title: 'Title',
    //   type: 'string',
    //   validation: (rule) => rule.required(),
    // }),
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Company Url',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    }),
  ],
  preview: {
    select: {
      title: 'companyName',
      subtitle: 'description',
      media: 'image',
    },
  },
})

export default defineType({
  name: 'testimonials',
  title: 'Leader Testimonials',
  type: 'document',
  icon: () => <VscFeedback />,

  fields: [
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Company Url',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'companyLogo',
      title: 'Company logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
      media: 'image',
    },
  },
})
