import React, { memo } from 'react';
import Button from '../../atoms/Button';
import Container from '../../atoms/Container';
import Image from '../../atoms/Image';
import {
  SubBannerCategoryStyled,
  SubBannerDescriptionStyled,
  SubBannerDetailStyled,
  SubBannerLeftContentStyled,
  SubBannerLeftImageStyled,
  SubBannerRightContentStyled,
  SubBannerRightImageStyled,
  SubBannerStyled,
  SubBannerTitleStyled,
} from './SubBannerStyled';
import { css } from '@emotion/react';

function SubBanner({ ...props }) {
  return (
    <Container>
      <SubBannerStyled>
        <SubBannerLeftContentStyled>
          <SubBannerLeftImageStyled>
            <source srcSet='https://firebasestorage.googleapis.com/v0/b/portfolio-995c6.appspot.com/o/product%2Fsubbanner-item1.webp?alt=media&token=4e19e148-cf0d-496d-a945-1d87b646b3f8' />
            <Image
              width='100%'
              height='100%'
              src='https://firebasestorage.googleapis.com/v0/b/portfolio-995c6.appspot.com/o/product%2Fsubbanner-item1.png?alt=media&token=f4c90bd2-32f7-43d4-b0e6-67d536b51058'
            />
          </SubBannerLeftImageStyled>
          <SubBannerDetailStyled>
            <SubBannerCategoryStyled>카테고리</SubBannerCategoryStyled>
            <SubBannerTitleStyled>
              서브 배너의 타이틀입니다.
            </SubBannerTitleStyled>
            <SubBannerDescriptionStyled>
              서브 배너의 설명입니다.
            </SubBannerDescriptionStyled>
            <Button color='secondary' existsShadow>
              OOOO 보러가기
            </Button>
          </SubBannerDetailStyled>
        </SubBannerLeftContentStyled>
        <SubBannerRightContentStyled>
          <SubBannerRightImageStyled>
            <source srcSet='https://firebasestorage.googleapis.com/v0/b/portfolio-995c6.appspot.com/o/product%2Fsubbanner-item2.webp?alt=media&token=a7ee1bc9-5b7d-46da-beb4-88c1ff609e65' />
            <Image
              width='100%'
              height='100%'
              src='https://firebasestorage.googleapis.com/v0/b/portfolio-995c6.appspot.com/o/product%2Fsubbanner-item2.png?alt=media&token=eb7f6ccf-2db3-400d-9ff1-96ffeef6c4f5'
            />
          </SubBannerRightImageStyled>
          <SubBannerDetailStyled>
            <SubBannerCategoryStyled>카테고리</SubBannerCategoryStyled>
            <SubBannerTitleStyled>
              서브 배너의 타이틀입니다.
            </SubBannerTitleStyled>
            <SubBannerDescriptionStyled>
              서브 배너의 설명입니다.
            </SubBannerDescriptionStyled>
            <Button color='primary' existsShadow>
              OOOO 보러가기
            </Button>
          </SubBannerDetailStyled>
        </SubBannerRightContentStyled>
      </SubBannerStyled>
    </Container>
  );
}

export default memo(SubBanner);
