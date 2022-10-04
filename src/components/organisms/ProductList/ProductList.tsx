import React, { memo } from 'react';
import ProductCard from '../../molecules/ProductCard';
import { ProductListProps } from './ProductListProps';
import { ProductItemStyled, ProductListStyled } from './ProductListStyled';

function ProductList({ products, ...props }: ProductListProps) {
  return (
    <ProductListStyled>
      {products.map((x, idx) => (
        <ProductItemStyled key={x.productId}>
          <ProductCard product={x} />
        </ProductItemStyled>
      ))}
    </ProductListStyled>
  );
}

export default memo(ProductList);
