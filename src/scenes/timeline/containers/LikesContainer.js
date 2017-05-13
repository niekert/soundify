import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchLikes, setActiveTimeline } from '../actions';

class LikesContainer extends PureComponent {
  static propTypes = {
    fetchLikes: PropTypes.func.isRequired,
    setActiveTimeline: PropTypes.func.isRequired,
  };

  static defaultProps = {
    likes: null,
  };

  componentDidMount() {
    this.props.setActiveTimeline('likes');
    window.requestIdleCallback(() => {
      this.props.fetchLikes();
    });
  }

  render() {
    return null;
  }
}

export default connect(null, {
  fetchLikes,
  setActiveTimeline,
})(LikesContainer);
