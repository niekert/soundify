import React from 'react';
import { arrayOf, object, number, func, string } from 'prop-types';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import { DONE, INITIAL } from 'app-constants';
import { status as statusPropType } from 'PropTypes';
import Loader from 'components/Loader';
import Comment from './Comment';
import PostCommentForm from './PostCommentForm';

const Wrapper = styled.div`
  background: white;
  box-shadow: ${prop('theme.shadows.depth1')};
`;

function TrackComments({
  comments = [],
  status = INITIAL,
  trackId,
  ownAvatarUrl,
  postComment,
}) {
  return (
    <Wrapper>
      <PostCommentForm
        trackId={trackId}
        postComment={postComment}
        avatarUrl={ownAvatarUrl}
      />
      {comments.map(comment =>
        <Comment
          key={comment.id}
          comment={comment}
          datePosted={comment.created_at}
          body={comment.body}
          userId={comment.user_id}
          avatarUrl={comment.user.avatar_url}
          userName={comment.user.username}
          timestamp={comment.timestamp}
        />,
      )}
      {!DONE.includes(status) && <Loader />}
    </Wrapper>
  );
}

TrackComments.propTypes = {
  status: statusPropType.isRequired,
  trackId: number.isRequired,
  postComment: func.isRequired,
  ownAvatarUrl: string.isRequired,
  comments: arrayOf(object).isRequired,
};

export default TrackComments;
