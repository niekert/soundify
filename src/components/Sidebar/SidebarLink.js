import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { darken } from 'utils/color';
import { prop, ifProp } from 'styled-tools';
import VolumeIcon from 'components/icons/VolumeMax';

const activeCss = css`
  color: ${prop('theme.colors.primaryText')};
  background: ${props => darken(props.theme.colors.primaryBackground, 0.1)};
`;

const Link = styled(NavLink)`
  display: block;
  white-space: nowrap;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  color: ${prop('theme.colors.secondaryText')};
  text-decoration: none;
  outline: none;
  padding: 10px 15px;
  font-weight: 300;

  &.${prop('activeClassName')},
  &.dropActive,
  &:hover {
    ${activeCss};
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
  position: absolute;
  right: 15px;
  width: 16px;
  height: 16px;
  color: ${prop('theme.colors.primaryText')}
`;

const SidebarLink = ({ isPlaying = false, isActive, children, ...props }) =>
  <Link className={isActive && 'dropActive'} {...props}>
    {children}
    {isPlaying && <PlayingIcon />}
  </Link>;
SidebarLink.propTypes = {
  isPlaying: PropTypes.bool,
  isActive: PropTypes.bool,
  children: PropTypes.node,
};

export default SidebarLink;
