import React from 'react';
import PopOver from 'components/helpers/Popover';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { prop } from 'styled-tools';
import UserInfo from './UserInfo';

const DropdownWrapper = styled.div`
  position: absolute;
  top: 100%;
  right: -25px;
  box-shadow: ${prop('theme.shadows.depth2')};
  background: ${prop('theme.colors.reverse.background')};
  width: 150px;
  padding: 5px 0;
`;

const linkStyles = css`
  display: block;
  width: 100%;
  padding: 15px 10px;
  text-decoration: none;
  font-weight: 300;
  font-size: 14px;
  color: ${prop('theme.colors.reverse.primaryText')};

  &:hover {
    opacity: .6;
  }
`;

const DropdownLink = styled(Link)`
  ${linkStyles}
`;

const Href = styled.a`${linkStyles};`;

const UserDropdown = ({ user }) =>
  <PopOver
    triggerButton={
      <UserInfo avatarUrl={user.avatar_url} username={user.username} />
    }
  >
    <DropdownWrapper>
      <Href href="https://soundcloud.com" target="_blank">
        Soundcloud.com
      </Href>
      <Href href="mailto:niekkruse70@gmail.com?SUBJECT=Soundify%20Feedback">
        Leave feedback
      </Href>
      <DropdownLink to="/logout">Sign out</DropdownLink>
    </DropdownWrapper>
  </PopOver>;
UserDropdown.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserDropdown;
