import React from 'react';

import PropTypes from 'prop-types';

const SendIcon = ({ fill, isOpen, ...props }) =>
  <svg fill={fill} viewBox="0 0 24 24" {...props}>
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill={fill} />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>;

SendIcon.propTypes = {
  fill: PropTypes.string,
  isOpen: PropTypes.bool,
};
SendIcon.defaultProps = {
  fill: 'currentColor',
};

export default SendIcon;
