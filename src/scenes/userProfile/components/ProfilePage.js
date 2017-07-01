import React from 'react';
import { string } from 'prop-types';
import { OK, INITIAL } from 'app-constants';
import styled from 'styled-components';
import ProfileHeaderContainer from '../containers/ProfileHeaderContainer';

const Wrapper = styled.div`width: 100%;`;

function ProfilePage({ userId, status = INITIAL }) {
  return (
    <Wrapper>
      {status === OK && <ProfileHeaderContainer userId={userId} />}
      {JSON.stringify(status)}
    </Wrapper>
  );
}

ProfilePage.propTypes = {
  userId: string.isRequired,
  status: string,
};

export default ProfilePage;
