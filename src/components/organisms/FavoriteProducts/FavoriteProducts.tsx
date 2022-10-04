import { useRecoilValue } from 'recoil';
import { favoriteProductsState } from '../../../store/product';
import ListTitle from '../../atoms/ListTitle';
import ProductList from '../ProductList';
import { FavoriteProductsProps } from './FavoriteProductsProps';
import { FavoriteProductsStyled } from './FavoriteProductsStyled';

export default function FavoriteProducts({ ...props }: FavoriteProductsProps) {
  const products = useRecoilValue(favoriteProductsState);
  return (
    <FavoriteProductsStyled>
      <ListTitle>인기 상품</ListTitle>
      <ProductList products={products} />
    </FavoriteProductsStyled>
  );
}
