/* eslint-disable */
import { PlayIcon } from '@sanity/icons'
export default {
  name: 'navigation',
  type: 'document',
  title: 'Navigation',
  icon: PlayIcon,
  fields: [
    {
      name: 'companyName',
      type: 'string',
      title: 'Company Name'
    },
    {
      name: 'logo',
      type: 'image',
      title: 'Logo',
      options: {
        hotspot: true // Enables image hotspot for better cropping
      }
    },
    {
      name: 'logoLink',
      type: 'string',
      title: 'Logo Link',
      description: 'URL to navigate to when the logo is clicked',
    },
    
    {
      name: 'navLinks',
      type: 'array',
      title: 'Navigation Links',
      of: [
        {
          type: 'object',
          name: 'navigationRoutes',
          title: 'Navigation Routes',
          fields: [
            {
              name: 'text',
              type: 'string',
              title: 'Text'
            },
            {
              name: 'url',
              type: 'string',
              title: 'URL'
            },
            {
              name: 'dropdown',
              type: 'array',
              title: 'Dropdown Links',
              of: [
                {
                  type: 'object',
                  name: 'dropdownLink',
                  title: 'Dropdown Link',
                  fields: [
                    {
                      name: 'text',
                      type: 'string',
                      title: 'Text',
                    },
                    {
                      name: 'url',
                      type: 'string',
                      title: 'URL',
                    },
                  ],
                },
              ],
              
            },
          ]
        }
      ]
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
    {
      name: 'cta',
      type: 'object',
      title: 'CTA Button',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title'
        },
        {
          name: 'link',
          type: 'string',
          title: 'Link',
          
        }
      ]
    }
  ]
};
