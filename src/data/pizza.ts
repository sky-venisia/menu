import { MenuItem } from "@/types/menu";

export const PIZZA: MenuItem[] = [
  {
    category: 'pizza',
    name: {
      en: 'Margherita Pizza',
      fr: 'Pizza Margherita',
      es: 'Pizza Margarita',
      it: 'Pizza Margherita',
    },
    description: {
      en: 'A classic pizza topped with tomato sauce, mozzarella, and basil.',
      fr: 'Une pizza classique garnie de sauce tomate, mozzarella et basilic.',
      es: 'Una pizza clásica con salsa de tomate, mozzarella y albahaca.',
      it: 'Una pizza classica con salsa di pomodoro, mozzarella e basilico.',
    },
    image: '/images/menu/pizza/66.jpg',
    price: 70,
  },
  {
    category: 'pizza',
    name: {
      en: 'Vegetarian Pizza',
      fr: 'Pizza Végétarienne',
      es: 'Pizza Vegetariana',
      it: 'Pizza Vegetariana',
    },
    description: {
      en: 'A pizza topped with assorted fresh vegetables and cheese.',
      fr: 'Une pizza garnie de légumes frais variés et de fromage.',
      es: 'Una pizza cubierta con verduras frescas variadas y queso.',
      it: 'Una pizza con vari verdure fresche e formaggio.',
    },
    image: '/images/menu/pizza/67.webp',
    price: 70,
  },
  {
    category: 'pizza',
    name: {
      en: 'Neapolitan Pizza',
      fr: 'Pizza Napolitaine',
      es: 'Pizza Napolitana',
      it: 'Pizza Napoletana',
    },
    description: {
      en: 'A traditional Neapolitan-style pizza with tomato, mozzarella, and olive oil.',
      fr: 'Une pizza napolitaine traditionnelle avec tomate, mozzarella et huile d’olive.',
      es: 'Una pizza napolitana tradicional con tomate, mozzarella y aceite de oliva.',
      it: "Una pizza tradizionale napoletana con pomodoro, mozzarella e olio d'oliva.",
    },
    image: '/images/menu/pizza/68.jpg',
    price: 80,
  },
];
