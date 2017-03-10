import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
  // etc.
} from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'theme';
import TimelineContainer from 'containers/TimelineContainer';
import AuthCallback from './AuthCallback';
import PlayerContainer from 'containers/PlayerContainer';
import TopBarContainer from 'containers/TopBarContainer';
import LikesContainer from 'containers/LikesContainer'
import './App.css';

const AppShell = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1100px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.primaryBackground}
  color: ${props => props.theme.colors.primaryText}
`;

const Content = styled.section`
  flex: 1;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <AppShell>
            <TopBarContainer />
            <Content>
              <Route exact path="/" component={TimelineContainer} />
              <Route exact path="/likes" component={TimelineContainer} />
              <Route path="/callback" component={AuthCallback} />
            </Content>
            <PlayerContainer />
          </AppShell>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
