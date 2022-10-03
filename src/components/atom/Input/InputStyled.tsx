import styled from '@emotion/styled';
import { BODY } from '../../subatomic/Typography';

export const InputStyled = styled.input`
  ${BODY(1)}
  all: unset;
  height: 100%;
  background-color: transparent;
  color: inherit;
  flex-grow: 1;

  &::placeholder {
    color: var(--COLOR_GRAY);
  }
`;

export const InputOutlineStyled = styled.div`
  display: flex;
  justify-content: stretch;
  align-items: center;
  height: 48px;
  padding: 0 16px;
  border: 1px solid var(--COLOR_GRAY);
  border-radius: 8px;
  background-color: var(--COLOR_WHITE);
  color: var(--COLOR_BLACK);
  flex: 1;
  gap: 8px;

  &:hover,
  &.focus {
    border-color: var(--COLOR_PRIMARY);
  }

  &.disabled {
    color: var(--COLOR_GRAY);
    border-color: var(--COLOR_LIGHT_GRAY);
  }
`;
