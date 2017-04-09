import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import styled from 'styled-components';
import enhanceClickOutside from 'react-click-outside';
import { ifProp, prop } from 'styled-tools';

const Wrapper = styled.div`
  position: relative;
`;

const Popover = styled.div`
  position: absolute;
  z-index: 100;
  background: black;
  width: ${prop('width', 0)}px;

  left: ${prop('pos.left', -999)}px;
`;

class Dropdown extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    triggerButton: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
    width: PropTypes.number, // TODO: calculate this instead
    align: PropTypes.oneOf(['left', 'center', 'right']),
    verticalAlign: PropTypes.oneOf(['top', 'bottom', 'auto']),
    children: PropTypes.node,
    onToggle: PropTypes.func,
  };

  static defaultProps = {
    isOpen: false,
    align: 'center',
    verticalAlign: 'top',
  };

  state = {
    isOpen: this.props.isOpen,
  };

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.isOpen !== this.props.isOpen && nextProps.isOpen !== this.state.isOpen) {
      this.setSate({ isOpen: nextProps.isOpen }); // TODO: fix this :)
    }
  }

  // Function called by `enhanceClickOutside` hoc
  handleClickOutside () { // eslint-disable-line
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
    }
  }

  _togglePopover(isOpen = !this.state.isOpen) {
    this.setState({ isOpen });

    if (typeof this.props.onToggle === 'function') {
      this.props.onToggle(isOpen);
    }
  }

  _renderTriggerButton() {
    let triggerButton = this.props.triggerButton;
    if (typeof triggerButton === 'function') {
      triggerButton = triggerButton(this.state.isOpen);
    }

    const buttonProps = {
      onClick: (e) => {
        this._togglePopover();
        e.preventDefault();
      },
    };

    return React.cloneElement(triggerButton, buttonProps);
  }

  render() {
    const { children } = this.props;

    return (
      <Wrapper
        innerRef={c => this._element = c}
      >
        {this._renderTriggerButton()}
        {this.state.isOpen && children}
      </Wrapper>
    );
  }
}

export default enhanceClickOutside(Dropdown);
