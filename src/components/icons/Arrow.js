import React from 'react';

import PropTypes from 'prop-types';

const ArrowIcon = ({ fill, isOpen, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 477.175 477.175"
    {...props}
  >
    <path
      d="M360.731 229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1l215.5 215.5-215.5 215.5c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4 3.4 0 6.9-1.3 9.5-4l225.1-225.1c5.3-5.2 5.3-13.8.1-19z"
      fill={fill}
    />
  </svg>
);
ArrowIcon.propTypes = {
  fill: PropTypes.string,
};
ArrowIcon.defaultProps = {
  fill: 'currentColor',
};

export default ArrowIcon;

