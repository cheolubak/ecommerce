import React, {memo} from 'react';
import Container from '../../atoms/Container';
import Image from '../../atoms/Image';
import { MainBannerProps } from './MainBannerProps';
import {
  MainBannerContentStyled,
  MainBannerImageStyled,
  MainBannerSloganStyled,
  MainBannerSloganWrapStyled,
  MainBannerStyled,
  MainBannerSubSloganStyled,
} from './MainBannerStyled';

function MainBanner({ ...props }: MainBannerProps) {
  return (
    <MainBannerStyled>
      <Container>
        <MainBannerContentStyled>
          <MainBannerSloganWrapStyled>
            <MainBannerSloganStyled>메인 슬로건</MainBannerSloganStyled>
            <MainBannerSubSloganStyled>
              슬로건 설명 텍스트
            </MainBannerSubSloganStyled>
          </MainBannerSloganWrapStyled>
          <MainBannerImageStyled>
            <source src='https://firebasestorage.googleapis.com/v0/b/portfolio-995c6.appspot.com/o/product%2Fsubbanner-item1.webp?alt=media&token=4e19e148-cf0d-496d-a945-1d87b646b3f8' />
            <Image
              width='100%'
              height='100%'
              src='https://firebasestorage.googleapis.com/v0/b/portfolio-995c6.appspot.com/o/product%2Fsubbanner-item1.png?alt=media&token=f4c90bd2-32f7-43d4-b0e6-67d536b51058'
            />
          </MainBannerImageStyled>
        </MainBannerContentStyled>
      </Container>
    </MainBannerStyled>
  );
}

export default memo(MainBanner);
