import { prop } from 'styled-tools';
import styled from 'styled-components';

export const Button = styled.button`
  padding: 5px 10px;
  background: ${prop('theme.colors.cta')};
  border-radius: 2px;
  min-width: 100px;
  opacity: .8;
  height: 50%;
  align-self: center;
  cursor: pointer;
  margin: 0 ${prop('theme.spacing.space2')};
  color: white;

  &:hover {
    opacity: 1;
  }
`;
