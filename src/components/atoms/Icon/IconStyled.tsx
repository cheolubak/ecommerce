import styled from '@emotion/styled';
import { THEMES } from '../../subatomic/Theme';
import { parseColors } from '../../util/Colors';

export const IconStyled = styled.i<{ color?: THEMES; len: number }>`
  font-size: ${({ len }) => `${len}px;`};

  & * {
    width: 1em;
    height: 1em;
    ${({ color }) => {
      if (!!color) {
        return `fill: ${parseColors(color)};`;
      }
    }};
  }
`;
