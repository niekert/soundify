import React from 'react';

import PropTypes from 'prop-types';

const Play = ({ fill, ...props }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 232.153 232.153"
    {...props}
  >
    <path
      fill={fill}
      d="M203.791,99.628L49.307,2.294c-4.567-2.719-10.238-2.266-14.521-2.266
      c-17.132,0-17.056,13.227-17.056,16.578v198.94c0,2.833-0.075,16.579,17.056,16.579c4.283,0,9.955,0.451,14.521-2.267
      l154.483-97.333c12.68-7.545,10.489-16.449,10.489-16.449S216.471,107.172,203.791,99.628z"
    />
  </svg>
);
Play.propTypes = {
  fill: PropTypes.string,
};
Play.defaultProps = {
  fill: 'currentColor',
};

export default Play;
