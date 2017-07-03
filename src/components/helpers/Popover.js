/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import enhanceClickOutside from 'react-click-outside';

const Wrapper = styled.div`position: relative;`;

class Popover extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    triggerButton: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
      .isRequired,
    triggerProps: PropTypes.object,
    children: PropTypes.node,
    closeOnClick: PropTypes.bool,
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

  componentWillReceiveProps = nextProps => {
    if (
      nextProps.isOpen !== this.props.isOpen &&
      nextProps.isOpen !== this.state.isOpen
    ) {
      this.setSate({ isOpen: nextProps.isOpen }); // TODO: fix this :)
    }
  };

  // Function called by `enhanceClickOutside` hoc
  handleClickOutside() {
    // eslint-disable-line
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

  _onChildClicked = () => {
    if (this.props.closeOnClick) {
      this.setState({ isOpen: false });
    }
  };

  _renderTriggerButton() {
    let triggerButton = this.props.triggerButton;
    if (typeof triggerButton === 'function') {
      triggerButton = triggerButton();
    }

    const buttonProps = {
      onClick: e => {
        this._togglePopover();
        e.preventDefault();
      },
      isOpen: this.state.isOpen,
      ...this.props.triggerProps,
    };

    return React.cloneElement(triggerButton, buttonProps);
  }

  render() {
    const { children } = this.props;

    return (
      <Wrapper
        innerRef={c => (this._element = c)} // eslint-disable-line
      >
        {this._renderTriggerButton()}
        <div onClick={this._onChildClicked}>
          {this.state.isOpen && children}
        </div>
      </Wrapper>
    );
  }
}

export default enhanceClickOutside(Popover);
