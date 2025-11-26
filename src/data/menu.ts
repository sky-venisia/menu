interface MenuItem {
  category: string;
  name: {
    en: string;
    fr: string;
    es: string;
    it: string;
  };
  description: {
    en: string;
    fr: string;
    es: string;
    it: string;
  };
  image: string;
  price?: number;
  sizes?: {
    size: {
      en: string;
      fr: string;
      es: string;
      it: string;
    };
    price: number;
  }[];
}

const MENU: MenuItem[] = [
  {
    category: 'starters',
    name: {
      en: 'Moroccan Soup (Harira)',
      fr: 'Soupe Marocaine (Harira)',
      es: 'Sopa Marroquí (Harira)',
      it: 'Zuppa Marocchina (Harira)',
    },
    description: {
      en: 'Traditional harira made with tomatoes, lentils, and spices.',
      fr: 'Harira traditionnelle à base de tomates, lentilles et épices.',
      es: 'Harira tradicional con tomates, lentejas y especias.',
      it: 'Harira tradizionale con pomodori, lenticchie e spezie.',
    },
    image: '/1.jpg',
    price: 60,
  },
  {
    category: 'starters',
    name: {
      en: 'Tabbouleh',
      fr: 'Taboulé',
      es: 'Tabulé',
      it: 'Tabulè',
    },
    description: {
      en: 'Fresh salad with parsley, bulgur, lemon, and olive oil.',
      fr: 'Salade fraîche au persil, boulgour, citron et huile d’olive.',
      es: 'Ensalada fresca con perejil, bulgur, limón y aceite de oliva.',
      it: "Insalata fresca con prezzemolo, bulgur, limone e olio d'oliva.",
    },
    image: '/2.jpg',
    price: 70,
  },
  {
    category: 'starters',
    name: {
      en: 'Taktouka Salad',
      fr: 'Salade Taktouka',
      es: 'Ensalada Taktouka',
      it: 'Insalata Taktouka',
    },
    description: {
      en: 'Moroccan salad made with grilled peppers, tomatoes, and garlic.',
      fr: 'Salade marocaine à base de poivrons grillés, tomates et ail.',
      es: 'Ensalada marroquí con pimientos asados, tomates y ajo.',
      it: 'Insalata marocchina con peperoni grigliati, pomodori e aglio.',
    },
    image: '/3.jpg',
    price: 70,
  },
  {
    category: 'starters',
    name: {
      en: 'Caesar Salad',
      fr: 'Salade César',
      es: 'Ensalada César',
      it: 'Insalata Caesar',
    },
    description: {
      en: 'Crispy lettuce, parmesan, croutons, and Caesar dressing.',
      fr: 'Laitue croquante, parmesan, croûtons et sauce César.',
      es: 'Lechuga crujiente, parmesano, picatostes y salsa César.',
      it: 'Lattuga croccante, parmigiano, crostini e salsa Caesar.',
    },
    image: '/4.jpg',
    price: 75,
  },
  {
    category: 'starters',
    name: {
      en: 'Niçoise Salad',
      fr: 'Salade Niçoise',
      es: 'Ensalada Niçoise',
      it: 'Insalata Nizzarda',
    },
    description: {
      en: 'Classic salad with tuna, eggs, potatoes, and olives.',
      fr: 'Salade classique au thon, œufs, pommes de terre et olives.',
      es: 'Ensalada clásica con atún, huevos, patatas y aceitunas.',
      it: 'Insalata classica con tonno, uova, patate e olive.',
    },
    image: '/5.jpg',
    price: 75,
  },
  {
    category: 'starters',
    name: {
      en: 'Pil-Pil Shrimp',
      fr: 'Crevettes Pil-Pil',
      es: 'Gambas al Pil-Pil',
      it: 'Gamberi Pil-Pil',
    },
    description: {
      en: 'Sautéed shrimp with garlic, chili, and olive oil.',
      fr: 'Crevettes sautées à l’ail, piment et huile d’olive.',
      es: 'Gambas salteadas con ajo, chile y aceite de oliva.',
      it: "Gamberi saltati con aglio, peperoncino e olio d'oliva.",
    },
    image: '/6.jpg',
    price: 90,
  },
  {
    category: 'starters',
    name: {
      en: 'Tomato Mozzarella',
      fr: 'Tomate Mozzarella',
      es: 'Tomate y Mozzarella',
      it: 'Pomodoro e Mozzarella',
    },
    description: {
      en: 'Fresh tomato and mozzarella with basil and olive oil.',
      fr: 'Tomate et mozzarella fraîches avec basilic et huile d’olive.',
      es: 'Tomate y mozzarella frescas con albahaca y aceite de oliva.',
      it: "Pomodoro fresco e mozzarella con basilico e olio d'oliva.",
    },
    image: '/7.jpeg',
    price: 80,
  },
  {
    category: 'starters',
    name: {
      en: 'Vigneronne Salad (Specialty)',
      fr: 'Salade Vigneronne (Spécialité)',
      es: 'Ensalada Vigneronne (Especialidad)',
      it: 'Insalata Vigneronne (Specialità)',
    },
    description: {
      en: 'House salad with a light vinaigrette and fruity flavors.',
      fr: 'Salade maison avec vinaigrette légère et notes fruitées.',
      es: 'Ensalada de la casa con vinagreta suave y sabores afrutados.',
      it: 'Insalata della casa con vinaigrette leggera e note fruttate.',
    },
    image: '/8.jpg',
    price: 110,
  },
  {
    category: 'starters',
    name: {
      en: 'Avocado Shrimp Salad',
      fr: 'Salade d’Avocat et Crevettes',
      es: 'Ensalada de Aguacate y Camarones',
      it: 'Insalata con Avocado e Gamberi',
    },
    description: {
      en: 'Creamy avocado served with fresh shrimp.',
      fr: 'Avocat crémeux servi avec des crevettes fraîches.',
      es: 'Aguacate cremoso servido con camarones frescos.',
      it: 'Avocado cremoso servito con gamberi freschi.',
    },
    image: '/9.jpg',
    price: 110,
  },
  {
    category: 'starters',
    name: {
      en: 'Beef Salad',
      fr: 'Salade de Bœuf',
      es: 'Ensalada de Ternera',
      it: 'Insalata di Manzo',
    },
    description: {
      en: 'House specialty with honey vinaigrette.',
      fr: 'Spécialité maison avec vinaigrette au miel.',
      es: 'Especialidad de la casa con vinagreta de miel.',
      it: 'Specialità della casa con vinaigrette al miele.',
    },
    image: '/10.webp',
    price: 120,
  },
  {
    category: 'starters',
    name: {
      en: 'Smoked Salmon Salad',
      fr: 'Salade au Saumon Fumé',
      es: 'Ensalada de Salmón Ahumado',
      it: 'Insalata con Salmone Affumicato',
    },
    description: {
      en: 'Salad topped with slices of smoked salmon.',
      fr: 'Salade garnie de tranches de saumon fumé.',
      es: 'Ensalada con láminas de salmón ahumado.',
      it: 'Insalata con fette di salmone affumicato.',
    },
    image: '/11.jpg',
    price: 120,
  },
  {
    category: 'moroccan-dishes',
    name: {
      en: 'Vegetarian Tagine',
      fr: 'Tajine Végétarien',
      es: 'Tajín Vegetariano',
      it: 'Tajine Vegetariano',
    },
    description: {
      en: 'Slow-cooked vegetables with Moroccan spices.',
      fr: 'Légumes mijotés avec des épices marocaines.',
      es: 'Verduras cocinadas lentamente con especias marroquíes.',
      it: 'Verdure cotte lentamente con spezie marocchine.',
    },
    image: '/12.jpg',
    price: 100,
  },
  {
    category: 'moroccan-dishes',
    name: {
      en: 'Chicken Pastilla',
      fr: 'Pastilla au Poulet',
      es: 'Pastela de Pollo',
      it: 'Pastilla al Pollo',
    },
    description: {
      en: 'Traditional flaky pastry filled with chicken and almonds.',
      fr: 'Pâtisserie feuilletée traditionnelle garnie de poulet et d’amandes.',
      es: 'Hojaldre tradicional relleno de pollo y almendras.',
      it: 'Pasta sfoglia tradizionale ripiena di pollo e mandorle.',
    },
    image: '/13.jpg',
    price: 120,
  },
  {
    category: 'moroccan-dishes',
    name: {
      en: 'Seafood Pastilla',
      fr: 'Pastilla aux Fruits de Mer',
      es: 'Pastela de Mariscos',
      it: 'Pastilla ai Frutti di Mare',
    },
    description: {
      en: 'Crispy pastry filled with a mix of seafood.',
      fr: 'Pâtisserie croustillante garnie d’un mélange de fruits de mer.',
      es: 'Hojaldre crujiente relleno de una mezcla de mariscos.',
      it: 'Pasta croccante ripiena con un mix di frutti di mare.',
    },
    image: '/14.webp',
    price: 140,
  },
  {
    category: 'moroccan-dishes',
    name: {
      en: 'Vegetarian Couscous',
      fr: 'Couscous Végétarien',
      es: 'Cuscús Vegetariano',
      it: 'Couscous Vegetariano',
    },
    description: {
      en: 'Couscous served with 7 vegetables.',
      fr: 'Couscous servi avec 7 légumes.',
      es: 'Cuscús servido con 7 verduras.',
      it: 'Couscous servito con 7 verdure.',
    },
    image: '/15.jpg',
    price: 130,
  },
  {
    category: 'moroccan-dishes',
    name: {
      en: 'Chicken Couscous',
      fr: 'Couscous au Poulet',
      es: 'Cuscús con Pollo',
      it: 'Couscous con Pollo',
    },
    description: {
      en: 'Chicken couscous served with 7 vegetables.',
      fr: 'Couscous au poulet servi avec 7 légumes.',
      es: 'Cuscús con pollo y 7 verduras.',
      it: 'Couscous con pollo e 7 verdure.',
    },
    image: '/16.avif',
    price: 140,
  },
  {
    category: 'moroccan-dishes',
    name: {
      en: 'Beef Couscous',
      fr: 'Couscous au Bœuf',
      es: 'Cuscús con Ternera',
      it: 'Couscous con Manzo',
    },
    description: {
      en: 'Beef couscous with 7 vegetables.',
      fr: 'Couscous au bœuf avec 7 légumes.',
      es: 'Cuscús con carne de ternera y 7 verduras.',
      it: 'Couscous con manzo e 7 verdure.',
    },
    image: '/17.jpeg',
    price: 150,
  },
  {
    category: 'moroccan-dishes',
    name: {
      en: 'Chicken Lemon Tagine',
      fr: 'Tajine de Poulet au Citron Confit',
      es: 'Tajín de Pollo con Limón en Conserva',
      it: 'Tajine di Pollo al Limone Conservato',
    },
    description: {
      en: 'Slow-cooked chicken with preserved lemons and olives.',
      fr: 'Poulet mijoté avec citrons confits et olives.',
      es: 'Pollo cocinado lentamente con limón en conserva y aceitunas.',
      it: 'Pollo cotto lentamente con limoni conservati e olive.',
    },
    image: '/18.png',
    price: 150,
  },
  {
    category: 'moroccan-dishes',
    name: {
      en: 'Tanjia',
      fr: 'Tanjia',
      es: 'Tanjia',
      it: 'Tanjia',
    },
    description: {
      en: 'Marrakech specialty: slow-cooked meat.',
      fr: 'Spécialité de Marrakech : viande mijotée lentement.',
      es: 'Especialidad de Marrakech: carne cocinada lentamente.',
      it: 'Specialità di Marrakech: carne cotta lentamente.',
    },
    image: '/19.jpeg',
    price: 170,
  },
  {
    category: 'moroccan-dishes',
    name: {
      en: 'Beef Tagine with Prunes',
      fr: 'Tajine de Bœuf aux Pruneaux',
      es: 'Tajín de Ternera con Ciruelas',
      it: 'Tajine di Manzo con Prugne',
    },
    description: {
      en: 'Tender beef cooked with prunes and sweet-salty spices.',
      fr: 'Bœuf tendre mijoté avec pruneaux et épices sucrées-salées.',
      es: 'Carne tierna cocinada con ciruelas y especias agridulces.',
      it: 'Manzo tenero cotto con prugne e spezie dolci-salate.',
    },
    image: '/20.webp',
    price: 180,
  },
  {
    category: 'moroccan-dishes',
    name: {
      en: 'Royal Couscous',
      fr: 'Couscous Royal',
      es: 'Cuscús Real',
      it: 'Couscous Reale',
    },
    description: {
      en: 'Couscous with 7 vegetables and 7 meats.',
      fr: 'Couscous avec 7 légumes et 7 viandes.',
      es: 'Cuscús con 7 verduras y 7 carnes.',
      it: 'Couscous con 7 verdure e 7 tipi di carne.',
    },
    image: '/21.webp',
    price: 190,
  },
  {
    category: 'international',
    name: {
      en: 'Sliced Chicken with Mushrooms',
      fr: 'Émincé de Poulet aux Champignons',
      es: 'Pollo Laminado con Champiñones',
      it: 'Pollo a Fette con Funghi',
    },
    description: {
      en: 'Sliced chicken in a creamy mushroom sauce.',
      fr: 'Poulet émincé dans une sauce crémeuse aux champignons.',
      es: 'Pollo laminado en salsa cremosa de champiñones.',
      it: 'Pollo a fette in salsa cremosa ai funghi.',
    },
    image: '/22.jpg',
    price: 120,
  },
  {
    category: 'international',
    name: {
      en: 'Chicken Escalope',
      fr: 'Escalope de Poulet',
      es: 'Escalope de Pollo',
      it: 'Scaloppina di Pollo',
    },
    description: {
      en: 'Breaded chicken escalope served with a side.',
      fr: 'Escalope de poulet panée servie avec un accompagnement.',
      es: 'Escalope de pollo empanizada servida con guarnición.',
      it: 'Scaloppina di pollo impanata servita con contorno.',
    },
    image: '/23.jpg',
    price: 120,
  },
  {
    category: 'international',
    name: {
      en: 'Chicken Wok',
      fr: 'Wok de Poulet',
      es: 'Wok de Pollo',
      it: 'Wok di Pollo',
    },
    description: {
      en: 'Stir-fried chicken with vegetables and Asian flavors.',
      fr: 'Poulet sauté avec légumes et saveurs asiatiques.',
      es: 'Pollo salteado con verduras y sabores asiáticos.',
      it: 'Pollo saltato con verdure e sapori asiatici.',
    },
    image: '/24.jpg',
    price: 125,
  },
  {
    category: 'international',
    name: {
      en: 'Sliced Beef',
      fr: 'Émincé de Bœuf',
      es: 'Ternera Laminada',
      it: 'Manzo a Fette',
    },
    description: {
      en: 'Stir-fried sliced beef in a savory sauce.',
      fr: 'Bœuf émincé sauté dans une sauce savoureuse.',
      es: 'Ternera laminada salteada en una salsa sabrosa.',
      it: 'Manzo a fette saltato in salsa saporita.',
    },
    image: '/25.jpg',
    price: 130,
  },
  {
    category: 'international',
    name: {
      en: 'Beef Wok',
      fr: 'Wok de Bœuf',
      es: 'Wok de Ternera',
      it: 'Wok di Manzo',
    },
    description: {
      en: 'Stir-fried beef with vegetables and Asian spices.',
      fr: 'Bœuf sauté avec légumes et épices asiatiques.',
      es: 'Ternera salteada con verduras y especias asiáticas.',
      it: 'Manzo saltato con verdure e spezie asiatiche.',
    },
    image: '/26.jpg',
    price: 135,
  },
  {
    category: 'international',
    name: {
      en: 'Asian Plate',
      fr: 'Assiette Asiatique',
      es: 'Plato Asiático',
      it: 'Piatto Asiatico',
    },
    description: {
      en: 'Assortment of Asian-inspired specialties.',
      fr: 'Assortiment de spécialités d’inspiration asiatique.',
      es: 'Surtido de especialidades de inspiración asiática.',
      it: 'Assortimento di specialità asiatiche.',
    },
    image: '/27.jpg',
    price: 180,
  },
  {
    category: 'international',
    name: {
      en: 'Salmon Tagliatelle',
      fr: 'Tagliatelles au Saumon',
      es: 'Tagliatelle con Salmón',
      it: 'Tagliatelle al Salmone',
    },
    description: {
      en: 'Creamy tagliatelle with salmon.',
      fr: 'Tagliatelles crémeuses au saumon.',
      es: 'Tagliatelle cremosas con salmón.',
      it: 'Tagliatelle cremose al salmone.',
    },
    image: '/28.jpg',
    price: 180,
  },
  {
    category: 'international',
    name: {
      en: 'Beef Fillet',
      fr: 'Filet de Bœuf',
      es: 'Filete de Ternera',
      it: 'Filetto di Manzo',
    },
    description: {
      en: 'Tender beef fillet, grilled to your preferred doneness.',
      fr: 'Filet de bœuf tendre, grillé selon votre préférence.',
      es: 'Filete de ternera tierno, a la parrilla al punto que prefiera.',
      it: 'Filetto di manzo tenero, grigliato alla cottura desiderata.',
    },
    image: '/29.jpeg',
    price: 240,
  },
  {
    category: 'strong-drinks',
    name: {
      en: 'Johnnie Walker Red Label',
      fr: 'Johnnie Walker Red Label',
      es: 'Johnnie Walker Red Label',
      it: 'Johnnie Walker Red Label',
    },
    description: {
      en: 'A smooth and vibrant Scotch with light smoky notes.',
      fr: 'Un Scotch doux et vibrant avec de légères notes fumées.',
      es: 'Un whisky escocés suave y vibrante con ligeras notas ahumadas.',
      it: 'Uno Scotch morbido e vivace con leggere note affumicate.',
    },
    image: '/30.webp',
    sizes: [
      { size: { en: 'Glass', fr: 'Verre', es: 'Vaso', it: 'Bicchiere' }, price: 110 },
      { size: { en: 'Bottle', fr: 'Bouteille', es: 'Botella', it: 'Bottiglia' }, price: 1200 },
    ],
  },
  {
    category: 'strong-drinks',
    name: {
      en: 'Gin Bombay',
      fr: 'Gin Bombay',
      es: 'Gin Bombay',
      it: 'Gin Bombay',
    },
    description: {
      en: 'A classic London gin with bright citrus and botanical flavors.',
      fr: 'Un gin londonien classique aux notes d’agrumes et de plantes.',
      es: 'Un gin londinense clásico con matices cítricos y botánicos.',
      it: 'Un classico gin londinese con note agrumate e botaniche.',
    },
    image: '/31.jpg',
    sizes: [
      { size: { en: 'Glass', fr: 'Verre', es: 'Vaso', it: 'Bicchiere' }, price: 120 },
      { size: { en: 'Bottle', fr: 'Bouteille', es: 'Botella', it: 'Bottiglia' }, price: 1200 },
    ],
  },
  {
    category: 'strong-drinks',
    name: {
      en: 'Vodka Absolut',
      fr: 'Vodka Absolut',
      es: 'Vodka Absolut',
      it: 'Vodka Absolut',
    },
    description: {
      en: 'A clean and crisp vodka with a smooth finish.',
      fr: 'Une vodka pure et rafraîchissante avec une finale douce.',
      es: 'Una vodka limpia y nítida con un final suave.',
      it: 'Una vodka pulita e cristallina con un finale morbido.',
    },
    image: '/32.jpg',
    sizes: [
      { size: { en: 'Glass', fr: 'Verre', es: 'Vaso', it: 'Bicchiere' }, price: 80 },
      { size: { en: 'Bottle', fr: 'Bouteille', es: 'Botella', it: 'Bottiglia' }, price: 1200 },
    ],
  },
  {
    category: 'strong-drinks',
    name: {
      en: "Jack Daniel's",
      fr: "Jack Daniel's",
      es: "Jack Daniel's",
      it: "Jack Daniel's",
    },
    description: {
      en: 'A rich Tennessee whiskey with warm caramel notes.',
      fr: 'Un whiskey du Tennessee riche avec des notes de caramel chaud.',
      es: 'Un whiskey de Tennessee rico con notas cálidas de caramelo.',
      it: 'Un whiskey del Tennessee ricco con note calde di caramello.',
    },
    image: '/33.webp',
    sizes: [
      { size: { en: 'Glass', fr: 'Verre', es: 'Vaso', it: 'Bicchiere' }, price: 120 },
      { size: { en: 'Bottle', fr: 'Bouteille', es: 'Botella', it: 'Bottiglia' }, price: 1300 },
    ],
  },
  {
    category: 'strong-drinks',
    name: {
      en: "Jack Daniel's Honey",
      fr: "Jack Daniel's Honey",
      es: "Jack Daniel's Honey",
      it: "Jack Daniel's Honey",
    },
    description: {
      en: 'A smooth blend of Tennessee whiskey and natural honey sweetness.',
      fr: 'Un mélange doux de whiskey du Tennessee et de miel naturel.',
      es: 'Una mezcla suave de whiskey de Tennessee y dulzura de miel natural.',
      it: 'Un morbido mix di whiskey del Tennessee e dolcezza di miele naturale.',
    },
    image: '/34.jpg',
    sizes: [
      { size: { en: 'Glass', fr: 'Verre', es: 'Vaso', it: 'Bicchiere' }, price: 120 },
      { size: { en: 'Bottle', fr: 'Bouteille', es: 'Botella', it: 'Bottiglia' }, price: 1300 },
    ],
  },
  {
    category: 'strong-drinks',
    name: {
      en: 'Vodka Grey Goose',
      fr: 'Vodka Grey Goose',
      es: 'Vodka Grey Goose',
      it: 'Vodka Grey Goose',
    },
    description: {
      en: 'An ultra-premium vodka with a silky and refined taste.',
      fr: 'Une vodka ultra-premium au goût soyeux et raffiné.',
      es: 'Una vodka ultrapremium con un sabor sedoso y refinado.',
      it: 'Una vodka ultra-premium dal gusto setoso e raffinato.',
    },
    image: '/35.webp',
    sizes: [
      { size: { en: 'Glass', fr: 'Verre', es: 'Vaso', it: 'Bicchiere' }, price: 120 },
      { size: { en: 'Bottle', fr: 'Bouteille', es: 'Botella', it: 'Bottiglia' }, price: 1400 },
    ],
  },
  // --- END OF DRINKS ---

  {
    category: 'desserts',
    name: {
      en: 'Creme Caramel',
      fr: 'Créme caramel',
      es: 'Flan de huevo',
      it: 'Crema catalana',
    },
    description: {
      en: 'A smooth caramel custard with a rich flavor.',
      fr: 'Une crème caramel onctueuse au goût riche.',
      es: 'Un flan suave con sabor intenso.',
      it: 'Una morbida crema al caramello dal sapore ricco.',
    },
    image: '/36.jpg',
    price: 50,
  },
  {
    category: 'desserts',
    name: {
      en: 'Orange & Cinnamon',
      fr: 'Orange et à la cannelle',
      es: 'Naranja y canela',
      it: 'Arancia e cannella',
    },
    description: {
      en: 'Fresh oranges with a hint of cinnamon.',
      fr: 'Oranges fraîches avec une touche de cannelle.',
      es: 'Naranjas frescas con un toque de canela.',
      it: 'Arance fresche con un pizzico di cannella.',
    },
    image: '/37.webp',
    price: 50,
  },
  {
    category: 'desserts',
    name: {
      en: 'Fruit Plate',
      fr: 'Assiette de fruits',
      es: 'Plato de frutas',
      it: 'Piatto di frutta',
    },
    description: {
      en: 'A refreshing mix of seasonal fruits.',
      fr: 'Un mélange rafraîchissant de fruits de saison.',
      es: 'Una mezcla refrescante de frutas de temporada.',
      it: 'Un mix rinfrescante di frutta di stagione.',
    },
    image: '/38.jpg',
    price: 50,
  },
  {
    category: 'desserts',
    name: {
      en: 'Cream Pastilla',
      fr: 'Pastilla à la crème',
      es: 'Pastilla de crema',
      it: 'Pastilla alla crema',
    },
    description: {
      en: 'A crispy pastry filled with rich cream.',
      fr: 'Une pâte feuilletée remplie de crème.',
      es: 'Un hojaldre crujiente relleno de crema.',
      it: 'Un pasticcio croccante ripieno di crema.',
    },
    image: '/39.jpeg',
    price: 50,
  },
  {
    category: 'desserts',
    name: {
      en: 'Chocolate Crepe',
      fr: 'Crèpe chocolat',
      es: 'Crepa de chocolate',
      it: 'Crepes al cioccolato',
    },
    description: {
      en: 'A warm crepe filled with chocolate.',
      fr: 'Une crêpe chaude remplie de chocolat.',
      es: 'Una crepe cálida rellena de chocolate.',
      it: 'Una crepe calda ripiena di cioccolato.',
    },
    image: '/40.jpg',
    price: 55,
  },
  {
    category: 'desserts',
    name: {
      en: 'Tiramisu',
      fr: 'Tiramisu',
      es: 'Tiramisú',
      it: 'Tiramisu',
    },
    description: {
      en: 'Layers of coffee-soaked biscuits with mascarpone cream.',
      fr: 'Des couches de biscuits trempés dans le café avec de la crème mascarpone.',
      es: 'Capas de bizcochos empapados en café con crema mascarpone.',
      it: 'Strati di savoiardi imbevuti di caffè con crema al mascarpone.',
    },
    image: '/41.jpg',
    price: 70,
  },
];

export default MENU;
