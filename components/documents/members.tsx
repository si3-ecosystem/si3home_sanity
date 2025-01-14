import {defineType, defineField} from 'sanity'
import {VscFeedback} from 'react-icons/vsc'


export const members = defineType({
  name: 'members',
  title: 'Members',
  type: 'document',
  icon: () => <VscFeedback />,

  fields: [
    defineField({
      name: 'memberType',
      title: 'Member Type',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'firstname',
      title: 'First Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'lastname',
      title: 'Last Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'pronouns',
      title: 'Pronouns',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: 'pronouns_social_proof',
      title: 'Your social proof to identifies your pronoun',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'exploring_interests',
      title: 'Are you interested in exploring creating a livestreaming channel for your personal brand with our decentralized media tools? (for Si Her Co-Active members only)',
      type: 'string',
    }),
    defineField({
      name: 'core_values',
      title: 'Which values do you most strongly resonate with?',
      type: 'array',
      of:[{type:"string"}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'self_description',
      title: 'How would you describe yourself professionally',
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'joining_intentions',
      title: 'please share in a few sentences your intentions for joining si her and exploring a collaborative ecosystem of women and non-binary web3 creators.',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'source_of_information',
      title: 'Please share how you heard about Si Her',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'firstname',
      subtitle: 'self_description',
    },
  },
})