/* eslint-disable react/prop-types */
import React from 'react';
import { compose, withHandlers, withState } from 'recompose';
import { func, number, bool } from 'prop-types';
import { prop } from 'styled-tools';
import styled from 'styled-components';

const Button = styled.button`
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

const enhance = compose(
  withState('isMouseOver', 'setMouseOver', false),
  withHandlers({
    onClick: ({ userId, isFollowing, toggleFollowing }) => e => {
      toggleFollowing(userId, !isFollowing);
    },
    onMouseEnter: ({ setMouseOver }) => () => setMouseOver(true),
    onMouseLeave: ({ setMouseOver }) => () => setMouseOver(false),
  }),
);

function FollowButton({
  onClick,
  isMouseOver,
  onMouseEnter,
  onMouseLeave,
  isFollowing,
}) {
  return (
    <Button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {!isFollowing && 'Follow'}
      {isFollowing && (isMouseOver ? 'Unfollow' : 'Following')}
    </Button>
  );
}

FollowButton.propTypes = {
  toggleFollowing: func.isRequired, // eslint-disable-line
  userId: number.isRequired, // eslint-disable-line
  onClick: func.isRequired,
  isFollowing: bool,
};

FollowButton.defaultProps = {
  isFollowing: false,
};

export default enhance(FollowButton);
