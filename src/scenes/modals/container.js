import React from 'react';
import { func, string, object } from 'prop-types';
import { connect } from 'react-redux';
import { ADD_PLAYLIST_MODAL, hideModal } from './index';
import AddPlaylistModalContainer from './containers/AddPlaylistContainer';

const modalTypeMap = {
  [ADD_PLAYLIST_MODAL]: AddPlaylistModalContainer,
};

const ModalContainer = ({
  activeModal,
  modalProps,
  hideModal: onRequestClose,
}) => {
  const ModalComponent = modalTypeMap[activeModal];
  if (!ModalComponent) {
    return null;
  }

  return <ModalComponent onRequestClose={onRequestClose} {...modalProps} />;
};
ModalContainer.propTypes = {
  hideModal: func.isRequired,
  activeModal: string,
  modalProps: object,
};

const mapStateToProps = state => ({
  activeModal: state.modal.activeModal,
  modalProps: state.modal.props,
});

export default connect(mapStateToProps, {
  hideModal,
})(ModalContainer);
