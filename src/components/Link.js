import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  color: ${props => props.theme.colors.secondaryText};
  text-decoration: none;
  outline: none;
  
  &:hover {
    color: ${props => props.theme.colors.primaryText}
  }
`
