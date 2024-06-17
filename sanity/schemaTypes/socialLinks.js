/* eslint-disable */

export default {
    name: 'socialLink',
    type: 'object',
    title: 'Social Link',
    fields: [
      {
        name: 'logo',
        type: 'image',
        title: 'Logo',
        options: {
          hotspot: true // Enables image hotspot for better cropping
        }
      },
      {
        name: 'platform',
        type: 'string',
        title: 'Platform',
        description: 'Name of the social media platform (e.g., Facebook, Twitter)'
      },
      {
        name: 'url',
        type: 'url',
        title: 'URL',
        validation: Rule => Rule.uri({
          allowRelative: false,
          scheme: ['http', 'https']
        })
      }
    ]
};