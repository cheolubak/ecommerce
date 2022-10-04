import { THEMES } from '../../subatomic/Theme';

export type ICON_NAME =
  | 'add-photo'
  | 'add'
  | 'basket'
  | 'card'
  | 'clear'
  | 'copyright'
  | 'dropdown'
  | 'edit'
  | 'favorite-fill'
  | 'favorite-outline'
  | 'mail'
  | 'notification'
  | 'person'
  | 'phone'
  | 'right'
  | 'search'
  | 'send'
  | 'share'
  | 'shipping'
  | 'star-fill'
  | 'star-outline'
  | 'store';

export interface IconProps {
  color?: THEMES;
  len?: number;
  icon: ICON_NAME;
}
