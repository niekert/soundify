import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HeartIcon from 'components/icons/FavoriteHeart';
import { ifProp, prop } from 'styled-tools';
import { withHandlers } from 'recompose';

const Button = styled.button`
  background: none;
  padding: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  color: ${prop('theme.colors.primaryText')};
`;

const enhance = withHandlers({
  onClick: ({ onToggle, trackId, active }) => e => {
    e.stopPropagation();
    onToggle(trackId, !active);
  },
});

const LikeButton = enhance(({ onClick, active }) =>
  <Button active={active} onClick={onClick}>
    <HeartIcon isActive={active} />
  </Button>,
);
LikeButton.propTypes = {
  active: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
  trackId: PropTypes.number.isRequired,
};

export default LikeButton;
