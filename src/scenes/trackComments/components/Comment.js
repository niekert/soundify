import React from 'react';
import { Link as LinkComponent } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { prop } from 'styled-tools';
import TimeAgo from 'components/helpers/TimeAgo';

const Wrapper = styled.div`
  margin: 0 ${prop('theme.spacing.space2')};
  padding: ${prop('theme.spacing.space1')} 0;
  height: auto;
  display: flex;
`;

const Avatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: ${prop('theme.spacing.space1')};
  flex-shrink: 0;
`;

const CommentBodyWrapper = styled.div`
  font-weight: 300;
  width: 100%;
  border-bottom: 1px solid ${prop('theme.colors.reverse.outline')};
`;

const CommentBody = styled.p`
  padding: ${prop('theme.spacing.space1')} 0;
  max-width: 75%;
`;

const DateAndTime = styled.span`font-size: 12px;`;

const label = css`
  opacity: .7;
  color: inherit;
  text-decoration: none;
  font-size: 12px;
`;

const Link = styled(LinkComponent)`
  ${label}

  &:hover {
    opacity: 1;
  }
`;

const TimeAgoWrapper = styled.span`
  ${label};
  flex-shrink: 0;
  border-bottom: 1px solid ${prop('theme.colors.reverse.outline')};
  text-align: right;
`;

function Comment({ datePosted, userId, userName, avatarUrl, body, timestamp }) {
  return (
    <Wrapper>
      <Avatar src={avatarUrl} />
      <CommentBodyWrapper>
        <DateAndTime>
          <Link to={`/profile/${userId}`}>{userName}</Link>
          &nbsp;
          <Link to="#">@ 0:12</Link>
        </DateAndTime>
        <CommentBody>
          {body}
        </CommentBody>
      </CommentBodyWrapper>
      <TimeAgoWrapper>
        <TimeAgo timestamp={datePosted} />
      </TimeAgoWrapper>
    </Wrapper>
  );
}

export default Comment;
