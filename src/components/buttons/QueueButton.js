import React, { PropTypes, Component } from 'react';
import QueueIcon from 'components/icons/PlayQueue';
import CheckIcon from 'components/icons/CheckIcon';
import IconButton from './IconButton';

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

  _onClick = () => {
    this.setState({ addedActive: true });
    this._activeTimeout = setTimeout(() => this.setState({ addedActive: false }), 3000);

    this.props.onClick(this.props.trackId);
  };

  render() {
    const { addedActive } = this.state;

    return (
      <IconButton
        disabled={addedActive}
        onClick={this._onClick}
      >
        { addedActive ? <CheckIcon /> : <QueueIcon /> }
      </IconButton>
    );
  }
}

export default QueueButton;
