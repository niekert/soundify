import { connect } from 'react-redux';
import { compose } from 'recompose';
import ensureUserProfile from 'hocs/ensureUserProfile';
import ProfileTile from './components';

function mapStateToProps(state, { userId }) {
  return {
    userId,
  };
}

const enhance = compose(connect(mapStateToProps), ensureUserProfile);

export default enhance(ProfileTile);
