import React from 'react';
import { string } from 'prop-types';

const CloseIcon = ({
  fill,
  ...props
}) => (
  <svg
    fill={fill}
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
    />
    <path
      d="M0 0h24v24H0z"
      fill="none"
    />
  </svg>
);
CloseIcon.propTypes = {
  fill: string,
};
CloseIcon.defaultProps = {
  fill: 'currentColor',
};

export default CloseIcon;

