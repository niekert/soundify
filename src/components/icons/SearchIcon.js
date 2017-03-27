import React, { PropTypes } from 'react';

const SearchIcon = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 56.966 56.966"
    {...props}
  >
    <path
      d="M55.146 51.887L41.588 37.786c3.486-4.144 5.396-9.358 5.396-14.786 0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837 1.192-1.147 1.23-3.049.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z"
      fill={fill}
    />
  </svg>
);

SearchIcon.propTypes = {
  fill: PropTypes.string,
};
SearchIcon.defaultProps = {
  fill: 'currentColor',
};

export default SearchIcon;
