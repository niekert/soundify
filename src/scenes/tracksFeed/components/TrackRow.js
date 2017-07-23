/* eslint-disable react/prop-types */
import React from 'react';
import { func, object, bool } from 'prop-types';
import { Link } from 'react-router-dom';
import { prop, ifProp } from 'styled-tools';
import {
  compose,
  onlyUpdateForKeys,
  setPropTypes,
  withHandlers,
} from 'recompose';
import { formatSeconds } from 'helpers/format';
import Heart from 'components/icons/FavoriteHeart';
import VolumeMax from 'components/icons/VolumeMax';
import Play from 'components/icons/Play';
import CalendarIcon from 'components/icons/Calendar';
import ClockIcon from 'components/icons/Clock';
import styled, { css } from 'styled-components';
import { alpha } from 'utils/color';
import TimeAgo from 'components/helpers/TimeAgo';

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
  opacity: ${ifProp('isSelected', 1, 0.5)};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

const VolumeIcon = styled(VolumeMax)`
  width: 24px;
  height: 24px;
`;

const PlayIcon = styled(Play)`
  cursor: pointer;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  border: 2px solid black;
`;

const HeartIcon = styled(Heart)`
  width: ${prop('theme.fontSize.iconSmall')};
  height: ${prop('theme.fontSize.iconSmall')};
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
    onClick: ({ setSelectedTrackId, track, index }) => () => {
      setSelectedTrackId(track.id, index);
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
  { width: 60, flexShrink: 1 },
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
      <IconColumn isSelected {...columnProps[0]}>
        {isPlaying && <VolumeIcon />}
        {!isPlaying && isActive && <PlayIcon onClick={onDoubleClick} />}
      </IconColumn>
      <IconColumn isSelected={isActive} {...columnProps[1]}>
        <HeartIcon isActive={track.user_favorite} />
      </IconColumn>
      <TitleColumn {...columnProps[2]}>
        <ProfileLink to={`/track/${track.id}`}>
          {track.title}
        </ProfileLink>
      </TitleColumn>
      <Column {...columnProps[3]}>
        <ProfileLink to={`/profile/${track.user.id}`}>
          {track.user.username}
        </ProfileLink>
      </Column>
      <Column {...columnProps[4]}>
        <TimeAgo timestamp={track.created_at} />
      </Column>
      <Column {...columnProps[5]}>
        {formatSeconds(track.duration / 1000)}
      </Column>
    </Row>
  );
}

export default enhance(TrackRow);
