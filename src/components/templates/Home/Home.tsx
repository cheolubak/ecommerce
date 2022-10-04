import Container from '../../atoms/Container';
import Header from '../../molecules/Header';
import FavoriteProducts from '../../organisms/FavoriteProducts';
import RecentProducts from '../../organisms/RecentProducts';

export default function HomeTemplate() {
  return (
    <>
      <Header />
      <Container>
        <FavoriteProducts />
        <RecentProducts />
      </Container>
    </>
  );
}
