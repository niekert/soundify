import React from 'react';
import { string } from 'prop-types';
import { OK, INITIAL, DONE } from 'app-constants';
import Loading from 'components/Loader';
import styled from 'styled-components';
import TracksFeedContainer from 'scenes/tracksFeed';
import ProfileHeaderContainer from '../containers/ProfileHeaderContainer';

const Wrapper = styled.div`
  display: grid;
  grid-template: auto 1fr / 1fr;
  margin: 20px;
  width: 100%;
  max-height: 0;
`;

function ProfilePage({ userId, status = INITIAL, feed = 'tracks' }) {
  return (
    <Wrapper>
      {status === OK && [
        <ProfileHeaderContainer userId={userId} key="profileHeader" />,
        <TracksFeedContainer feedId={`${userId}::${feed}`} key="tracksFeed" />,
      ]}
      {!DONE.includes(status) && <Loading />}
    </Wrapper>
  );
}

ProfilePage.propTypes = {
  userId: string.isRequired,
  status: string,
};

export default ProfilePage;
