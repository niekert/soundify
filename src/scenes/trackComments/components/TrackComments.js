import React from 'react';
import { arrayOf, object } from 'prop-types';
import styled from 'styled-components';
import { DONE } from 'app-constants';
import { statusPropType } from 'PropTypes';
import Loader from 'components/Loader';
import PostCommentForm from './PostCommentForm';

const Wrapper = styled.div`background: green;`;

function TrackComments({ comments = [], status }) {
  return (
    <Wrapper>
      <PostCommentForm />
      {status !== DONE && <Loader />}
      {comments.map(comment => <div>comment</div>)}
    </Wrapper>
  );
}

TrackComments.propTypes = {
  status: statusPropType,
  comments: arrayOf(object),
};

export default TrackComments;
