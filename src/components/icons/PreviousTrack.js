import React from 'react';
import PropTypes from 'prop-types';

const PreviousTrack = ({ fill, ...props }) =>
  <svg fill={fill} viewBox="0 0 24 24" {...props}>
    <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>;

PreviousTrack.propTypes = {
  fill: PropTypes.string,
};
PreviousTrack.defaultProps = {
  fill: 'currentColor',
};

export default PreviousTrack;
