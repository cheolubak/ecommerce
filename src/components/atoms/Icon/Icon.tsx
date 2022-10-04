import React, { memo } from 'react';
import { IconProps } from './IconProps';
import Icons from './Icons';
import { IconStyled } from './IconStyled';

function Icon({ color, len = 24, icon, ...props }: IconProps) {
  return (
    <IconStyled
      color={color}
      len={len}
      {...props}
    >
      <Icons icon={icon} />
    </IconStyled>
  );
}

export default memo(Icon);
