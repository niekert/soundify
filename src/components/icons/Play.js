import React from 'react';

import PropTypes from 'prop-types';

const Play = ({ fill, ...props }) => (
  <svg fill={fill} viewBox="0 0 24 24" {...props}>
    <path d="M8 5v14l11-7z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);
Play.propTypes = {
  fill: PropTypes.string,
};
Play.defaultProps = {
  fill: 'currentColor',
};

export default Play;
