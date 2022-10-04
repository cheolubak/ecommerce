import React, { forwardRef, useReducer, memo } from 'react';
import classNames from 'classnames';
import { InputProps } from './InputProps';
import { InputOutlineStyled, InputStyled } from './InputStyled';

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ prefixes, suffixes, ...props }, ref) => {
    const [status, dispatch] = useReducer(reducerInput, '');

    const focustInput = () => {
      dispatch('FOCUS');
    };

    const blurInput = () => {
      dispatch('BLUR');
    };

    return (
      <InputOutlineStyled
        className={classNames(
          { disabled: props.disabled },
          props.className,
          status
        )}
      >
        {prefixes}
        <InputStyled
          ref={ref}
          {...props}
          onFocus={focustInput}
          onBlur={blurInput}
        />
        {suffixes}
      </InputOutlineStyled>
    );
  }
);

export default memo(Input);

function reducerInput(state: string, action: string) {
  switch (action) {
    case 'FOCUS': {
      return 'focus';
    }
    case 'BLUR':
    default: {
      return '';
    }
  }
}
