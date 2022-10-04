import Container from '../../atoms/Container';
import Header from '../../molecules/Header';
import MainBanner from '../../molecules/MainBanner';
import SubBanner from '../../molecules/SubBanner';
import FavoriteProducts from '../../organisms/FavoriteProducts';
import RecentProducts from '../../organisms/RecentProducts';

export default function HomeTemplate() {
  return (
    <>
      <Header />
      <MainBanner />
      <Container>
        <FavoriteProducts />
        <SubBanner />
        <RecentProducts />
      </Container>
    </>
  );
}
