import React, { memo, useCallback, useEffect, useState } from 'react';
import ProductCard from '../../molecules/ProductCard';
import { ProductListProps } from './ProductListProps';
import { ProductItemStyled, ProductListStyled } from './ProductListStyled';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

function ProductList({ products, ...props }: ProductListProps) {
  const [swiperCountPerPage, setSwiperCountPerPage] = useState(0);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = useCallback(() => {
    const count = (window.innerWidth - 48) / 278;
    setSwiperCountPerPage(count > 5 ? 5 : count);
    console.log(count > 5 ? 5 : count);
  }, []);

  return (
    <Swiper
      slidesPerView={swiperCountPerPage}
      loop={false}
      autoplay={false}
    >
      {products.map((product) => (
        <SwiperSlide key={product.productId}>
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default memo(ProductList);
