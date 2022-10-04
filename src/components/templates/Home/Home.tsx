import React from 'react';
import Container from '../../atoms/Container';
import ListTitle from '../../atoms/ListTitle';
import Header from '../../molecules/Header';
import FavoriteProducts from '../../organisms/FavoriteProducts';

export default function HomeTemplate() {
  return (
    <>
      <Header />
      <Container>
        <FavoriteProducts />
      </Container>
    </>
  );
}
