import React from 'react';
import ArrowIcon from 'components/icons/Arrow';
import styled from 'styled-components';

const Wrapper = styled.button`
  width: 25px;
  height: 100%;
  padding: 0;
  margin-left: 5px;
  cursor: pointer;
  background: none;
  color: white;

  svg {
    width: 10px;
    height: 10px;
    transform: rotate(90deg);
  }
`;

const DropdownButton = () => (
  <Wrapper>
    <ArrowIcon />
  </Wrapper>
);

export default DropdownButton;
