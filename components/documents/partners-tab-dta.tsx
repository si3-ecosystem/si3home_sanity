import {defineType, defineField} from 'sanity'
import {IoIosInformationCircleOutline} from 'react-icons/io'


export const PartnerTabHeader = defineType({
  name: 'partnersTabHeader',
  title: 'Partners Tab Header',
  type: 'document',
  icon: () => <IoIosInformationCircleOutline />,

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
    }),

  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
  },
})

export const PartnerTabFooter = defineType({
  name: 'partnersTabFooter',
  title: 'Partners Tab Footer',
  type: 'document',
  icon: () => <IoIosInformationCircleOutline />,

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'btnTitle',
      title: 'Button Title',
      validation: (rule) => rule.required(),
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'Action URL',
      type: 'string',
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),

  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      caption: 'caption',
    },
  },
})

export const PartnerTabPrograms = defineType({
  name: 'partner_programs',
  title: 'Partners Programs',
  type: 'document',
  icon: () => <IoIosInformationCircleOutline />,

  fields: [
    defineField({
      name: 'event',
      title: 'Event Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Event Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Event URL',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'banner',
        title: 'Event Banner',
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
      event: 'event',
      title: 'title',
      description: 'description',
      link: 'link',
      media: 'banner',
    },
  },
})
