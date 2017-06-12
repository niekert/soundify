import { compose } from 'recompose';
import { connect } from 'react-redux';
import ProfilePage from './components/ProfilePage';

const mapStateToProps = (state, ownProps) => {};

const enhance = compose(connect(mapStateToProps));

export default enhance(ProfilePage);
