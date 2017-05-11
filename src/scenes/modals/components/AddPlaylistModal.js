import React from 'react';
import { string, func } from 'prop-types';
import { TextBox, Label, Button, ButtonGroup } from 'components/styles/Forms';
import { withHandlers, withState, setDisplayName, compose } from 'recompose';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import Modal from './Modal';
import { ModalHeader } from './styles';

const Subtitle = styled.p`
  margin-top: .5em;
  color: ${prop('theme.colors.secondaryText')};
  font-size: 10px;
`;

const Buttons = styled(ButtonGroup)`
  margin-top: 1.5em;
`;

const enhance = compose(
  withState('title', 'setPlaylistTitle', ''),
  withHandlers({
    onChange: ({ setPlaylistTitle }) => e => {
      setPlaylistTitle(e.target.value);
    },
    onSubmit: ({ addPlaylist, title }) => e => {
      e.preventDefault();

      addPlaylist(title);
    },
  }),
  setDisplayName('AddPlaylistModal'),
);

const AddPlaylistModal = ({ onRequestClose, name, onSubmit, onChange }) => (
  <Modal onRequestClose={onRequestClose} contentLabel="Add playlist">
    <ModalHeader>Add playlist</ModalHeader>
    <form onSubmit={onSubmit}>
      <Label>Playlist title or URL</Label>
      <TextBox
        onChange={onChange}
        value={name}
        autoFocus
        placeholder="Good stuff"
        fullWidth
      />
      <Subtitle>
        Pro tip: enter the URL of a SoundCloud playlist here
        and Soundify will save it as one of your own!
      </Subtitle>
      <Buttons horizontal>
        <Button cta type="submit">
          Add
        </Button>
        <Button cancel onClick={onRequestClose}>
          Cancel
        </Button>
      </Buttons>
    </form>
  </Modal>
);
AddPlaylistModal.propTypes = {
  onRequestClose: func.isRequired,
  name: string,
  onSubmit: func.isRequired,
  onChange: func.isRequired,
};

export default enhance(AddPlaylistModal);
