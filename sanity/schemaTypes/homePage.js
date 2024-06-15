/* eslint-disable */
export default {
  name: "homepage",
  type: "document",
  title: "Homepage",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "heroImage",
      type: "image",
      title: "Hero Image",
    },
    {
      name: "heroText",
      type: "text",
      title: "Hero Text",
    },
    {
      name: "sections",
      type: "array",
      title: "Sections",
      of: [{ type: "block" }],
    },
  ],
};
