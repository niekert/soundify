import React from 'react';
import { node, bool } from 'prop-types';
import ReactModal from 'react-modal';
import styled, { keyframes } from 'styled-components';
import { prop } from 'styled-tools';

const dialogIn = keyframes`
  from {
    transform: translateY(10px);
    opacity: 0
  }

  50% {
    opacity: 1;
  }

  to {
    opacity: 1;
    transform: none;
  }
`;

const StyledModal = styled(ReactModal).attrs({
  style: {
    overlay: {
      background: 'rgba(154, 194, 222, 0.5)',
      zIndex: 9999,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
})`
  z-index: 99999;
  max-height: 300px;
  background: ${prop('theme.colors.primaryBackground')};
  color: ${prop('theme.colors.primaryText')};
  max-width: 400px;
  border-radius: 3px;
  box-shadow: ${prop('theme.shadows.depth2')};
  padding: 20px;
  animation: ${dialogIn} 100ms ease-out forwards;
`;

const Modal = ({
  isOpen = true,
  children,
  ...props
}) => (
  <StyledModal
    isOpen={isOpen}
    className="cpoool"
    {...props}
  >
    {children}
  </StyledModal>
);
Modal.propTypes = {
  children: node,
  isOpen: bool,
};

export default Modal;
