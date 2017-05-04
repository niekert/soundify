import React from 'react';
import { connect } from 'react-redux';
import { ADD_PLAYLIST_MODAL, hideModal } from './index';
import AddPlaylistModal from './components/AddPlaylistModal';

const modalTypeMap = {
  [ADD_PLAYLIST_MODAL]: AddPlaylistModal,
};

const ModalContainer = ({
  activeModal,
  modalProps,
  hideModal,
}) => {
  const ModalComponent = modalTypeMap[activeModal];
  if (!ModalComponent) {
    return null;
  }

  return (
    <ModalComponent
      onRequestClose={hideModal}
      {...modalProps}
    />
  );
};

const mapStateToProps = state => ({
  activeModal: state.modal.activeModal,
  modalProps: state.modal.props,
});

export default connect(mapStateToProps, {
  hideModal,
})(ModalContainer);
