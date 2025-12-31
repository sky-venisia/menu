import { MenuItem } from '@/types/menu';
import { STARTERS } from './starters';
import { TAPAS } from './tapas';
import { MOROCCAN_DISHES } from './moroccan-dishes';
import { INTERNATIONAL } from './international';
import { SKEWERS } from './skewers';
import { FAST_FOOD } from './fast-food';
import { PASTA } from './pasta';
import { PIZZA } from './pizza';
import { SAVORY_FLAMMEKUECHE } from './savory-flammekueche';
import { SWEET_FLAMMEKUECHE } from './sweet-flammekueche';
import { DESSERTS } from './desserts';
import { BEERS } from './beers';
import { APERITIF } from './aperitif';
import { SHOTS } from './shots';
import { STRONG_DRINKS } from './strong-drinks';
import { MOROCCAN_WINES } from './moroccan-wines';
import { FRENCH_WINES } from './french-wines';
import { CLASSIC_COCKTAILS } from './classic-cocktails';
import { DIGESTIFS } from './digestifs';
import { MOCKTAILS } from './mocktails';
import { SOFTS } from './softs';
import { CHAMPAGNES } from './champagnes';

const MENU: MenuItem[] = [
  ...STARTERS,
  ...TAPAS,

  ...MOROCCAN_DISHES,
  ...INTERNATIONAL,

  ...SKEWERS,
  ...FAST_FOOD,

  ...PASTA,
  ...PIZZA,

  ...SAVORY_FLAMMEKUECHE,
  ...SWEET_FLAMMEKUECHE,

  ...DESSERTS,

  ...BEERS,
  ...APERITIF,
  ...SHOTS,
  ...STRONG_DRINKS,
  ...MOROCCAN_WINES,
  ...FRENCH_WINES,
  ...CLASSIC_COCKTAILS,

  ...DIGESTIFS,
  ...MOCKTAILS,

  ...SOFTS,

  ...CHAMPAGNES,
];

export default MENU;
