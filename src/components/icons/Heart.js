import React, { PropTypes } from 'react';

const Heart = (props) => (
  <svg
   viewBox="0 0 18 18"
   xmlns="http://www.w3.org/2000/svg"
   {...props}
  >
    <path
      d="M16.99 6.01c0-2.747-1.933-4.974-4.317-4.974-1.558 0-2.918.952-3.678 2.376-.76-1.424-2.12-2.376-3.677-2.376C2.933 1.036 1 3.263 1 6.01c0 1.495.575 2.833 1.482 3.745l6.12 7.048c.104.12.246.188.393.188.148 0 .29-.067.394-.188l6.12-7.048c.906-.912 1.482-2.25 1.482-3.745z"
      fill="currentColor"
      stroke="currentColor"
    />
  </svg>
);

export default Heart;
