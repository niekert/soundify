import React, { Component, PropTypes } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { prop } from 'styled-tools';
import theme from 'theme';
import PlayerContainer from 'containers/PlayerContainer';
import TopBarContainer from 'containers/TopBarContainer';
import SidebarContainer from 'containers/SidebarContainer';
import HomeContainer from 'containers/HomeContainer';
import LoginContainer from 'containers/LoginContainer';
import SearchResultContainer from 'containers/SearchResultContainer';
import PlaylistContainer from 'containers/PlaylistContainer';
import LikesContainer from 'containers/LikesContainer';

const AppShell = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template: 50px 1fr 90px / 200px 1fr;
  background: ${prop('theme.colors.primaryBackground')};
  color: ${prop('theme.colors.primaryText')};
`;

const MainContent = styled.div`
  grid-row: 2;
  grid-column: 2;
  flex: 1;
  display: flex;
  background: ${prop('theme.colors.primaryBackground')};
  color: ${prop('theme.colors.primaryText')};
  overflow: scroll;
`;

const AuthedShell = () => (
  <AppShell>
    <Route path="/" component={SidebarContainer} />
    <TopBarContainer />
    <MainContent>
      <Route exact path="/" component={HomeContainer} />
      <Route path="/search/:query" component={SearchResultContainer} />
      <Route path="/likes" component={LikesContainer} />
      <Route path="/playlist/:id" component={PlaylistContainer} />
    </MainContent>
    <PlayerContainer />
  </AppShell>
);

class App extends Component {
  static propTypes = {
    user: PropTypes.object,
  };

  static defaultProps = {
    user: null,
  };

  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          {this.props.user ?
            <AuthedShell /> :
            <LoginContainer />
          }
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
