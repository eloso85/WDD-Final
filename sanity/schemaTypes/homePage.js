/* eslint-disable */

// schemas/homePage.js
export default {
  name: 'homePage',
  type: 'document',
  title: 'Home Page',
  fields: [
    {
      name: 'hero',
      type: 'object',
      title: 'Hero Section',
      fields: [
        { name: 'image', type: 'image', title: 'Hero Image' },
        { name: 'h1', type: 'string', title: 'Hero Text H1' },
        { name: 'p1', type: 'string', title: 'Hero Text P1' },
        { name: 'p2', type: 'string', title: 'Hero Text P2' },

        { name: 'cta', type: 'string', title: 'Hero CTA' }
      ]
    },
    {
      name: 'pricingCards',
      type: 'array',
      title: 'Pricing Cards',
      of: [
        {
          type: 'object',
          name: 'pricingCard',
          title: 'Pricing Card',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'price', type: 'string', title: 'Price' },
            { name: 'features', type: 'array', title: 'Features', of: [{ type: 'string' }] },
            { name: 'cta', type: 'string', title: 'CTA' }
          ]
        }
      ],
      validation: Rule => Rule.max(3).error('You can only have up to 3 pricing cards')
    },
    {
      name: 'mainContent',
      type: 'blockContent',
      title: 'Main Content',
      
    },
    {
      name: 'team',
      type: 'object',
      title: 'Team Section',
      fields: [
        {
          name: 'members',
          type: 'array',
          title: 'Team Members',
          of: [
            {
              type: 'object',
              name: 'teamMember',
              title: 'Team Member',
              fields: [
                { name: 'image', type: 'image',options: { hotspot: true }, title: 'Image' },
                { name: 'name', type: 'string', title: 'Name' },
                { name: 'title', type: 'string', title: 'Title' },
                {
                  name: 'content',
                  type: 'blockContent',
                  title: 'Content',
                  
                },
                {
                  name: 'socialMedia',
                  type: 'array',
                  title: 'Social Media Links',
                  of: [
                    {
                      type: 'object',
                      name: 'socialLink',
                      title: 'Social Link',
                      fields: [
                        {
                          name: 'platform',
                          type: 'string',
                          title: 'Platform',
                          description: 'Name of the social media platform (e.g., Facebook, Twitter)'
                        },
                        {
                          name: 'icon',
                          type: 'string',
                          title: 'Icon',
                          options: {
                            list: [
                              { title: 'FaceBook', value: 'FaFacebook' },
                              { title: 'Twitter/X', value: 'FaTwitter' },
                              { title: 'Instagram', value: 'FaInstagram' },
                              { title: 'Linkedin', value: 'FaLinkedin' },
                              { title: 'Snapchat', value: 'FaSnapchat' },
                              { title: 'Youtube', value: 'FaYoutube' },
                              { title: 'TikTok', value: 'FaTiktok' }
                            ]
                          }
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
                    }
                  ]
                },
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'additionalImages',
      type: 'array',
      title: 'Additional Images',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              title: 'Caption',
              name: 'caption',
              type: 'string',
              options: { isHighlighted: true }
            },
            {
              title: 'Alt Text',
              name: 'alt',
              type: 'string'
            }
          ]
        }
      ]
    },
    {
      name: 'additionalContent1',
      type: 'blockContent',
      title: 'Additional Content 1',
      
    },
    {
      name: 'additionalContent2',
      type: 'blockContent',
      title: 'Additional Content 2',
      
    },
    {
      name: 'cta',
      type: 'object',
      title: 'Call to Action',
      fields: [
        { name: 'text', type: 'string', title: 'Text' },
        { name: 'link', type: 'url', title: 'Link' }
      ]
    }
  ]
}

