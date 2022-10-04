import { ButtonHTMLAttributes } from 'react';
import { THEMES } from '../../subatomic/Theme';

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: THEMES;
}
