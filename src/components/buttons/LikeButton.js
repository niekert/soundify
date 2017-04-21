import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HeartIcon from 'components/icons/Heart';
import { ifProp, prop } from 'styled-tools';
import { withHandlers } from 'recompose';
import IconButton from './IconButton';

const Button = styled(IconButton)`
  color: ${prop('theme.colors.primaryText')};

  svg path {
    ${ifProp(
      'active',
      '',
      'fill: none',
    )};
  }
`;

const enhance = withHandlers({
  onClick: ({ onToggle, trackId, active }) => () => onToggle(trackId, !active),
});

const LikeButton = enhance(({
  onClick,
  active,
}) => (
  <Button
    active={active}
    onClick={onClick}
  >
    <HeartIcon />
  </Button>
));
LikeButton.propTypes = {
  active: PropTypes.bool,
  toggleLike: PropTypes.func.isRequired,
  trackId: PropTypes.string.isRequired,
};

export default LikeButton;
