import { css } from '@emotion/react';

type HEADLINE_LEVEL = 1 | 2 | 3 | 4 | 5 | 6;
type SUBTITLE_LEVEL = 1 | 2;
type BODY_LEVEL = 1 | 2;

export const HEADLINE = (level: HEADLINE_LEVEL) => {
  switch (level) {
    case 1: {
      return css`
        font-size: 96px;
        font-weight: 300;
        letter-spacing: -1.5px;
      `;
    }
    case 2: {
      return css`
        font-size: 60px;
        font-weight: 300;
        letter-spacing: -0.5px;
      `;
    }
    case 3: {
      return css`
        font-size: 48px;
        font-weight: 400;
        letter-spacing: 0;
      `;
    }
    case 4: {
      return css`
        font-size: 34px;
        font-weight: 400;
        letter-spacing: 0.25px;
      `;
    }
    case 5: {
      return css`
        font-size: 24px;
        font-weight: 400;
        letter-spacing: 0;
      `;
    }
    case 6: {
      return css`
        font-size: 20px;
        font-weight: 500;
        letter-spacing: 0.15px;
      `;
    }
  }
};

export const SUBTITLE = (level: SUBTITLE_LEVEL) => {
  switch (level) {
    case 1: {
      return css`
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0.15px;
      `;
    }
    case 2: {
      return css`
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.1px;
      `;
    }
  }
};

export const BODY = (level: BODY_LEVEL) => {
  switch (level) {
    case 1: {
      return css`
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0.5px;
      `;
    }
    case 2: {
      return css`
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.25px;
      `;
    }
  }
};

export const BUTTON = css`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1.25px;
`;

export const CAPTION = css`
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.4px;
`;

export const OVERLINE = css`
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.15px;
`;
