import React from 'react';
import ProductCard from '../../molecules/ProductCard';
import { ProductListProps } from './ProductListProps';
import { ProductItemStyled, ProductListStyled } from './ProductListStyled';

export default function ProductList({ products, ...props }: ProductListProps) {
  return (
    <ProductListStyled>
      {products.map((x) => (
        <ProductItemStyled key={x.productId}>
          <ProductCard product={x} />
        </ProductItemStyled>
      ))}
    </ProductListStyled>
  );
}
