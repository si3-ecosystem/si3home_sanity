import {defineType, defineField} from 'sanity'
import {VscFeedback} from 'react-icons/vsc'

export const events = defineType({
  name: 'events',
  title: 'Events',
  type: 'document',
  icon: () => <VscFeedback />,

  fields: [
    defineField({
      name: 'partner_brands',
      title: 'Partner Brands',
      type: 'array',
      of: [
        {
          type:"image"
        }
      ]
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
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'host',
      title: 'Host',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Event Date',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'event_url',
      title: 'Event URL',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'banner',
    },
  },
})
export const posts = defineType({
  name: 'posts',
  title: 'Posts',
  type: 'document',
  icon: () => <VscFeedback />,

  fields: [
    defineField({
      name: 'image',
      title: 'Post Image',
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
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Post Type',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})

export const educationalReplays = defineType({
  name: 'educational_replays',
  title: 'Educational Replay Videos',
  type: 'document',
  icon: () => <VscFeedback />,

  fields: [
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
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
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'host',
      title: 'Host',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'video_url',
      title: 'Video URL',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'host_title',
      title: 'Host Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug',
      media: 'thumbnail',
    },
  },
})