import { TagIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: TagIcon,

  fields: [
    defineField({
      name: 'slug',
      title: 'ID (used in frontend)',
      type: 'slug',
      options: {
        source: 'name.en',
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 50),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Controls the display order in the menu (lowest number first)',
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
  ],

  preview: {
    select: {
      title: 'name.en',
      subtitle: 'slug.current',
      order: 'order',
    },
    prepare(selection) {
      const { title, subtitle, order } = selection;
      return {
        title,
        subtitle: `${subtitle} (Order: ${order})`,
      };
    },
  },
});
