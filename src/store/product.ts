import { Product } from '../models/Product';
import { atom } from 'recoil';
import { nanoid } from 'nanoid';

export const favoriteProductsState = atom<Product[]>({
  key: `favoriteProductsState${nanoid(5)}`,
  default: [],
});

export const recentProductsState = atom<Product[]>({
  key: `recentProductsState${nanoid(5)}`,
  default: [],
});
