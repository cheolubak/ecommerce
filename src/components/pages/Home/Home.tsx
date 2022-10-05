import React, { useCallback, useEffect } from 'react';
import { ProductQuery } from '../../../util/Firebase';
import { useRecoilState } from 'recoil';
import {
  favoriteProductsState,
  recentProductsState,
} from '../../../store/product';
import HomeTemplate from '../../templates/Home';
import { useAnalytics } from '../../../hooks/analytics';

export default function Home() {
  const [, setFavorites] = useRecoilState(favoriteProductsState);
  const [, setRecents] = useRecoilState(recentProductsState);

  const { pageView } = useAnalytics();

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

    pageView({ screenName: 'Home', screenClass: 'HomePage' });
  }, []);

  return (
    <>
      <HomeTemplate />
    </>
  );
}
