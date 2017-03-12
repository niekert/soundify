import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
  // etc.
} from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'theme';
import AuthCallback from './AuthCallback';
import PlayerContainer from 'containers/PlayerContainer';
import TopBarContainer from 'containers/TopBarContainer';
import LikesContainer from 'containers/LikesContainer'
import './App.css';

const AppShell = styled.div`
  min-height: 100%;
  width: 100%;
  max-width: 1100px;
  max-width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${props => props.theme.colors.primaryBackground}
  color: ${props => props.theme.colors.primaryText}
`;

const Content = styled.section`
  flex: 1;
  display: flex;
  max-width: 1000px;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <AppShell>
            <TopBarContainer />
            <Content>
              <Route exact path="/" component={Content} />
              <Route exact path="/likes" component={LikesContainer} />
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
