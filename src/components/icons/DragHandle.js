import React from 'react';
import { string } from 'prop-types';

const DragHandle = ({
  fill,
  ...props
}) => (
  <svg
    fill={fill}
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <path d="M0 0h24v24H0V0z" id="a" />
    </defs>
    <clipPath id="b">
      <use overflow="visible" />
    </clipPath>
    <path d="M20 9H4v2h16V9zM4 15h16v-2H4v2z" />
  </svg>
);
DragHandle.propTypes = {
  fill: string,
};

DragHandle.defaultProps = {
  fill: 'currentColor',
};

export default DragHandle;
