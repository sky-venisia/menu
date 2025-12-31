import { MenuItem } from '@/types/menu';

export const MOROCCAN_WINES: MenuItem[] = [
  {
    category: 'moroccan-wines',
    name: {
      en: 'Cuvee du President White',
      fr: 'Cuvée du Président Blanc',
      es: 'Cuvée del Presidente Blanco',
      it: 'Cuvée del Presidente Bianco',
    },
    description: {
      en: 'Moroccan white wine, fresh and balanced.',
      fr: 'Vin blanc marocain, frais et équilibré.',
      es: 'Vino blanco marroquí, fresco y equilibrado.',
      it: 'Vino bianco marocchino, fresco ed equilibrato.',
    },
    image: '/images/menu/moroccan-wines/cuvee-du-president-blanc.jpg',
    sizes: [
      {
        size: { en: 'Glass', fr: 'Verre', es: 'Copa', it: 'Bicchiere' },
        price: 50,
      },
      {
        size: { en: '3/4 Bottle', fr: '3/4', es: '3/4', it: '3/4' },
        price: 190,
      },
    ],
  },
  {
    category: 'moroccan-wines',
    name: {
      en: 'Cuvee du President Rosé',
      fr: 'Cuvée du Président Rosé',
      es: 'Cuvée del Presidente Rosado',
      it: 'Cuvée del Presidente Rosato',
    },
    description: {
      en: 'Light and fruity Moroccan rosé.',
      fr: 'Rosé marocain léger et fruité.',
      es: 'Rosado marroquí ligero y afrutado.',
      it: 'Rosato marocchino leggero e fruttato.',
    },
    image: '/images/menu/moroccan-wines/cuvee-du-president-rose.jpg',
    sizes: [
      {
        size: { en: 'Glass', fr: 'Verre', es: 'Copa', it: 'Bicchiere' },
        price: 50,
      },
      {
        size: { en: '3/4 Bottle', fr: '3/4', es: '3/4', it: '3/4' },
        price: 190,
      },
    ],
  },
  {
    category: 'moroccan-wines',
    name: {
      en: 'Cuvee du President Red',
      fr: 'Cuvée du Président Rouge',
      es: 'Cuvée del Presidente Tinto',
      it: 'Cuvée del Presidente Rosso',
    },
    description: {
      en: 'Smooth Moroccan red wine.',
      fr: 'Vin rouge marocain souple.',
      es: 'Vino tinto marroquí suave.',
      it: 'Vino rosso marocchino morbido.',
    },
    image: '/images/menu/moroccan-wines/cuvee-du-president-rouge.jpg',
    sizes: [
      {
        size: { en: 'Glass', fr: 'Verre', es: 'Copa', it: 'Bicchiere' },
        price: 50,
      },
      {
        size: { en: '3/4 Bottle', fr: '3/4', es: '3/4', it: '3/4' },
        price: 190,
      },
    ],
  },
  {
    category: 'moroccan-wines',
    name: {
      en: 'Domaine Sahari White',
      fr: 'Domaine Sahari Blanc',
      es: 'Domaine Sahari Blanco',
      it: 'Domaine Sahari Bianco',
    },
    description: {
      en: 'Elegant Moroccan white wine.',
      fr: 'Vin blanc marocain élégant.',
      es: 'Vino blanco marroquí elegante.',
      it: 'Vino bianco marocchino elegante.',
    },
    image: '/images/menu/moroccan-wines/domaine-sahari-blanc.jpg',
    sizes: [
      {
        size: { en: 'Glass', fr: 'Verre', es: 'Copa', it: 'Bicchiere' },
        price: 70,
      },
      {
        size: { en: '3/4 Bottle', fr: '3/4', es: '3/4', it: '3/4' },
        price: 280,
      },
    ],
  },
  {
    category: 'moroccan-wines',
    name: {
      en: 'Domaine Sahari Rosé',
      fr: 'Domaine Sahari Rosé',
      es: 'Domaine Sahari Rosado',
      it: 'Domaine Sahari Rosato',
    },
    description: {
      en: 'Fresh Moroccan rosé wine.',
      fr: 'Vin rosé marocain frais.',
      es: 'Vino rosado marroquí fresco.',
      it: 'Vino rosato marocchino fresco.',
    },
    image: '/images/menu/moroccan-wines/domaine-sahari-rose.jpeg',
    sizes: [
      {
        size: { en: 'Glass', fr: 'Verre', es: 'Copa', it: 'Bicchiere' },
        price: 70,
      },
      {
        size: { en: '3/4 Bottle', fr: '3/4', es: '3/4', it: '3/4' },
        price: 280,
      },
    ],
  },
  {
    category: 'moroccan-wines',
    name: {
      en: 'Domaine Sahari Red',
      fr: 'Domaine Sahari Rouge',
      es: 'Domaine Sahari Tinto',
      it: 'Domaine Sahari Rosso',
    },
    description: {
      en: 'Full-bodied Moroccan red wine.',
      fr: 'Vin rouge marocain corsé.',
      es: 'Vino tinto marroquí con cuerpo.',
      it: 'Vino rosso marocchino corposo.',
    },
    image: '/images/menu/moroccan-wines/domaine-sahari-rouge.jpg',
    sizes: [
      {
        size: { en: 'Glass', fr: 'Verre', es: 'Copa', it: 'Bicchiere' },
        price: 70,
      },
      {
        size: { en: '3/4 Bottle', fr: '3/4', es: '3/4', it: '3/4' },
        price: 280,
      },
    ],
  },

  // ===== Bottle only =====
  {
    category: 'moroccan-wines',
    name: {
      en: 'Terroir White',
      fr: 'Terroir Blanc',
      es: 'Terroir Blanco',
      it: 'Terroir Bianco',
    },
    description: {
      en: 'Refined Moroccan white wine.',
      fr: 'Vin blanc marocain raffiné.',
      es: 'Vino blanco marroquí refinado.',
      it: 'Vino bianco marocchino raffinato.',
    },
    image: '/images/menu/moroccan-wines/terroir-blanc.webp',
    price: 190,
  },
  {
    category: 'moroccan-wines',
    name: {
      en: 'Terroir Rosé',
      fr: 'Terroir Rosé',
      es: 'Terroir Rosado',
      it: 'Terroir Rosato',
    },
    description: {
      en: 'Elegant Moroccan rosé wine.',
      fr: 'Vin rosé marocain élégant.',
      es: 'Vino rosado marroquí elegante.',
      it: 'Vino rosato marocchino elegante.',
    },
    image: '/images/menu/moroccan-wines/terroir-rose.jpg',
    price: 190,
  },
  {
    category: 'moroccan-wines',
    name: {
      en: 'Terroir Red',
      fr: 'Terroir Rouge',
      es: 'Terroir Tinto',
      it: 'Terroir Rosso',
    },
    description: {
      en: 'Characterful Moroccan red wine.',
      fr: 'Vin rouge marocain de caractère.',
      es: 'Vino tinto marroquí con carácter.',
      it: 'Vino rosso marocchino di carattere.',
    },
    image: '/images/menu/moroccan-wines/terroir-rouge.jpg',
    price: 190,
  },
  {
    category: 'moroccan-wines',
    name: {
      en: 'Medallion White',
      fr: 'Médallion Blanc',
      es: 'Medallón Blanco',
      it: 'Medaglione Bianco',
    },
    description: {
      en: 'Premium Moroccan white wine.',
      fr: 'Vin blanc marocain premium.',
      es: 'Vino blanco marroquí premium.',
      it: 'Vino bianco marocchino premium.',
    },
    image: '/images/menu/moroccan-wines/medallion-blanc.jpg',
    price: 380,
  },
  {
    category: 'moroccan-wines',
    name: {
      en: 'Medallion Rosé',
      fr: 'Médallion Rosé',
      es: 'Medallón Rosado',
      it: 'Medaglione Rosato',
    },
    description: {
      en: 'Premium Moroccan rosé wine.',
      fr: 'Vin rosé marocain premium.',
      es: 'Vino rosado marroquí premium.',
      it: 'Vino rosato marocchino premium.',
    },
    image: '/images/menu/moroccan-wines/medallion-rose.jpg',
    price: 380,
  },
  {
    category: 'moroccan-wines',
    name: {
      en: 'Medallion Red',
      fr: 'Médallion Rouge',
      es: 'Medallón Tinto',
      it: 'Medaglione Rosso',
    },
    description: {
      en: 'Premium Moroccan red wine.',
      fr: 'Vin rouge marocain premium.',
      es: 'Vino tinto marroquí premium.',
      it: 'Vino rosso marocchino premium.',
    },
    image: '/images/menu/moroccan-wines/medallion-rouge.jpg',
    price: 380,
  },
  {
    category: 'moroccan-wines',
    name: {
      en: 'Coteau d’Atlas White',
      fr: 'Coteau d’Atlas Blanc',
      es: 'Coteau d’Atlas Blanco',
      it: 'Coteau d’Atlas Bianco',
    },
    description: {
      en: 'High-end Moroccan white wine.',
      fr: 'Vin blanc marocain haut de gamme.',
      es: 'Vino blanco marroquí de alta gama.',
      it: 'Vino bianco marocchino di alta gamma.',
    },
    image: '/images/menu/moroccan-wines/coteau-atlas-blanc.jpeg',
    price: 700,
  },
  {
    category: 'moroccan-wines',
    name: {
      en: 'Coteau d’Atlas Rosé',
      fr: 'Coteau d’Atlas Rosé',
      es: 'Coteau d’Atlas Rosado',
      it: 'Coteau d’Atlas Rosato',
    },
    description: {
      en: 'High-end Moroccan rosé wine.',
      fr: 'Vin rosé marocain haut de gamme.',
      es: 'Vino rosado marroquí de alta gama.',
      it: 'Vino rosato marocchino di alta gamma.',
    },
    image: '/images/menu/moroccan-wines/coteau-atlas-rose.jpg',
    price: 700,
  },
  {
    category: 'moroccan-wines',
    name: {
      en: 'Coteau d’Atlas Red',
      fr: 'Coteau d’Atlas Rouge',
      es: 'Coteau d’Atlas Tinto',
      it: 'Coteau d’Atlas Rosso',
    },
    description: {
      en: 'High-end Moroccan red wine.',
      fr: 'Vin rouge marocain haut de gamme.',
      es: 'Vino tinto marroquí de alta gama.',
      it: 'Vino rosso marocchino di alta gamma.',
    },
    image: '/images/menu/moroccan-wines/coteau-atlas-rouge.jpeg',
    price: 700,
  },
];
