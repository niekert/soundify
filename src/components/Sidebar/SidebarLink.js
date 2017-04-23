import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { darken } from 'utils/color';
import { prop } from 'styled-tools';
import VolumeIcon from 'components/icons/VolumeIcon';

const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  position: relative;
  color: ${prop('theme.colors.secondaryText')};
  text-decoration: none;
  outline: none;
  padding: 10px 15px;
  font-weight: 300;

  &.${prop('activeClassName')},
  &:hover {
    color: ${prop('theme.colors.primaryText')};
    background: ${props => darken(props.theme.colors.primaryBackground, 0.1)};
  }

  &.${prop('activeClassName')}:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
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
