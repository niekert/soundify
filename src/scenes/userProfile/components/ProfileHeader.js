import React from 'react';
import { number, string, func, bool } from 'prop-types';
import abbreviateNumber from 'number-abbreviate';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import FollowButton from './FollowButton';
import ProfileDropdown from './ProfileDropdown';
import { H1, Paragraph } from 'components/styles/Typography';

const Wrapper = styled.div`
  padding: ${prop('theme.spacing.space3')} 10px;
  display: flex;
`;

const UserAvatar = styled.div`
  border-radius: 50%;
  height: 150px;
  width: 150px;
  background-size: cover;
  background-image: url(${prop('url')});
  flex-shrink: 0;
`;

const InfoContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Description = styled(Paragraph)`
  max-height: 75px;
  display: -webkit-box;
  overflow: hidden;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const UserRow = styled.div`display: flex;`;

const Stat = styled.li`margin-right: 40px;`;
const Bold = styled.span`font-weight: 600;`;

const StatsContainer = styled.ul`display: flex;`;

function ProfileHeader({
  username,
  isFollowing,
  userId,
  toggleFollowing,
  followersCount,
  followingCount,
  toggleSidebarPin,
  isPinned,
  fullName, // eslint-disable-line
  avatarUrl,
  city, // eslint-disable-line
  tracksCount,
  description,
}) {
  return (
    <Wrapper>
      <UserAvatar url={avatarUrl} />
      <InfoContainer>
        <UserRow>
          <H1>
            {username}
          </H1>
          <FollowButton
            toggleFollowing={toggleFollowing}
            userId={userId}
            isFollowing={isFollowing}
          />
          <ProfileDropdown
            userId={userId}
            userName={username}
            isPinned={isPinned}
            togglePinSidebar={toggleSidebarPin}
          />
        </UserRow>
        <StatsContainer>
          <Stat>
            <Bold>{tracksCount}</Bold> tracks
          </Stat>
          <Stat>
            <Bold>{abbreviateNumber(followersCount)}</Bold> followers
          </Stat>
          <Stat>
            <Bold>{abbreviateNumber(followingCount)}</Bold> following
          </Stat>
        </StatsContainer>
        <Description>
          {description}
        </Description>
      </InfoContainer>
    </Wrapper>
  );
}

ProfileHeader.propTypes = {
  username: string.isRequired,
  toggleFollowing: func.isRequired,
  toggleSidebarPin: func.isRequired,
  isFollowing: bool,
  isPinned: bool,
  userId: number.isRequired,
  followersCount: number.isRequired,
  followingCount: number.isRequired,
  tracksCount: number.isRequired,
  fullName: string,
  avatarUrl: string,
  city: string,
  description: string,
};

export default ProfileHeader;
