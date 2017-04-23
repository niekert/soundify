import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPlaylist, setActiveTimeline } from 'actions/timelineActions';

class PlaylistContainer extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired,
    fetchPlaylist: PropTypes.func.isRequired,
    setActiveTimeline: PropTypes.func.isRequired,
  };

  static defaultProps = {
    likes: null,
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.setActiveTimeline(`playlist::${id}`);
    window.requestIdleCallback(() => {
      this.props.fetchPlaylist(id);
    });
  }

  componentWillReceiveProps(nextProps) {
    const nextId = nextProps.match.params.id;
    if (this.props.match.params.id !== nextId) {
      this.props.setActiveTimeline(`playlist::${nextId}`);
      window.requestIdleCallback(() => {
        this.props.fetchPlaylist(nextId);
      });
    }
  }

  render() {
    return null;
  }
}

export default connect(null, {
  fetchPlaylist,
  setActiveTimeline,
})(PlaylistContainer);
