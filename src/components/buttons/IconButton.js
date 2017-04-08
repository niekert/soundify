import styled from 'styled-components';
import { prop } from 'styled-tools';

export default styled.button`
  background: none;
  padding: 0;
  cursor: pointer;
  color: ${prop('theme.colors.secondaryText')};

  &:hover {
    color: ${prop('theme.colors.primaryText')};
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;
