/* eslint-disable react/prop-types */
import React from 'react';
import { compose, withHandlers, withState } from 'recompose';
import { func, number, bool } from 'prop-types';
import { Button } from './style';

const enhance = compose(
  withState('isMouseOver', 'setMouseOver', false),
  withHandlers({
    onClick: ({ userId, isFollowing, toggleFollowing }) => () => {
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
