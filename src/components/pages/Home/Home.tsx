import React, { useCallback, useEffect } from 'react';
import { ProductQuery } from '../../../util/Firebase';
import { useRecoilState } from 'recoil';
import { favoriteProductsState } from '../../../store/product';
import HomeTemplate from '../../templates/Home';

export default function Home() {
  const [, setFavorites] = useRecoilState(favoriteProductsState);

  const fetchFavoriteProducts = useCallback(() => {
    ProductQuery.fetchFavoriteProducts().then((snaps) => {
      const products = snaps.docs.map((doc) => {
        const data = doc.data();
        return { ...data, productId: doc.id };
      });
      setFavorites(products);
    });
  }, []);

  useEffect(() => {
    fetchFavoriteProducts();
  }, []);

  return (
    <>
      <HomeTemplate />
    </>
  );
}
