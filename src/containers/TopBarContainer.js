import React from 'react';
import TopBar from 'components/TopBar';
import { connect } from 'react-redux';

const TopBarContainer = (props) => <TopBar {...props} />;
const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(TopBarContainer);
