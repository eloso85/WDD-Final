/* eslint-disable */
export default {
  name: 'navigation',
  type: 'document',
  title: 'Navigation Settings',
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
      name: 'companyName',
      type: 'string',
      title: 'Company Name'
    },
    {
      name: 'phoneNumber',
      type: 'string',
      title: 'Phone Number'
    },
    {
      name: 'socialMedia',
      type: 'array',
      title: 'Social Media Links',
      of: [{type: 'socialLink'}] // This references another schema defined below
    },
    {
      name: 'navLinks',
      type: 'array',
      title: 'Navigation Links',
      of: [{type: 'reference', to: [{type: 'navigationRoutes'}]}] // Assuming 'route' is a predefined document type for routes
    },
    // {
    //   name: 'cta',
    //   type: 'cta', // This references another schema defined below
    //   title: 'Call to Action'
    // }
  ]
};
  