import styled from '@emotion/styled';
import { THEMES } from '../../subatomic/Theme';
import { parseColors } from '../../util/Colors';

export const IconButtonStyled = styled.button<{ color?: THEMES }>`
  all: unset;
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: transparent;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${({ color }) => {
    if (!!color) {
      return `background-color: ${parseColors(color)};`;
    }
  }};

  & * {
    fill: ${({ color }) => {
      if (!!color) {
        return `var(--COLOR_WHITE)`;
      }
    }};
  }

  &:hover {
    ${({ color }) => {
      if (!!color) {
        return `background-color: ${parseColors(color, 'hover')};`;
      } else {
        return `background-color: var(--COLOR_LIGHT_GRAY)`;
      }
    }};
  }

  &:active {
    ${({ color }) => {
      if (!!color) {
        return `background-color: ${parseColors(color, 'active')};`;
      } else {
        return `background-color: var(--COLOR_GRAY)`;
      }
    }};
  }
`;
