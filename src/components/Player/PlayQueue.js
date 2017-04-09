import React, { PropTypes } from 'react';
import styled, { css } from 'styled-components';
import { prop } from 'styled-tools';

const backstyles = css`
  background: ${prop('theme.colors.primaryBackground')};
  border: 1px solid ${prop('theme.colors.outline')};
  border-radius: 2px;
  box-shadow: 0px 1px 2px 3px rgba(0, 0, 0, 0.2);
`;

const Wrapper = styled.div`
  position: absolute;
  ${backstyles}
  border-radius: 2px;
  z-index: 100;
  bottom: 30px;
  left: -140px;
  width: 300px;
  min-height: 250px;
  height: auto;

  &:before {
    content: '';
    ${backstyles}
    position: absolute;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    bottom: -5px;
    left: 155px;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10px;
    background: ${prop('theme.colors.primaryBackground')};
  }
`;

const Content = styled.div`

`

const PlayQueue = () => (
  <Wrapper>
    Hello
  </Wrapper>
);

export default PlayQueue;
