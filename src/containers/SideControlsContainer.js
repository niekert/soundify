import React from 'react';
import { connect } from 'react-redux';
import { setVolume } from 'actions/settingsActions';
import SideControls from 'components/Player/SideControls';

const SideControlsContainer = props => <SideControls {...props} />;

const mapStateToProps = ({ settings }) => ({
  volume: settings.volumePercentage,
});

export default connect(mapStateToProps, {
  setVolume,
})(SideControlsContainer);
