/* eslint-disable react/prop-types */
import React from 'react';
import { func, object, bool } from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';
import {
  compose,
  onlyUpdateForKeys,
  setPropTypes,
  withHandlers,
} from 'recompose';
import { formatSeconds } from 'helpers/format';
import HeartIcon from 'components/icons/FavoriteHeart';
import VolumeIcon from 'components/icons/VolumeMax';
import PlayIcon from 'components/icons/Play';
import CalendarIcon from 'components/icons/Calendar';
import ClockIcon from 'components/icons/Clock';
import styled, { css } from 'styled-components';
import { alpha } from 'utils/color';
import { prop, ifProp } from 'styled-tools';

const selected = css`
  background: ${props => alpha(props.theme.colors.reverse.outline, 0.2)};
`;
const icon = css`
  width: ${prop('theme.fontSize.icon')};
  height: ${prop('theme.fontSize.icon')};
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  user-select: none;
  border-bottom: 1px solid ${prop('theme.colors.reverse.outline')};
  ${ifProp('isActive', selected)} &:hover {
    ${selected};
  }
`;

const Column = styled.div`
  opacity: .7;
  flex-grow: ${prop('flexGrow', 0)};
  flex-shrink: ${prop('flexShrink', 0)};
  width: ${prop('width', 0)}px;
  font-weight: 300;
  font-size: 14px;
  cursor: default;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 10px 10px 10px 0;
  overflow: hidden;
`;

const TitleColumn = styled(Column)`
  opacity: 1;
`;

const IconColumn = styled(Column)`
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  svg {
    cursor: pointer;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    ${ifProp(
      'hasBorder',
      `
      border: 2px solid black;
      `,
    )}
  }
`;

const ProfileLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const HeaderColumn = styled(Column)`
  opacity: 1;
  text-transform: uppercase;
  padding-bottom: 5px;
  display: flex;
  align-items: flex-end;

  &:hover {
    background: none;
  }
`;

const TimeAgoIcon = styled(CalendarIcon)`
  ${icon}
`;
const Uploaded = styled(ClockIcon)`
  ${icon}
`;

const enhance = compose(
  setPropTypes({
    track: object.isRequired,
    setSelectedTrackId: func.isRequired,
    handleDoubleClick: func.isRequired,
    isPlaying: bool,
    isActive: bool,
  }),
  onlyUpdateForKeys(['isActive', 'isPlaying']),
  withHandlers({
    onClick: ({ setSelectedTrackId, track }) => () => {
      setSelectedTrackId(track.id);
    },
    onDoubleClick: ({ handleDoubleClick, track, index }) => () => {
      handleDoubleClick(track.id, index);
    },
  }),
);

const columnProps = [
  { width: 40 },
  { width: 40 },
  { flexGrow: 3 },
  { flexGrow: 2 },
  { width: 150, flexShrink: 1 },
  { width: 50, flexShrink: 1 },
];

export function HeaderRow() {
  return (
    <Row>
      <HeaderColumn {...columnProps[0]} />
      <HeaderColumn {...columnProps[1]} />
      <HeaderColumn {...columnProps[2]}>Title</HeaderColumn>
      <HeaderColumn {...columnProps[3]}>Artist</HeaderColumn>
      <HeaderColumn {...columnProps[4]}>
        <TimeAgoIcon />
      </HeaderColumn>
      <HeaderColumn {...columnProps[5]}>
        <Uploaded />
      </HeaderColumn>
    </Row>
  );
}

function TrackRow({ track, isPlaying, isActive, onDoubleClick, onClick }) {
  return (
    <Row isActive={isActive} onClick={onClick} onDoubleClick={onDoubleClick}>
      <IconColumn hasBorder {...columnProps[0]}>
        {isPlaying && <VolumeIcon />}
        {!isPlaying && isActive && <PlayIcon />}
      </IconColumn>
      <IconColumn {...columnProps[1]}>
        {isActive && <HeartIcon isActive={track.user_favorite} />}
      </IconColumn>
      <TitleColumn {...columnProps[2]}>
        {track.title}
      </TitleColumn>
      <Column {...columnProps[3]}>
        <ProfileLink to={`/profile/${track.user.id}`}>
          {track.user.username}
        </ProfileLink>
      </Column>
      <Column {...columnProps[4]}>
        <time title={track.created_at}>
          {moment(track.created_at).fromNow()}
        </time>
      </Column>
      <Column {...columnProps[5]}>
        {formatSeconds(track.duration / 1000)}
      </Column>
    </Row>
  );
}

export default enhance(TrackRow);
