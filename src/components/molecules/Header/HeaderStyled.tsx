import styled from '@emotion/styled';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 24px;
  box-shadow: var(--SHADOW_DEFAULT);
`;

export const HeaderNavCategoryStyeld = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 36px;
`;

export const HeaderNavMenuStyled = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  gap: 36px;
`;
