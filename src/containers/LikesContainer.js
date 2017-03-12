import React, { PureComponent, PropTypes } from 'react';
import Timeline from '../components/Timeline/Timeline';
import { fetchLikes, TIMELINE_TYPE_LIKES } from 'actions/timelineActions';
import { connect } from 'react-redux';

class LikesContainer extends PureComponent {
  static propTypes = {
    timeline: PropTypes.object,
    authToken: PropTypes.string.isRequired,
    fetchLikes: PropTypes.func.isRequired,
    type: PropTypes.string,
  };

  componentDidMount() {
    this.props.fetchLikes(this.props.authToken);
  }

  _fetchTimeline () {
    const { authToken, match } = this.props;

    // TODO: refactor this to a nicer way
    if (match.path === '/likes') {
      this.props.fetchLikes(authToken);
    }
  }

  render() {
    const { timeline } = this.props;

    return (
      <Timeline
        timeline={timeline}
        type={TIMELINE_TYPE_LIKES}
      />
    );
  }
}

function mapStateToProps (state, ownProps) {
  const timeline = state.timelines[TIMELINE_TYPE_LIKES];

  return {
    timeline: timeline,
    authToken: state.auth.token,
  };
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    fetchLikes: (token) => dispatch(fetchLikes(token))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LikesContainer);
