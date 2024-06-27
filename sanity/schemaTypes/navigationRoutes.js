/* eslint-disable */
export default {
  name: 'navigationRoutes',
  type: 'document',
  title: 'Navigation Routes',
  fields: [
    {
      name: 'url',
      type: 'string',
      title: 'URL',
      validation: Rule => Rule.required()
    },
    {
      name: 'text',
      type: 'string',
      title: 'Text',
      validation: Rule => Rule.required()
    }
  ],

};
