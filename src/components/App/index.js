import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
  // etc.
} from 'react-router-dom';
import logo from './logo.svg';
import styled from 'styled-components';
import TimelineContainer from '../../containers/TimelineContainer';
import withAuth from '../../containers/hocs/withAuth';
import AuthContainer from 'containers/AuthContainer';
import AuthCallback from 'components/AuthCallback';
import PlayerContainer from 'containers/PlayerContainer';
import Navigation from 'components/Navigation';
import Header from 'components/Header';
import { colors } from 'theme';
import './App.css';

const AppShell = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${colors.primaryBackground}
  color: ${colors.primaryText}
`

const Content = styled.section`
  flex: 1;
`

class App extends Component {
  render() {
    return (
      <Router>
        <AppShell>
          <Navigation />
          <Content>
            <Route exact path="/" component={TimelineContainer} />
            <Route path="/callback" component={AuthCallback} />
            <Route path="/login" component={AuthContainer} />
          </Content>
          <PlayerContainer />
        </AppShell>
      </Router>
    );
  }
}

export default App;
