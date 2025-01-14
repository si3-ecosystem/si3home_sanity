import {defineType, defineField} from 'sanity'
import {VscFeedback} from 'react-icons/vsc'

export const FixxEvents = defineType({
  name: 'fixxEvents',
  title: 'Fixx Events',
  type: 'document',
  icon: () => <VscFeedback />,

  fields: [
    defineField({
      name: 'fixx_partner_brands',
      title: 'Fixx Partner Brands',
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
export const fixxPosts = defineType({
  name: 'fixx_posts',
  title: 'Fixx Posts',
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

export const FixxEducationalReplays = defineType({
  name: 'fixx_educational_replays',
  title: 'Fixx Educational Replay Videos',
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