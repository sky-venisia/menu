export interface MenuItem {
  category: string;
  displayName: string;
  id: number;
  name: string;
  description: string;
  image: string;
  price?: number;
  sizes: [{ size: string; price: number }];
}

export interface MenuData {
  menu: MenuItem[];
}
