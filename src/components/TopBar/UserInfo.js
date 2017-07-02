import React from 'react';
import { string, bool, func } from 'prop-types';
import ArrowIcon from 'components/icons/Arrow';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';

const Wrapper = styled.button`
  background: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  height: 100%;
  align-items: center;
`;

const Username = styled.span`
  margin-left: 10px;
  font-weight: 300;
  font-size: 12px;
`;

const Avatar = styled.img`
  border-radius: 50%;
  height: 32px;
  align-self: center;
`;

const ArrowWrapper = styled.div`
  margin-left: 1em;
  position: relative;
  top: 1px;
  width: 10px;
  height: 10px;
  transition: transform 75ms ease-out;
  transform: ${ifProp('isOpen', 'rotate(270deg)', 'rotate(90deg)')};
`;

const UserInfo = ({ username, avatarUrl, isOpen, onClick }) =>
  <Wrapper onClick={onClick}>
    <Avatar src={avatarUrl} />
    <Username>
      {username}
    </Username>
    <ArrowWrapper isOpen={isOpen}>
      <ArrowIcon />
    </ArrowWrapper>
  </Wrapper>;
UserInfo.propTypes = {
  onClick: func,
  username: string.isRequired,
  avatarUrl: string.isRequired,
  isOpen: bool,
};

export default UserInfo;
