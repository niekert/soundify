import React from 'react';

import PropTypes from 'prop-types';

const QueueAdd = ({ fill, ...props }) => (
  <svg
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z" />
  </svg>
);

QueueAdd.propTypes = {
  fill: PropTypes.string,
};
QueueAdd.defaultProps = {
  fill: 'currentColor',
};

export default QueueAdd;
