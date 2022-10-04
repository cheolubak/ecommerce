import styled from '@emotion/styled';
import { CAPTION, SUBTITLE } from '../../subatomic/Typography';

export const ProductCardStyled = styled.article`
  width: 256px;
`;

export const ProductThumbnailStyled = styled.div`
  display: block;
  width: 256px;
  height: 256px;
`;

export const ProductSatisfactionItemsStyled = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 0 16px;
  padding: 0;
  list-style: none;
`;

export const ProductSatisfactionItemStyled = styled.li``;

export const ProductTitleStyled = styled.strong`
  ${SUBTITLE(1)};
  color: var(--COLOR_BLACK);
  margin: 0 0 16px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProductCategoryStyled = styled.span`
  ${CAPTION};
  display: block;
  color: var(--COLOR_BLACK);
  margin: 0 0 16px;
`;

export const ProductPriceStyled = styled.strong`
  ${SUBTITLE(2)};
  color: var(--COLOR_BLACK);
`;
