import React, { PropTypes } from 'react';
import { trackById } from 'selectors/tracks';
import { connect } from 'react-redux';
import { toggleLike } from 'actions/trackActions';
import LikeButton from 'components/buttons/LikeButton';

class LikeButtonContainer extends React.Component {
  static propTypes = {
    trackId: PropTypes.number.isRequired,
    toggleLike: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
  };

  _toggle = () => this.props.toggleLike(
    this.props.trackId,
    !this.props.active,
  );

  render() {
    return <LikeButton onClick={this._toggle} active={this.props.active} />;
  }
}

const mapStateToProps = (state, ownProps) => ({
  active: trackById(state.entities, ownProps.trackId).user_favorite,
});

export default connect(mapStateToProps, { toggleLike })(LikeButtonContainer);
