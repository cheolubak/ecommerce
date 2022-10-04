import { InputHTMLAttributes, ReactNode } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  prefixes?: ReactNode | ReactNode[];
  suffixes?: ReactNode | ReactNode[];
}
