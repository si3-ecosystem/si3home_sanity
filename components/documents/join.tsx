import {defineType, defineField} from 'sanity'
import {IoIosInformationCircleOutline} from 'react-icons/io'


export const JoinExplorerTab = defineType({
  name: 'joinExplorers',
  title: 'Explorers Onboard CTA',
  type: 'document',
  icon: () => <IoIosInformationCircleOutline />,

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
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

export const JoinLeadersTab = defineType({
  name: 'joinLeaders',
  title: 'Leaders Onboard CTA',
  type: 'document',
  icon: () => <IoIosInformationCircleOutline />,

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
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
export const JoinBuildersTab = defineType({
  name: 'joinBuilders',
  title: 'Builders Onboard CTA',
  type: 'document',
  icon: () => <IoIosInformationCircleOutline />,

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
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
