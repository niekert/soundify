import React from 'react';
import { connect } from 'react-redux';
import { setVolume } from 'data/settings/actions';
import SideControls from '../components/SideControls';

const mapStateToProps = ({ data }) => ({
  volume: data.settings.volumePercentage,
});

export default connect(mapStateToProps, {
  setVolume,
})(SideControls);
