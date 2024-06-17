/* eslint-disable */
export default {
    name: 'navigationRoutes',
    title: 'Navigation Routes',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'href',
        title: 'Href',
        type: 'string',
        description: 'Enter a relative path (like "/about-us") or a full URL'
      },
      {
        name: 'order',
        title: 'Order',
        type: 'number',
        description: 'Order of the links as they appear in the navbar'
      }
    ]
  };
  