import { IconProps } from './IconProps';
import Icons from './Icons';
import { IconStyled } from './IconStyled';

export default function Icon({ color, len = 24, icon, ...props }: IconProps) {
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
