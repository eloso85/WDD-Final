// schemas/blockContent.js
import { defineType, defineField } from 'sanity';

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
        { title: 'Code', value: 'code' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
        { title: 'Checklist', value: 'checklist' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Underline', value: 'underline' },
          { title: 'Code', value: 'code' },
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
          {
            title: 'Internal link',
            name: 'internalLink',
            type: 'object',
            fields: [
              {
                title: 'Reference',
                name: 'reference',
                type: 'reference',
                to: [{ type: 'page' }],
              },
            ],
          },
          {
            title: 'Footnote',
            name: 'footnote',
            type: 'object',
            fields: [
              {
                title: 'Footnote',
                name: 'footnote',
                type: 'string',
              },
            ],
          },
        ],
      },
    },
    {
      type: 'image',
      options: { hotspot: true },
    },
    {
      title: 'Video',
      name: 'video',
      type: 'object',
      fields: [
        {
          title: 'Video URL',
          name: 'url',
          type: 'url',
        },
      ],
    },
    {
      title: 'Embed',
      name: 'embed',
      type: 'object',
      fields: [
        {
          title: 'Embed Code',
          name: 'code',
          type: 'text',
        },
      ],
    },
    {
      type: 'code',
      name: 'myCodeField',
      title: 'Code with all options',
      options: {
        language: 'javascript',
        languageAlternatives: [
          { title: 'Javascript', value: 'javascript' },
          { title: 'HTML', value: 'html' },
          { title: 'CSS', value: 'css' },
        ],
        withFilename: true,
      },
    },
  ],
});
