/* eslint-disable react/prop-types */
import React from 'react';
import { number, string, bool, func } from 'prop-types';
import styled from 'styled-components';
import { compose, setPropTypes, withHandlers } from 'recompose';
import { Dropdown, DropdownButton } from 'components/Dropdown';
import { prop } from 'styled-tools';
import Popover from 'components/helpers/Popover';

const TriggerButton = styled.button`
  content: '...';
  height: 32px;
  width: 32px;
  font-size: 18px;
  border-radius: 50%;
  padding: 0;
  background: none;
  border: 1px solid ${prop('theme.colors.secondaryActive')};
  transition: transform .1s ease-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const StyledPopover = styled(Popover)`
  display: flex;
  align-items: center;
`;

const enhance = compose(
  setPropTypes({
    userId: number.isRequired,
    userName: string.isRequired,
    isPinned: bool.isRequired,
    togglePinSidebar: func.isRequired,
  }),
  withHandlers({
    onToggleSidebarClick: ({ userId, userName, togglePinSidebar }) => () =>
      togglePinSidebar(userId, userName),
  }),
);

function ProfileDropdown({ onToggleSidebarClick, isPinned }) {
  return (
    <StyledPopover
      triggerButton={<TriggerButton>⋯</TriggerButton>}
      closeOnClick
    >
      <Dropdown>
        <DropdownButton onClick={onToggleSidebarClick}>
          {isPinned ? 'Remove from sidebar' : 'Pin to sidebar'}
        </DropdownButton>
      </Dropdown>
    </StyledPopover>
  );
}

export default enhance(ProfileDropdown);
