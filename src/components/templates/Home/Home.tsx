import Container from '../../atoms/Container';
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
