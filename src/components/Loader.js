import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ifProp, prop } from 'styled-tools';

const Wrapper = styled.div`
  margin: 50px auto 0;
  width: 90px;
  text-align: center;
`;

const animation = keyframes`
  0%, 80%, 100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  } 40% {
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
  }
`;

const Dot = styled.div`
  width: 16px;
  height: 16px;
  background-color: ${ifProp(
    'light',
    prop('theme.colors.primaryText'),
    prop('theme.colors.reverse.primaryText'),
  )};
  opacity: .8;
  margin: 0 5px;
  border-radius: 100%;
  display: inline-block;
  animation: ${animation} 1.4s ${props => props.delay} infinite ease-in-out both;
`;

const Loader = props => (
  <Wrapper {...props}>
    <Dot delay="-0.32s" />
    <Dot delay="-0.16s" />
    <Dot />
  </Wrapper>
);

export default Loader;
