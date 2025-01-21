import {defineType, defineField} from 'sanity'
import {VscFeedback} from 'react-icons/vsc'

export const explorerVideos = defineType({
  name: 'explorer_videos',
  title: 'Explorer Videos',
  type: 'document',
  icon: () => <VscFeedback />,

  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [
        {
            type:"reference",
            to:{
                type:"explorer_videos_categories",
            }
        }
      ]
    }),
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


export const explorerVideoCategories = defineType({
  name: 'explorer_videos_categories',
  title: 'Explorer Videos Category',
  type: 'document',
  icon: () => <VscFeedback />,

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug',
    },
  },
})
