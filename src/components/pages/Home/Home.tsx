import React, { useCallback, useEffect } from 'react';
import { ProductQuery } from '../../../util/Firebase';
import { useRecoilState } from 'recoil';
import {
  favoriteProductsState,
  recentProductsState,
} from '../../../store/product';
import HomeTemplate from '../../templates/Home';

export default function Home() {
  const [, setFavorites] = useRecoilState(favoriteProductsState);
  const [, setRecents] = useRecoilState(recentProductsState);

  const fetchFavoriteProducts = useCallback(() => {
    ProductQuery.fetchFavoriteProducts().then((snaps) => {
      const products = snaps.docs.map((doc) => {
        const data = doc.data();
        return { ...data, productId: doc.id };
      });
      setFavorites(products);
    });
  }, []);

  const fetchRecentProducts = useCallback(() => {
    ProductQuery.fetchRecentProduct().then((snaps) => {
      const products = snaps.docs.map((doc) => {
        const data = doc.data();
        return { ...data, productId: doc.id };
      });
      setRecents(products);
    });
  }, []);

  useEffect(() => {
    fetchFavoriteProducts();
    fetchRecentProducts();
  }, []);

  return (
    <>
      <HomeTemplate />
    </>
  );
}
