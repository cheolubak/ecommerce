import { useCallback, useEffect, useState } from 'react';
import { ProductCardProps } from './ProductCardProps';
import {
  ProductCardStyled,
  ProductCategoryStyled,
  ProductPriceStyled,
  ProductThumbnailStyled,
  ProductTitleStyled,
} from './ProductCardStyled';
import Image from '../../atoms/Image';
import { Storage } from '../../../util/Firebase';
import ProductSatisfaction from './ProductSatisfaction';

export default function ProductCard({ product, ...props }: ProductCardProps) {
  const [thumbnails, setThumbnail] = useState<string[]>([]);

  const fetchProductImages = useCallback(() => {
    Promise.all(
      product.thumbnail.map((x) => Storage.fetchImage('product', x))
    ).then((thumbnails) => {
      setThumbnail(thumbnails);
    });
  }, []);

  useEffect(() => {
    fetchProductImages();
  }, []);

  return (
    <ProductCardStyled>
      <ProductThumbnailStyled>
        <picture>
          {thumbnails.map((x) => {
            if (x.includes('webp')) {
              return <source src={x} />;
            } else {
              return (
                <Image
                  width='100%'
                  height='100%'
                  src={x}
                />
              );
            }
          })}
        </picture>
      </ProductThumbnailStyled>
      <ProductSatisfaction
        productId={product.productId}
        satisfaction={product.satisfaction}
      />
      <ProductTitleStyled>{product.title}</ProductTitleStyled>
      <ProductCategoryStyled>{product.category}</ProductCategoryStyled>
      <ProductPriceStyled>
        {product.price.toLocaleString()}원
      </ProductPriceStyled>
    </ProductCardStyled>
  );
}
