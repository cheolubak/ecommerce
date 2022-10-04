import React from 'react';
import { Product } from '../../../models/Product';
import Icon from '../../atoms/Icon';
import {
  ProductSatisfactionItemsStyled,
  ProductSatisfactionItemStyled,
} from './ProductCardStyled';

export default function ProductSatisfaction({
  productId,
  satisfaction,
}: {
  productId: Product['productId'];
  satisfaction: Product['satisfaction'];
}) {
  return (
    <ProductSatisfactionItemsStyled>
      {new Array(satisfaction).map((x, idx) => (
        <ProductSatisfactionItemStyled key={`${productId}-${idx}`}>
          <Icon
            icon='star-fill'
            color='primary'
          />
        </ProductSatisfactionItemStyled>
      ))}
      {new Array(5 - satisfaction).map((x, idx) => (
        <ProductSatisfactionItemStyled
          key={`${productId}-${5 - satisfaction + idx}`}
        >
          <Icon
            icon='star-outline'
            color='gray'
          />
        </ProductSatisfactionItemStyled>
      ))}
    </ProductSatisfactionItemsStyled>
  );
}
