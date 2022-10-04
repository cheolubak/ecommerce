import React from 'react';
import ListTitle from '../../atoms/ListTitle';
import ProductList from '../ProductList';
import { RecentProductsProps } from './RecentProductsProps';
import { RecentProductsStyled } from './RecentProductsStyled';
import { useRecoilValue } from 'recoil';
import { recentProductsState } from '../../../store/product';

export default function RecentProducts({ ...props }: RecentProductsProps) {
  const products = useRecoilValue(recentProductsState);

  return (
    <RecentProductsStyled>
      <ListTitle>새로운 상품</ListTitle>
      <ProductList products={products} />
    </RecentProductsStyled>
  );
}
