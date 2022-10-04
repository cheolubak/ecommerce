import styled from '@emotion/styled';
import { CAPTION, HEADLINE, SUBTITLE } from '../../subatomic/Typography';

export const SubBannerStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  padding: 0 24px;
  margin: 48px 0;
`;

export const SubBannerContentStyled = styled.article`
  height: 100%;
  flex-grow: 50%;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 36px;
  padding: 0 32px;
`;

export const SubBannerLeftContentStyled = styled(SubBannerContentStyled)`
  background: linear-gradient(90deg, #9ef9d8 0%, #1aa37a 100%);
  border-radius: 48px 0px 0px 48px;
`;

export const SubBannerLeftImageStyled = styled.picture`
  width: 224px;
  height: 607px;
`;

export const SubBannerRightImageStyled = styled.picture`
  width: 224px;
  height: 297px;
`;

export const SubBannerDetailStyled = styled.div``;

export const SubBannerCategoryStyled = styled.strong`
  ${SUBTITLE(2)};
  color: var(--COLOR_WHITE);
  margin: 0 0 10px;
`;

export const SubBannerTitleStyled = styled.h2`
  ${HEADLINE(4)};
  margin: 0 0 10px;
  color: var(--COLOR_WHITE);
`;

export const SubBannerDescriptionStyled = styled.p`
  ${CAPTION};
  margin: 0 0 48px;
  color: var(--COLOR_WHITE);
`;

export const SubBannerRightContentStyled = styled(SubBannerContentStyled)`
  background: linear-gradient(90deg, #ffc2c2 2.01%, #ffd7a8 100%);
  border-radius: 0px 48px 48px 0px;
  height: 100%;
  flex-grow: 1;
`;
