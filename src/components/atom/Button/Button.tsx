import React, { forwardRef } from 'react';
import { ButtonProps } from './ButtonProps';
import { ButtonStyled } from './ButtonStyled';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ color = 'primary', size = 'large', shape = 'fill', ...props }, ref) => {
    return (
      <ButtonStyled
        ref={ref}
        color={color}
        size={size}
        shape={shape}
        {...props}
      >
        {props.children}
      </ButtonStyled>
    );
  }
);

export default Button;
