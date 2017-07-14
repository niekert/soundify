import React from 'react';
import { string, number, oneOf } from 'prop-types';
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

function ProfilePage({ userId, status = INITIAL, feedId, urlBase }) {
  return (
    <Wrapper>
      {status === OK && [
        <ProfileHeaderContainer userId={userId} key="profileHeader" />,
        <ProfileTabBar urlBase={urlBase} key="tab-bar" />,
        <TracksFeedContainer
          feedId={`${userId}::${feedId}`}
          key="tracksFeed"
        />,
      ]}
      {!DONE.includes(status) && <Loading />}
    </Wrapper>
  );
}

ProfilePage.propTypes = {
  userId: number.isRequired,
  urlBase: string.isRequired,
  feedId: oneOf(['tracks', 'favorites']),
  status: string,
};

export default ProfilePage;
