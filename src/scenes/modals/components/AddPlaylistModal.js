import React from 'react';
import { TextBox, Label, Button, ButtonGroup } from 'components/styles/Forms';
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

const AddPlaylistModal = ({
  onRequestClose,
  onSubmit,
}) => (
  <Modal
    onRequestClose={onRequestClose}
  >
    <ModalHeader>Add playlist</ModalHeader>
    <form onSubmit={onSubmit}>
      <Label>Playlist title or URL</Label>
      <TextBox autoFocus placeholder="Good stuff" fullWidth />
      <Subtitle>Pro tip: enter the URL of a SoundCloud playlist here and Soundify will save it as one of your own!</Subtitle>

      <Buttons horizontal>
        <Button
          cta
          type="submit"
        >
          Add
        </Button>
        <Button
          cancel
          onClick={onRequestClose}
        >
          Cancel
        </Button>
      </Buttons>
    </form>
  </Modal>
);

export default AddPlaylistModal;
