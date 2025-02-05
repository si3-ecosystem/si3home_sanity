import {defineType, defineField} from 'sanity'
import {VscFeedback} from 'react-icons/vsc'


export const diversityTracker = defineType({
  name: 'diversity-tracker',
  title: 'Diversity Tracker',
  type: 'document',
  icon: () => <VscFeedback />,

  fields: [
    defineField({
      name: 'self_identity',
      title: 'Self Identity',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'age_range',
      title: 'Age Range',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ethnicity',
      title: 'Ethnicity',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'disabality',
      title: 'Disablity',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sexual_orientation',
      title: 'Sexual Orientation',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'equity_scale',
      title: 'Equity Scale',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'improvement_suggesstions',
      title: 'Please share your thoughts on how the Web3 industry can improve on the topics of Diversity, Equity, Accessibility and Inclusion.',
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'grant_provider',
      title: 'Grant Provider',
      type: 'string',
    }),
    defineField({
      name: 'grant_round',
      title: 'Grant Round',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'self_identity',
      subtitle: 'age_range',
    },
  },
})