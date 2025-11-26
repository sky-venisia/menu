import { Locales } from '@/types/locales';

export const categoryNames: Record<string, Record<Locales, string>> = {
  starters: {
    en: 'Starters',
    fr: 'Entrées',
    es: 'Entrantes',
    it: 'Antipasti',
  },
  'moroccan-dishes': {
    en: 'Moroccan Dishes',
    fr: 'Plats Marocains',
    es: 'Platos Marroquíes',
    it: 'Piatti Marocchini',
  },
  international: {
    en: 'International',
    fr: 'Plats Internationaux',
    es: 'Platos Internacionales',
    it: 'Piatti Internazionali',
  },
  'strong-drinks': {
    en: 'Strong Drinks',
    fr: 'Boissons Fortes',
    es: 'Bebidas Fuertes',
    it: 'Bevande Alcoliche',
  },
  desserts: {
    en: 'Desserts',
    fr: 'Dessert',
    es: 'Postres',
    it: 'Dolci',
  },
};
