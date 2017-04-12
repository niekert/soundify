import React from 'react';

import PropTypes from 'prop-types';

const PreviousTrack = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 487.91 487.91"
    {...props}
  >
    <path
      fill={fill}
      d="M464.923 19.725c12.696 0 22.987 10.29 22.987 22.985v402.253c0 12.694-10.291 22.987-22.987 22.987L91.403 261.075s-17.239-17.238 0-34.477c17.239-17.24 373.52-206.873 373.52-206.873zM76.821 443.271c0 13.76-11.155 24.915-24.915 24.915H24.915C11.155 468.186 0 457.031 0 443.271V44.639c0-13.761 11.155-24.915 24.915-24.915h26.991c13.76 0 24.915 11.155 24.915 24.915v398.632z"
    />
  </svg>
);

PreviousTrack.propTypes = {
  fill: PropTypes.string,
};
PreviousTrack.defaultProps = {
  fill: 'currentColor',
};

export default PreviousTrack;
