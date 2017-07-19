import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { prop } from 'styled-tools';
import theme from 'theme';
import ModalContainer from 'scenes/modals';
import PlayerContainer from 'scenes/player';
import UserProfileContainer from 'scenes/userProfile';
import TopBarContainer from 'containers/TopBarContainer';
import SidebarContainer from 'containers/SidebarContainer';
import LogoutContainer from 'containers/LogoutContainer';
import HomeContainer from 'containers/HomeContainer';
import LoginContainer from 'containers/LoginContainer';
import TrackContainer from 'scenes/track';
import TimelineContainer from 'scenes/timeline';

const AppShell = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template: 50px minMax(0, 1fr) 75px / 200px 1fr;
  background: ${prop('theme.colors.primaryBackground')};
  color: ${prop('theme.colors.primaryText')};
`;

const MainContent = styled.div`
  grid-row: 2;
  grid-column: 2;
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  background: ${prop('theme.colors.reverse.background')};
  color: ${prop('theme.colors.reverse.primaryText')};
`;

const AuthedShell = () =>
  <AppShell>
    {window.location.pathname.includes('index.html') && <Redirect to="/" />}
    <Route path="/" component={SidebarContainer} />
    <TopBarContainer />
    <MainContent>
      <Route path="/logout" component={LogoutContainer} />
      <Route exact path="/" component={HomeContainer} />
      <Route path="index.html" component={HomeContainer} />
      <Route
        path="/(playlist|stream|likes|search)/:id?"
        component={TimelineContainer}
      />
      <Route path="/track/:trackId" component={TrackContainer} />
      <Route
        path="/profile/:profileId/:feedId?"
        component={UserProfileContainer}
      />
      <ModalContainer />
    </MainContent>
    <PlayerContainer />
  </AppShell>;

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
          {this.props.user ? <AuthedShell /> : <LoginContainer />}
        </ThemeProvider>
      </Router>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
