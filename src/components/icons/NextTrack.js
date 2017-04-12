import React from 'react';

import PropTypes from 'prop-types';

const NextTrack = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 487.913 487.913"
    {...props}
  >
    <path
      fill={fill}
      d="M22.987 468.187C10.291 468.187 0 457.896 0 445.202V42.949c0-12.695 10.291-22.988 22.987-22.988l373.519 206.875s17.239 17.238 0 34.477C379.268 278.552 22.987 468.187 22.987 468.187zM411.09 44.64c0-13.76 11.155-24.915 24.915-24.915h26.993c13.76 0 24.915 11.155 24.915 24.915v398.633c0 13.76-11.155 24.915-24.915 24.915h-26.993c-13.76 0-24.915-11.155-24.915-24.915V44.64z"
    />
  </svg>
);

NextTrack.propTypes = {
  fill: PropTypes.string,
};
NextTrack.defaultProps = {
  fill: 'currentColor',
};

export default NextTrack;
