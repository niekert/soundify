import React from 'react';

import PropTypes from 'prop-types';

const NextTrack = ({ fill, ...props }) =>
  <svg fill={fill} viewBox="0 0 24 24" {...props}>
    <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>;

NextTrack.propTypes = {
  fill: PropTypes.string,
};
NextTrack.defaultProps = {
  fill: 'currentColor',
};

export default NextTrack;
