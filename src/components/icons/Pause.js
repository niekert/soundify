import React from 'react';

import PropTypes from 'prop-types';

const Pause = ({ fill, ...props }) =>
  <svg fill={fill} viewBox="0 0 24 24" {...props}>
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>;
Pause.propTypes = {
  fill: PropTypes.string,
};
Pause.defaultProps = {
  fill: 'currentColor',
};

export default Pause;
