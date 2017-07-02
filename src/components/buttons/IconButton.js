import React from 'react';
import { node, string } from 'prop-types';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import ReactTooltip from 'react-tooltip';

const Button = styled.button`
  background: none;
  padding: 0;
  cursor: pointer;
  color: ${prop('theme.colors.primaryText')};
  transition: transform 100ms ease-out;

  &:hover {
    transform: scale(1.05);
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;

function IconButton({ children, tooltip, ...props }) {
  return (
    <Button data-tip={tooltip} {...props}>
      {children}
      <ReactTooltip />
    </Button>
  );
}
IconButton.propTypes = {
  children: node,
  tooltip: string,
};

export default IconButton;
