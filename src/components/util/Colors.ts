import { THEMES, STATUSES } from '../subatomic/Theme';

export function parseColors(
  theme: THEMES,
  status: STATUSES = 'default'
): string {
  if (status === 'hover') {
    switch (theme) {
      case 'primary':
        return `var(--COLOR_PRIMARY_HOVER);`;
      case 'secondary':
        return `var(--COLOR_SECONDARY_HOVER);`;
      case 'warning':
        return `var(--COLOR_WARNING_HOVER);`;
      case 'black':
        return `var(--COLOR_BLACK);`;
      case 'gray':
        return `var(--COLOR_GRAY);`;
      case 'white':
        return `var(--COLOR_WHITE);`;
    }
  } else if (status === 'active') {
    switch (theme) {
      case 'primary':
        return `var(--COLOR_PRIMARY_ACTIVE);`;
      case 'secondary':
        return `var(--COLOR_SECONDARY_ACTIVE);`;
      case 'warning':
        return `var(--COLOR_WARNING_ACTIVE);`;
      case 'black':
        return `var(--COLOR_BLACK)`;
      case 'gray':
        return `var(--COLOR_GRAY);`;
      case 'white':
        return `var(--COLOR_WHITE);`;
    }
  } else {
    switch (theme) {
      case 'primary':
        return `var(--COLOR_PRIMARY);`;
      case 'secondary':
        return `var(--COLOR_SECONDARY);`;
      case 'warning':
        return `var(--COLOR_WARNING);`;
      case 'black':
        return `var(--COLOR_BLACK)`;
      case 'gray':
        return `var(--COLOR_GRAY);`;
      case 'white':
        return `var(--COLOR_WHITE);`;
    }
  }
}
