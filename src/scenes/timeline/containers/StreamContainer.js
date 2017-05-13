import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchStream, setActiveTimeline } from '../actions';

class StreamContainer extends PureComponent {
  static propTypes = {
    fetchStream: PropTypes.func.isRequired,
    setActiveTimeline: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.setActiveTimeline('stream');
    window.requestIdleCallback(() => {
      this.props.fetchStream();
    });
  }

  render() {
    return null;
  }
}

export default connect(null, {
  fetchStream,
  setActiveTimeline,
})(StreamContainer);
