import React from 'react';
import PlayIcon from 'components/icons/Play';
import CommentIcon from 'components/icons/Comment';
import abbreviateNumber from 'number-abbreviate';
import FavoriteHeartIcon from 'components/icons/FavoriteHeart';
import { number } from 'prop-types';
import styled from 'styled-components';
import { prop } from 'styled-tools';

const Wrapper = styled.ul`display: flex;`;

const Item = styled.li`
  margin-right: ${prop('theme.spacing.space2')};
  display: flex;
  font-size: 12px;
  align-items: center;
  color: ${prop('theme.colors.reverse.primaryText')};
  opacity: .9;

  svg {
    margin-right: 3px;
    width: 16px;
    height: 16px;
  }
`;

const HeartIcon = styled(FavoriteHeartIcon)`
  max-height: 14px;
  max-width: 14px;
`;

function TrackTabBar({ trackId, playCount, likeCount, commentCount }) {
  return (
    <Wrapper>
      <Item>
        <PlayIcon />
        {abbreviateNumber(playCount)}
      </Item>
      <Item>
        <HeartIcon isActive />
        {abbreviateNumber(likeCount)}
      </Item>
      <Item>
        <CommentIcon />
        {abbreviateNumber(commentCount)}
      </Item>
    </Wrapper>
  );
}

TrackTabBar.propTypes = {
  trackId: number.isRequired,
  playCount: number.isRequired,
  likeCount: number.isRequired,
  commentCount: number.isRequired,
};

export default TrackTabBar;
