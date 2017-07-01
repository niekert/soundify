import React from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import { H1, Paragraph } from 'components/styles/Typography';

const Wrapper = styled.div`
  padding: ${prop('theme.spacing.space3')};
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

const Stat = styled.li`margin-right: 40px;`;
const Bold = styled.span`font-weight: 600;`;

const StatsContainer = styled.ul`display: flex;`;

function ProfileHeader({
  username,
  followers,
  following,
  fullName,
  avatarUrl,
  city,
  tracksCount = 100,
  description,
}) {
  return (
    <Wrapper>
      <UserAvatar url={avatarUrl} />
      <InfoContainer>
        <H1>
          {username}
        </H1>
        <StatsContainer>
          <Stat>
            <Bold>{tracksCount}</Bold> tracks
          </Stat>
          <Stat>
            <Bold>{followers}</Bold> followers
          </Stat>
          <Stat>
            <Bold>{following}</Bold> following
          </Stat>
        </StatsContainer>
        <Description>
          {description}
        </Description>
      </InfoContainer>
    </Wrapper>
  );
}

export default ProfileHeader;
