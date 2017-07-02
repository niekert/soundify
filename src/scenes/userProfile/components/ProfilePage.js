import React from 'react';
import { string } from 'prop-types';
import { OK, INITIAL, DONE } from 'app-constants';
import Loading from 'components/Loader';
import styled from 'styled-components';
import TracksFeedContainer from 'scenes/tracksFeed';
import ProfileTabBar from './ProfileTabBar';
import ProfileHeaderContainer from '../containers/ProfileHeaderContainer';

const Wrapper = styled.div`
  display: grid;
  grid-template: auto 1fr / 1fr;
  margin: 20px;
  width: 100%;
  max-height: 0;
`;

function ProfilePage({ userId, status = INITIAL, feed = 'tracks', urlBase }) {
  return (
    <Wrapper>
      {status === OK && [
        <ProfileHeaderContainer userId={userId} key="profileHeader" />,
        <ProfileTabBar urlBase={urlBase} key="tab-bar" />,
        <TracksFeedContainer feedId={`${userId}::${feed}`} key="tracksFeed" />,
      ]}
      {!DONE.includes(status) && <Loading />}
    </Wrapper>
  );
}

ProfilePage.propTypes = {
  userId: string.isRequired,
  urlBase: string.isRequired,
  status: string,
  feed: string,
};

export default ProfilePage;
