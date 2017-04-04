import React, { PropTypes } from 'react';

const PlayQueue = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 294.842 294.842"
    {...props}
  >
    <path
      d="M292.128 214.846c-2.342-2.344-6.143-2.344-8.484 0l-59.512 59.511V6c0-3.313-2.687-6-6-6s-6 2.687-6 6v268.356l-59.513-59.512c-2.342-2.342-6.142-2.343-8.485.001-2.343 2.343-2.343 6.142.001 8.485l69.755 69.754c1.171 1.171 2.707 1.757 4.242 1.757s3.071-.586 4.242-1.758l69.754-69.754c2.344-2.342 2.344-6.141 0-8.483zM6.956 12h180.137c3.313 0 6-2.687 6-6s-2.687-6-6-6H6.956c-3.313 0-6 2.687-6 6s2.687 6 6 6z"
      fill={fill}
    />
    <path
      fill={fill}
      d="M6.956 82.228h180.137c3.313 0 6-2.687 6-6s-2.687-6-6-6H6.956c-3.313 0-6 2.687-6 6s2.687 6 6 6zM6.956 152.456h180.137c3.313 0 6-2.687 6-6s-2.687-6-6-6H6.956c-3.313 0-6 2.687-6 6s2.687 6 6 6zM124.438 210.685H6.956c-3.313 0-6 2.687-6 6s2.687 6 6 6h117.482c3.313 0 6-2.687 6-6s-2.686-6-6-6zM124.438 280.912H6.956c-3.313 0-6 2.687-6 6s2.687 6 6 6h117.482c3.313 0 6-2.687 6-6s-2.686-6-6-6z"
    />
  </svg>
);

PlayQueue.propTypes = {
  fill: PropTypes.string,
};
PlayQueue.defaultProps = {
  fill: 'currentColor',
};

export default PlayQueue;
