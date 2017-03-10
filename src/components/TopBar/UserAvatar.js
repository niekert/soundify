import React, { PropTypes } from 'react';
import styled from 'styled-components';

const wrapper = styled.div`
  
`

const img = `
`

const UserAvatar = ({ src }) => (
  <wrapper>
    <img src={src} />
  </wrapper>
);

UserAvatar.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default UserAvatar;
