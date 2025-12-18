import { HeartFilledIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const menuItemType = defineType({
  name: 'menuItem',
  title: 'Menu Item',
  type: 'document',
  icon: HeartFilledIcon,
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'object',
      fields: [
        { name: 'en', type: 'string', title: 'English' },
        { name: 'fr', type: 'string', title: 'French' },
        { name: 'es', type: 'string', title: 'Spanish' },
        { name: 'it', type: 'string', title: 'Italian' },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        { name: 'en', type: 'text', title: 'English' },
        { name: 'fr', type: 'text', title: 'French' },
        { name: 'es', type: 'text', title: 'Spanish' },
        { name: 'it', type: 'text', title: 'Italian' },
      ],
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sizes',
      title: 'Sizes',
      type: 'array',
      of: [
        defineField({
          name: 'sizeOption',
          type: 'object',
          fields: [
            {
              name: 'size',
              type: 'object',
              fields: [
                { name: 'en', type: 'string' },
                { name: 'fr', type: 'string' },
                { name: 'es', type: 'string' },
                { name: 'it', type: 'string' },
              ],
            },
            { name: 'price', type: 'number' },
          ],
        }),
      ],
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Controls the display order in the category (lowest number first)',
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'name.en',
      media: 'image',
      order: 'order',
    },
    prepare(selection) {
      const { title, media, order } = selection;
      return {
        title,
        media,
        subtitle: `Order: ${order}`,
      };
    },
  },
});
