import { addPlaylist } from 'data/playlists/actions';
import { connect } from 'react-redux';
import { playlistStatus } from 'selectors/playlists';
import AddPlayListModal from '../components/AddPlaylistModal';

const mapStateTopProps = state => ({
  status: playlistStatus(state),
});

export default connect(mapStateTopProps, {
  addPlaylist,
})(AddPlayListModal);
