import { ButtonHTMLAttributes } from 'react';
import { SIZES, THEMES, SHAPES } from '../../subatomic/Theme';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: THEMES;
  shape?: SHAPES;
  size?: SIZES;
  existsShadow?: boolean;
}
