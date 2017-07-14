import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { prop } from 'styled-tools';

export const Dropdown = styled.div`
  position: absolute;
  margin-top: 5px;
  top: 100%;
  left: 0;
  box-shadow: ${prop('theme.shadows.depth2')};
  background: ${prop('theme.colors.reverse.background')};
  min-width: 200px;
  padding: 5px 0;
`;

export const DropdownButton = styled.button`
  display: block;
  min-width: 100%;
  padding: 10px;
  text-decoration: none;
  font-weight: 300;
  background: none;
  font-size: 14px;
  color: ${prop('theme.colors.reverse.primaryText')};

  &:hover {
    opacity: .6;
  }
`;

export const DropdownLink = DropdownButton.withComponent(Link);
export const DropdonHref = DropdownButton.withComponent('a');
