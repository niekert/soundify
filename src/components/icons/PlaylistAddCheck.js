import React from 'react';
import PropTypes from 'prop-types';

const PlaylistAddCheck = ({ fill, ...props }) => (
  <svg fill={fill} viewBox="0 0 24 24" {...props}>
    <defs>
      <path id="a" d="M0 0h24v24H0V0z" />
    </defs>
    <clippath id="b">
      <path d="M0 0h24v24H0V0z" />
    </clippath>
    <path
      clipPath="url(#b)"
      d="M14 10H2v2h12v-2zm0-4H2v2h12V6zM2 16h8v-2H2v2zm19.5-4.5L23 13l-6.99 7-4.51-4.5L13 14l3.01 3 5.49-5.5z"
    />
  </svg>
);

PlaylistAddCheck.propTypes = {
  fill: PropTypes.string,
};
PlaylistAddCheck.defaultProps = {
  fill: 'currentColor',
};

export default PlaylistAddCheck;
