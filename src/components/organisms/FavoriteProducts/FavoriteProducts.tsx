import { useRecoilValue } from 'recoil';
import { favoriteProductsState } from '../../../store/product';
import ListTitle from '../../atoms/ListTitle';
import ProductCard from '../../molecules/ProductCard';
import { FavoriteProductsProps } from './FavoriteProductsProps';
import {
  FavoriteProductsItemsStyled,
  FavoriteProductsItemStyled,
  FavoriteProductsStyled,
} from './FavoriteProductsStyled';

export default function FavoriteProducts({ ...props }: FavoriteProductsProps) {
  const products = useRecoilValue(favoriteProductsState);
  return (
    <FavoriteProductsStyled>
      <ListTitle>인기 상품</ListTitle>
      <FavoriteProductsItemsStyled>
        {products.map((x) => (
          <FavoriteProductsItemStyled key={x.productId}>
            <ProductCard product={x} />
          </FavoriteProductsItemStyled>
        ))}
      </FavoriteProductsItemsStyled>
    </FavoriteProductsStyled>
  );
}
