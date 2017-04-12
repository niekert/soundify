import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { prop } from 'styled-tools';
import VolumeIcon from 'components/icons/VolumeIcon';

const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  color: ${prop('theme.colors.secondaryText')};
  text-decoration: none;
  outline: none;
  padding: 10px 0;
  font-weight: 300;

  &:hover {
    color: ${prop('theme.colors.primaryText')};
  }

  &.${prop('activeClassName')} {
    color: ${prop('theme.colors.primaryText')};
  }

  &.${prop('activeClassName')}:before {
    content: '';
    position: absolute;
    left: 0px;
    height: 15px;
    background: ${prop('theme.colors.active')};
    width: 5px;
  }
`;
Link.defaultProps = {
  activeClassName: 'active',
};

const PlayingIcon = styled(VolumeIcon)`
  margin-left: auto;
  margin-right: 10px;
  width: 16px;
  height: 16px;
  color: ${prop('theme.colors.primaryText')}
`;

const SidebarLink = ({
  isPlaying = true,
  children,
  ...props
}) => (
  <Link {...props}>
    {children}
    {isPlaying && <PlayingIcon />}
  </Link>
);
SidebarLink.propTypes = {
  isPlaying: PropTypes.bool,
  children: PropTypes.node,
};

export default SidebarLink;
