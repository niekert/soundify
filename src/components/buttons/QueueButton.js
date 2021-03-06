import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import QueueAdd from 'components/icons/QueueAdd';
import CheckIcon from 'components/icons/PlaylistAddCheck';
import IconButton from './IconButton';

const QueueIcon = styled(QueueAdd)`
  position: relative;
`;

class QueueButton extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    trackId: PropTypes.number.isRequired,
  };

  state = {
    addedActive: false,
  };

  componentWillUnmount() {
    clearTimeout(this._activeTimeout);
  }

  _onClick = e => {
    e.stopPropagation();
    this.setState({ addedActive: true });
    this._activeTimeout = setTimeout(
      () => this.setState({ addedActive: false }),
      3000,
    );

    this.props.onClick(this.props.trackId);
  };

  render() {
    const { addedActive } = this.state;

    return (
      <IconButton disabled={addedActive} onClick={this._onClick}>
        {addedActive ? <CheckIcon /> : <QueueIcon />}
      </IconButton>
    );
  }
}

export default QueueButton;
