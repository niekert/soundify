import React from 'react';
import { func, string } from 'prop-types';
import SendIcon from 'components/icons/Send';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import { Wrapper, Avatar } from '../styles';

const Form = Wrapper.withComponent('form');

const TextArea = styled.textarea`
  position: relative;
  flex: 1;
  background: none;
  border: none;
  border-bottom: 2px solid ${prop('theme.colors.reverse.outline')};
  resize: none;
  height: 50px;
  margin-bottom: ${prop('theme.spacing.space1')};
  padding: 10px 0;
  color: ${prop('theme.colors.reverse.primaryText')};
  font-size: 14px;
`;

const SubmitButton = styled.button`
  background: none;
  color: black;

  svg {
    width: 42px;
    height: 42px;
  }
`;

const PostCommentForm = ({ postComment, avatarUrl }) =>
  <Form onSubmit={postComment}>
    <Avatar src={avatarUrl} />
    <TextArea maxLength={250} placeholder="Post a comment" />
    <SubmitButton type="submit" />
  </Form>;

PostCommentForm.propTypes = {
  postComment: func.isRequired,
  avatarUrl: string.isRequired,
};

export default PostCommentForm;
