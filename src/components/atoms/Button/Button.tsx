import React, { forwardRef, memo } from 'react';
import { ButtonProps } from './ButtonProps';
import { ButtonStyled } from './ButtonStyled';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      color = 'primary',
      size = 'large',
      shape = 'fill',
      existsShadow = false,
      ...props
    },
    ref
  ) => {
    return (
      <ButtonStyled
        ref={ref}
        color={color}
        size={size}
        shape={shape}
        existsShadow={existsShadow}
        {...props}
      >
        {props.children}
      </ButtonStyled>
    );
  }
);

export default memo(Button);
