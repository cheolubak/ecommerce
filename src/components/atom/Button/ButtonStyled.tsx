import styled from '@emotion/styled';
import { SIZES, THEMES, SHAPES } from '../../subatomic/Theme';
import { BUTTON } from '../../subatomic/Typography';
import { parseColors } from '../../util/Colors';

export const ButtonStyled = styled.button<{
  color: THEMES;
  size: SIZES;
  shape: SHAPES;
}>`
  ${BUTTON};
  all: unset;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  transition: background-color 0.1s, border-color 0.1s;
  cursor: pointer;

  background-color: ${({ color, shape }) => {
    if (shape === 'outline') {
      return 'var(--COLOR_WHITE);';
    } else {
      return parseColors(color);
    }
  }};

  color: ${({ color, shape }) => {
    if (shape === 'fill') {
      return `var(--COLOR_WHITE);`;
    } else {
      return parseColors(color);
    }
  }};

  padding: ${({ size }) => {
    if (size === 'large') {
      return `0 24px;`;
    } else {
      return `0 16px;`;
    }
  }};

  height: ${({ size }) => {
    switch (size) {
      case 'large':
        return '48px;';
      case 'medium':
        return '40px;';
      case 'small':
        return '36px;';
    }
  }};

  border: ${({ color, shape }) => {
    if (shape === 'outline') {
      return `1px solid ${parseColors(color)}`;
    } else {
      return 'noen;';
    }
  }};

  &:hover {
    background-color: ${({ color, shape }) => {
      if (shape === 'fill') {
        return parseColors(color, 'hover');
      }
    }};

    border: ${({ color, shape }) => {
      if (shape === 'outline') {
        return `1px solid ${parseColors(color, 'hover')};`;
      }
    }};
  }

  &:active {
    background-color: ${({ color, shape }) => {
      if (shape === 'fill') {
        return parseColors(color, 'active');
      }
    }};

    border: ${({ color, shape }) => {
      if (shape === 'outline') {
        return `1px solid ${parseColors(color, 'active')}`;
      }
    }};
  }
`;
