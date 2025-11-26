export interface MenuItem {
  category: string;
  categoryName: {
    en: string;
    fr: string;
    es: string;
    it: string;
  };
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
