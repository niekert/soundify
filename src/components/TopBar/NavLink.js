import { NavLink as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

const NavLink = styled(RouterLink)`
  padding: 0 15px;
  color: ${props => props.theme.colors.secondaryText};
  text-decoration: none;
  outline: none;

  &:hover {
    color: ${props => props.theme.colors.primaryText}
  }

  &.${props => props.activeClassName} {
    color: ${props => props.theme.colors.primaryText}
  }
`
NavLink.defaultProps = {
  activeClassName: 'active'
};

export default NavLink;
