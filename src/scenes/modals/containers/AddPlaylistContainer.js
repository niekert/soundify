import { addPlaylist } from 'actions/playlistActions';
import { connect } from 'react-redux';
import { playlistStatus } from 'selectors/playlists';
import AddPlayListModal from '../components/AddPlaylistModal';

const mapStateTopProps = state => ({
  status: playlistStatus(state),
});

export default connect(mapStateTopProps, {
  addPlaylist,
})(AddPlayListModal);
