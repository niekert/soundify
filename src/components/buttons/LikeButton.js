import React, { PropTypes } from 'react';
import styled from 'styled-components';
import HeartIcon from 'components/icons/Heart';
import { ifProp, prop } from 'styled-tools';
import IconButton from './IconButton';

const Button = styled(IconButton)`
  margin-left: 10px;

  svg path {
    ${ifProp(
      'active',
      '',
      'fill: none'
    )};
  }
`;

const LikeButton = ({
  onClick,
  active,
}) => (
  <Button
    active={active}
    onClick={onClick}
  >
    <HeartIcon />
  </Button>
);
LikeButton.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default LikeButton;
