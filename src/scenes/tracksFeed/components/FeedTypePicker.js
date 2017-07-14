import React from 'react';
import GridIcon from 'components/icons/Grid';
import ListIcon from 'components/icons/List';
import { func } from 'prop-types';
import { ifProp, prop } from 'styled-tools';
import styled from 'styled-components';
import { FEED_TYPES, GRID, LIST, feedTypePropType } from '../feedTypes';

const Wrapper = styled.div`
  position: absolute;
  top: -35px;
  right: 0;
`;

const IconButton = styled.button`
  padding: 0;
  margin-left: 10px;
  background: none;
  width: ${prop('theme.fontSize.icon')};
  height: ${prop('theme.fontSize.icon')};
  opacity: ${ifProp('active', 1, 0.6)};
  cursor: pointer;
  color: ${ifProp(
    'active',
    prop('theme.colors.cta'),
    prop('theme.colors.reverse.primaryText'),
  )};

  &:hover {
    opacity: 1;
  }
`;

const iconMap = new Map([[GRID, GridIcon], [LIST, ListIcon]]);

function FeedTypePicker({ activeFeedType, setFeedType }) {
  return (
    <Wrapper>
      {FEED_TYPES.map(type => {
        const Icon = iconMap.get(type);

        return (
          <IconButton
            key={`select-type-${type}`}
            onClick={() => setFeedType(type)}
            active={activeFeedType === type}
          >
            <Icon />
          </IconButton>
        );
      })}
    </Wrapper>
  );
}

FeedTypePicker.propTypes = {
  setFeedType: func.isRequired,
  activeFeedType: feedTypePropType.isRequired,
};

export default FeedTypePicker;
