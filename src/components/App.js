import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  // etc.
} from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'theme';
import PlayerContainer from 'containers/PlayerContainer';
import TopBarContainer from 'containers/TopBarContainer';
import SidebarContainer from 'containers/SidebarContainer';
import TimelineContainer from 'containers/TimelineContainer';
import LikesContainer from 'containers/LikesContainer';
import RoutewithProps from 'components/RouteWithProps';
import AuthCallback from './AuthCallback';
import './App.css';

const AppShell = styled.div`
  min-height: 100vh;
  max-height: 100vh;
  width: 100%;
  max-width: 1300px;
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
  margin-top: 50px;
  margin-bottom: 100px;
  width: 100%;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  overflow: scroll;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <AppShell>
            <TopBarContainer />
            <Content>
              <Route path="/" component={SidebarContainer} />
              <MainContent>
                <Route exact path="/" component={Content} />
                <Route path="/playlist/:id" component={TimelineContainer} />
                <Route path="/callback" component={AuthCallback} />
              </MainContent>
            </Content>
            <PlayerContainer />
          </AppShell>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
